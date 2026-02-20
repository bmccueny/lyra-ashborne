import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Lyra Ashborne — author of dark fantasy romance novels including The Shattered Realm series.",
};

const facts = [
  { emoji: "🌙", label: "Night owl who writes best after midnight" },
  { emoji: "📚", label: "Has read every Sarah J. Maas book at least twice" },
  { emoji: "🍵", label: "Survives on earl grey tea and spite" },
  { emoji: "🐈", label: "Owned by two very opinionated cats" },
  { emoji: "🌲", label: "Lives somewhere with too many trees and not enough Wi-Fi" },
  { emoji: "✍️", label: "Writes all first drafts by hand, then regrets it" },
];

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--color-gold)" }}>
            The Author
          </p>
          <h1
            className="font-heading italic text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-text)" }}
          >
            About Lyra
          </h1>
        </div>

        {/* Bio + headshot */}
        <div className="grid md:grid-cols-2 gap-14 items-start mb-20">
          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "3/4" }}>
            <Image
              src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Lyra Ashborne, fantasy romance author"
              fill
              className="object-cover object-top"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 60%, rgba(10,7,24,0.6) 100%)",
              }}
            />
          </div>

          <div className="space-y-5 pt-2">
            <p className="text-lg leading-relaxed" style={{ color: "rgba(250,245,255,0.9)" }}>
              Lyra Ashborne is the author of dark fantasy romance novels that live in the space
              between longing and magic. Her debut, <em style={{ color: "var(--color-violet-light)" }}>A Crown of Starless Night</em>,
              spent twelve weeks on the fantasy bestseller list and introduced readers to the world of
              The Shattered Realm.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--color-muted)" }}>
              She writes stories about complicated women, morally grey men, and the kind of slow-burn
              love that takes until page 400 to admit it exists. She is unapologetic about this.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--color-muted)" }}>
              Before turning to fiction full-time, Lyra studied medieval history, which explains both
              her obsession with court politics and her deeply impractical knowledge of siege warfare.
              She considers this a fair trade.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--color-muted)" }}>
              When she is not writing, she can be found on TikTok talking about tropes to an audience
              that is far too kind about her opinions, or in a bookshop buying books she does not have
              shelf space for.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <Link href="/books" className="btn-primary">
                Read the Books
              </Link>
              <Link href="/newsletter" className="btn-outline">
                Join the Newsletter
              </Link>
            </div>
          </div>
        </div>

        {/* Fun facts */}
        <div
          className="rounded-2xl p-10"
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
          }}
        >
          <h2
            className="font-heading italic text-3xl text-center mb-8"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-violet-light)" }}
          >
            A Few Things
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {facts.map((f) => (
              <div
                key={f.label}
                className="flex items-start gap-3 p-4 rounded-xl"
                style={{ background: "rgba(167,139,250,0.06)", border: "1px solid var(--color-border)" }}
              >
                <span className="text-2xl flex-shrink-0">{f.emoji}</span>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                  {f.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
