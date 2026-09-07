import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ManHeader from "@/components/ManHeader";
import ManFooter from "@/components/ManFooter";
import ProjectEntry from "@/components/ProjectEntry";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };

  const title = `${project.name} — Project Specification`;
  return {
    title: `${title} | Mohit Kumar`,
    description: project.description,
    openGraph: {
      title,
      description: project.description,
      type: "article",
    },
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const manualTitle = `${project.slug.toUpperCase().replace(/-/g, "_")}(1)`;

  return (
    <div className="min-h-screen flex flex-col font-mono" id="top">
      <ManHeader manualTitle={manualTitle} manualSection="PROJECT SPECIFICATION" />

      <main
        id="main-content"
        className="max-w-page w-full mx-auto px-6 md:px-12 lg:px-16 py-8 md:py-12 flex-1"
      >
        <ProjectEntry project={project} />
        <ManFooter manualTitle={manualTitle} />
      </main>
    </div>
  );
}
