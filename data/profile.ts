export interface Profile {
  name: string;
  title: string;
  synopsis: string[];
  description: string[];
  location: string;
}

export const profile: Profile = {
  name: "Mohit Kumar",
  title: "Software Developer",
  synopsis: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Linux"],
  description: [
    "Software developer focused on backend development — Java, Spring Boot, and relational databases — with working knowledge of containerized deployment and Linux systems administration.",
    "Comfortable across the stack: builds REST APIs and backend services, and has shipped a production Next.js/Supabase migration for a live e-commerce platform.",
    "Builds and deploys natively on Linux, with practical experience managing systemd services, shell scripting, container networking, and diagnosing host performance metrics from the command line.",
  ],
  location: "Alwar, Rajasthan, India",
};
