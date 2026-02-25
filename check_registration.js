import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
async function check() {
    const id = 'dc161585-63b6-48df-9106-d2f894ca2440';
    const { data: gs } = await supabase.from('registrations').select('*').eq('id', id);
    const { data: as } = await supabase.from('registrations').select('*').eq('payment_id', id);

    if (gs && gs.length > 0) {
        console.log(`GURCHARAN (by ID): Name=${gs[0].full_name}, Email=${gs[0].email}, Enroll=${gs[0].enrollment_number}, PayID=${gs[0].payment_id}, Date=${gs[0].created_at}`);
    }
    if (as && as.length > 0) {
        console.log(`ARSHDEEP (by PayID): Name=${as[0].full_name}, Email=${as[0].email}, Enroll=${as[0].enrollment_number}, PayID=${as[0].payment_id}, ID=${as[0].id}, Date=${as[0].created_at}`);
    }
}
check();
