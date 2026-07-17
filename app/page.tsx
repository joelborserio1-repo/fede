import Link from "next/link";
import { getRings } from "@/lib/rings";
import { SectionHeading } from "@/components/section-heading";
import { RingCard } from "@/components/ring-card";
import { RingImage } from "@/components/ring-image";
import { ExperienceTrio } from "@/components/experience-trio";
import { HowItWorks } from "@/components/how-it-works";
import { NewsletterForm } from "@/components/newsletter-form";

const TESTIMONIALS = [
  {
    quote:
      "They came to our place on a Sunday. No counter, no pressure, just the rings and a cup of tea. The whole thing felt like ours.",
    cite: "Mia & Jack, Newcastle",
  },
  {
    quote:
      "Caught them at the Melbourne pop-up. The oval looked even better in person, and it cost a fraction of what I'd braced for.",
    cite: "Priya S., Melbourne",
  },
  {
    quote:
      "Made exactly to spec and turned up early. It doesn't look like everyone else's ring, which is exactly what she wanted.",
    cite: "Dan R., Gold Coast",
  },
];

const LOCATIONS = [
  { city: "Newcastle", mode: "In-home viewings" },
  { city: "Sydney", mode: "Pop-up · by appointment" },
  { city: "Melbourne", mode: "Pop-up · by appointment" },
  { city: "Gold Coast", mode: "Pop-up · by appointment" },
];

export default async function HomePage() {
  const rings = await getRings();
  const featured = rings.find((r) => r.slug === "oval") ?? rings[0];

  return (
    <>
      {/* Hero */}
      <section className="wrap">
        <div className="grid min-h-[560px] items-stretch gap-0 md:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-center py-16 pr-0 md:py-20 md:pr-16">
            <span className="eyebrow mb-6">Engagement rings, brought to you</span>
            <h1 className="display text-[clamp(52px,6.5vw,86px)]">
              Made for the
              <br />
              ones who <span className="italic text-stone">mean it.</span>
            </h1>
            <p className="mt-6 max-w-[42ch] text-base leading-relaxed text-stone">
              One hand-selected diamond, set simply and made to order. No
              showroom, no pressure. We bring the collection to you and build
              your ring around your stone, your metal and your size.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/book" className="btn btn-fill">
                Book a consult
              </Link>
              <Link href="/collection" className="btn btn-line">
                View the collection
              </Link>
            </div>
          </div>
          <RingImage src={null} ratio="min-h-[560px]" className="h-full" />
        </div>
      </section>

      {/* The Collection */}
      <section id="collection" className="py-24">
        <div className="wrap">
          <SectionHeading
            eyebrow="The Collection"
            title="A solitaire in every cut"
            lede="One hand-selected diamond, set simply and made to order. Guide prices below. Your final ring is built around your stone, your metal and your size."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rings.map((ring) => (
              <RingCard key={ring.id} ring={ring} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/collection" className="txtlink">
              See the full collection
            </Link>
          </div>
        </div>
      </section>

      {/* The Experience */}
      <section className="bg-ink py-24 text-cream">
        <div className="wrap">
          <SectionHeading
            eyebrow="The Fede Experience"
            title="No showroom. We come to you."
            tone="light"
            lede="Choosing a ring shouldn't mean a shop counter and a queue. We keep it private and unhurried, and because there's no store to pay for, more of what you spend goes into the ring."
          />
          <ExperienceTrio />
          <div className="mt-14 text-center">
            <Link href="/experience" className="btn btn-light">
              How it works
            </Link>
          </div>
        </div>
      </section>

      {/* Featured piece — portfolio style, no spec boxes */}
      {featured ? (
        <section className="py-24">
          <div className="wrap">
            <div className="grid items-stretch border border-line bg-paper md:grid-cols-2">
              <RingImage
                src={featured.hero_image}
                label={featured.name}
                ratio="min-h-[520px]"
                className="h-full"
              />
              <div className="flex flex-col justify-center px-8 py-16 md:px-14">
                <span className="eyebrow">From the collection</span>
                <h3 className="mt-4 font-serif text-[clamp(34px,4vw,46px)] font-medium leading-none">
                  {featured.name}
                </h3>
                <p className="mt-5 max-w-[44ch] text-[15px] leading-relaxed text-stone">
                  {featured.description}
                </p>
                <p className="mt-6 text-sm text-stone">
                  Available in 18ct yellow, white or platinum.{" "}
                  <span className="text-gold">
                    From {featured.currency} $
                    {featured.guide_price_from.toLocaleString("en-AU")}.
                  </span>
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/book" className="btn btn-fill">
                    Book a consult to see it
                  </Link>
                  <Link
                    href={`/collection/${featured.slug}`}
                    className="btn btn-line"
                  >
                    View details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* How it works */}
      <section className="pb-24">
        <div className="wrap">
          <SectionHeading eyebrow="How it works" title="Three easy steps" />
          <HowItWorks />
        </div>
      </section>

      {/* Consult booking CTA */}
      <section className="bg-sand py-24">
        <div className="wrap">
          <div className="mx-auto max-w-prose text-center">
            <span className="eyebrow">Start here</span>
            <h2 className="display mt-4 text-[clamp(34px,5vw,50px)]">
              Book a consult
            </h2>
            <p className="mx-auto mt-4 max-w-[52ch] text-[15px] leading-relaxed text-stone">
              A relaxed twenty-minute video or phone chat to talk through what
              you&apos;re after, your budget and your timing, before we ever meet
              in person. No obligation, no hard sell.
            </p>
            <div className="mt-9">
              <Link href="/book" className="btn btn-fill">
                Find a time
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="wrap">
          <SectionHeading eyebrow="In their words" title="Loved by couples" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.cite}
                className="border border-line bg-paper px-8 py-10"
              >
                <div className="text-[10px] tracking-[0.4em] text-gold">
                  ● ● ● ● ●
                </div>
                <blockquote className="mt-5 font-serif text-[22px] leading-snug">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 text-[11px] uppercase tracking-wide text-stone">
                  {t.cite}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="border-t border-line py-24">
        <div className="wrap">
          <SectionHeading
            eyebrow="Where to find us"
            title="Come to us, or we'll come to you"
          />
          <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {LOCATIONS.map((loc) => (
              <div key={loc.city} className="bg-cream px-8 py-10 text-center">
                <div className="font-serif text-[28px] font-medium">
                  {loc.city}
                </div>
                <div className="mt-2 text-[11px] uppercase tracking-wide text-stone">
                  {loc.mode}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="pb-24">
        <div className="wrap">
          <div className="mx-auto max-w-prose border border-line bg-paper px-8 py-14 text-center">
            <span className="eyebrow">Join the list</span>
            <h2 className="mt-4 font-serif text-[clamp(30px,4vw,42px)] font-medium">
              Be first to the pop-ups
            </h2>
            <p className="mx-auto mt-3 max-w-[46ch] text-sm text-stone">
              Hear pop-up dates and new pieces before anyone else, and we&apos;ll
              take $250 off your first ring.
            </p>
            <div className="mx-auto mt-7 max-w-md">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
