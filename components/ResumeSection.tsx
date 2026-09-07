export default function ResumeSection() {
  return (
    <section id="resume" className="scroll-mt-20">
      <h2 className="text-sm font-bold tracking-[0.05em] uppercase text-text-primary mb-4">
        RESUME
      </h2>

      <div className="pl-6 md:pl-8">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-base text-text-primary hover:text-accent font-mono transition-colors group"
        >
          <span className="text-text-secondary group-hover:text-accent">$ </span>
          <span className="underline underline-offset-4 decoration-1 decoration-border group-hover:decoration-accent">
            open resume.pdf
          </span>
        </a>
      </div>
    </section>
  );
}
