import Link from "next/link";
import { contact } from "@/data/contact";

export default function SeeAlso() {
  const hasValidLinkedin =
    contact.linkedin && !contact.linkedin.toUpperCase().includes("PLACEHOLDER");

  return (
    <section id="see-also" className="scroll-mt-20">
      <h2 className="text-sm font-bold tracking-[0.05em] uppercase text-text-primary mb-4">
        SEE ALSO
      </h2>

      <div className="pl-6 md:pl-8 text-sm font-mono text-text-secondary flex flex-wrap items-center gap-x-2 gap-y-1">
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline underline-offset-4 decoration-1 decoration-border hover:decoration-accent transition-colors"
        >
          github(1)
        </a>
        <span className="text-border">·</span>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline underline-offset-4 decoration-1 decoration-border hover:decoration-accent transition-colors"
        >
          resume(1)
        </a>
        <span className="text-border">·</span>
        <Link
          href="#projects"
          className="text-accent underline underline-offset-4 decoration-1 decoration-border hover:decoration-accent transition-colors"
        >
          projects(1)
        </Link>
        {hasValidLinkedin && (
          <>
            <span className="text-border">·</span>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-4 decoration-1 decoration-border hover:decoration-accent transition-colors"
            >
              linkedin(1)
            </a>
          </>
        )}
      </div>
    </section>
  );
}
