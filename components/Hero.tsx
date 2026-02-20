import Link from "next/link";

const SPARKLES = [
  { top: "18%", left: "12%", size: 3, duration: "2.4s", delay: "0s" },
  { top: "35%", left: "88%", size: 2, duration: "1.8s", delay: "0.6s" },
  { top: "65%", left: "7%",  size: 4, duration: "3.1s", delay: "1.2s" },
  { top: "72%", left: "80%", size: 2, duration: "2.0s", delay: "0.3s" },
  { top: "10%", left: "55%", size: 3, duration: "2.7s", delay: "0.9s" },
  { top: "50%", left: "45%", size: 2, duration: "1.6s", delay: "1.5s" },
  { top: "82%", left: "30%", size: 3, duration: "2.2s", delay: "0.4s" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Autoplay muted romantic background video — bokeh candlelight */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.35 }}
        poster="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1600"
      >
        <source
          src="https://videos.pexels.com/video-files/6929264/6929264-hd_1920_1080_30fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,7,24,0.35) 0%, rgba(10,7,24,0.65) 60%, var(--color-midnight) 100%)",
        }}
      />

      {/* Sparkle dots */}
      {SPARKLES.map((s, i) => (
        <span
          key={i}
          className="sparkle absolute rounded-full pointer-events-none"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            background: i % 2 === 0 ? "var(--color-gold-light)" : "var(--color-violet-light)",
            "--duration": s.duration,
            "--delay": s.delay,
          } as React.CSSProperties}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p
          className="animate-fade-in-up delay-100 text-sm uppercase tracking-widest mb-4"
          style={{ color: "var(--color-gold)", fontFamily: "var(--font-body)" }}
        >
          Fantasy Romance · Dark & Enchanting
        </p>

        <h1
          className="animate-fade-in-up delay-200 font-heading italic leading-tight mb-6"
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            color: "var(--color-text)",
            fontFamily: "var(--font-heading)",
            textShadow: "0 0 40px rgba(167,139,250,0.4)",
          }}
        >
          Where Dark Magic
          <br />
          Meets Desire
        </h1>

        <p
          className="animate-fade-in-up delay-300 text-lg leading-relaxed mb-10"
          style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)", maxWidth: "52ch", margin: "0 auto 2.5rem" }}
        >
          Enter worlds where forbidden love blooms in cursed forests, enemies share
          a crown, and every heartbeat costs something precious. Stories that linger
          long after the last page.
        </p>

        <div className="animate-fade-in-up delay-400 flex flex-wrap gap-4 justify-center">
          <Link href="/books" className="btn-primary glow-violet">
            Explore the Books
          </Link>
          <Link href="/newsletter" className="btn-outline">
            Join the Realm
          </Link>
        </div>
      </div>
    </section>
  );
}
