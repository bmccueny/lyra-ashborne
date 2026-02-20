import type { Metadata } from "next";
import SeriesAccordion from "@/components/SeriesAccordion";
import { books } from "@/data/books";

export const metadata: Metadata = {
  title: "Books",
  description: "All books by Lyra Ashborne — The Shattered Realm series and The Thornwood Chronicles.",
};

const bookSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: books.map((book, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Book",
      name: book.title,
      author: {
        "@type": "Person",
        name: "Lyra Ashborne",
      },
      bookSeries: book.series,
      datePublished: book.publishDate,
      url: book.amazonUrl,
    },
  })),
};

export default function BooksPage() {
  return (
    <div className="pt-28 pb-24 px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }}
      />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--color-gold)" }}>
            All Titles
          </p>
          <h1
            className="font-heading italic text-5xl md:text-6xl mb-4"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-text)" }}
          >
            The Books
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--color-muted)" }}>
            Two worlds. Three stories. Countless reasons to lose sleep.
          </p>
        </div>

        <SeriesAccordion />
      </div>
    </div>
  );
}
