"use client";

import Link from "next/link";

const explore = [
  { href: "/", label: "Home" },
  { href: "/books", label: "Books" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

const series = [
  { label: "The Shattered Realm" },
  { label: "The Thornwood Chronicles" },
];

const socials = [
  { label: "Instagram", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "Goodreads", href: "#" },
  { label: "Amazon", href: "#" },
];

export default function Footer() {
  return (
    <footer
      className="mt-16 pt-16 pb-8 px-6"
      style={{
        borderTop: "1px solid var(--color-border)",
        background: "rgba(10,7,24,0.8)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Logo + tagline */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="font-heading italic text-xl font-semibold block mb-3"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-violet-light)" }}
            >
              Lyra Ashborne
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
              Dark fantasy romance. Where magic meets desire and every love story
              costs something precious.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--color-gold)" }}>
              Explore
            </h4>
            <ul className="space-y-2">
              {explore.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm transition-colors duration-150"
                    style={{ color: "var(--color-muted)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--color-violet-light)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--color-muted)")
                    }
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Series */}
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--color-gold)" }}>
              Series
            </h4>
            <ul className="space-y-2">
              {series.map((s) => (
                <li key={s.label}>
                  <Link
                    href="/books"
                    className="text-sm transition-colors duration-150"
                    style={{ color: "var(--color-muted)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--color-violet-light)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--color-muted)")
                    }
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--color-gold)" }}>
              Follow
            </h4>
            <ul className="space-y-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm transition-colors duration-150"
                    style={{ color: "var(--color-muted)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--color-violet-light)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--color-muted)")
                    }
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="pt-6 text-center text-xs"
          style={{
            borderTop: "1px solid var(--color-border)",
            color: "rgba(250,245,255,0.35)",
          }}
        >
          © {new Date().getFullYear()} Lyra Ashborne. All rights reserved. · Design & Development by <a href="https://mccuestudio.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>McCue Studios</a>
        </div>
      </div>
    </footer>
  );
}
