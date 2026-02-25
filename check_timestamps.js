import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
async function check() {
    const ids = ['dc161585-63b6-48df-9106-d2f894ca2440', 'f94f6f4e-c760-449e-8798-232537233cff'];
    const { data } = await supabase.from('registrations').select('id, full_name, created_at, payment_id').in('id', ids);
    if (data) {
        data.forEach(r => {
            console.log(`ID: ${r.id}, Name: ${r.full_name}, Created: ${r.created_at}, PayID: ${r.payment_id}`);
        });
    }
}
check();
