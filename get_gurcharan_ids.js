import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
async function check() {
    const { data } = await supabase.from('registrations').select('full_name, id, payment_id, payment_order_id, created_at').ilike('full_name', '%GURCHARAN SINGH%');
    if (data && data.length > 0) {
        data.forEach(r => {
            console.log(`NAME: ${r.full_name}`);
            console.log(`RECORD_ID: ${r.id}`);
            console.log(`PAYMENT_ID: ${r.payment_id}`);
            console.log(`ORDER_ID: ${r.payment_order_id}`);
            console.log(`DATE: ${r.created_at}`);
            console.log('---');
        });
    } else {
        console.log('NOT FOUND');
    }
}
check();
