"use client";

import { useState } from "react";

const socials = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
      </svg>
    ),
  },
  {
    label: "Goodreads",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M11.43 23.99c-2.5-.17-4.48-.96-5.89-2.5C4.09 20.04 3.35 17.9 3.35 15.2v-.93c0-2.95.88-5.2 2.65-6.76C7.74 6 9.97 5.24 12.7 5.24c2.71 0 4.86.74 6.45 2.2 1.58 1.47 2.36 3.5 2.36 6.09v2.62h-14.1v.06c0 1.86.42 3.31 1.25 4.35.83 1.03 2.04 1.55 3.63 1.55 1.08 0 2-.25 2.77-.73.76-.48 1.33-1.16 1.7-2.03l2.41.9c-.52 1.35-1.37 2.42-2.55 3.2-1.18.79-2.66 1.2-4.44 1.25l-.8.29zM8.38 11.08h7.59c0-1.57-.38-2.78-1.14-3.63-.77-.86-1.85-1.28-3.25-1.28-1.39 0-2.48.43-3.28 1.3-.8.87-1.21 2.04-1.21 3.53l.29.08z" />
      </svg>
    ),
  },
  {
    label: "Amazon",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.891-1.301 1.438-2.186 1.438-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.7-3.182v.685zm3.186 7.705c-.209.189-.512.201-.745.074-1.047-.872-1.234-1.276-1.814-2.106-1.734 1.769-2.962 2.299-5.209 2.299-2.66 0-4.731-1.641-4.731-4.925 0-2.565 1.391-4.309 3.37-5.164 1.715-.754 4.11-.891 5.942-1.099v-.41c0-.753.06-1.642-.384-2.294-.385-.579-1.124-.82-1.775-.82-1.205 0-2.277.618-2.54 1.897-.054.285-.261.567-.549.582l-3.061-.333c-.259-.056-.547-.267-.472-.664C5.897 2.79 8.823 2 11.436 2c1.337 0 3.083.356 4.136 1.367C16.907 4.583 16.8 6.19 16.8 7.933v5.15c0 1.548.642 2.229 1.246 3.064.211.297.258.651-.013.87-.67.559-1.862 1.597-2.517 2.178h-.372zm3.637 1.552c-2.973 1.967-7.283 3.012-10.991 3.012-5.2 0-9.881-1.921-13.42-5.122-.278-.251-.03-.594.305-.398 3.821 2.223 8.543 3.56 13.423 3.56 3.292 0 6.914-.684 10.245-2.099.503-.214.925.33.438.647zm1.252-1.43c-.379-.487-2.513-.23-3.472-.115-.291.034-.336-.219-.073-.402 1.7-1.196 4.488-.851 4.814-.45.326.4-.085 3.178-1.683 4.503-.244.207-.479.097-.37-.174.36-.894 1.162-2.895.784-3.362z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <p className="text-xs uppercase tracking-widest mb-3 text-center" style={{ color: "var(--color-gold)" }}>
          Get in Touch
        </p>
        <h1
          className="font-heading italic text-5xl text-center mb-4"
          style={{ fontFamily: "var(--font-heading)", color: "var(--color-text)" }}
        >
          Say Hello
        </h1>
        <p className="text-center leading-relaxed mb-12" style={{ color: "var(--color-muted)" }}>
          For reader mail, media enquiries, or just to talk about your favourite tropes — I&apos;d love to hear from you.
        </p>

        {submitted ? (
          <div
            className="text-center py-12 px-8 rounded-xl"
            style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
          >
            <p
              className="font-heading italic text-3xl mb-3"
              style={{ color: "var(--color-violet-light)", fontFamily: "var(--font-heading)" }}
            >
              Message Received
            </p>
            <p style={{ color: "var(--color-muted)" }}>
              Thank you for reaching out. I&apos;ll reply as soon as I surface from whatever world I&apos;m currently writing.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            action="mailto:lyra@lyraashborne.com"
            encType="text/plain"
            className="space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm mb-1.5" style={{ color: "var(--color-muted)" }}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none"
                  style={{
                    background: "rgba(167,139,250,0.06)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text)",
                  }}
                />
              </div>
              <div>
                <label className="block text-sm mb-1.5" style={{ color: "var(--color-muted)" }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none"
                  style={{
                    background: "rgba(167,139,250,0.06)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text)",
                  }}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1.5" style={{ color: "var(--color-muted)" }}>
                Subject
              </label>
              <input
                type="text"
                name="subject"
                required
                className="w-full px-4 py-3 rounded-lg text-sm outline-none"
                style={{
                  background: "rgba(167,139,250,0.06)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text)",
                }}
              />
            </div>

            <div>
              <label className="block text-sm mb-1.5" style={{ color: "var(--color-muted)" }}>
                Message
              </label>
              <textarea
                name="body"
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg text-sm outline-none resize-none"
                style={{
                  background: "rgba(167,139,250,0.06)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text)",
                }}
              />
            </div>

            <button type="submit" className="btn-primary glow-violet w-full justify-center">
              Send Message
            </button>
          </form>
        )}

        {/* Social icons */}
        <div className="mt-12 flex justify-center gap-5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full transition-colors duration-200"
              style={{
                background: "rgba(167,139,250,0.1)",
                color: "var(--color-violet-mid)",
                border: "1px solid var(--color-border)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--color-violet-light)";
                (e.currentTarget as HTMLElement).style.background = "rgba(167,139,250,0.18)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--color-violet-mid)";
                (e.currentTarget as HTMLElement).style.background = "rgba(167,139,250,0.1)";
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
