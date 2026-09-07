import Link from "next/link";
import ManHeader from "@/components/ManHeader";
import ManFooter from "@/components/ManFooter";

export const metadata = {
  title: "Resume | Mohit Kumar",
  description: "Mohit Kumar's Resume — Software Developer",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen flex flex-col font-mono" id="top">
      <ManHeader manualTitle="RESUME(1)" manualSection="USER COMMANDS" />

      <main
        id="main-content"
        className="max-w-page w-full mx-auto px-6 md:px-12 lg:px-16 py-8 md:py-12 flex-1 space-y-6"
      >
        <div className="border-b border-border pb-3 flex justify-between items-center text-xs text-text-secondary uppercase tracking-wider">
          <span>RESUME(1)</span>
          <span className="hidden sm:inline">DOCUMENT VIEWER</span>
          <span>RESUME(1)</span>
        </div>

        <div>
          <Link
            href="/#resume"
            className="text-xs text-text-secondary hover:text-accent flex items-center gap-1 transition-colors"
          >
            &lt; return to mohit(1)
          </Link>
        </div>

        <section className="space-y-4">
          <h1 className="text-sm font-bold tracking-[0.05em] uppercase text-text-primary">
            NAME
          </h1>
          <div className="pl-6 md:pl-8 text-base text-text-primary">
            mohit_kumar_resume.pdf
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-sm font-bold tracking-[0.05em] uppercase text-text-primary">
            SYNOPSIS
          </h2>
          <div className="pl-6 md:pl-8 text-base text-text-primary">
            <code>open /resume.pdf</code>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-sm font-bold tracking-[0.05em] uppercase text-text-primary">
            DESCRIPTION
          </h2>
          <div className="pl-6 md:pl-8 space-y-4 text-base text-text-primary max-w-[75ch]">
            <p>
              Direct document link to the latest curriculum vitae for Mohit Kumar, detailing background in Java, Spring Boot, PostgreSQL, Docker, and Linux systems.
            </p>
            <div className="pt-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-accent underline underline-offset-4 decoration-1 hover:text-text-primary transition-colors"
              >
                $ open /resume.pdf &gt;&gt; [ click to view or download PDF ]
              </a>
            </div>
          </div>
        </section>

        <ManFooter manualTitle="RESUME(1)" />
      </main>
    </div>
  );
}
