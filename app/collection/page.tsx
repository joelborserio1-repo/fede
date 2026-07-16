import type { Metadata } from "next";
import Link from "next/link";
import { getRings } from "@/lib/rings";
import { SectionHeading } from "@/components/section-heading";
import { RingCard } from "@/components/ring-card";

export const metadata: Metadata = {
  title: "The Collection",
  description:
    "A solitaire in every cut. One hand-selected diamond, set simply and made to order. Guide prices shown; your final ring is built around your stone, metal and size.",
};

export default async function CollectionPage() {
  const rings = await getRings();

  return (
    <>
      <section className="border-b border-line py-20">
        <div className="wrap">
          <SectionHeading
            eyebrow="The Collection"
            title="A solitaire in every cut"
            lede="Six classic silhouettes, each a starting point. Choose the cut you love, then we build the ring around your stone, your metal and your size. Guide prices only, no two the same."
          />
        </div>
      </section>

      <section className="py-16">
        <div className="wrap">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rings.map((ring) => (
              <RingCard key={ring.id} ring={ring} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-20">
        <div className="wrap text-center">
          <h2 className="display text-[clamp(28px,4vw,40px)]">
            Seen one you love?
          </h2>
          <p className="mx-auto mt-4 max-w-[46ch] text-[15px] text-stone">
            The best way to choose is to see them in your own light. Book a
            relaxed consult and we&apos;ll take it from there.
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
