import { books } from "@/data/books";
import BookCard from "./BookCard";

export default function SeriesAccordion() {
  // Group books by series
  const seriesMap = books.reduce<Record<string, typeof books>>((acc, book) => {
    if (!acc[book.series]) acc[book.series] = [];
    acc[book.series].push(book);
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      {Object.entries(seriesMap).map(([seriesName, seriesBooks], idx) => (
        <details
          key={seriesName}
          open={idx === 0}
          className="group rounded-xl overflow-hidden"
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
          }}
        >
          <summary
            className="flex items-center justify-between px-7 py-5 cursor-pointer list-none select-none"
            style={{ color: "var(--color-text)" }}
          >
            <div>
              <h2
                className="font-heading italic text-3xl"
                style={{ fontFamily: "var(--font-heading)", color: "var(--color-violet-light)" }}
              >
                {seriesName}
              </h2>
              <p className="text-sm mt-0.5" style={{ color: "var(--color-muted)" }}>
                {seriesBooks.length} {seriesBooks.length === 1 ? "book" : "books"}
              </p>
            </div>
            <svg
              className="w-5 h-5 transition-transform duration-300 group-open:rotate-180"
              viewBox="0 0 20 20"
              fill="currentColor"
              style={{ color: "var(--color-violet-mid)", flexShrink: 0 }}
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </summary>

          <div className="px-7 pb-7">
            <div
              className="border-t mb-6"
              style={{ borderColor: "var(--color-border)" }}
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {seriesBooks
                .sort((a, b) => a.seriesNumber - b.seriesNumber)
                .map((book) => (
                  <BookCard key={book.slug} book={book} />
                ))}
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}
