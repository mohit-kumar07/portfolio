import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-20">
      <h2 className="text-sm font-bold tracking-[0.05em] uppercase text-text-primary mb-4">
        PROJECTS
      </h2>

      <div className="pl-6 md:pl-8 space-y-6">
        {projects.map((project, idx) => {
          const indexNumber = String(idx + 1).padStart(2, "0");
          return (
            <div key={project.slug} className="space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="text-text-secondary font-mono text-sm">
                  {indexNumber}.
                </span>
                <Link
                  href={`/projects/${project.slug}`}
                  className="font-bold uppercase tracking-wider text-text-primary hover:text-accent hover:underline underline-offset-4 decoration-1 transition-colors"
                >
                  {project.name}
                </Link>
              </div>
              <div className="pl-6 text-xs text-text-secondary font-mono">
                {project.stack.join(" · ")}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
