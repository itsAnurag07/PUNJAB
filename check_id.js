import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function check() {
    const { data, error } = await supabase.from('registrations').select('*').eq('id', 'dc161585-63b6-48df-9106-d2f894ca2440');
    console.log(JSON.stringify({ data, error }, null, 2));
}

check();
