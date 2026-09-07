import { skills } from "@/data/skills";

export default function SkillsSection() {
  const categories = [
    { title: "LANGUAGES", items: skills.languages },
    { title: "BACKEND", items: skills.backend },
    { title: "DATABASES", items: skills.database },
    { title: "DEVOPS & SYSTEMS", items: skills.devops },
    { title: "FRONTEND", items: skills.frontend },
    { title: "PLATFORMS & CLOUD", items: skills.platform },
  ];

  return (
    <section id="skills" className="scroll-mt-20">
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="text-sm font-bold tracking-[0.05em] uppercase text-text-primary">
          # SKILLS
        </h2>
        <span className="text-xs text-text-secondary font-mono">
          stack_inventory.ts
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="border border-border bg-bg-raised/20 transition-colors hover:border-text-secondary/60 flex flex-col"
          >
            {/* Box Header (Elias signature) */}
            <div className="border-b border-border px-3.5 py-2 font-bold text-xs text-text-secondary uppercase tracking-wider bg-bg-raised/40">
              {cat.title}
            </div>

            {/* Box Tags List */}
            <ul className="p-3.5 flex flex-wrap gap-2 text-xs font-mono text-text-primary flex-1">
              {cat.items.map((skill) => (
                <li
                  key={skill}
                  className="px-2 py-0.5 border border-border/80 bg-bg/50 hover:border-accent hover:text-accent transition-colors select-none"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
