import type { Ring } from "@/lib/database.types";
import { createServerClient } from "@/lib/supabase/server";

/**
 * Public Supabase Storage base for ring photography (bucket: `rings`).
 * Filenames contain spaces, so they are URL-encoded in the paths below.
 */
const HERO =
  "https://srciplvjqmupwzewnpkg.supabase.co/storage/v1/object/public/rings";

/**
 * Local mirror of the collection. Used as a fallback so the site renders
 * before Supabase is reachable, and during local development. Once Supabase
 * is configured, live rows take precedence.
 */
export const FALLBACK_RINGS: Ring[] = [
  {
    id: "seed-monaco",
    slug: "monaco",
    name: "The Monaco",
    cut: "Emerald solitaire",
    tagline: "Clean lines and quiet clarity. Understated and architectural.",
    description:
      "An emerald step cut, all straight lines and hall-of-mirrors depth. For those who want clarity over sparkle. Made to order in your chosen metal.",
    guide_price_from: 2390,
    currency: "AUD",
    metals: ["18ct yellow", "18ct white", "Platinum"],
    hero_image: `${HERO}/01%20-%20The%20Monaco%20-%20Emerald%20Solitaire.png`,
    gallery: [],
    stone_type: "Lab-grown diamond",
    carat_from: 0.8,
    colour_grade: "E–F",
    clarity_grade: "VVS–VS",
    cut_grade: "Excellent",
    certification: "IGI / GIA certified",
    sort_order: 10,
    is_published: true,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "seed-florence",
    slug: "florence",
    name: "The Florence",
    cut: "Oval solitaire",
    tagline: "Elongating and elegant on a fine tapered band.",
    description:
      "An elongating oval brilliant on a fine, tapered band. Quiet, classic, and made entirely to order around the stone you choose with us.",
    guide_price_from: 2290,
    currency: "AUD",
    metals: ["18ct yellow", "18ct white", "Platinum"],
    hero_image: `${HERO}/02%20-%20The%20Florence%20-%20Oval%20Solitaire.png`,
    gallery: [],
    stone_type: "Lab-grown diamond",
    carat_from: 0.75,
    colour_grade: "D–F",
    clarity_grade: "VS+",
    cut_grade: "Excellent",
    certification: "IGI / GIA certified",
    sort_order: 20,
    is_published: true,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "seed-verona",
    slug: "verona",
    name: "The Verona",
    cut: "Marquise solitaire",
    tagline: "A vintage silhouette that reads far larger than its weight.",
    description:
      "A marquise brilliant with two tapered points, a nod to old-world jewellery that wears with real presence. Made to order around your stone.",
    guide_price_from: 2150,
    currency: "AUD",
    metals: ["18ct yellow", "18ct white", "Platinum"],
    hero_image: `${HERO}/03%20-%20The%20Verona%20-%20Marquise%20Solitaire.png`,
    gallery: [],
    stone_type: "Lab-grown diamond",
    carat_from: 0.7,
    colour_grade: "D–F",
    clarity_grade: "VS+",
    cut_grade: "Very Good",
    certification: "IGI / GIA certified",
    sort_order: 30,
    is_published: true,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "seed-manhattan",
    slug: "manhattan",
    name: "The Manhattan",
    cut: "Elongated emerald solitaire",
    tagline: "A long, lean emerald that stretches the finger.",
    description:
      "An elongated emerald step cut on a fine band, all clean parallel lines and quiet depth. Architectural and modern, made to order around the stone you choose with us.",
    guide_price_from: 2490,
    currency: "AUD",
    metals: ["18ct yellow", "18ct white", "Platinum"],
    hero_image: `${HERO}/04%20-%20The%20Manhattan%20-%20Elongated%20Emerald%20Solitaire.png`,
    gallery: [],
    stone_type: "Lab-grown diamond",
    carat_from: 0.8,
    colour_grade: "E–F",
    clarity_grade: "VVS–VS",
    cut_grade: "Excellent",
    certification: "IGI / GIA certified",
    sort_order: 40,
    is_published: true,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "seed-kensington",
    slug: "kensington",
    name: "The Kensington",
    cut: "Radiant solitaire",
    tagline: "The brilliance of a round in a soft-cornered rectangle.",
    description:
      "A radiant mixed cut that pairs a step-cut outline with brilliant faceting, for fire and shape in equal measure. Made to order around the stone you choose with us.",
    guide_price_from: 2390,
    currency: "AUD",
    metals: ["18ct yellow", "18ct white", "Platinum"],
    hero_image: `${HERO}/05%20-%20The%20Kensington%20-%20Radiant%20Solitaire.png`,
    gallery: [],
    stone_type: "Lab-grown diamond",
    carat_from: 0.8,
    colour_grade: "D–F",
    clarity_grade: "VS+",
    cut_grade: "Excellent",
    certification: "IGI / GIA certified",
    sort_order: 50,
    is_published: true,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "seed-riviera",
    slug: "riviera",
    name: "The Riviera",
    cut: "Pear solitaire",
    tagline: "A soft point and a rounded shoulder. Distinctive without shouting.",
    description:
      "A pear modified brilliant, worn point down the finger for a flattering, lengthening line. Made to order in your metal and size.",
    guide_price_from: 2190,
    currency: "AUD",
    metals: ["18ct yellow", "18ct white", "Platinum"],
    hero_image: `${HERO}/06%20-%20The%20Riviera%20-%20Pear%20Solitaire.png`,
    gallery: [],
    stone_type: "Lab-grown diamond",
    carat_from: 0.7,
    colour_grade: "D–F",
    clarity_grade: "VS+",
    cut_grade: "Very Good",
    certification: "IGI / GIA certified",
    sort_order: 60,
    is_published: true,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "seed-classic",
    slug: "classic",
    name: "The Classic",
    cut: "Round brilliant solitaire",
    tagline: "The classic. Maximum brightness, endlessly wearable.",
    description:
      "A round brilliant set simply on a fine band, made to order around the stone you choose with us. The most light-hungry of all the cuts, and the one most couples come back to.",
    guide_price_from: 2190,
    currency: "AUD",
    metals: ["18ct yellow", "18ct white", "Platinum"],
    hero_image: `${HERO}/07%20-%20The%20Classic%20-%20Round%20Brilliant%20Solitaire.png`,
    gallery: [],
    stone_type: "Lab-grown diamond",
    carat_from: 0.7,
    colour_grade: "D–F",
    clarity_grade: "VS+",
    cut_grade: "Excellent",
    certification: "IGI / GIA certified",
    sort_order: 70,
    is_published: true,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
];

function supabaseConfigured() {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );
}

/** Guide price as a display string, e.g. "$2,190". */
export function formatGuidePrice(ring: Pick<Ring, "guide_price_from">) {
  return `$${ring.guide_price_from.toLocaleString("en-AU")}`;
}

/** All published rings, ordered for the collection grid. */
export async function getRings(): Promise<Ring[]> {
  if (!supabaseConfigured()) return FALLBACK_RINGS;

  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("rings")
    .select("*")
    .eq("is_published", true)
    .order("sort_order", { ascending: true });

  if (error || !data || data.length === 0) return FALLBACK_RINGS;
  return data;
}

/** A single ring by slug, or null if not found. */
export async function getRing(slug: string): Promise<Ring | null> {
  if (!supabaseConfigured()) {
    return FALLBACK_RINGS.find((r) => r.slug === slug) ?? null;
  }

  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("rings")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .maybeSingle();

  if (error || !data) {
    return FALLBACK_RINGS.find((r) => r.slug === slug) ?? null;
  }
  return data;
}
