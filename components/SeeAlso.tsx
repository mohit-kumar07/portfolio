import { contact } from "@/data/contact";

export default function SeeAlso() {
  return (
    <section id="see-also" className="scroll-mt-20">
      <h2 className="text-sm font-bold tracking-[0.05em] uppercase text-text-primary mb-4">
        SEE ALSO
      </h2>

      <div className="pl-6 md:pl-8 text-sm font-mono text-text-secondary flex items-center">
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline underline-offset-4 decoration-1 decoration-border hover:decoration-accent transition-colors"
        >
          github(1)
        </a>
      </div>
    </section>
  );
}
