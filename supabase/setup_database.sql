-- 1. Create the registrations table
CREATE TABLE IF NOT EXISTS public.registrations (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    
    -- Personal Details
    selected_program TEXT,
    full_name TEXT NOT NULL,
    father_name TEXT,
    dob DATE,
    mobile TEXT,
    email TEXT,
    education TEXT,
    
    -- Address
    address TEXT,
    state TEXT,
    city TEXT,
    district TEXT,
    pincode TEXT,
    
    -- ID & License
    aadhar_number TEXT,
    license_number TEXT,
    license_category TEXT,
    license_authority TEXT,
    license_issue_date DATE,
    license_expiry_date DATE,
    place TEXT,
    
    -- Document URLs
    photo_url TEXT,
    aadhar_front_url TEXT,
    aadhar_back_url TEXT,
    license_front_url TEXT,
    license_back_url TEXT
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- 3. Create Policies for the Table
-- Allow anyone (public/anon) to insert data
CREATE POLICY "Enable insert for all users" 
ON public.registrations 
FOR INSERT 
WITH CHECK (true);

-- Allow only service_role (backend) to select/read data
-- (Alternatively, you can allow anon to select their own if you implement auth later)
CREATE POLICY "Enable read for service_role only" 
ON public.registrations 
FOR SELECT 
USING (auth.role() = 'service_role');


-- 4. Create the Storage Bucket ('registrations')
-- Note: Requires permissions to insert into storageSchema.
INSERT INTO storage.buckets (id, name, public) 
VALUES ('registrations', 'registrations', true)
ON CONFLICT (id) DO NOTHING;

-- 5. Storage Policies
-- Allow public to view files (needed for email receipts)
CREATE POLICY "Public Access" 
ON storage.objects 
FOR SELECT 
USING ( bucket_id = 'registrations' );

-- Allow public to upload files
CREATE POLICY "Public Upload" 
ON storage.objects 
FOR INSERT 
WITH CHECK ( bucket_id = 'registrations' );
