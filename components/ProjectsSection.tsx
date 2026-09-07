import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-20">
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="text-sm font-bold tracking-[0.05em] uppercase text-text-primary">
          # PROJECTS
        </h2>
        <span className="text-xs text-text-secondary font-mono">
          featured_work.ts
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, idx) => {
          const indexNumber = String(idx + 1).padStart(2, "0");
          const hasValidSource =
            project.source &&
            !project.source.toUpperCase().includes("PLACEHOLDER");
          const hasValidDemo =
            project.demo && !project.demo.toUpperCase().includes("PLACEHOLDER");

          return (
            <article
              key={project.slug}
              className="border border-border bg-bg-raised/20 font-mono transition-colors hover:border-text-secondary/60 flex flex-col justify-between"
            >
              <div>
                {/* Card Top Tech Bar (Elias signature) */}
                <div className="border-b border-border px-4 py-2 text-xs text-text-secondary bg-bg-raised/40 flex flex-wrap items-center gap-2">
                  <span className="text-accent font-semibold">{indexNumber}.</span>
                  <span>{project.stack.join(" · ")}</span>
                </div>

                {/* Card Body */}
                <div className="p-5 md:p-6 space-y-3">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-text-primary uppercase tracking-wide">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="hover:text-accent transition-colors"
                      >
                        {project.name}
                      </Link>
                    </h3>
                    <p className="text-xs text-accent font-medium">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-text-primary/90 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 md:px-6 md:pb-6">
                {/* Card Action Buttons (Elias CLI syntax) */}
                <div className="pt-2 flex flex-wrap items-center gap-3 text-xs border-t border-border/40">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="px-3 py-1 border border-accent/60 text-accent hover:bg-accent hover:text-bg font-semibold transition-colors"
                  >
                    [ spec &gt;= ]
                  </Link>

                  {hasValidDemo && (
                    <a
                      href={project.demo!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 border border-border text-text-primary hover:border-text-primary transition-colors"
                    >
                      [ live &lt;~&gt; ]
                    </a>
                  )}

                  {hasValidSource && (
                    <a
                      href={project.source!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 border border-border text-text-secondary hover:text-text-primary hover:border-text-primary transition-colors"
                    >
                      [ source &lt;&gt; ]
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
