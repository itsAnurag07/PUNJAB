import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Helper to convert array of objects to CSV string
function convertToCSV(data: Record<string, string | number | null>[]) {
    if (data.length === 0) {
        return "";
    }

    const headers = Object.keys(data[0]);
    const csvRows = [headers.join(",")];

    for (const row of data) {
        const values = headers.map(header => {
            const val = row[header];
            // Escape double quotes and wrap in quotes if necessary
            const escaped = (val === null || val === undefined) ? '' : String(val).replace(/"/g, '""');
            return `"${escaped}"`;
        });
        csvRows.push(values.join(","));
    }

    return csvRows.join("\n");
}

serve(async (req) => {
    // Handle CORS preflight
    if (req.method === "OPTIONS") {
        return new Response("ok", { headers: corsHeaders });
    }

    try {
        // 1. Initialize Supabase Client with Service Role Key
        const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
        const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
        const supabase = createClient(supabaseUrl, supabaseServiceKey);

        // 2. Fetch registrations from the last 7 days
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

        // Selecting specific fields for the report
        const { data: enrollments, error } = await supabase
            .from("registrations")
            .select(`
        created_at,
        selected_program,
        full_name,
        father_name,
        dob,
        mobile,
        email,
        education,
        address,
        city,
        state,
        pincode,
        aadhar_number,
        license_number,
        license_category,
        license_issue_date,
        license_expiry_date,
        photo_url,
        aadhar_front_url,
        aadhar_back_url,
        license_front_url,
        license_back_url
      `)
            .gt("created_at", oneWeekAgo.toISOString())
            .order("created_at", { ascending: false });

        if (error) {
            throw error;
        }

        console.log(`Found ${enrollments?.length || 0} enrollments from the last week.`);

        if (!enrollments || enrollments.length === 0) {
            return new Response(
                JSON.stringify({ message: "No new enrollments found for this week." }),
                { headers: { ...corsHeaders, "Content-Type": "application/json" } }
            );
        }

        // 3. Generate CSV
        // Map data to user-friendly headers if needed, or keep raw DB columns
        const csvData = convertToCSV(enrollments);

        // 4. Send Email via Resend
        const resendApiKey = Deno.env.get("RESEND_API_KEY");
        if (!resendApiKey) {
            throw new Error("RESEND_API_KEY not configured");
        }

        // Convert CSV to Base64 for attachment
        // In Deno, we can use btoa() for simple strings, but for proper unicode support we might need Buffer.
        // However, Deno's btoa handles basic strings well. For CSV which is text, we can just encode it.
        const csvBase64 = btoa(csvData);

        const adminEmail = "atageja2@gmail.com";
        const primaryAdmin = "info@intelloft.com";
        const dateStr = new Date().toLocaleDateString("en-IN");

        const emailPayload = {
            from: "ITDC Punjab <info@intelloft.com>",
            to: [primaryAdmin, adminEmail],
            subject: `Weekly Enrollment Report - ${dateStr}`,
            html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>Weekly Summary</h2>
          <p>Please find attached the enrollment report for the week ending <strong>${dateStr}</strong>.</p>
          <p><strong>Total New Enrollments:</strong> ${enrollments.length}</p>
          <hr />
          <p style="font-size: 12px; color: #666;">This is an automated weekly report.</p>
        </div>
      `,
            attachments: [
                {
                    filename: `Enrollments_${dateStr.replace(/\//g, "-")}.csv`,
                    content: csvBase64,
                    content_type: "text/csv" // Resend API expects standard MIME types
                }
            ]
        };

        const emailResponse = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${resendApiKey}`,
            },
            body: JSON.stringify(emailPayload),
        });

        const emailResult = await emailResponse.json();

        if (!emailResponse.ok) {
            throw new Error(`Resend API Error: ${JSON.stringify(emailResult)}`);
        }

        return new Response(
            JSON.stringify({ success: true, message: "Weekly report sent", count: enrollments.length }),
            { headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );

    } catch (error: any) {
        console.error("Weekly report error:", error);
        return new Response(
            JSON.stringify({ success: false, error: error.message }),
            { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
    }
});
