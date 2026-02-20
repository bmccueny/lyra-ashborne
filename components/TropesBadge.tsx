const TROPE_COLORS: Record<string, { bg: string; text: string }> = {
  "enemies-to-lovers":  { bg: "rgba(244,63,94,0.18)",    text: "#fb7185" },
  "slow burn":          { bg: "rgba(245,158,11,0.18)",   text: "#fbbf24" },
  "slow-burn":          { bg: "rgba(245,158,11,0.18)",   text: "#fbbf24" },
  "fae romance":        { bg: "rgba(124,58,237,0.22)",   text: "#c4b5fd" },
  "fae":                { bg: "rgba(124,58,237,0.22)",   text: "#c4b5fd" },
  "forced proximity":   { bg: "rgba(167,139,250,0.18)",  text: "#a78bfa" },
  "second chance":      { bg: "rgba(52,211,153,0.18)",   text: "#6ee7b7" },
  "blood oath":         { bg: "rgba(239,68,68,0.18)",    text: "#fca5a5" },
  "chosen one":         { bg: "rgba(245,158,11,0.14)",   text: "#fde68a" },
  "crown drama":        { bg: "rgba(167,139,250,0.14)",  text: "#ddd6fe" },
  "political intrigue": { bg: "rgba(99,102,241,0.18)",   text: "#a5b4fc" },
};

const DEFAULT = { bg: "rgba(167,139,250,0.12)", text: "#c4b5fd" };

export default function TropesBadge({ trope }: { trope: string }) {
  const colors = TROPE_COLORS[trope.toLowerCase()] ?? DEFAULT;
  return (
    <span
      className="inline-block text-xs font-semibold px-3 py-1 rounded-full capitalize"
      style={{ background: colors.bg, color: colors.text, border: `1px solid ${colors.text}30` }}
    >
      {trope}
    </span>
  );
}
