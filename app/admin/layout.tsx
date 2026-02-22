import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import SignOutButton from "./SignOutButton";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-midnight)" }}>
      {user && (
        <header
          className="sticky top-0 z-50 px-6 py-4 flex items-center justify-between"
          style={{
            background: "rgba(10,7,24,0.9)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid var(--color-border)",
          }}
        >
          <Link
            href="/admin"
            className="font-heading italic text-xl"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-violet-light)" }}
          >
            Lyra Admin
          </Link>
          <nav className="flex items-center gap-4">
            <Link
              href="/admin/new"
              className="text-sm px-4 py-2 rounded-lg transition-colors duration-150"
              style={{
                background: "var(--color-violet)",
                color: "var(--color-text)",
              }}
            >
              + New Post
            </Link>
            <Link
              href="/"
              className="text-sm"
              style={{ color: "var(--color-muted)" }}
            >
              View Site
            </Link>
            <SignOutButton />
          </nav>
        </header>
      )}
      <main className="px-6 py-10 max-w-5xl mx-auto">{children}</main>
    </div>
  );
}
