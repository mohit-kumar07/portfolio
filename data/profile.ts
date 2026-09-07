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
    "Comfortable across the stack: builds REST APIs and backend services, having developed a live e-commerce platform on AWS/WordPress and contributed to its full-stack Next.js/Supabase migration.",
    "Builds and deploys natively on Linux, with practical experience managing systemd services, shell scripting, container networking, and diagnosing host performance metrics from the command line.",
  ],
  location: "Alwar, Rajasthan, India",
};
