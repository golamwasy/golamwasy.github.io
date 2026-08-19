import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { getPortfolioData } from "@/lib/data";

export const revalidate = 60;

export async function generateMetadata() {
  const data = await getPortfolioData();
  const { profile } = data;
  
  return {
    title: `${profile.name} | ${profile.role}`,
    description: `Portfolio of ${profile.name}, a ${profile.role} specializing in ${profile.modules.join(", ")}.`,
    icons: {
      icon: '/bot-icon.svg',
    },
  };
}

import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className="selection:bg-blue-500/30">
        <ThemeProvider>
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
