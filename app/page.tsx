import ManHeader from "@/components/ManHeader";
import TableOfContents from "@/components/TableOfContents";
import NameSection from "@/components/NameSection";
import StatusBadge from "@/components/StatusBadge";
import SynopsisSection from "@/components/SynopsisSection";
import DescriptionSection from "@/components/DescriptionSection";
import QuoteSection from "@/components/QuoteSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import CertificationsSection from "@/components/CertificationsSection";
import ResumeSection from "@/components/ResumeSection";
import ContactSection from "@/components/ContactSection";
import SeeAlso from "@/components/SeeAlso";
import ManFooter from "@/components/ManFooter";
import HangingSocials from "@/components/HangingSocials";
import { DotGrid, WireframeBox } from "@/components/DecorativeAccents";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-mono relative overflow-x-hidden" id="top">
      {/* Hanging Social Line on Large Displays */}
      <HangingSocials />

      <ManHeader manualTitle="MOHIT(1)" manualSection="USER COMMANDS" />

      <div className="max-w-page w-full mx-auto px-6 md:px-12 lg:px-16 py-8 md:py-12 flex-1 relative">
        {/* Subtle Decorative Geometric Accents */}
        <div className="hidden xl:block absolute -right-6 top-16 pointer-events-none">
          <DotGrid rows={5} cols={5} />
        </div>
        <div className="hidden xl:block absolute -left-8 top-1/3 pointer-events-none">
          <WireframeBox size="w-16 h-16" />
        </div>
        <div className="hidden xl:block absolute -right-8 bottom-1/4 pointer-events-none">
          <DotGrid rows={4} cols={4} />
        </div>

        <div className="flex gap-12 items-start">
          {/* Main Man-Page Content */}
          <main id="main-content" className="flex-1 min-w-0">
            {/* NAME */}
            <NameSection />

            {/* Status Strip (Elias addition) */}
            <div className="pl-6 md:pl-8 mt-4">
              <StatusBadge />
            </div>

            <hr className="border-border my-10" />

            {/* SYNOPSIS */}
            <SynopsisSection />

            <hr className="border-border my-10" />

            {/* DESCRIPTION */}
            <DescriptionSection />

            {/* Quote Block (Elias addition) */}
            <div className="pl-6 md:pl-8">
              <QuoteSection />
            </div>

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

            {/* CERTIFICATIONS (conditionally rendered) */}
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
