import { experience } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-20">
      <h2 className="text-sm font-bold tracking-[0.05em] uppercase text-text-primary mb-4">
        EXPERIENCE
      </h2>

      <div className="space-y-10">
        {experience.map((entry, idx) => (
          <div key={idx} className="space-y-4">
            <div className="text-xs text-text-secondary font-mono tracking-wider">
              {entry.period}
            </div>

            <div className="space-y-0.5">
              <h3 className="text-base font-semibold text-text-primary">
                {entry.role}
              </h3>
              <div className="text-sm text-text-secondary">
                {entry.org}
              </div>
            </div>

            <ul className="pl-6 md:pl-8 space-y-2 max-w-[75ch] text-text-primary text-base list-disc marker:text-text-secondary">
              {entry.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="leading-[1.7]">
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="pl-6 md:pl-8 pt-3 space-y-1 text-xs font-mono">
              <div className="text-text-secondary uppercase tracking-wider font-bold">
                STACK
              </div>
              <div className="text-text-primary">
                {entry.stack.join(" · ")}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
