import ManHeader from "@/components/ManHeader";
import TableOfContents from "@/components/TableOfContents";
import NameSection from "@/components/NameSection";
import SynopsisSection from "@/components/SynopsisSection";
import DescriptionSection from "@/components/DescriptionSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import CertificationsSection from "@/components/CertificationsSection";
import ResumeSection from "@/components/ResumeSection";
import ContactSection from "@/components/ContactSection";
import SeeAlso from "@/components/SeeAlso";
import ManFooter from "@/components/ManFooter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-mono" id="top">
      <ManHeader manualTitle="MOHIT(1)" manualSection="USER COMMANDS" />

      <div className="max-w-page w-full mx-auto px-6 md:px-12 lg:px-16 py-8 md:py-12 flex-1">
        <div className="flex gap-12 items-start">
          {/* Main Man-Page Content */}
          <main id="main-content" className="flex-1 min-w-0">
            {/* NAME */}
            <NameSection />

            <hr className="border-border my-10" />

            {/* SYNOPSIS */}
            <SynopsisSection />

            <hr className="border-border my-10" />

            {/* DESCRIPTION */}
            <DescriptionSection />

            <hr className="border-border my-10" />

            {/* EXPERIENCE */}
            <ExperienceSection />

            <hr className="border-border my-10" />

            {/* PROJECTS */}
            <ProjectsSection />

            <hr className="border-border my-10" />

            {/* SKILLS */}
            <SkillsSection />

            <hr className="border-border my-10" />

            {/* EDUCATION */}
            <EducationSection />

            {/* CERTIFICATIONS (renders only if real year is supplied) */}
            <CertificationsSection />

            <hr className="border-border my-10" />

            {/* RESUME */}
            <ResumeSection />

            <hr className="border-border my-10" />

            {/* CONTACT */}
            <ContactSection />

            <hr className="border-border my-10" />

            {/* SEE ALSO */}
            <SeeAlso />

            {/* FOOTER */}
            <ManFooter manualTitle="MOHIT(1)" />
          </main>

          {/* Sticky Table of Contents on Large Viewports */}
          <TableOfContents />
        </div>
      </div>
    </div>
  );
}
