import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
async function check() {
    const { data } = await supabase.from('registrations').select('full_name, id, payment_id, payment_order_id').ilike('full_name', '%GURCHARAN SINGH%');
    console.log(JSON.stringify(data, null, 2));
}
check();
