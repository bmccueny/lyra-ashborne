# lyra-ashborne

Fantasy romance author site for Lyra Ashborne — book sales, newsletter signups, MDX blog, and fan engagement.

## Stack
Next.js 16.1.6 · React 19.2.3 · TypeScript · Tailwind CSS 4 · next-mdx-remote v5 · gray-matter

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

content/blog/               3 × .mdx files (gray-matter frontmatter)
data/books.ts               Book interface + 3 books across 2 series
data/posts.ts               Post interface + 3 metadata entries
lib/mdx.ts                  getAllSlugs() + getPostBySlug() using fs + gray-matter
```

## Design Tokens (globals.css)
- Midnight bg: `#0A0718` with violet + rose radial gradient orbs, `background-attachment: fixed`
- Fonts: Cormorant Garamond (headings, italic) + Lato (body)
- Colors: `--color-violet` `--color-gold` `--color-rose` `--color-text` `--color-muted`
- Helpers: `.glow-violet` `.glow-gold` `.fade-section` `.animate-fade-in-up` `.prose-fantasy`

## Commands
```
npm run dev      start dev server (port 3000)
npm run build    production build — 7 static routes
npm run lint     eslint
```

## Notes
- Pexels images need `images.remotePatterns` in `next.config.ts` — already configured
- Blog slug page uses `await params` pattern for Next.js 16 + React 19
- MDX tags field is a YAML array in frontmatter; handled with Array.isArray() guard in [slug]/page.tsx
- `featuredBook` exported from `data/books.ts` = book with `featured: true`
