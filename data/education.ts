export interface EducationItem {
  degree: string;
  org: string;
  period: string;
  detail: string;
}

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Technology, Computer Science",
    org: "JECRC University, Jaipur",
    period: "2022 — 2026",
    detail: "CGPA 8.5 (final semester completed July 2026)",
  },
  {
    degree: "Senior Secondary (Class 12), Science — Physics, Chemistry, Mathematics",
    org: "RBSE",
    period: "2021",
    detail: "96.80% — First Division",
  },
];
