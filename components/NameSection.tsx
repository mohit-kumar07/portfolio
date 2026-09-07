import { profile } from "@/data/profile";

export default function NameSection() {
  return (
    <section id="name" className="hero-fade scroll-mt-20">
      <h2 className="text-sm font-bold tracking-[0.05em] uppercase text-text-primary mb-2">
        NAME
      </h2>
      <div className="pl-6 md:pl-8 text-base md:text-xl">
        <h1 className="text-text-primary lowercase inline font-medium">
          {profile.name} — {profile.title}
        </h1>
        <span className="terminal-cursor" aria-hidden="true" />
      </div>
    </section>
  );
}
