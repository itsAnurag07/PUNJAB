import 'dotenv/config';

const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.error('Missing env vars');
    process.exit(1);
}

const FUNCTION_URL = `${SUPABASE_URL}/functions/v1/register`;

async function testFunction() {
    console.log(`Testing Function URL: ${FUNCTION_URL}`);
    try {
        const response = await fetch(FUNCTION_URL, {
            method: 'POST', // payload doesn't matter much, just want to see if we reach it
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
            },
            body: JSON.stringify({
                test: true
                // Missing fields should return 400, which is fine (means we reached it)
            })
        });

        console.log('Response Status:', response.status);
        const text = await response.text();
        console.log('Response Body:', text);
    } catch (error) {
        console.error('Fetch Error:', error);
    }
}

testFunction();
