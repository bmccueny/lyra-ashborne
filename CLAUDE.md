# lyra-ashborne

Fantasy romance author site for Lyra Ashborne — book sales, newsletter signups, MDX blog, and fan engagement.

## Stack
Next.js 16.1.6 · React 19.2.3 · TypeScript · Tailwind CSS 4 · next-mdx-remote v5 · gray-matter · @supabase/ssr

## Structure (flat `app/`)
```
app/layout.tsx              Navbar + Footer + fonts (Cormorant Garamond + Lato) + Person JSON-LD
app/page.tsx                Hero, FeaturedBook, Testimonials, RecentPosts, NewsletterCTA
app/about/page.tsx          author bio, Pexels headshot, fun facts
app/books/page.tsx          SeriesAccordion + Book JSON-LD schema
app/blog/page.tsx           blog index grid
app/blog/[slug]/page.tsx    MDXRemote RSC renderer (async params — Next.js 16 pattern)
app/newsletter/page.tsx     placeholder signup + perks
app/contact/page.tsx        Contact component (mailto: fallback)
app/globals.css             design tokens, animations, .prose-fantasy MDX styles

app/admin/layout.tsx        Bare admin shell — sticky header with nav (no site Navbar/Footer)
app/admin/SignOutButton.tsx "use client" sign-out via Supabase browser client
app/admin/page.tsx          Dashboard: list all posts from posts.json
app/admin/PostForm.tsx      Shared post form (new + edit) — "use client"
app/admin/login/page.tsx    Sign-in form — supabase.auth.signInWithPassword()
app/admin/new/page.tsx      New post — useActionState(createPost)
app/admin/edit/[slug]/page.tsx      Load post data (Server Component)
app/admin/edit/[slug]/EditPostForm.tsx  Pre-filled edit form — useActionState(updatePost)

actions/posts.ts            Server Actions: createPost, updatePost (auth-gated, writes MDX + posts.json)

middleware.ts               Protects /admin/* — redirects unauthenticated users to /admin/login

components/
  Navbar.tsx                fixed, scroll-aware transparent→frosted
  Hero.tsx                  full-screen, Pexels bg, sparkle dots, staggered CTAs
  FeaturedBook.tsx          2-col cover + details (featuredBook from data)
  BookCard.tsx              aspect-2/3 cover + tropes + buy button
  TropesBadge.tsx           color-coded pill per trope type
  NewsletterCTA.tsx         email input with submitted state (client)
  Testimonials.tsx          3 reader reviews, IntersectionObserver fade (client)
  RecentPosts.tsx           3 latest BlogCards + View All (client)
  BlogCard.tsx              tag chip + italic heading + excerpt + date
  SeriesAccordion.tsx       <details open> grouping — no "use client"
  Contact.tsx               name/email/subject/message + social icons (client)
  Footer.tsx                4-col: logo+tagline, Explore, Series, Follow

content/blog/               MDX files (gray-matter frontmatter) — written by createPost/updatePost
data/books.ts               Book interface + 3 books across 2 series
data/posts.json             Post metadata array (migrated from posts.ts) — updated by Server Actions
types/posts.ts              Post interface (shared)
lib/mdx.ts                  getAllSlugs() + getPostBySlug() + buildMdxFile() using fs + gray-matter
lib/supabase/client.ts      createBrowserClient (Client Components)
lib/supabase/server.ts      createServerClient w/ cookies (Server Components + Actions)
```

## Supabase Setup
- Create project → copy URL + anon key to `.env.local`
- Manually create Lyra's account in Supabase Auth dashboard (no public signup)
- `.env.local` vars: `NEXT_PUBLIC_SUPABASE_URL` + `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Design Tokens (globals.css)
- Midnight bg: `#0A0718` with violet + rose radial gradient orbs, `background-attachment: fixed`
- Fonts: Cormorant Garamond (headings, italic) + Lato (body)
- Colors: `--color-violet` `--color-gold` `--color-rose` `--color-text` `--color-muted`
- Helpers: `.glow-violet` `.glow-gold` `.fade-section` `.animate-fade-in-up` `.prose-fantasy`

## Commands
```
npm run dev      start dev server (port 3000)
npm run build    production build
npm run lint     eslint
```

## Notes
- Pexels images need `images.remotePatterns` in `next.config.ts` — already configured
- Blog slug page uses `await params` pattern for Next.js 16 + React 19
- MDX tags field is a YAML array in frontmatter; handled with Array.isArray() guard in [slug]/page.tsx
- `featuredBook` exported from `data/books.ts` = book with `featured: true`
- Filesystem writes (MDX + posts.json) won't persist on Vercel — use Railway/Render/DigitalOcean or migrate to Supabase DB
