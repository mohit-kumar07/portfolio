import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import CommandPalette from "@/components/CommandPalette";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohit Kumar — Software Developer",
  description:
    "Mohit Kumar's developer portfolio — Java, Spring Boot, backend development, PostgreSQL, Docker, and Linux.",
  openGraph: {
    title: "Mohit Kumar — Software Developer",
    description:
      "Mohit Kumar's developer portfolio — Java, Spring Boot, backend development, PostgreSQL, Docker, and Linux.",
    type: "website",
    url: "https://cser-mohit-kumar.github.io",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90' font-family='monospace' fill='%238FBF88'>[1]</text></svg>",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jetbrainsMono.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const stored = localStorage.getItem('theme');
                if (stored === 'light' || stored === 'dark') {
                  document.documentElement.dataset.theme = stored;
                } else {
                  document.documentElement.dataset.theme = 'dark';
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="bg-bg text-text-primary min-h-screen flex flex-col antialiased selection:bg-accent selection:text-bg">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-3 focus:py-1.5 focus:bg-bg-raised focus:text-accent focus:border focus:border-accent focus:rounded-[4px] font-mono text-xs"
        >
          $ skip to content
        </a>
        <div className="flex-1 flex flex-col">{children}</div>
        <CommandPalette />
      </body>
    </html>
  );
}
