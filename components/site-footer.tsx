import Link from "next/link";

const COLUMNS = [
  {
    heading: "The Work",
    links: [
      { href: "/collection", label: "The Collection" },
      { href: "/collection", label: "Engagement" },
      { href: "/experience", label: "Made to order" },
    ],
  },
  {
    heading: "The Experience",
    links: [
      { href: "/book", label: "Book a consult" },
      { href: "/experience", label: "Pop-up dates" },
      { href: "/about", label: "About us" },
    ],
  },
  {
    heading: "Help",
    links: [
      { href: "/about#faq", label: "FAQ" },
      { href: "/about#shipping", label: "Shipping & returns" },
      { href: "/book", label: "Contact" },
    ],
  },
];

export function SiteFooter() {
  const year = 2026;
  return (
    <footer className="border-t border-line bg-paper">
      <div className="wrap py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Link href="/" className="font-serif text-[34px] font-medium tracking-[0.14em]">
              Fede
            </Link>
            <p className="mt-4 max-w-[32ch] text-sm text-stone">
              Classic engagement rings, made to order and brought to you.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h5 className="text-[11px] font-semibold uppercase tracking-wide text-ink">
                {col.heading}
              </h5>
              <ul className="mt-4 space-y-3">
                {col.links.map((link, i) => (
                  <li key={`${col.heading}-${i}`}>
                    <Link
                      href={link.href}
                      className="text-sm text-stone transition-colors hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-8 text-[11px] uppercase tracking-wide text-stone sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Fede. A JtbAssetGroup label.</p>
          <p>Designed in Australia. By appointment only.</p>
        </div>
      </div>
    </footer>
  );
}
