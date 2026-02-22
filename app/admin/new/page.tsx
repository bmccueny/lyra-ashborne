"use client";

import { useActionState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { createPost } from "@/actions/posts";
import PostForm from "../PostForm";

const initialState = { error: null, slug: null };

export default function NewPostPage() {
  const [state, formAction, pending] = useActionState(createPost, initialState);
  const router = useRouter();

  useEffect(() => {
    if (state.slug) {
      router.push("/admin");
    }
  }, [state.slug, router]);

  return (
    <div>
      <h1
        className="font-heading italic text-4xl mb-8"
        style={{ fontFamily: "var(--font-heading)", color: "var(--color-text)" }}
      >
        New Post
      </h1>
      <PostForm formAction={formAction} pending={pending} error={state.error} />
    </div>
  );
}
