import Image from "next/image";
import Link from "next/link";
import { featuredBook } from "@/data/books";
import TropesBadge from "./TropesBadge";

export default function FeaturedBook() {
  const book = featuredBook;
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p
          className="text-xs uppercase tracking-widest mb-3 text-center"
          style={{ color: "var(--color-gold)" }}
        >
          Featured Release
        </p>
        <h2
          className="font-heading italic text-4xl text-center mb-14"
          style={{ color: "var(--color-violet-light)", fontFamily: "var(--font-heading)" }}
        >
          Latest from the Shelf
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Cover */}
          <div className="flex justify-center">
            <div
              className="relative rounded-xl overflow-hidden glow-violet"
              style={{ width: 280, height: 420 }}
            >
              <Image
                src={book.cover}
                alt={book.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Details */}
          <div>
            <p
              className="text-xs uppercase tracking-widest mb-2"
              style={{ color: "var(--color-gold)" }}
            >
              {book.series} · Book {book.seriesNumber}
            </p>
            <h3
              className="font-heading italic text-4xl leading-tight mb-4"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-text)" }}
            >
              {book.title}
            </h3>

            <div className="flex flex-wrap gap-2 mb-6">
              {book.tropes.map((t) => (
                <TropesBadge key={t} trope={t} />
              ))}
            </div>

            <p
              className="leading-relaxed mb-4"
              style={{ color: "var(--color-muted)" }}
            >
              {book.blurb}
            </p>

            <blockquote
              className="text-sm italic leading-relaxed mb-8 pl-4"
              style={{
                borderLeft: "2px solid var(--color-violet-mid)",
                color: "var(--color-violet-light)",
              }}
            >
              &ldquo;{book.excerpt}&rdquo;
            </blockquote>

            <div className="flex flex-wrap gap-3">
              <a
                href={book.amazonUrl}
                className="btn-primary glow-violet"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy on Amazon
              </a>
              <a
                href={book.bnUrl}
                className="btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Barnes &amp; Noble
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
