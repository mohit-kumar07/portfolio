export interface Skills {
  languages: string[];
  backend: string[];
  database: string[];
  devops: string[];
  frontend: string[];
  platform: string[];
}

export const skills: Skills = {
  languages: ["Java", "C/C++", "SQL"],
  backend: ["Spring Boot", "REST APIs", "JWT", "JPA/Hibernate"],
  database: ["MySQL", "PostgreSQL", "MongoDB"],
  devops: ["Docker", "Kubernetes", "Jenkins", "Git/GitHub", "Maven", "Linux"],
  frontend: ["HTML", "CSS", "JavaScript"],
  platform: ["AWS", "ServiceNow", "Supabase", "Vercel"],
};
