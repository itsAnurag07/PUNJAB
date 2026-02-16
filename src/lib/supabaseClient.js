import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

let supabase = null

if (supabaseUrl && supabaseAnonKey) {
    try {
        supabase = createClient(supabaseUrl, supabaseAnonKey)
    } catch (error) {
        console.error('Supabase Client Initialization Error:', error)
    }
} else {
    console.warn('Supabase credentials missing. Supabase features will not work.')
}

export { supabase }
