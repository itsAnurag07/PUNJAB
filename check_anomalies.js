import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
async function check() {
    const { data } = await supabase.from('registrations').select('id, full_name, payment_id, created_at');
    if (data) {
        const anomalies = data.filter(r => r.payment_id && !r.payment_id.startsWith('pay_'));
        console.log(`Found ${anomalies.length} anomalous payment IDs:`);
        anomalies.forEach(r => {
            console.log(`- NAME: ${r.full_name}, ID: ${r.id}, anomalous PayID: ${r.payment_id}, Date: ${r.created_at}`);
        });
    }
}
check();
