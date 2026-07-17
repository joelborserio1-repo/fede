"use client";

import { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

/**
 * Cal.com inline booking embed. On a successful booking we mirror the details
 * into Supabase via /api/consults so the team has an internal record. Cal.com
 * remains the source of truth for the calendar itself.
 *
 * Set NEXT_PUBLIC_CALCOM_LINK to your Cal handle, e.g. "fede/consult".
 */
export function ConsultBooking() {
  const calLink = process.env.NEXT_PUBLIC_CALCOM_LINK;
  const [booked, setBooked] = useState(false);

  useEffect(() => {
    if (!calLink) return;
    let active = true;

    (async () => {
      const cal = await getCalApi({ namespace: "consult" });
      if (!active) return;

      // Warm, on-brand embed styling.
      cal("ui", {
        cssVarsPerTheme: {
          light: {
            "cal-brand": "#2A2521",
          },
          dark: {
            "cal-brand": "#AF8A50",
          },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });

      cal("on", {
        action: "bookingSuccessful",
        callback: (e: unknown) => {
          const detail = (e as { detail?: { data?: Record<string, unknown> } })
            ?.detail?.data;
          void recordConsult(detail);
          setBooked(true);
        },
      });
    })();

    return () => {
      active = false;
    };
  }, [calLink]);

  // No Cal link configured yet — render a clear, on-brand placeholder so the
  // section still reads as finished during scaffolding.
  if (!calLink) {
    return (
      <div className="mx-auto max-w-prose border border-line bg-paper px-8 py-16 text-center">
        <p className="eyebrow">Booking</p>
        <p className="mt-4 font-serif text-[26px] leading-tight">
          The scheduler will appear here
        </p>
        <p className="mx-auto mt-3 max-w-[46ch] text-sm text-stone">
          Set <code className="text-ink">NEXT_PUBLIC_CALCOM_LINK</code> to your
          Cal.com event handle to embed live availability. On confirmation, each
          booking is written to the Supabase <code className="text-ink">consults</code>{" "}
          table.
        </p>
      </div>
    );
  }

  return (
    <div>
      {booked ? (
        <div className="mx-auto mb-6 max-w-prose border border-gold/40 bg-paper px-6 py-5 text-center">
          <p className="font-serif text-[22px]">Booked.</p>
          <p className="mt-1 text-sm text-stone">
            We&apos;ll confirm by email and send a calendar invite. Consults are a
            chat only, there&apos;s nothing to buy on the call.
          </p>
        </div>
      ) : null}
      <Cal
        namespace="consult"
        calLink={calLink}
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view" }}
      />
    </div>
  );
}

async function recordConsult(data: Record<string, unknown> | undefined) {
  try {
    const booking = (data?.booking ?? {}) as Record<string, unknown>;
    const responses = (data?.responses ?? {}) as Record<
      string,
      { value?: unknown }
    >;
    await fetch("/api/consults", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name:
          (responses.name?.value as string) ??
          (booking.name as string) ??
          null,
        email:
          (responses.email?.value as string) ??
          (booking.email as string) ??
          "",
        message: (responses.notes?.value as string) ?? null,
        cal_booking_uid: (booking.uid as string) ?? null,
        cal_event_type: (data?.eventType as string) ?? "consult",
        status: "confirmed",
        source: "calcom",
      }),
    });
  } catch {
    // Non-fatal — Cal.com already holds the booking.
  }
}
