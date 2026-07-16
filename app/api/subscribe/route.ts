import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";
import type { SubscriberInsert } from "@/lib/database.types";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Newsletter / enquiry signup. Upserts on email so re-subscribing is a no-op.
 */
export async function POST(request: Request) {
  let payload: Partial<SubscriberInsert>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (!payload.email || !EMAIL_RE.test(payload.email)) {
    return NextResponse.json(
      { error: "A valid email is required." },
      { status: 400 },
    );
  }

  const row: SubscriberInsert = {
    email: payload.email.toLowerCase().trim(),
    name: payload.name ?? null,
    interest: payload.interest ?? "newsletter",
    city: payload.city ?? null,
    message: payload.message ?? null,
  };

  try {
    const supabase = createAdminClient();
    const { error } = await supabase
      .from("subscribers")
      .upsert(row, { onConflict: "email", ignoreDuplicates: true });
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json({ ok: true, persisted: false }, { status: 202 });
  }
}
