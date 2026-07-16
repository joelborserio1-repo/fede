# Fede

Portfolio-first marketing site for **Fede**, a classic engagement ring studio
(a JtbAssetGroup label). The site has one job: get visitors to **book a
consult**. There is no storefront and no cart. Founders Joel & Katie do in-home
viewings across Newcastle NSW and appointment-only pop-ups in Sydney, Melbourne
and the Gold Coast.

## Stack

- **Next.js** (App Router) + **TypeScript**
- **Tailwind CSS** with the Fede brand tokens
- **Supabase** — content (`rings`), bookings (`consults`), list (`subscribers`)
- **Cal.com** embed for scheduling
- Deploy target: **Vercel**

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in Supabase + Cal.com values
npm run dev
```

The site renders without any environment variables — the collection falls back
to a local seed (`lib/rings.ts`) and the booking section shows a placeholder
until `NEXT_PUBLIC_CALCOM_LINK` is set. Wire up Supabase and Cal.com to go live.

### Scripts

| Script | Does |
| --- | --- |
| `npm run dev` | Local dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint (next/core-web-vitals) |
| `npm run typecheck` | `tsc --noEmit` |

## Environment variables

See `.env.example`.

| Var | Scope | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | public | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | public | Supabase anon key (RLS-guarded reads/inserts) |
| `SUPABASE_SERVICE_ROLE_KEY` | server | Writes consults / manages subscribers in route handlers |
| `NEXT_PUBLIC_CALCOM_LINK` | public | Cal.com event handle, e.g. `fede/consult` |

## Supabase

Migrations live in `supabase/migrations`:

- `0001_init.sql` — `rings`, `consults`, `subscribers` + Row Level Security
- `0002_seed_rings.sql` — the six launch cuts

Apply with the [Supabase CLI](https://supabase.com/docs/guides/cli):

```bash
supabase db push
```

Or paste the SQL into the Supabase SQL editor. Regenerate types after schema
changes:

```bash
npx supabase gen types typescript --project-id <ref> --schema public > lib/database.types.ts
```

### Data model

- **`rings`** — the portfolio collection and its specs. Diamond specs and
  `stone_type` are rendered **only** on the individual ring detail page, never
  in listings or marketing copy.
- **`consults`** — consult bookings. Written by `POST /api/consults`, called on
  Cal.com booking confirmation. Not publicly readable.
- **`subscribers`** — newsletter / enquiry list. Written by `POST /api/subscribe`.

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/collection` | The Collection (portfolio gallery) |
| `/collection/[slug]` | Ring detail (the only place specs live) |
| `/experience` | The Experience |
| `/about` | About, pillars, FAQ, shipping & returns |
| `/book` | Book a consult (Cal.com embed) |

## Deploying to Vercel

1. Import the repo into Vercel.
2. Add the environment variables above.
3. Deploy. The build command is `next build` (default).

## Brand notes for contributors

- Palette: cream `#F4EFE6`, sand `#EBE3D6`, paper `#FBF8F2`, ink `#2A2521`,
  taupe `#8C8173`, line `#DED4C4`, gold `#AF8A50`.
- Type: Cormorant Garamond (display), Archivo (UI/body).
- No em dashes in copy.
- The phrase "lab-grown" belongs only on individual ring detail pages, never in
  marketing copy.
- Do not write "made in Australia". "Designed in Australia" is fine, kept subtle.
