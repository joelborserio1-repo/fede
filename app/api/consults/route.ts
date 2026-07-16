import { NextResponse } from "next/server";
import { createWriteClient } from "@/lib/supabase/server";
import type { ConsultInsert } from "@/lib/database.types";

/**
 * Records a consult booking. Called from the Book page on Cal.com booking
 * confirmation (and usable as a fallback enquiry endpoint). Writes with the
 * service role so the row lands even though consults are not publicly readable.
 */
export async function POST(request: Request) {
  let payload: Partial<ConsultInsert>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (!payload.email) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }

  const row: ConsultInsert = {
    name: payload.name ?? null,
    email: payload.email,
    phone: payload.phone ?? null,
    city: payload.city ?? null,
    preferred_date: payload.preferred_date ?? null,
    preferred_time: payload.preferred_time ?? null,
    message: payload.message ?? null,
    cal_booking_uid: payload.cal_booking_uid ?? null,
    cal_event_type: payload.cal_event_type ?? null,
    status: payload.status ?? "requested",
    source: payload.source ?? "website",
  };

  try {
    const supabase = createWriteClient();
    const { error } = await supabase.from("consults").insert(row);
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    // Supabase not configured yet — accept the booking so the UX still
    // completes during scaffolding. Cal.com holds the source of truth.
    return NextResponse.json({ ok: true, persisted: false }, { status: 202 });
  }
}
