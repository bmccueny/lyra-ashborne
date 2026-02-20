import type { Metadata } from "next";
import { Cormorant_Garamond, Lato, Great_Vibes } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const greatVibes = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "Lyra Ashborne — Fantasy Romance Author",
    template: "%s | Lyra Ashborne",
  },
  description:
    "Dark fantasy romance novels by Lyra Ashborne. Enter worlds where forbidden love blooms in cursed forests, enemies share a crown, and every heartbeat costs something precious.",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Lyra Ashborne",
  jobTitle: "Author",
  genre: ["Fantasy Romance", "Dark Fantasy"],
  url: "https://lyraashborne.com",
  sameAs: [
    "https://instagram.com/lyraashborne",
    "https://tiktok.com/@lyraashborne",
    "https://goodreads.com/lyraashborne",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className={`${cormorant.variable} ${lato.variable} ${greatVibes.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
