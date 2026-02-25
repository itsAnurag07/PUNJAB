import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
async function compare() {
    let output = '';
    output += '--- Record for ID dc161585-63b6-48df-9106-d2f894ca2440 (search by id) ---\n';
    const { data: g } = await supabase.from('registrations').select('*').eq('id', 'dc161585-63b6-48df-9106-d2f894ca2440');
    output += JSON.stringify(g, null, 2) + '\n\n';

    output += '--- Record for payment_id dc161585-63b6-48df-9106-d2f894ca2440 (search by payment_id) ---\n';
    const { data: a } = await supabase.from('registrations').select('*').eq('payment_id', 'dc161585-63b6-48df-9106-d2f894ca2440');
    output += JSON.stringify(a, null, 2) + '\n';

    fs.writeFileSync('compare_results.json', output);
    console.log('Results written to compare_results.json');
}
compare();
