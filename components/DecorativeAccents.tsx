interface DotGridProps {
  rows?: number;
  cols?: number;
  className?: string;
}

export function DotGrid({ rows = 4, cols = 4, className = "" }: DotGridProps) {
  return (
    <div
      className={`inline-grid gap-2 select-none opacity-40 hover:opacity-70 transition-opacity ${className}`}
      style={{
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
      }}
      aria-hidden="true"
    >
      {Array.from({ length: rows * cols }).map((_, i) => (
        <span
          key={i}
          className="w-1 h-1 rounded-none bg-text-secondary inline-block"
        />
      ))}
    </div>
  );
}

interface WireframeBoxProps {
  size?: string;
  className?: string;
}

export function WireframeBox({ size = "w-16 h-16", className = "" }: WireframeBoxProps) {
  return (
    <div
      className={`${size} border border-border opacity-50 select-none pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}
