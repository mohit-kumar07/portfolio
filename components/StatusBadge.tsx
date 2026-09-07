export default function StatusBadge() {
  return (
    <div className="inline-flex items-center gap-2.5 px-3.5 py-2 border border-border bg-bg-raised text-xs font-mono select-none">
      <span
        className="w-2.5 h-2.5 bg-accent shrink-0"
        aria-hidden="true"
      />
      <span className="text-text-secondary">
        Status:{" "}
        <span className="text-text-primary font-medium">
          Available for Software Developer &amp; Backend roles
        </span>
      </span>
    </div>
  );
}
