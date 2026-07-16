import Link from "next/link";
import type { Ring } from "@/lib/database.types";
import { formatGuidePrice } from "@/lib/rings";
import { RingImage } from "@/components/ring-image";

/**
 * Portfolio card. Guide price only — no carat/colour/clarity, no cart.
 * Links through to the ring detail page.
 */
export function RingCard({ ring }: { ring: Ring }) {
  return (
    <Link
      href={`/collection/${ring.slug}`}
      className="group block border border-line bg-paper transition duration-200 ease-soft hover:-translate-y-1 hover:shadow-card"
    >
      <RingImage
        src={ring.hero_image}
        label={ring.name}
        className="[&_img]:group-hover:scale-[1.03]"
      />
      <div className="px-6 py-7 text-center">
        <div className="font-serif text-[26px] font-medium leading-none">
          {ring.name}
        </div>
        <div className="my-3 text-[10px] font-medium uppercase tracking-wide text-stone">
          {ring.cut}
        </div>
        <div className="text-[13px]">
          from <span className="text-stone">{ring.currency}</span>{" "}
          {formatGuidePrice(ring)}
        </div>
      </div>
    </Link>
  );
}
