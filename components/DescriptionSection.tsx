import { profile } from "@/data/profile";

export default function DescriptionSection() {
  return (
    <section id="description" className="scroll-mt-20">
      <h2 className="text-sm font-bold tracking-[0.05em] uppercase text-text-primary mb-3">
        DESCRIPTION
      </h2>
      <div className="pl-6 md:pl-8 space-y-4 max-w-[75ch] text-text-primary text-base leading-[1.7]">
        {profile.description.map((paragraph, idx) => (
          <p key={idx} className="text-left">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
