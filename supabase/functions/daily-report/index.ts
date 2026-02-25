import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import * as xlsx from "https://deno.land/x/sheetjs@v0.18.3/xlsx.mjs";

serve(async (req: Request) => {
  try {
    // 1. Calculate time bounds (Previous complete day defined in UTC for simplicity, 
    // but we can fetch last 24 hours relative to trigger time)
    const now = new Date();
    const twentyFourHoursAgo = new Date(now.getTime() - (24 * 60 * 60 * 1000));
    const toDateStr = now.toISOString();
    const fromDateStr = twentyFourHoursAgo.toISOString();

    // For specific timezone (IST), a simple approach is pulling last 24h of data 
    // when triggered at 8:00 AM IST (2:30 AM UTC).

    console.log(`Generating report from ${fromDateStr} to ${toDateStr}`);

    // 2. Fetch data from Supabase
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { data: registrations, error: fetchError } = await supabase
      .from('registrations')
      .select('*')
      .gte('created_at', fromDateStr)
      .lte('created_at', toDateStr)
      .order('created_at', { ascending: true });

    if (fetchError) {
      throw new Error(`Error fetching registrations: ${fetchError.message}`);
    }

    if (!registrations || registrations.length === 0) {
      console.log("No registrations found for the last 24 hours. Exiting.");
      return new Response(JSON.stringify({ success: true, message: "No registrations to report" }), {
        headers: { "Content-Type": "application/json" }
      });
    }

    console.log(`Found ${registrations.length} registrations. Generating Excel...`);

    // 3. Prepare data for Excel
    const excelData = registrations.map((r, index) => ({
      "S.No": index + 1,
      "Enrollment Number": r.enrollment_number || "N/A",
      "Registration Date": new Date(r.created_at).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      "Full Name": r.full_name,
      "Mobile": r.mobile,
      "Email": r.email,
      "Program": r.selected_program,
      "Amount Paid (Rs)": r.payment_amount ? (parseInt(r.payment_amount) / 100).toFixed(2) : "0.00",
      "Payment Status": r.payment_status || "N/A",
      "Payment Ref": r.payment_order_id || "N/A",
      "Father's Name": r.father_name,
      "Address": `${r.address || ''}, ${r.city || ''}, ${r.district || ''}, ${r.state || ''} - ${r.pincode || ''}`,
      "Aadhar Number": r.aadhar_number,
      "License Number": r.license_number
    }));

    // Create workbook and worksheet
    const worksheet = xlsx.utils.json_to_sheet(excelData);
    const workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, worksheet, "Daily Enrollments");

    // Auto-size columns roughly based on headers
    const cols = Object.keys(excelData[0]).map(k => ({ wch: Math.max(k.length, 15) }));
    worksheet['!cols'] = cols;

    // Generate Excel file buffer (Base64 string representing the binary Excel file)
    // Using base64 encoding suitable for Resend attachment
    const excelBuffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'base64' });

    console.log("Excel file generated. Sending email...");

    // 4. Send email via Resend
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      throw new Error("Missing RESEND_API_KEY environment variable");
    }

    const reportDateStr = twentyFourHoursAgo.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' });
    const filename = `ITDC_Registrations_${reportDateStr.replace(/\//g, '-')}.xlsx`;

    const emailPayload = {
      from: "ITDC Admin Reports <info@intelloft.com>",
      to: ["jaldrivingcentre@gmail.com"], // Default admin email
      subject: `Daily Enrollment Report: ${registrations.length} new registrations on ${reportDateStr}`,
      html: `
        <h2>Daily Enrollment Report</h2>
        <p>Please find attached the daily Excel report containing <strong>${registrations.length}</strong> new enrollment(s) from the last 24 hours.</p>
        <p>This is an automated message from the ITDC Punjab system.</p>
      `,
      attachments: [
        {
          filename: filename,
          content: excelBuffer,
        }
      ]
    };

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify(emailPayload),
    });

    const resData = await emailResponse.json();

    if (!emailResponse.ok) {
      throw new Error(`Resend API Error: ${JSON.stringify(resData)}`);
    }

    console.log("Report sent successfully:", resData);

    return new Response(JSON.stringify({ success: true, message: "Daily report sent successfully" }), {
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    console.error("Function failed:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
});
