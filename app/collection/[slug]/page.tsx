import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRing, getRings } from "@/lib/rings";
import { RingImage } from "@/components/ring-image";

export async function generateStaticParams() {
  const rings = await getRings();
  return rings.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ring = await getRing(slug);
  if (!ring) return { title: "Ring" };
  return {
    title: ring.name,
    description: ring.tagline ?? ring.description ?? undefined,
  };
}

export default async function RingDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ring = await getRing(slug);
  if (!ring) notFound();

  // Specs — this page is the ONLY place they (and stone_type) are shown.
  const specs = [
    { label: "Stone", value: ring.stone_type },
    {
      label: "Carat",
      value: ring.carat_from ? `from ${ring.carat_from.toFixed(2)}ct` : null,
    },
    { label: "Colour", value: ring.colour_grade },
    { label: "Clarity", value: ring.clarity_grade },
    { label: "Cut", value: ring.cut_grade },
    { label: "Certification", value: ring.certification },
  ].filter((s) => Boolean(s.value));

  return (
    <>
      <section className="py-10">
        <div className="wrap">
          <div className="text-[11px] uppercase tracking-wide text-stone">
            <Link href="/collection" className="hover:text-ink">
              The Collection
            </Link>
            <span className="px-2">/</span>
            <span className="text-ink">{ring.name}</span>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="wrap">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Gallery */}
            <div className="space-y-6">
              <RingImage
                src={ring.hero_image}
                label={ring.name}
                ratio="aspect-[4/5]"
              />
              {ring.gallery.length > 0 ? (
                <div className="grid grid-cols-2 gap-6">
                  {ring.gallery.slice(0, 2).map((g, i) => (
                    <RingImage
                      key={i}
                      src={g}
                      label={ring.name}
                      ratio="aspect-square"
                    />
                  ))}
                </div>
              ) : null}
            </div>

            {/* Detail */}
            <div className="md:pt-4">
              <span className="eyebrow">From the collection</span>
              <h1 className="mt-4 font-serif text-[clamp(40px,5vw,60px)] font-medium leading-none">
                {ring.name}
              </h1>
              <p className="mt-3 text-[11px] uppercase tracking-wide text-stone">
                {ring.cut}
              </p>

              {ring.description ? (
                <p className="mt-6 max-w-[46ch] text-[15px] leading-relaxed text-stone">
                  {ring.description}
                </p>
              ) : null}

              <p className="mt-7 text-lg">
                <span className="text-stone">Guide price</span> · from{" "}
                {ring.currency} $
                {ring.guide_price_from.toLocaleString("en-AU")}
              </p>
              <p className="mt-1 text-sm text-stone">
                Final price depends on your stone, metal and size. We&apos;ll walk
                you through every option at your consult.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/book" className="btn btn-fill">
                  Book a consult to see it
                </Link>
              </div>

              {/* Metals */}
              {ring.metals.length > 0 ? (
                <div className="mt-10 border-t border-line pt-8">
                  <h2 className="text-[11px] uppercase tracking-wide text-stone">
                    Available metals
                  </h2>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {ring.metals.map((m) => (
                      <span
                        key={m}
                        className="border border-line px-4 py-2 text-[12px] tracking-wide"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}

              {/* Diamond specs — the only place these live */}
              {specs.length > 0 ? (
                <div className="mt-8 border-t border-line pt-8">
                  <h2 className="text-[11px] uppercase tracking-wide text-stone">
                    Diamond &amp; certification
                  </h2>
                  <dl className="mt-4 grid grid-cols-2 gap-x-8 gap-y-4">
                    {specs.map((s) => (
                      <div key={s.label} className="border-b border-line pb-3">
                        <dt className="text-[10px] uppercase tracking-wide text-stone">
                          {s.label}
                        </dt>
                        <dd className="mt-1 text-[15px]">{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-4 text-[13px] leading-relaxed text-stone">
                    Every centre stone is a certified lab-grown diamond. The full
                    grading report travels with your ring, so you know exactly
                    what you&apos;re getting.
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-sand py-20">
        <div className="wrap text-center">
          <h2 className="display text-[clamp(28px,4vw,40px)]">
            See {ring.name} in person
          </h2>
          <p className="mx-auto mt-4 max-w-[44ch] text-[15px] text-stone">
            We&apos;ll bring it to you across Newcastle, or meet you at a pop-up in
            Sydney, Melbourne or the Gold Coast.
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
