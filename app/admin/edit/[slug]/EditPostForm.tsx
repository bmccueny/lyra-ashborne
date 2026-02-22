"use client";

import { useActionState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { updatePost } from "@/actions/posts";
import PostForm from "../../PostForm";
import type { Post } from "@/types/posts";

const initialState = { error: null };

interface EditPostFormProps {
  slug: string;
  defaults: Partial<Post> & { body?: string };
}

export default function EditPostForm({ defaults }: EditPostFormProps) {
  const [state, formAction, pending] = useActionState(updatePost, initialState);
  const router = useRouter();

  useEffect(() => {
    if (state.error === null && !pending) {
      // Optionally show success or stay on page
    }
  }, [state, pending]);

  return (
    <>
      {state.error === null && !pending && (
        <p
          className="text-sm mb-4"
          style={{ color: "var(--color-gold)" }}
          id="save-status"
        />
      )}
      <PostForm
        formAction={formAction}
        pending={pending}
        error={state.error}
        defaults={defaults}
        isEdit
      />
    </>
  );
}
