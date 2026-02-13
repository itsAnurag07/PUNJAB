// supabase/functions/send-email/index.ts
// This Edge Function sends emails via Resend API

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
    // Handle CORS preflight
    if (req.method === "OPTIONS") {
        return new Response("ok", { headers: corsHeaders });
    }

    try {
        const { customerData, pdfBase64 } = await req.json();

        if (!RESEND_API_KEY) {
            return new Response(
                JSON.stringify({ error: "RESEND_API_KEY not configured" }),
                { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
            );
        }

        const emailPayload = {
            from: "ITDC Punjab <onboarding@resend.dev>",
            to: ["info@intelloft.com"],
            subject: `Enrollment Confirmation - ${customerData.full_name}`,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #0f172a;">Enrollment Received</h2>
          <p>Dear <strong>${customerData.full_name}</strong>,</p>
          <p>Thank you for registering at ITDC Punjab for the <strong>${customerData.selected_program}</strong>.</p>
          <p>Your registration details have been attached as a PDF receipt.</p>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #e2e8f0;" />
          <p style="font-size: 12px; color: #64748b;">This is an automated notification.</p>
        </div>
      `,
            attachments: [
                {
                    filename: `ITDC_Receipt_${customerData.full_name.replace(/\s+/g, "_")}.pdf`,
                    content: pdfBase64,
                },
            ],
        };

        const response = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${RESEND_API_KEY}`,
            },
            body: JSON.stringify(emailPayload),
        });

        const result = await response.json();

        console.log("Resend status:", response.status, JSON.stringify(result));

        return new Response(JSON.stringify({ status: response.status, result }), {
            headers: { ...corsHeaders, "Content-Type": "application/json" },
            status: response.ok ? 200 : 400,
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
    }
});
