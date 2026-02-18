import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// Generate a unique enrollment number: ITDC-YYYYMMDD-XXXXX
function generateEnrollmentNumber(): string {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, "0");
    const d = String(now.getDate()).padStart(2, "0");
    const rand = String(Math.floor(10000 + Math.random() * 90000)); // 5-digit
    return `ITDC-${y}${m}${d}-${rand}`;
}

const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
        "authorization, x-client-info, apikey, content-type",
};

// Beautiful HTML receipt template
function buildReceiptHTML(data: Record<string, string>) {
    const date = new Date().toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });

    const fields = [
        ["Full Name", data.full_name],
        ["Father's Name", data.father_name],
        ["Date of Birth", data.dob],
        ["Mobile", data.mobile],
        ["Email", data.email],
        ["Education", data.education],
        ["Address", data.address],
        ["City", data.city],
        ["District", data.district],
        ["State", data.state],
        ["Pincode", data.pincode],
        ["Aadhar Number", data.aadhar_number],
        ["License Number", data.license_number],
        ["License Category", data.license_category],
        ["Issuing Authority", data.license_authority],
        ["License Issue Date", data.license_issue_date],
        ["License Expiry Date", data.license_expiry_date],
    ].filter(([_, val]) => val && val.trim() !== "");

    // Document images
    const imageFields = [
        ["Passport Photo", data.photo_url],
        ["Aadhar Front", data.aadhar_front_url],
        ["Aadhar Back", data.aadhar_back_url],
        ["License Front", data.license_front_url],
        ["License Back", data.license_back_url],
    ].filter(([_, val]) => val && val.trim() !== "");

    const tableRows = fields
        .map(
            ([label, value], i) => `
      <tr style="background:${i % 2 === 0 ? "#f8fafc" : "#ffffff"}">
        <td style="padding:10px 16px;font-weight:600;color:#334155;border-bottom:1px solid #e2e8f0;width:40%">${label}</td>
        <td style="padding:10px 16px;color:#0f172a;border-bottom:1px solid #e2e8f0">${value}</td>
      </tr>`
        )
        .join("");

    return `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;font-family:'Segoe UI',Arial,sans-serif;background:#f1f5f9">
  <div style="max-width:640px;margin:30px auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08)">
    
    <!-- Header -->
    <div style="background:linear-gradient(135deg,#0f172a 0%,#1e3a5f 100%);padding:32px 40px;text-align:center">
      <h1 style="color:#ffffff;margin:0;font-size:24px;letter-spacing:1px">ITDC PUNJAB</h1>
      <p style="color:#94a3b8;margin:8px 0 0;font-size:13px;letter-spacing:2px">ENROLLMENT RECEIPT</p>
    </div>

    <!-- Enrollment Number Badge -->
    <div style="background:#fef9c3;padding:14px 40px;border-bottom:2px solid #eab308;text-align:center">
      <p style="margin:0;font-size:11px;color:#a16207;text-transform:uppercase;letter-spacing:2px;font-weight:700">Enrollment / Receipt Number</p>
      <p style="margin:4px 0 0;font-size:22px;font-weight:900;color:#0f172a;letter-spacing:2px">${data.enrollment_number || "N/A"}</p>
    </div>

    <!-- Program Badge -->
    <div style="background:#eff6ff;padding:16px 40px;border-bottom:2px solid #3b82f6">
      <p style="margin:0;font-size:11px;color:#3b82f6;text-transform:uppercase;letter-spacing:2px;font-weight:700">Training Program</p>
      <p style="margin:4px 0 0;font-size:20px;font-weight:800;color:#0f172a">${data.selected_program || "N/A"}</p>
    </div>

    <!-- Date -->
    <div style="padding:16px 40px 0;text-align:right">
      <p style="margin:0;font-size:12px;color:#94a3b8">Registration Date: <strong style="color:#475569">${date}</strong></p>
    </div>

    <!-- Details Table -->
    <div style="padding:16px 40px 32px">
      <table style="width:100%;border-collapse:collapse;border-radius:8px;overflow:hidden;border:1px solid #e2e8f0">
        ${tableRows}
      </table>
    </div>

    ${imageFields.length > 0 ? `
    <!-- Documents Section -->
    <div style="padding:0 40px 32px">
      <p style="font-size:11px;color:#3b82f6;text-transform:uppercase;letter-spacing:2px;font-weight:700;margin:0 0 16px">Uploaded Documents</p>
      <table style="width:100%;border-collapse:collapse">
        ${imageFields.map(([label, url]) => `
        <tr>
          <td style="padding:12px 0;vertical-align:top">
            <p style="margin:0 0 8px;font-size:12px;font-weight:700;color:#334155;text-transform:uppercase;letter-spacing:1px">${label}</p>
            <img src="${url}" alt="${label}" style="max-width:280px;max-height:200px;border-radius:8px;border:2px solid #e2e8f0;display:block" />
          </td>
        </tr>`).join("")}
      </table>
    </div>
    ` : ""}

    <!-- Slot Booking CTA -->
    <div style="background:#eff6ff;padding:20px 40px;border-top:2px solid #3b82f6;text-align:center">
      <p style="margin:0;font-size:16px;font-weight:900;color:#0f172a;line-height:1.6">
        Please call <span style="color:#1d4ed8">9056066473</span> , <span style="color:#1d4ed8">9056066373</span> for slot booking / appointment.
      </p>
    </div>

    <!-- Footer -->
    <div style="background:#f8fafc;padding:24px 40px;border-top:1px solid #e2e8f0;text-align:center">
      <p style="margin:0;font-size:11px;color:#94a3b8">This is an electronically generated receipt. No physical signature required.</p>
      <p style="margin:6px 0 0;font-size:11px;color:#cbd5e1">&copy; 2026 ITDC Punjab. All Rights Reserved.</p>
    </div>
  </div>
</body>
</html>`;
}

