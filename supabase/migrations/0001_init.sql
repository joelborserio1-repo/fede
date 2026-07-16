-- Fede — initial schema
-- Three tables: rings (collection content + specs), consults (bookings),
-- subscribers (newsletter / enquiry).
--
-- Design notes:
--  * Diamond specs and stone_type ("lab-grown") live on `rings` and are ONLY
--    ever rendered on the individual ring detail page — never in marketing copy.
--  * Guide prices are stored as whole AUD dollars (guide_price_from).
--  * RLS is on for every table. The public site reads published rings with the
--    anon key; consults and subscribers accept inserts from anon but are never
--    readable by the public. Route handlers use the service role for admin work.

create extension if not exists "pgcrypto";

-- ---------------------------------------------------------------------------
-- rings — the portfolio collection
-- ---------------------------------------------------------------------------
create table if not exists public.rings (
  id                uuid primary key default gen_random_uuid(),
  slug              text not null unique,
  name              text not null,                 -- e.g. "Oval"
  cut               text not null,                 -- e.g. "Brilliant"
  tagline           text,                          -- short portfolio line
  description       text,                          -- detail-page long copy
  guide_price_from  integer not null,              -- whole AUD dollars
  currency          text not null default 'AUD',
  metals            text[] not null default '{}',  -- e.g. {'18ct yellow','Platinum'}
  hero_image        text,                          -- storage path or URL
  gallery           text[] not null default '{}',

  -- Specs — DETAIL PAGE ONLY. Do not surface in listings or marketing copy.
  stone_type        text default 'Lab-grown diamond',
  carat_from        numeric(4, 2),
  colour_grade      text,                           -- e.g. 'D–F'
  clarity_grade     text,                           -- e.g. 'VS+'
  cut_grade         text,                           -- e.g. 'Excellent'
  certification     text,                           -- e.g. 'IGI / GIA certified'

  sort_order        integer not null default 0,
  is_published      boolean not null default true,
  created_at        timestamptz not null default now(),
  updated_at        timestamptz not null default now()
);

create index if not exists rings_published_sort_idx
  on public.rings (is_published, sort_order);

-- ---------------------------------------------------------------------------
-- consults — consult bookings (written on Cal.com confirmation)
-- ---------------------------------------------------------------------------
create table if not exists public.consults (
  id               uuid primary key default gen_random_uuid(),
  name             text,
  email            text not null,
  phone            text,
  city             text,                             -- Newcastle (in-home), Sydney (pop-up), ...
  preferred_date   date,
  preferred_time   text,
  message          text,
  cal_booking_uid  text,                             -- Cal.com booking uid
  cal_event_type   text,
  status           text not null default 'requested',-- requested | confirmed | completed | cancelled
  source           text not null default 'website',
  created_at       timestamptz not null default now()
);

create index if not exists consults_email_idx on public.consults (email);
create index if not exists consults_created_idx on public.consults (created_at desc);

-- ---------------------------------------------------------------------------
-- subscribers — newsletter / enquiry list
-- ---------------------------------------------------------------------------
create table if not exists public.subscribers (
  id          uuid primary key default gen_random_uuid(),
  email       text not null unique,
  name        text,
  interest    text not null default 'newsletter',    -- newsletter | enquiry
  city        text,
  message     text,
  created_at  timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Row Level Security
-- ---------------------------------------------------------------------------
alter table public.rings       enable row level security;
alter table public.consults    enable row level security;
alter table public.subscribers enable row level security;

-- Anyone may read published rings.
drop policy if exists "rings public read" on public.rings;
create policy "rings public read"
  on public.rings for select
  to anon, authenticated
  using (is_published = true);

-- Anyone may submit a consult; no one reads them without the service role.
drop policy if exists "consults public insert" on public.consults;
create policy "consults public insert"
  on public.consults for insert
  to anon, authenticated
  with check (true);

-- Anyone may join the list; no public reads.
drop policy if exists "subscribers public insert" on public.subscribers;
create policy "subscribers public insert"
  on public.subscribers for insert
  to anon, authenticated
  with check (true);
