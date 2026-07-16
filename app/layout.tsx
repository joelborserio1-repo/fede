import type { Metadata } from "next";
import { Cormorant_Garamond, Archivo } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AnnounceBar } from "@/components/announce-bar";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fede.com.au"),
  title: {
    default: "Fede | Classic engagement rings, brought to you",
    template: "%s | Fede",
  },
  description:
    "Fede is a classic engagement ring studio with no showroom. Founders Joel and Katie bring the collection to you across Newcastle, with appointment-only pop-ups in Sydney, Melbourne and the Gold Coast. Book a consult.",
  openGraph: {
    title: "Fede | Classic engagement rings, brought to you",
    description:
      "No showroom. We come to you. Book a relaxed consult before you ever meet in person.",
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${archivo.variable}`}>
      <body>
        <AnnounceBar />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
