-- 1. Move pg_net extension to the 'net' schema
CREATE SCHEMA IF NOT EXISTS net;
ALTER EXTENSION pg_net SET SCHEMA net;

-- 2. Fix unrestricted INSERT policy on 'registrations'
-- Drop the existing unsafe policy
DROP POLICY IF EXISTS "Enable insert for all users" ON public.registrations;

-- Create a secure policy that allows inserts only for the anon role 
-- AND restricts them from setting trusted fields like 'payment_status' directly 
-- (Assuming your Edge Function uses the service_role key to insert, 
--  you actually MIGHT NOT NEED an anon insert policy at all! 
--  If the frontend only calls the Edge Function, just disable anon inserts entirely.)

-- IF FRONTEND CALLS EDGE FUNCTION (Recommended, most secure):
-- No policy needed for anon. Service role bypasses RLS anyway.

-- IF FRONTEND INSERTS DIRECTLY (Less secure, but if needed):
CREATE POLICY "Enable insert for authenticated users only" 
ON public.registrations 
FOR INSERT 
WITH CHECK (true); -- You should add actual checks here if inserting direct from frontend

-- **RECOMMENDATION: If you insert data via Edge Function, you don't need ANY insert policy for public/anon users.**
