"use server";

import fs from "fs";
import path from "path";
import slugify from "slugify";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { buildMdxFile } from "@/lib/mdx";
import type { Post } from "@/types/posts";

const POSTS_JSON = path.join(process.cwd(), "data/posts.json");
const BLOG_DIR = path.join(process.cwd(), "content/blog");

async function requireAuth() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");
  return user;
}

function readPostsJson(): Post[] {
  return JSON.parse(fs.readFileSync(POSTS_JSON, "utf-8")) as Post[];
}

function writePostsJson(posts: Post[]) {
  fs.writeFileSync(POSTS_JSON, JSON.stringify(posts, null, 2) + "\n");
}

export async function createPost(
  _prevState: { error: string | null; slug: string | null },
  formData: FormData
): Promise<{ error: string | null; slug: string | null }> {
  try {
    await requireAuth();

    const title = (formData.get("title") as string).trim();
    const excerpt = (formData.get("excerpt") as string).trim();
    const date = (formData.get("date") as string).trim();
    const tagsRaw = (formData.get("tags") as string).trim();
    const coverImage = (formData.get("coverImage") as string | null)?.trim() || undefined;
    const body = (formData.get("body") as string).trim();

    if (!title || !excerpt || !date || !body) {
      return { error: "Title, excerpt, date, and body are required.", slug: null };
    }

    const slug = slugify(title, { lower: true, strict: true });
    const tags = tagsRaw
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    const mdxContent = buildMdxFile({ title, excerpt, date, tags, coverImage }, body);
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

    if (fs.existsSync(filePath)) {
      return { error: `A post with slug "${slug}" already exists.`, slug: null };
    }

    fs.writeFileSync(filePath, mdxContent);

    const posts = readPostsJson();
    posts.unshift({ slug, title, excerpt, date, tags, coverImage });
    writePostsJson(posts);

    revalidatePath("/blog");
    revalidatePath("/admin");

    return { error: null, slug };
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Unknown error", slug: null };
  }
}

export async function deletePost(
  _prevState: { error: string | null },
  formData: FormData
): Promise<{ error: string | null }> {
  try {
    await requireAuth();

    const slug = (formData.get("slug") as string).trim();
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    const posts = readPostsJson();
    writePostsJson(posts.filter((p) => p.slug !== slug));

    revalidatePath("/blog");
    revalidatePath("/admin");

    return { error: null };
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Unknown error" };
  }
}

export async function updatePost(
  _prevState: { error: string | null },
  formData: FormData
): Promise<{ error: string | null }> {
  try {
    await requireAuth();

    const originalSlug = (formData.get("originalSlug") as string).trim();
    const title = (formData.get("title") as string).trim();
    const excerpt = (formData.get("excerpt") as string).trim();
    const date = (formData.get("date") as string).trim();
    const tagsRaw = (formData.get("tags") as string).trim();
    const coverImage = (formData.get("coverImage") as string | null)?.trim() || undefined;
    const body = (formData.get("body") as string).trim();

    if (!title || !excerpt || !date || !body) {
      return { error: "Title, excerpt, date, and body are required." };
    }

    const tags = tagsRaw
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    const mdxContent = buildMdxFile({ title, excerpt, date, tags, coverImage }, body);
    const filePath = path.join(BLOG_DIR, `${originalSlug}.mdx`);
    fs.writeFileSync(filePath, mdxContent);

    const posts = readPostsJson();
    const idx = posts.findIndex((p) => p.slug === originalSlug);
    if (idx !== -1) {
      posts[idx] = { slug: originalSlug, title, excerpt, date, tags, coverImage };
    }
    writePostsJson(posts);

    revalidatePath(`/blog/${originalSlug}`);
    revalidatePath("/blog");
    revalidatePath("/admin");

    return { error: null };
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Unknown error" };
  }
}
