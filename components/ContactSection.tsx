import { contact } from "@/data/contact";

export default function ContactSection() {
  const hasValidLinkedin =
    contact.linkedin && !contact.linkedin.toUpperCase().includes("PLACEHOLDER");
  const hasValidEmail =
    contact.email && !contact.email.toUpperCase().includes("PLACEHOLDER");

  return (
    <section id="contact" className="scroll-mt-20">
      <h2 className="text-sm font-bold tracking-[0.05em] uppercase text-text-primary mb-4">
        CONTACT
      </h2>

      <div className="pl-6 md:pl-8 space-y-2 text-sm font-mono">
        {/* EMAIL */}
        <div className="flex items-baseline">
          <span className="w-28 shrink-0 text-text-secondary text-xs uppercase font-bold tracking-wider">
            EMAIL
          </span>
          {hasValidEmail ? (
            <a
              href={`mailto:${contact.email}`}
              className="text-text-primary hover:text-accent underline underline-offset-4 decoration-1 decoration-border hover:decoration-accent transition-colors"
            >
              {contact.email}
            </a>
          ) : (
            <span className="text-text-secondary italic">
              [contact email pending]
            </span>
          )}
        </div>

        {/* GITHUB */}
        <div className="flex items-baseline">
          <span className="w-28 shrink-0 text-text-secondary text-xs uppercase font-bold tracking-wider">
            GITHUB
          </span>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-primary hover:text-accent underline underline-offset-4 decoration-1 decoration-border hover:decoration-accent transition-colors"
          >
            {contact.github.replace("https://", "")}
          </a>
        </div>

        {/* LINKEDIN (only rendered if real URL exists) */}
        {hasValidLinkedin && (
          <div className="flex items-baseline">
            <span className="w-28 shrink-0 text-text-secondary text-xs uppercase font-bold tracking-wider">
              LINKEDIN
            </span>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-primary hover:text-accent underline underline-offset-4 decoration-1 decoration-border hover:decoration-accent transition-colors"
            >
              {contact.linkedin.replace("https://", "")}
            </a>
          </div>
        )}

        {/* LOCATION */}
        <div className="flex items-baseline">
          <span className="w-28 shrink-0 text-text-secondary text-xs uppercase font-bold tracking-wider">
            LOCATION
          </span>
          <span className="text-text-primary">{contact.location}</span>
        </div>
      </div>
    </section>
  );
}
