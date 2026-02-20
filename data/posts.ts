export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  coverImage?: string;
}

export const posts: Post[] = [
  {
    slug: "enemies-to-lovers-explained",
    title: "Why Enemies-to-Lovers Will Always Win My Heart",
    excerpt:
      "There is no tension more electric than two people who cannot stand each other slowly, inevitably falling apart at the seams. Let me tell you exactly why I keep writing it.",
    date: "2024-11-08",
    tags: ["tropes", "craft", "romance"],
    coverImage: "https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    slug: "behind-the-series",
    title: "Behind The Shattered Realm: Where It All Began",
    excerpt:
      "A midnight walk, a half-remembered dream, and a villain who refused to stay villainous — the origin story of the series that changed everything for me.",
    date: "2024-10-01",
    tags: ["behind the scenes", "writing process"],
    coverImage: "https://images.pexels.com/photos/1252869/pexels-photo-1252869.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    slug: "winter-romance-reading-list",
    title: "My Winter Fantasy Romance Reading List",
    excerpt:
      "Snow, secrets, and slow-burning love — these are the books I reach for when the nights grow long and the world feels like it needs a little more magic.",
    date: "2024-12-15",
    tags: ["recommendations", "reading list", "winter"],
    coverImage: "https://images.pexels.com/photos/1310847/pexels-photo-1310847.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    slug: "writing-morally-grey-heroines",
    title: "In Defence of the Morally Grey Heroine",
    excerpt:
      "She lies. She makes the wrong choice. She does not always apologise. And she is, I will argue, the most honest kind of protagonist fantasy romance has ever had.",
    date: "2024-09-12",
    tags: ["craft", "character", "heroines"],
    coverImage: "https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    slug: "the-magic-of-slow-burn",
    title: "The Magic of Slow Burn: Why Patience Is the Greatest Romantic Tension",
    excerpt:
      "A love story that makes you wait is a love story that makes you feel. Here is why I am utterly devoted to the slow burn, and why I think you should be too.",
    date: "2025-02-14",
    tags: ["tropes", "craft", "slow burn"],
    coverImage: "https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    slug: "world-building-without-info-dumps",
    title: "World-Building Without the Info Dump: How I Keep Fantasy Grounded",
    excerpt:
      "Readers don't need to know how your magic system works on page one. They need to feel like the world is real. Here is how I learned the difference.",
    date: "2025-04-03",
    tags: ["craft", "world-building", "fantasy"],
    coverImage: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];
