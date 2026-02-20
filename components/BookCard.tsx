import Image from "next/image";
import type { Book } from "@/data/books";
import TropesBadge from "./TropesBadge";

export default function BookCard({ book }: { book: Book }) {
  return (
    <div
      className="rounded-xl overflow-hidden flex flex-col"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
      }}
    >
      {/* Cover */}
      <div className="relative w-full" style={{ aspectRatio: "2/3" }}>
        <Image
          src={book.cover}
          alt={book.title}
          fill
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(10,7,24,0.8) 0%, transparent 40%)",
          }}
        />
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <h3
          className="font-heading italic text-2xl leading-tight mb-3"
          style={{ fontFamily: "var(--font-heading)", color: "var(--color-text)" }}
        >
          {book.title}
        </h3>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {book.tropes.map((t) => (
            <TropesBadge key={t} trope={t} />
          ))}
        </div>

        <p
          className="text-sm leading-relaxed mb-6 flex-1"
          style={{ color: "var(--color-muted)" }}
        >
          {book.blurb}
        </p>

        <a
          href={book.amazonUrl}
          className="btn-primary text-center justify-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy Now
        </a>
      </div>
    </div>
  );
}
