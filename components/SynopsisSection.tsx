import { profile } from "@/data/profile";

export default function SynopsisSection() {
  const synopsisLine = profile.synopsis.map((s) => s.toLowerCase()).join(" · ");

  return (
    <section id="synopsis" className="scroll-mt-20">
      <h2 className="text-sm font-bold tracking-[0.05em] uppercase text-text-primary mb-2">
        SYNOPSIS
      </h2>
      <div className="pl-6 md:pl-8 text-base text-text-primary">
        <code>{synopsisLine}</code>
      </div>
    </section>
  );
}
