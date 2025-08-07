-- Update the leads table structure to match the new requirements
CREATE TABLE IF NOT EXISTS public.leads (
  id uuid not null default gen_random_uuid (),
  email text not null,
  name text null,
  company text null,
  telnr text null,
  message text null,
  source text not null default 'website'::text,
  additional_data jsonb null default '{}'::jsonb,
  created_at timestamp with time zone null default now(),
  constraint leads_pkey primary key (id),
  constraint leads_email_key unique (email)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_leads_email ON public.leads USING btree (email);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON public.leads USING btree (created_at DESC);

-- Enable Row Level Security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Create policies for inserting and selecting
DROP POLICY IF EXISTS insert_leads ON public.leads;
DROP POLICY IF EXISTS select_leads ON public.leads;

CREATE POLICY insert_leads ON public.leads FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY select_leads ON public.leads FOR SELECT TO anon, authenticated USING (true);
