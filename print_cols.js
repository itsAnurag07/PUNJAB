import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
async function check() {
    const { data } = await supabase.from('registrations').select('*').limit(1);
    if (data && data.length > 0) {
        console.log('COLUMNS: ' + Object.keys(data[0]).join(', '));
    }
}
check();
