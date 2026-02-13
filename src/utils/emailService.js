const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const sendRegistrationEmails = async (customerData, pdfBase64) => {
    if (!SUPABASE_URL) {
        console.warn("Supabase URL is missing. Email skipped.");
        return { success: false, error: "Missing Supabase URL" };
    }

    try {
        const response = await fetch(`${SUPABASE_URL}/functions/v1/send-email`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${SUPABASE_ANON_KEY}`
            },
            body: JSON.stringify({ customerData, pdfBase64 })
        });

        const result = await response.json();
        console.log("Email API Response:", result);

        if (!response.ok) {
            return { success: false, error: result.error || "Email failed" };
        }

        return { success: true, result };
    } catch (error) {
        console.error("Email delivery failed:", error);
        return { success: false, error };
    }
};
