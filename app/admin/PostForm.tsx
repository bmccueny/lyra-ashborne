"use client";

import type { Post } from "@/types/posts";

interface PostFormProps {
  formAction: (payload: FormData) => void;
  pending: boolean;
  error: string | null;
  defaults?: Partial<Post> & { body?: string };
  isEdit?: boolean;
}

export default function PostForm({
  formAction,
  pending,
  error,
  defaults = {},
  isEdit = false,
}: PostFormProps) {
  const inputStyle = {
    background: "rgba(167,139,250,0.08)",
    border: "1px solid var(--color-border)",
    color: "var(--color-text)",
    width: "100%",
    borderRadius: "0.5rem",
    padding: "0.5rem 0.75rem",
    fontSize: "0.875rem",
    outline: "none",
  } as React.CSSProperties;

  const labelStyle = {
    display: "block",
    fontSize: "0.75rem",
    marginBottom: "0.25rem",
    color: "var(--color-muted)",
  } as React.CSSProperties;

  return (
    <form action={formAction} className="flex flex-col gap-5 max-w-2xl">
      {isEdit && (
        <input type="hidden" name="originalSlug" defaultValue={defaults.slug} />
      )}

      <div>
        <label style={labelStyle}>Title *</label>
        <input
          name="title"
          type="text"
          required
          defaultValue={defaults.title ?? ""}
          placeholder="The title of your post"
          style={inputStyle}
        />
      </div>

      <div>
        <label style={labelStyle}>Excerpt *</label>
        <textarea
          name="excerpt"
          required
          rows={3}
          defaultValue={defaults.excerpt ?? ""}
          placeholder="A short compelling summary"
          style={{ ...inputStyle, resize: "vertical" }}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label style={labelStyle}>Date * (YYYY-MM-DD)</label>
          <input
            name="date"
            type="date"
            required
            defaultValue={defaults.date ?? new Date().toISOString().split("T")[0]}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Tags (comma-separated)</label>
          <input
            name="tags"
            type="text"
            defaultValue={Array.isArray(defaults.tags) ? defaults.tags.join(", ") : ""}
            placeholder="craft, tropes, romance"
            style={inputStyle}
          />
        </div>
      </div>

      <div>
        <label style={labelStyle}>Cover Image URL</label>
        <input
          name="coverImage"
          type="url"
          defaultValue={defaults.coverImage ?? ""}
          placeholder="https://..."
          style={inputStyle}
        />
      </div>

      <div>
        <label style={labelStyle}>Body (Markdown / MDX) *</label>
        <textarea
          name="body"
          required
          rows={20}
          defaultValue={defaults.body ?? ""}
          placeholder="Write your post content here using Markdown..."
          style={{
            ...inputStyle,
            fontFamily: "ui-monospace, monospace",
            fontSize: "0.8125rem",
            lineHeight: "1.6",
            resize: "vertical",
          }}
        />
      </div>

      {error && (
        <p className="text-sm" style={{ color: "var(--color-rose)" }}>
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        style={{
          background: pending ? "rgba(124,58,237,0.5)" : "var(--color-violet)",
          color: "var(--color-text)",
          padding: "0.625rem 1.5rem",
          borderRadius: "0.5rem",
          fontWeight: 700,
          fontSize: "0.875rem",
          cursor: pending ? "not-allowed" : "pointer",
          alignSelf: "flex-start",
          transition: "background 0.2s",
        }}
      >
        {pending ? "Saving…" : isEdit ? "Update Post" : "Publish Post"}
      </button>
    </form>
  );
}
