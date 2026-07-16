import type { Metadata } from "next";
import { ConsultBooking } from "@/components/consult-booking";

export const metadata: Metadata = {
  title: "Book a consult",
  description:
    "A relaxed twenty-minute video or phone chat to talk through what you're after, your budget and your timing, before we ever meet in person. No obligation, no hard sell.",
};

const REASSURANCE = [
  {
    t: "A chat, not a sales call",
    d: "Twenty minutes by video or phone. We listen first: your style, your budget, your timing.",
  },
  {
    t: "Then we come to you",
    d: "An in-home viewing across Newcastle, or a pop-up sitting in Sydney, Melbourne or the Gold Coast.",
  },
  {
    t: "Nothing to buy on the call",
    d: "No obligation and no hard sell. If it's not right, that's completely fine.",
  },
];

export default function BookPage() {
  return (
    <>
      <section className="border-b border-line py-20 text-center">
        <div className="wrap">
          <span className="eyebrow">Start here</span>
          <h1 className="display mt-5 text-[clamp(44px,6vw,74px)]">
            Book a consult
          </h1>
          <p className="mx-auto mt-5 max-w-[52ch] text-[15px] leading-relaxed text-stone">
            A relaxed twenty-minute video or phone chat to talk through what
            you&apos;re after, your budget and your timing, before we ever meet in
            person. No obligation, no hard sell.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="wrap">
          <div className="grid gap-3 sm:grid-cols-3">
            {REASSURANCE.map((r) => (
              <div key={r.t} className="border border-line bg-paper p-7">
                <h2 className="font-serif text-[22px] font-medium">{r.t}</h2>
                <p className="mt-2 text-[13.5px] leading-relaxed text-stone">
                  {r.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="wrap">
          <div className="min-h-[640px] border border-line bg-paper p-4 sm:p-6">
            <ConsultBooking />
          </div>
          <p className="mx-auto mt-5 max-w-prose text-center text-[13px] text-stone">
            We&apos;ll confirm by email and send a calendar invite. Prefer to
            write first? Email{" "}
            <a href="mailto:hello@fede.com.au" className="text-ink underline">
              hello@fede.com.au
            </a>{" "}
            and we&apos;ll find a time.
          </p>
        </div>
      </section>
    </>
  );
}
