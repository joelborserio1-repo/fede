import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { ExperienceTrio } from "@/components/experience-trio";
import { HowItWorks } from "@/components/how-it-works";
import { RingImage } from "@/components/ring-image";

export const metadata: Metadata = {
  title: "The Experience",
  description:
    "No showroom. We come to you. In-home viewings across Newcastle and appointment-only pop-ups in Sydney, Melbourne and the Gold Coast.",
};

const POPUPS = [
  {
    city: "Newcastle",
    mode: "In-home viewings",
    note: "Across Newcastle and the Hunter, in your own living room, by appointment.",
  },
  {
    city: "Sydney",
    mode: "Pop-up · by appointment",
    note: "A quiet room in the city, a few times a year. Join the list for dates.",
  },
  {
    city: "Melbourne",
    mode: "Pop-up · by appointment",
    note: "Appointment-only sittings when we're in town. Dates shared to our list first.",
  },
  {
    city: "Gold Coast",
    mode: "Pop-up · by appointment",
    note: "Relaxed, unhurried viewings when the collection travels north.",
  },
];

export default function ExperiencePage() {
  return (
    <>
      {/* Hero */}
      <section className="wrap">
        <div className="grid min-h-[460px] items-stretch md:grid-cols-[1fr_0.9fr]">
          <div className="flex flex-col justify-center py-16 pr-0 md:py-20 md:pr-14">
            <span className="eyebrow mb-6">The Fede Experience</span>
            <h1 className="display text-[clamp(44px,6vw,74px)]">
              No showroom.
              <br />
              <span className="italic text-stone">We come to you.</span>
            </h1>
            <p className="mt-6 max-w-[44ch] text-base leading-relaxed text-stone">
              Choosing a ring shouldn&apos;t mean a shop counter and a queue. We
              keep it private and unhurried, and because there&apos;s no store to
              pay for, more of what you spend goes into the ring.
            </p>
            <div className="mt-9">
              <Link href="/book" className="btn btn-fill">
                Book a consult
              </Link>
            </div>
          </div>
          <RingImage src={null} ratio="min-h-[460px]" className="h-full" />
        </div>
      </section>

      {/* Three ways */}
      <section className="bg-ink py-24 text-cream">
        <div className="wrap">
          <SectionHeading
            eyebrow="Three ways to see the collection"
            title="Private, relaxed, on your terms"
            tone="light"
          />
          <ExperienceTrio />
        </div>
      </section>

      {/* How it works */}
      <section className="py-24">
        <div className="wrap">
          <SectionHeading
            eyebrow="How it works"
            title="From first chat to front door"
            lede="Every ring starts with a conversation and ends at your door. Here's the whole journey."
          />
          <HowItWorks />
        </div>
      </section>

      {/* Pop-up locations */}
      <section className="border-t border-line pb-24 pt-4">
        <div className="wrap">
          <SectionHeading
            eyebrow="Where to find us"
            title="Newcastle, and beyond"
            align="left"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {POPUPS.map((p) => (
              <div key={p.city} className="border border-line bg-paper p-8">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif text-[30px] font-medium">
                    {p.city}
                  </h3>
                  <span className="text-[10px] uppercase tracking-wide text-gold">
                    {p.mode}
                  </span>
                </div>
                <p className="mt-3 max-w-[42ch] text-sm leading-relaxed text-stone">
                  {p.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sand py-24">
        <div className="wrap text-center">
          <h2 className="display text-[clamp(30px,4vw,44px)]">
            Ready when you are
          </h2>
          <p className="mx-auto mt-4 max-w-[46ch] text-[15px] text-stone">
            Start with a short video or phone chat. No obligation, no hard sell,
            nothing to buy on the call.
          </p>
          <div className="mt-8">
            <Link href="/book" className="btn btn-fill">
              Book a consult
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
