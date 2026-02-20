import type { Metadata } from "next";
import NewsletterCTA from "@/components/NewsletterCTA";

export const metadata: Metadata = {
  title: "Newsletter",
  description: "Join Lyra Ashborne's newsletter for cover reveals, exclusive excerpts, and dispatches from the realm.",
};

export default function NewsletterPage() {
  return (
    <div className="pt-28 pb-12 px-6">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--color-gold)" }}>
          Stay Connected
        </p>
        <h1
          className="font-heading italic text-5xl md:text-6xl mb-4"
          style={{ fontFamily: "var(--font-heading)", color: "var(--color-text)" }}
        >
          Join the Realm
        </h1>
        <p className="text-lg leading-relaxed max-w-lg mx-auto" style={{ color: "var(--color-muted)" }}>
          Cover reveals, early chapters, writing updates, and occasional thoughts on why
          enemies-to-lovers will always win. No spam. Unsubscribe whenever you like.
        </p>
      </div>

      <NewsletterCTA />

      {/* Perks */}
      <div className="max-w-3xl mx-auto mt-12">
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { icon: "📖", title: "Early Excerpts", desc: "Read new chapters before anyone else." },
            { icon: "🎨", title: "Cover Reveals", desc: "First look at every new cover, direct to your inbox." },
            { icon: "✨", title: "Behind the Scenes", desc: "Deleted scenes, world-building notes, and writing diaries." },
          ].map((perk) => (
            <div
              key={perk.title}
              className="text-center p-6 rounded-xl"
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              <div className="text-3xl mb-3">{perk.icon}</div>
              <h3
                className="font-heading italic text-xl mb-2"
                style={{ fontFamily: "var(--font-heading)", color: "var(--color-violet-light)" }}
              >
                {perk.title}
              </h3>
              <p className="text-sm" style={{ color: "var(--color-muted)" }}>
                {perk.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
