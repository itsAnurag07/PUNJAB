import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
import fetch from 'node-fetch'; // need to make sure node-fetch is available or use native fetch if Node 18+

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const resendApiKey = process.env.VITE_RESEND_API_KEY;

if (!resendApiKey) {
    console.error("Missing RESEND_API_KEY in .env");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Simplified HTML Receipt builder for test
function buildReceiptHTML(data) {
    const fields = [
        ["Enrollment Number", data.enrollment_number],
        ["Full Name", data.full_name],
        ["Program", data.selected_program],
        ["Payment Amount", data.payment_amount],
        ["Mobile", data.mobile],
        ["Email", data.email]
    ];
    let html = "<h2>New Enrollment Submitted (Resent Notification)</h2><table border='1' cellpadding='8'>";
    fields.forEach(([k, v]) => html += `<tr><td><b>${k}</b></td><td>${v || 'N/A'}</td></tr>`);
    html += "</table>";
    return html;
}

async function resendEmail() {
    console.log("Fetching user...");
    const { data, error } = await supabase.from('registrations').select('*').eq('id', 'dc161585-63b6-48df-9106-d2f894ca2440').single();

    if (error || !data) {
        console.error("User not found", error);
        return;
    }

    console.log("Found user:", data.full_name, "Sending email to Admin...");

    const emailPayload = {
        from: "ITDC Punjab <info@intelloft.com>",
        to: ["jaldrivingcentre@gmail.com"], // Sending to admin ONLY
        subject: `[RESENT] New Enrollment: ${data.full_name} — ${data.selected_program || "Program"}`,
        html: buildReceiptHTML(data)
    };

    try {
        const emailResponse = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${resendApiKey}`,
            },
            body: JSON.stringify(emailPayload),
        });

        const resData = await emailResponse.json();
        if (emailResponse.ok) {
            console.log("Admin Email successfully sent:", resData);
        } else {
            console.error("Failed to send email:", resData);
        }
    } catch (err) {
        console.error("Error calling Resend:", err);
    }
}

resendEmail();
