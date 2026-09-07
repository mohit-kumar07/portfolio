import { education } from "@/data/education";

export default function EducationSection() {
  return (
    <section id="education" className="scroll-mt-20">
      <h2 className="text-sm font-bold tracking-[0.05em] uppercase text-text-primary mb-4">
        EDUCATION
      </h2>

      <div className="pl-6 md:pl-8 space-y-6">
        {education.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <h3 className="text-base font-semibold text-text-primary">
              {item.degree}
            </h3>
            <div className="text-sm text-text-secondary">
              {item.org} <span className="text-border">·</span> {item.period}
            </div>
            <div className="text-sm text-text-primary">
              {item.detail}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
