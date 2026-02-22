import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string): {
  frontmatter: Record<string, string>;
  content: string;
} {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { frontmatter: data as Record<string, string>, content };
}

export interface MdxFrontmatter {
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  coverImage?: string;
}

export function buildMdxFile(frontmatter: MdxFrontmatter, body: string): string {
  const tagYaml = frontmatter.tags.map((t) => `  - ${t}`).join("\n");
  const cover = frontmatter.coverImage ? `\ncoverImage: "${frontmatter.coverImage}"` : "";
  return `---
title: "${frontmatter.title.replace(/"/g, '\\"')}"
excerpt: "${frontmatter.excerpt.replace(/"/g, '\\"')}"
date: "${frontmatter.date}"
tags:
${tagYaml}${cover}
---

${body.trim()}
`;
}
