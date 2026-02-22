"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import posts from "@/data/posts.json";
import BlogCard from "./BlogCard";

export default function RecentPosts() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-section").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const recent = posts.slice(0, 3);

  return (
    <section ref={sectionRef} className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs uppercase tracking-widest mb-3 text-center" style={{ color: "var(--color-gold)" }}>
          From the Blog
        </p>
        <h2
          className="font-heading italic text-4xl text-center mb-14"
          style={{ fontFamily: "var(--font-heading)", color: "var(--color-violet-light)" }}
        >
          Recent Musings
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {recent.map((post) => (
            <div key={post.slug} className="fade-section">
              <BlogCard post={post} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="btn-outline"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}
