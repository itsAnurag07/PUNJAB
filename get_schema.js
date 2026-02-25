import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
async function getSchema() {
    const { data, error } = await supabase.rpc('get_table_schema', { table_name: 'registrations' });
    if (error) {
        // Fallback: try to just select one row and see keys
        const { data: row } = await supabase.from('registrations').select('*').limit(1);
        if (row && row.length > 0) {
            console.log('Columns:', Object.keys(row[0]));
        } else {
            console.error('Could not get schema:', error.message);
        }
    } else {
        console.log(JSON.stringify(data, null, 2));
    }
}
getSchema();
