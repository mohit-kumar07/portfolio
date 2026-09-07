interface ManFooterProps {
  manualTitle?: string;
}

export default function ManFooter({ manualTitle }: ManFooterProps = {}) {
  const currentDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(new Date());

  return (
    <footer className="mt-20 pt-6 border-t border-border font-mono text-xs text-text-secondary">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 tracking-wider">
        <span className="font-medium text-text-primary">
          &copy; 2026 Mohit Kumar
        </span>
        <span className="text-center text-text-secondary">
          rev. 9eb220e &middot; {currentDate}
        </span>
        <a
          href="#top"
          className="text-text-secondary hover:text-accent transition-colors font-medium"
        >
          [ &uarr; return to top ]
        </a>
      </div>
    </footer>
  );
}
