import Link from "next/link";
import { Project } from "@/data/projects";

interface ProjectEntryProps {
  project: Project;
}

export default function ProjectEntry({ project }: ProjectEntryProps) {
  const pageTitle = `${project.slug.toUpperCase().replace(/-/g, "_")}(1)`;

  return (
    <article className="space-y-8 font-mono">
      {/* Top Bar for Project Detail */}
      <div className="border-b border-border pb-3 flex justify-between items-center text-xs text-text-secondary uppercase tracking-wider">
        <span>{pageTitle}</span>
        <span className="hidden sm:inline">PROJECT SPECIFICATION</span>
        <span>{pageTitle}</span>
      </div>

      {/* Back Link */}
      <div>
        <Link
          href="/#projects"
          className="text-xs text-text-secondary hover:text-accent flex items-center gap-1 transition-colors"
        >
          &lt; return to mohit(1)
        </Link>
      </div>

      {/* NAME */}
      <section className="space-y-2">
        <h2 className="text-sm font-bold tracking-[0.05em] uppercase text-text-primary">
          NAME
        </h2>
        <div className="pl-6 md:pl-8 text-base text-text-primary">
          {project.name.toLowerCase()} — {project.tagline}
        </div>
      </section>

      {/* SYNOPSIS */}
      <section className="space-y-2">
        <h2 className="text-sm font-bold tracking-[0.05em] uppercase text-text-primary">
          SYNOPSIS
        </h2>
        <div className="pl-6 md:pl-8 text-base text-text-primary">
          <code>{project.stack.map((s) => s.toLowerCase()).join(" · ")}</code>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="space-y-2">
        <h2 className="text-sm font-bold tracking-[0.05em] uppercase text-text-primary">
          DESCRIPTION
        </h2>
        <div className="pl-6 md:pl-8 text-base text-text-primary leading-[1.7] max-w-[75ch]">
          {project.description}
        </div>
      </section>

      {/* FEATURES */}
      {project.features && project.features.length > 0 && (
        <section className="space-y-2">
          <h2 className="text-sm font-bold tracking-[0.05em] uppercase text-text-primary">
            FEATURES
          </h2>
          <ul className="pl-6 md:pl-8 list-disc marker:text-text-secondary space-y-2 text-base text-text-primary max-w-[75ch]">
            {project.features.map((feature, idx) => (
              <li key={idx} className="leading-[1.7]">
                {feature}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* TECHNOLOGY */}
      <section className="space-y-2">
        <h2 className="text-sm font-bold tracking-[0.05em] uppercase text-text-primary">
          TECHNOLOGY
        </h2>
        <div className="pl-6 md:pl-8 text-sm text-text-primary">
          {project.stack.join(" · ")}
        </div>
      </section>

      {/* ARCHITECTURE (only if real content exists) */}
      {project.architecture && project.architecture.length > 0 && (
        <section className="space-y-2">
          <h2 className="text-sm font-bold tracking-[0.05em] uppercase text-text-primary">
            ARCHITECTURE
          </h2>
          <div className="pl-6 md:pl-8 space-y-2 text-base text-text-primary max-w-[75ch]">
            {project.architecture.map((item, idx) => (
              <p key={idx}>{item}</p>
            ))}
          </div>
        </section>
      )}

      {/* SOURCE */}
      {project.source && (
        <section className="space-y-2">
          <h2 className="text-sm font-bold tracking-[0.05em] uppercase text-text-primary">
            SOURCE
          </h2>
          <div className="pl-6 md:pl-8 text-sm">
            <a
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-4 decoration-1 hover:text-text-primary transition-colors"
            >
              {project.source}
            </a>
          </div>
        </section>
      )}

      {/* DEMO */}
      {project.demo && (
        <section className="space-y-2">
          <h2 className="text-sm font-bold tracking-[0.05em] uppercase text-text-primary">
            DEMO
          </h2>
          <div className="pl-6 md:pl-8 text-sm">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-4 decoration-1 hover:text-text-primary transition-colors"
            >
              {project.demo}
            </a>
          </div>
        </section>
      )}

      {/* AUTHOR */}
      <section className="space-y-2">
        <h2 className="text-sm font-bold tracking-[0.05em] uppercase text-text-primary">
          AUTHOR
        </h2>
        <div className="pl-6 md:pl-8 text-sm text-text-primary">
          Mohit Kumar
        </div>
      </section>

      {/* SEE ALSO */}
      <section className="space-y-2 pt-4 border-t border-border">
        <h2 className="text-sm font-bold tracking-[0.05em] uppercase text-text-primary">
          SEE ALSO
        </h2>
        <div className="pl-6 md:pl-8 text-sm text-text-secondary">
          <Link
            href="/#projects"
            className="text-accent underline underline-offset-4 decoration-1 hover:text-text-primary transition-colors"
          >
            mohit(1)
          </Link>{" "}
          ·{" "}
          <a
            href="https://github.com/cser-mohit-kumar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-4 decoration-1 hover:text-text-primary transition-colors"
          >
            github(1)
          </a>
        </div>
      </section>
    </article>
  );
}
