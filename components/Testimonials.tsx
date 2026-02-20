"use client";

import { useEffect, useRef } from "react";

const reviews = [
  {
    name: "Rosalind M.",
    stars: 5,
    text: "I devoured A Crown of Starless Night in one sitting. The tension between Serafine and Dorian is absolutely electric — I was screaming at my book.",
  },
  {
    name: "Theo P.",
    stars: 5,
    text: "Lyra Ashborne writes the kind of slow-burn romance that ruins you for other books. Witch of the Hollow Wood wrecked me in the best possible way.",
  },
  {
    name: "Camille S.",
    stars: 5,
    text: "The world-building in The Shattered Realm is phenomenal. You can feel the weight of history in every line. Cannot wait for book three.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" style={{ color: "var(--color-gold)" }}>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-section").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 150);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs uppercase tracking-widest mb-3 text-center" style={{ color: "var(--color-gold)" }}>
          Reader Reviews
        </p>
        <h2
          className="font-heading italic text-4xl text-center mb-14"
          style={{ fontFamily: "var(--font-heading)", color: "var(--color-violet-light)" }}
        >
          What Readers Are Saying
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="fade-section rounded-xl p-7"
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              <Stars count={r.stars} />
              <p className="text-sm leading-relaxed mb-5 italic" style={{ color: "var(--color-muted)" }}>
                &ldquo;{r.text}&rdquo;
              </p>
              <p className="text-sm font-semibold" style={{ color: "var(--color-violet-light)" }}>
                — {r.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
