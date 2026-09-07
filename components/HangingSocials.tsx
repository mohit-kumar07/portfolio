import { contact } from "@/data/contact";

export default function HangingSocials() {
  const hasValidLinkedin =
    contact.linkedin && !contact.linkedin.toUpperCase().includes("PLACEHOLDER");

  return (
    <aside
      aria-label="Social media quick links"
      className="hidden 2xl:flex fixed top-0 left-6 flex-col items-center z-30 font-mono text-xs select-none"
    >
      <div className="w-px h-28 bg-border" />
      <div className="flex flex-col items-center gap-4 py-4 text-text-secondary">
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent hover:-translate-y-0.5 transition-all text-xs font-bold"
          title="GitHub"
          aria-label="GitHub profile"
        >
          [GH]
        </a>
        <a
          href={`mailto:${contact.email}`}
          className="hover:text-accent hover:-translate-y-0.5 transition-all text-xs font-bold"
          title="Email"
          aria-label="Send email"
        >
          [EM]
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent hover:-translate-y-0.5 transition-all text-xs font-bold"
          title="Resume PDF"
          aria-label="Resume PDF"
        >
          [CV]
        </a>
        {hasValidLinkedin && (
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent hover:-translate-y-0.5 transition-all text-xs font-bold"
            title="LinkedIn"
            aria-label="LinkedIn profile"
          >
            [IN]
          </a>
        )}
      </div>
    </aside>
  );
}
