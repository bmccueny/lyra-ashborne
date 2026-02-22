"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div
        className="w-full max-w-sm rounded-2xl p-8"
        style={{
          background: "var(--color-surface)",
          border: "1px solid var(--color-border)",
        }}
      >
        <h1
          className="font-heading italic text-3xl mb-2 text-center"
          style={{ fontFamily: "var(--font-heading)", color: "var(--color-violet-light)" }}
        >
          Admin Login
        </h1>
        <p className="text-sm text-center mb-8" style={{ color: "var(--color-muted)" }}>
          Lyra Ashborne · Author Dashboard
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-xs mb-1" style={{ color: "var(--color-muted)" }}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 rounded-lg text-sm outline-none transition-colors duration-150"
              style={{
                background: "rgba(167,139,250,0.08)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text)",
              }}
              onFocus={(e) => (e.target.style.borderColor = "var(--color-violet-mid)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
            />
          </div>

          <div>
            <label className="block text-xs mb-1" style={{ color: "var(--color-muted)" }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 rounded-lg text-sm outline-none transition-colors duration-150"
              style={{
                background: "rgba(167,139,250,0.08)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text)",
              }}
              onFocus={(e) => (e.target.style.borderColor = "var(--color-violet-mid)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
            />
          </div>

          {error && (
            <p className="text-sm" style={{ color: "var(--color-rose)" }}>
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 py-2.5 rounded-lg text-sm font-bold transition-all duration-150"
            style={{
              background: loading ? "rgba(124,58,237,0.5)" : "var(--color-violet)",
              color: "var(--color-text)",
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
