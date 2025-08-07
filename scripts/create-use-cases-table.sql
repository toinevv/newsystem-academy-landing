-- Create the use_cases table
CREATE TABLE IF NOT EXISTS public.use_cases (
  id uuid not null default gen_random_uuid (),
  title text not null,
  description text not null,
  detailed_description text null,
  image_url text null,
  landing_position integer not null default 0,
  type text not null check (type in ('product', 'service')),
  is_active boolean not null default true,
  created_at timestamp with time zone null default now(),
  updated_at timestamp with time zone null default now(),
  constraint use_cases_pkey primary key (id)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_use_cases_landing_position ON public.use_cases USING btree (landing_position);
CREATE INDEX IF NOT EXISTS idx_use_cases_type ON public.use_cases USING btree (type);
CREATE INDEX IF NOT EXISTS idx_use_cases_active ON public.use_cases USING btree (is_active);

-- Enable Row Level Security
ALTER TABLE public.use_cases ENABLE ROW LEVEL SECURITY;

-- Create policies for selecting (public read access)
DROP POLICY IF EXISTS select_use_cases ON public.use_cases;
CREATE POLICY select_use_cases ON public.use_cases FOR SELECT TO anon, authenticated USING (is_active = true);

-- Insert mock data
INSERT INTO public.use_cases (title, description, detailed_description, image_url, landing_position, type) VALUES
(
  'Copy Paste Issues',
  'Saved operators 5 times 15 min a day',
  'Our AI system identified that warehouse operators were spending 75 minutes daily on repetitive copy-paste tasks between different systems. By implementing automated data transfer agents, we eliminated manual data entry, reduced errors by 95%, and freed up operators to focus on higher-value activities like quality control and customer service.',
  '/placeholder.svg?height=200&width=300',
  1,
  'product'
),
(
  'Order Processing Automation',
  'Cuts processing time by 60% by automating routing to the optimal picking path',
  'We deployed AI agents that analyze incoming orders, inventory locations, and warehouse traffic patterns in real-time. The system automatically generates optimized picking routes, prioritizes urgent orders, and coordinates with multiple operators to prevent bottlenecks. This resulted in 60% faster order fulfillment and 40% reduction in walking time for warehouse staff.',
  '/placeholder.svg?height=200&width=300',
  2,
  'product'
),
(
  'Delivery Exception Handling',
  'Automatically resolves 80% of common delivery issues',
  'Our intelligent delivery management system monitors shipments in real-time and proactively identifies potential issues before they become problems. When exceptions occur, AI agents automatically communicate with carriers, update customers, and reschedule deliveries. The system handles address corrections, failed delivery attempts, and damage reports without human intervention, improving customer satisfaction by 45%.',
  '/placeholder.svg?height=200&width=300',
  3,
  'service'
);
