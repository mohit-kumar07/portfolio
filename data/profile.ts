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
    "Runs Arch Linux with a hand-configured Hyprland window manager day to day — genuinely uses the tools this site's design language borrows from, rather than referencing them for aesthetic effect.",
  ],
  location: "Alwar, Rajasthan, India",
};
