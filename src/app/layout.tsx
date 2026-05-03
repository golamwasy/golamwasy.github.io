import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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

export async function generateMetadata() {
  const data = await getPortfolioData();
  const { profile } = data;
  
  return {
    title: `${profile.name} | ${profile.role}`,
    description: `Portfolio of ${profile.name}, a ${profile.role} specializing in ${profile.modules.join(", ")}.`,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark antialiased scroll-smooth`}
    >
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className="bg-[#09090b] text-zinc-100 selection:bg-blue-500/30">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
