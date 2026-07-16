import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/database.types";

/**
 * Server-side anon client for reads in Server Components / route handlers.
 * No cookies / auth session — the public site is read-only against RLS.
 */
export function createServerClient() {
  return createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { auth: { persistSession: false } },
  );
}

/**
 * Admin client (service role). SERVER ONLY — never import into a client
 * component. Bypasses RLS; used by route handlers to write consults and
 * manage subscribers. Guards against accidental use without the key.
 */
export function createAdminClient() {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!serviceKey) {
    throw new Error(
      "SUPABASE_SERVICE_ROLE_KEY is not set — admin client unavailable.",
    );
  }
  return createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    serviceKey,
    { auth: { persistSession: false } },
  );
}

/**
 * Client used by write routes (consults / subscribers). Prefers the service
 * role when configured; otherwise falls back to the anon/publishable client,
 * which the RLS policies still allow to INSERT into those tables. This means
 * the forms persist with only the public key set, and gain admin reach (e.g.
 * future admin reads) once the secret is added.
 */
export function createWriteClient() {
  if (process.env.SUPABASE_SERVICE_ROLE_KEY) return createAdminClient();
  return createServerClient();
}
