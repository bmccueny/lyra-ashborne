import Link from "next/link";
import posts from "@/data/posts.json";
import DeleteButton from "./DeleteButton";

export default function AdminDashboard() {
  return (
    <div>
      <h1
        className="font-heading italic text-4xl mb-2"
        style={{ fontFamily: "var(--font-heading)", color: "var(--color-text)" }}
      >
        Blog Posts
      </h1>
      <p className="text-sm mb-8" style={{ color: "var(--color-muted)" }}>
        {posts.length} {posts.length === 1 ? "post" : "posts"} total
      </p>

      <div className="flex flex-col gap-3">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="flex items-center justify-between rounded-xl px-5 py-4"
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
            }}
          >
            <div className="min-w-0">
              <p
                className="font-heading italic text-lg leading-snug truncate"
                style={{ fontFamily: "var(--font-heading)", color: "var(--color-text)" }}
              >
                {post.title}
              </p>
              <p className="text-xs mt-1" style={{ color: "var(--color-muted)" }}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                · {post.tags.join(", ")}
              </p>
            </div>
            <div className="flex items-center gap-3 ml-4 shrink-0">
              <Link
                href={`/blog/${post.slug}`}
                target="_blank"
                className="text-xs"
                style={{ color: "var(--color-muted)" }}
              >
                View
              </Link>
              <Link
                href={`/admin/edit/${post.slug}`}
                className="text-xs px-3 py-1.5 rounded-lg"
                style={{
                  background: "rgba(124,58,237,0.2)",
                  color: "var(--color-violet-light)",
                  border: "1px solid rgba(167,139,250,0.25)",
                }}
              >
                Edit
              </Link>
              <DeleteButton slug={post.slug} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
