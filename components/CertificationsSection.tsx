import { certifications } from "@/data/certifications";

export default function CertificationsSection() {
  const validCertifications = certifications.filter(
    (c) => c.year && !c.year.toUpperCase().includes("PLACEHOLDER")
  );

  if (validCertifications.length === 0) {
    return null;
  }

  return (
    <section id="certifications" className="scroll-mt-20">
      <h2 className="text-sm font-bold tracking-[0.05em] uppercase text-text-primary mb-4">
        CERTIFICATIONS
      </h2>

      <div className="pl-6 md:pl-8 space-y-4">
        {validCertifications.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <h3 className="text-base font-semibold text-text-primary">
              {item.name}
            </h3>
            <div className="text-sm text-text-secondary">
              {item.org} <span className="text-border">·</span> {item.year}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
