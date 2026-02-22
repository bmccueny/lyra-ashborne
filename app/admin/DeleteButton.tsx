"use client";

import { useActionState } from "react";
import { deletePost } from "@/actions/posts";

const initialState = { error: null };

export default function DeleteButton({ slug }: { slug: string }) {
  const [state, formAction, pending] = useActionState(deletePost, initialState);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (!confirm(`Delete "${slug}"? This cannot be undone.`)) {
      e.preventDefault();
    }
  }

  return (
    <form action={formAction} onSubmit={handleSubmit}>
      <input type="hidden" name="slug" value={slug} />
      <button
        type="submit"
        disabled={pending}
        className="text-xs px-3 py-1.5 rounded-lg transition-colors duration-150"
        style={{
          background: "rgba(244,63,94,0.12)",
          color: "var(--color-rose)",
          border: "1px solid rgba(244,63,94,0.25)",
          cursor: pending ? "not-allowed" : "pointer",
        }}
      >
        {pending ? "Deleting…" : "Delete"}
      </button>
      {state.error && (
        <p className="text-xs mt-1" style={{ color: "var(--color-rose)" }}>
          {state.error}
        </p>
      )}
    </form>
  );
}
