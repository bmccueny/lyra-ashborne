import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/mdx";
import posts from "@/data/posts.json";
import EditPostForm from "./EditPostForm";

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let frontmatter: Record<string, string>;
  let content: string;

  try {
    ({ frontmatter, content } = getPostBySlug(slug));
  } catch {
    notFound();
  }

  const postMeta = posts.find((p) => p.slug === slug);

  return (
    <div>
      <h1
        className="font-heading italic text-4xl mb-8"
        style={{ fontFamily: "var(--font-heading)", color: "var(--color-text)" }}
      >
        Edit Post
      </h1>
      <EditPostForm
        slug={slug}
        defaults={{
          slug,
          title: frontmatter.title,
          excerpt: frontmatter.excerpt,
          date: frontmatter.date,
          tags: postMeta?.tags ?? [],
          coverImage: frontmatter.coverImage,
          body: content,
        }}
      />
    </div>
  );
}
