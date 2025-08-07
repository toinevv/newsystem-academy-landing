-- Create the leads table if it doesn't exist
CREATE TABLE IF NOT EXISTS leads (
  id BIGSERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  source TEXT NOT NULL,
  telnr TEXT,
  name TEXT,
  company TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
  additional_data JSONB DEFAULT '{}'::jsonb
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS leads_email_idx ON leads(email);

-- Enable Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows inserting for all authenticated and anon users
CREATE POLICY insert_leads ON leads FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY select_leads ON leads FOR SELECT TO anon, authenticated USING (true);
