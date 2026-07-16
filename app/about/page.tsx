import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Fede started in a spare bedroom in 2024. Joel and Katie, a Newcastle couple with a soft spot for Italian hand-made jewellery, built a personal way to shop for a ring without paying for someone else's showroom.",
};

const PILLARS = [
  {
    n: "i.",
    t: "Fair by design",
    d: "A ring worth saying yes to shouldn't cost a house deposit. With no shopfront and no middle man, the value goes into your ring, not our overheads.",
  },
  {
    n: "ii.",
    t: "We come to you",
    d: "The collection comes to your living room, or to a pop-up near you. Private, relaxed, and entirely on your terms.",
  },
  {
    n: "iii.",
    t: "Made by hand",
    d: "Italian-inspired craftsmanship, made to order for one person. Your cut, your metal, your stone, and nothing off a shelf.",
  },
  {
    n: "iv.",
    t: "Nothing hidden",
    d: "Every stone is independently certified, and we'll walk you through exactly what you're paying for. Ask us anything, we like the questions.",
  },
];

const FAQ = [
  {
    q: "How does an in-home viewing work?",
    a: "We bring the full collection to you across Newcastle and the Hunter, by appointment. Try everything on, take your time, and there's never any pressure to decide on the day.",
  },
  {
    q: "Where are your pop-ups?",
    a: "We run appointment-only pop-ups in Sydney, Melbourne and the Gold Coast throughout the year. Join our list and we'll let you know the moment dates are set for your city.",
  },
  {
    q: "How long does a ring take to make?",
    a: "Most rings are made to order and ready in around 3 to 4 weeks. If you're working towards a specific date, tell us early and we'll do everything we can to meet it.",
  },
  {
    q: "Are the diamonds certified?",
    a: "Yes. Every centre stone is independently certified, and the full details and certificate for each ring are listed on its detail page so you know exactly what you're getting.",
  },
  {
    q: "Can you resize my ring?",
    a: "We offer complimentary resizing on eligible styles. Some set bands can't be resized, so we take extra care to get your size right at the viewing.",
  },
  {
    q: "Can I have something custom made?",
    a: "Absolutely. Bring a reference, a sketch or just an idea to your consult, and we can adjust one of our styles or design something from scratch with you.",
  },
  {
    q: "Do you take a deposit?",
    a: "For made-to-order pieces we take a deposit or full payment when you place the order. We'll confirm everything with you in writing before anything is made.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line py-24 text-center">
        <div className="wrap">
          <span className="eyebrow">Our story</span>
          <h1 className="display mt-5 text-[clamp(48px,7vw,88px)]">
            Two people,
            <br />
            one good idea.
          </h1>
          <p className="mt-6 text-[15px] uppercase tracking-wide text-stone">
            Be different. Shop Fede.
          </p>
        </div>
      </section>

      {/* Founder story */}
      <section className="py-24">
        <div className="wrap">
          <div className="mx-auto max-w-prose space-y-6 text-[16px] leading-relaxed text-ink/90">
            <p>
              Fede started the way a lot of good things do, with a problem. When
              Joel went looking for the forever ring, he couldn&apos;t find one
              that had the wow factor without a price tag to match it. He and
              Katie, a Newcastle couple with a soft spot for Italian hand-made
              jewellery, figured there had to be a better way to do this.
            </p>
            <p>
              So in 2024 they built one, out of a spare bedroom, one ring at a
              time. What began as the hunt for a single ring turned into a small
              studio with a simple idea: give local couples a genuinely personal
              way to shop, without paying for someone else&apos;s showroom. No
              shopfront, no pressure, no rent baked into the price. Just two
              people who know their craft, sitting across the table from you.
            </p>
            <p>
              That knowledge shows up in the work. Joel and Katie can talk you
              through every cut, every setting and every certificate, because
              they&apos;ve been on your side of it. Buying from Fede means buying
              the confidence of people who genuinely care about getting it right,
              and who&apos;d rather put the money into your ring than into a
              fit-out.
            </p>
            <p className="pt-2 font-serif text-[28px] italic leading-tight text-ink">
              Be different.
              <br />
              Shop Fede.
            </p>
          </div>
        </div>
      </section>

      {/* Four pillars */}
      <section className="bg-sand py-24">
        <div className="wrap">
          <SectionHeading eyebrow="What we stand for" title="Our four pillars" />
          <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2">
            {PILLARS.map((p) => (
              <div key={p.n} className="bg-cream p-10">
                <div className="font-serif text-[22px] italic text-gold">
                  {p.n}
                </div>
                <h3 className="mt-3 font-serif text-[28px] font-medium">
                  {p.t}
                </h3>
                <p className="mt-3 max-w-[42ch] text-[14px] leading-relaxed text-stone">
                  {p.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-24 py-24">
        <div className="wrap">
          <SectionHeading eyebrow="Good to know" title="Questions, answered" />
          <div className="mx-auto mt-14 max-w-prose border-t border-line">
            {FAQ.map((item) => (
              <details
                key={item.q}
                className="group border-b border-line py-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-[22px]">
                  {item.q}
                  <span className="text-gold transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-[60ch] text-[14.5px] leading-relaxed text-stone">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping & returns */}
      <section id="shipping" className="scroll-mt-24 border-t border-line py-24">
        <div className="wrap">
          <SectionHeading
            eyebrow="Shipping and returns"
            title="Getting it to you"
          />
          <div className="mx-auto mt-12 grid max-w-prose gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-[11px] uppercase tracking-wide text-stone">
                Cost and timing
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink/90">
                Shipping is on us. Most made-to-order rings are ready in around 3
                to 4 weeks, and we&apos;ll keep you posted at each stage so
                you&apos;re never left wondering.
              </p>
            </div>
            <div>
              <h3 className="text-[11px] uppercase tracking-wide text-stone">
                Returns
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink/90">
                Because each ring is made to order, we can&apos;t take
                change-of-mind returns. Your rights under Australian Consumer Law
                always apply, and if anything is ever faulty we&apos;ll put it
                right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-24 text-cream">
        <div className="wrap text-center">
          <h2 className="display text-cream text-[clamp(30px,4vw,44px)]">
            Come and meet us
          </h2>
          <p className="mx-auto mt-4 max-w-[46ch] text-[15px] text-[#C9BFB0]">
            Start with a relaxed chat. We&apos;ll bring the collection to you when
            you&apos;re ready.
          </p>
          <div className="mt-8">
            <Link href="/book" className="btn btn-light">
              Book a consult
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
