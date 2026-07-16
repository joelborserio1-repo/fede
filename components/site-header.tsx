"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LEFT = [
  { href: "/collection", label: "The Collection" },
  { href: "/experience", label: "The Experience" },
];

const RIGHT = [
  { href: "/about", label: "About" },
  { href: "/book", label: "Book a consult" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isOn = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const linkClass = (href: string) =>
    `text-[11px] font-medium uppercase tracking-wide transition-colors hover:text-gold ${
      isOn(href) ? "text-gold" : "text-ink"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/90 backdrop-blur">
      <div className="wrap">
        <nav className="grid min-h-[74px] grid-cols-[1fr_auto_1fr] items-center">
          {/* Left nav (desktop) */}
          <ul className="hidden items-center gap-7 md:flex">
            {LEFT.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass(item.href)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="justify-self-start text-[11px] uppercase tracking-wider text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? "Close" : "Menu"}
          </button>

          {/* Wordmark */}
          <Link
            href="/"
            className="text-center font-serif text-[34px] font-medium tracking-[0.14em]"
          >
            Fede
          </Link>

          {/* Right nav (desktop) */}
          <ul className="hidden items-center justify-end gap-7 md:flex">
            {RIGHT.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass(item.href)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <span className="md:hidden" aria-hidden />
        </nav>
      </div>

      {/* Mobile nav drawer */}
      {open && (
        <div id="mobile-nav" className="border-t border-line md:hidden">
          <ul className="wrap flex flex-col gap-4 py-6">
            {[...LEFT, ...RIGHT].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={linkClass(item.href)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
