import type { Metadata } from "next";
import posts from "@/data/posts.json";
import BlogCard from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "Blog",
  description: "Essays and musings on fantasy romance, writing craft, tropes, and books — from Lyra Ashborne.",
};

export default function BlogPage() {
  return (
    <div className="pt-28 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--color-gold)" }}>
            Words & Musings
          </p>
          <h1
            className="font-heading italic text-5xl md:text-6xl mb-4"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-text)" }}
          >
            The Blog
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--color-muted)" }}>
            On tropes, craft, and the magic of stories that refuse to leave you alone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
