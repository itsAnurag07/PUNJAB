import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function check() {
    const ids = ['9e28f4f5-1704-412a-a629-6fa6a3df2395', 'e6cbde0f-7cf4-4b6c-b6c1-30e85c251f22'];
    const { data, error } = await supabase.from('registrations').select('*').in('id', ids);
    console.log(JSON.stringify({ data, error }, null, 2));
}

check();
