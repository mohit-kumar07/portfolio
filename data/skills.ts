export interface Skills {
  languages: string[];
  backend: string[];
  database: string[];
  devops: string[];
  frontend: string[];
  platform: string[];
}

export const skills: Skills = {
  languages: ["Java", "JavaScript", "SQL"],
  backend: ["Spring Boot", "REST APIs", "JWT", "JPA/Hibernate"],
  database: ["MySQL", "PostgreSQL", "MongoDB"],
  devops: ["Docker", "Kubernetes", "Jenkins", "Git/GitHub", "SonarQube", "Maven", "Linux"],
  frontend: ["Next.js"],
  platform: ["Supabase", "Vercel"],
};
