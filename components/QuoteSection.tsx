export default function QuoteSection() {
  return (
    <div className="relative my-8 border border-border bg-bg-raised/40 p-6 md:p-8 font-mono select-none">
      <blockquote className="text-base md:text-lg text-text-primary italic tracking-tight leading-relaxed max-w-[65ch]">
        &ldquo;Simplicity is prerequisite for reliability.&rdquo;
      </blockquote>
      <div className="mt-3 text-xs uppercase tracking-wider text-text-secondary">
        — Edsger W. Dijkstra
      </div>
    </div>
  );
}
