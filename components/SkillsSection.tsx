import { skills } from "@/data/skills";

export default function SkillsSection() {
  const categories = [
    { title: "LANGUAGES", items: skills.languages },
    { title: "BACKEND", items: skills.backend },
    { title: "DATABASE", items: skills.database },
    { title: "DEVOPS", items: skills.devops },
    { title: "FRONTEND", items: skills.frontend },
    { title: "PLATFORM", items: skills.platform },
  ];

  return (
    <section id="skills" className="scroll-mt-20">
      <h2 className="text-sm font-bold tracking-[0.05em] uppercase text-text-primary mb-4">
        SKILLS
      </h2>

      <div className="pl-6 md:pl-8 space-y-5">
        {categories.map((cat) => (
          <div key={cat.title} className="space-y-1">
            <div className="text-xs font-bold uppercase tracking-wider text-text-secondary">
              {cat.title}
            </div>
            <div className="text-sm text-text-primary font-mono">
              {cat.items.join(" · ")}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
