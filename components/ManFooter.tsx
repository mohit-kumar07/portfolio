interface ManFooterProps {
  manualTitle?: string;
}

export default function ManFooter({ manualTitle = "MOHIT(1)" }: ManFooterProps) {
  const currentDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(new Date());

  return (
    <footer className="mt-20 pt-6 border-t border-border font-mono text-xs text-text-secondary">
      <div className="flex justify-between items-center tracking-wider">
        <span className="font-semibold text-text-primary">{manualTitle}</span>
        <span className="text-center">{currentDate}</span>
        <span className="font-semibold text-text-primary">{manualTitle}</span>
      </div>
    </footer>
  );
}
