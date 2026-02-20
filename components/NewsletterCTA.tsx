"use client";

import { useState } from "react";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="py-20 px-6">
      <div
        className="max-w-2xl mx-auto text-center rounded-2xl p-10"
        style={{
          background: "var(--color-surface)",
          border: "1px solid var(--color-border)",
        }}
      >
        <p
          className="text-xs uppercase tracking-widest mb-3"
          style={{ color: "var(--color-gold)" }}
        >
          Newsletter
        </p>
        <h2
          className="font-heading italic text-4xl mb-4"
          style={{ fontFamily: "var(--font-heading)", color: "var(--color-text)" }}
        >
          Join the Realm
        </h2>
        <p
          className="leading-relaxed mb-8"
          style={{ color: "var(--color-muted)" }}
        >
          Get first looks at new chapters, cover reveals, exclusive excerpts, and
          the occasional dispatch from whatever cursed world I&apos;m building right now.
        </p>

        {submitted ? (
          <div
            className="py-6 px-8 rounded-xl"
            style={{ background: "rgba(124,58,237,0.15)", border: "1px solid var(--color-violet-mid)" }}
          >
            <p
              className="font-heading italic text-2xl"
              style={{ color: "var(--color-violet-light)" }}
            >
              Welcome to the Realm
            </p>
            <p className="mt-2 text-sm" style={{ color: "var(--color-muted)" }}>
              You&apos;re on the list. Keep an eye on your inbox.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 rounded-lg text-sm outline-none"
              style={{
                background: "rgba(167,139,250,0.08)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text)",
              }}
            />
            <button type="submit" className="btn-primary glow-violet whitespace-nowrap">
              Join the Realm
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
