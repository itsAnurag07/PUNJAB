import fetch from 'node-fetch';
import fs from 'fs';
import 'dotenv/config';

// Re-create the logic
const resendApiKey = process.env.VITE_RESEND_API_KEY;

function buildReceiptHTML(data) {
    return "<h1>Test HTML</h1>";
}

async function testResend() {
    const dataList = JSON.parse(fs.readFileSync('details.json', 'utf8'));

    for (const data of dataList) {
        console.log(`Testing email for ${data.full_name}...`);

        const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        const recipients = ["jaldrivingcentre@gmail.com"];

        if (data.email && isValidEmail(data.email)) {
            recipients.push(data.email);
        }

        const emailPayload = {
            from: "ITDC Punjab <info@intelloft.com>",
            to: recipients,
            subject: `New Enrollment: ${data.full_name} — ${data.selected_program || "Program"}`,
            html: buildReceiptHTML(data),
            attachments: [] // Testing without PDF first to isolate email validity
        };

        const res = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${resendApiKey}`,
            },
            body: JSON.stringify(emailPayload),
        });

        const json = await res.json();
        console.log(`Response for ${data.full_name}:`, res.status, json);
    }
}

testResend();
