"use client";

import Link from "next/link";
import type { Post } from "@/types/posts";

export default function BlogCard({ post }: { post: Post }) {
  const formatted = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-xl p-6 transition-all duration-200"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.borderColor = "rgba(167,139,250,0.35)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.borderColor = "var(--color-border)")
      }
    >
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-3">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-full"
            style={{
              background: "rgba(124,58,237,0.18)",
              color: "var(--color-violet-light)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <h3
        className="font-heading italic text-2xl leading-snug mb-2 transition-colors duration-200"
        style={{
          fontFamily: "var(--font-heading)",
          color: "var(--color-text)",
        }}
      >
        {post.title}
      </h3>

      <p
        className="text-sm leading-relaxed mb-4"
        style={{ color: "var(--color-muted)" }}
      >
        {post.excerpt}
      </p>

      <p className="text-xs" style={{ color: "rgba(167,139,250,0.5)" }}>
        {formatted}
      </p>
    </Link>
  );
}
