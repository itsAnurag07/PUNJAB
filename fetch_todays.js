import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function check() {
    const { data, error } = await supabase.from('registrations')
        .select('*')
        .gte('created_at', '2026-03-02T00:00:00Z')
        .lte('created_at', '2026-03-02T23:59:59Z');

    console.log(`Total registrations on 2026-03-02: ${data?.length}`);
    data?.forEach(d => console.log(`- ${d.full_name} (${d.created_at})`));
}

check();
