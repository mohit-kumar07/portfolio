export interface ExperienceItem {
  period: string;
  role: string;
  org: string;
  bullets: string[];
  stack: string[];
}

export const experience: ExperienceItem[] = [
  {
    period: "Jan 2026 — Jun 2026",
    role: "Technical Trainee",
    org: "Capgemini (Sogeti)",
    bullets: [
      "Completed a 6-month structured technical training program covering backend development and DevOps tooling.",
      "Built REST APIs with Java and Spring Boot, including JWT-based authentication.",
      "Worked with MySQL via JPA/Hibernate for persistence.",
      "Used Jenkins for CI, and Docker/Kubernetes for containerized deployment.",
    ],
    stack: ["Java", "Spring Boot", "MySQL", "JPA/Hibernate", "Jenkins", "Docker", "Kubernetes"],
  },
];
