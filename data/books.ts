export interface Book {
  slug: string;
  title: string;
  series: string;
  seriesNumber: number;
  cover: string;
  blurb: string;
  excerpt: string;
  tropes: string[];
  amazonUrl: string;
  bnUrl: string;
  publishDate: string;
  featured?: boolean;
}

export const books: Book[] = [
  {
    slug: "a-crown-of-starless-night",
    title: "A Crown of Starless Night",
    series: "The Shattered Realm",
    seriesNumber: 1,
    cover: "/Books/crown.jpeg",
    blurb:
      "When the last heir to a dying throne must forge an alliance with her sworn enemy, she discovers that some battles are better fought in the dark — and some enemies are dangerously easy to fall in love with.",
    excerpt:
      "She had spent seven years learning how to hate him. Seven years of cold glances across crowded courts, of whispered slights carried on the wind. Now he stood at her door with an offer she couldn't refuse and a smile that made her forget every one of them.",
    tropes: ["enemies-to-lovers", "forced proximity", "crown drama"],
    amazonUrl: "#",
    bnUrl: "#",
    publishDate: "2023-09-12",
  },
  {
    slug: "the-last-veil-of-stars",
    title: "The Last Veil of Stars",
    series: "The Shattered Realm",
    seriesNumber: 2,
    cover: "/Books/veil.jpeg",
    blurb:
      "Bound by a blood oath that neither can break, two rulers who were once lovers must face the truth their kingdoms tried to bury — before the stars themselves go dark.",
    excerpt:
      "The oath burned on her wrist like a brand, a reminder of every promise made and broken. She had not seen him in three years. Three years was not nearly long enough to forget the sound of his voice saying her name like it was sacred.",
    tropes: ["blood oath", "second chance", "political intrigue"],
    amazonUrl: "#",
    bnUrl: "#",
    publishDate: "2024-03-05",
  },
  {
    slug: "witch-of-the-hollow-wood",
    title: "Witch of the Hollow Wood",
    series: "The Thornwood Chronicles",
    seriesNumber: 1,
    cover: "/Books/witch.jpeg",
    blurb:
      "She is the witch the fae fear. He is the prince who was sent to destroy her. In the ancient hollow wood, where magic grows wild and trust is the most dangerous spell of all, they will discover that destiny has a cruel sense of humor.",
    excerpt:
      "The forest did not frighten him. What frightened him was the woman standing in its heart — eyes like storm-green glass, hands wreathed in silver smoke, and a smile that promised she already knew exactly why he had come.",
    tropes: ["fae romance", "slow burn", "enemies-to-lovers", "chosen one"],
    amazonUrl: "#",
    bnUrl: "#",
    publishDate: "2024-10-22",
    featured: true,
  },
];

export const featuredBook = books.find((b) => b.featured) ?? books[0];
