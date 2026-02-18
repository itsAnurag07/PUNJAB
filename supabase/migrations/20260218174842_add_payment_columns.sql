ALTER TABLE registrations 
ADD COLUMN IF NOT EXISTS payment_id text,
ADD COLUMN IF NOT EXISTS payment_order_id text,
ADD COLUMN IF NOT EXISTS payment_amount numeric,
ADD COLUMN IF NOT EXISTS payment_status text DEFAULT 'pending';
