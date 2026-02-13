ALTER TABLE registrations ADD COLUMN IF NOT EXISTS photo_url TEXT;
ALTER TABLE registrations ADD COLUMN IF NOT EXISTS aadhar_front_url TEXT;
ALTER TABLE registrations ADD COLUMN IF NOT EXISTS aadhar_back_url TEXT;
ALTER TABLE registrations ADD COLUMN IF NOT EXISTS license_front_url TEXT;
ALTER TABLE registrations ADD COLUMN IF NOT EXISTS license_back_url TEXT;
