import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Missing Supabase environment variables.');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testConnection() {
    console.log(`Connecting to ${supabaseUrl}...`);
    // Try to selects from a table that might not exist, or just check health/url
    // Since we don't know if tables exist, we can't easily query.
    // But we can check if the client is created.
    // real test: try to list buckets? (might be allowed public) or just auth.

    // Attempt to get session (should be null but no error)
    const { data, error } = await supabase.auth.getSession();

    if (error) {
        console.error('Connection/Auth Error:', error.message);
    } else {
        console.log('Connection Successful. Session:', data.session ? 'Active' : 'None');
    }
}

testConnection();