serve(async (req: Request) => {
    // Handle CORS preflight
    if (req.method === "OPTIONS") {
        return new Response("ok", { headers: corsHeaders });
    }

    try {
        // 1. Parse incoming form data
        const formData = await req.json();
        console.log("Received registration data:", JSON.stringify(formData));

        // 2. Validate required fields
        if (!formData.full_name || !formData.email || !formData.mobile) {
            return new Response(
                JSON.stringify({ success: false, error: "Missing required fields: full_name, email, mobile" }),
                { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
            );
        }

        // 3. Clean data — only allow known text fields
        const allowedFields = [
            "selected_program", "full_name", "father_name", "dob",
            "mobile", "email", "education", "address", "state",
            "city", "district", "pincode", "aadhar_number",
            "license_number", "license_category", "license_authority",
            "license_issue_date", "license_expiry_date", "place",
            "photo_url", "aadhar_front_url", "aadhar_back_url",
            "license_front_url", "license_back_url",
            "enrollment_number",
        ];

        const cleanData: Record<string, string> = {};
        for (const field of allowedFields) {
            if (formData[field] && typeof formData[field] === "string" && formData[field].trim() !== "") {
                cleanData[field] = formData[field].trim();
            }
        }

        // 3b. Generate unique enrollment number
        const enrollmentNumber = generateEnrollmentNumber();
        cleanData.enrollment_number = enrollmentNumber;
        console.log("Generated enrollment number:", enrollmentNumber);

        // 4. Save to Supabase using service role key (bypasses RLS)
        const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
        const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
        const supabase = createClient(supabaseUrl, supabaseServiceKey);

        const { error: insertError } = await supabase
            .from("registrations")
            .insert([cleanData]);

        if (insertError) {
            console.error("DB insert error:", insertError);
            return new Response(
                JSON.stringify({ success: false, error: `Database error: ${insertError.message}` }),
                { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
            );
        }

        console.log("Data saved to DB successfully");

        // 5. Generate HTML receipt
        const receiptHTML = buildReceiptHTML(cleanData);

        // 6. Send email via Resend
        const resendApiKey = Deno.env.get("RESEND_API_KEY");
        let emailResult = { sent: false, message: "No API key" };

        if (resendApiKey) {
            const adminEmail = "atageja2@gmail.com";
            const userEmail = cleanData.email;

            // Use verified intelloft.com domain
            const fromAddress = "ITDC Punjab <info@intelloft.com>";

            const emailPayload = {
                from: fromAddress,
                to: [adminEmail, userEmail],
                subject: `New Enrollment: ${cleanData.full_name} — ${cleanData.selected_program || "Program"}`,
                html: receiptHTML,
            };

            console.log("Sending email to:", emailPayload.to);

            const emailResponse = await fetch("https://api.resend.com/emails", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${resendApiKey}`,
                },
                body: JSON.stringify(emailPayload),
            });

            const emailData = await emailResponse.json();
            console.log("Resend response:", emailResponse.status, JSON.stringify(emailData));

            emailResult = {
                sent: emailResponse.ok,
                message: emailResponse.ok ? "Email sent successfully" : JSON.stringify(emailData),
            };
        }

        // 7. Return success
        return new Response(
            JSON.stringify({
                success: true,
                message: "Registration saved successfully",
                enrollment_number: enrollmentNumber,
                email: emailResult,
            }),
            {
                status: 200,
                headers: { ...corsHeaders, "Content-Type": "application/json" },
            }
        );
    } catch (error: unknown) {
        const errMsg = error instanceof Error ? error.message : "Unknown error";
        console.error("Function error:", errMsg);
        return new Response(
            JSON.stringify({ success: false, error: errMsg }),
            { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
    }
});
