import { readFile } from 'fs/promises';
import path from 'path';
import { getRedisClient } from './redis';

const PORTFOLIO_KEY = 'portfolio';

async function readSeedFile(): Promise<PortfolioData | null> {
  try {
    const filePath = path.join(process.cwd(), 'data', 'portfolio.json');
    const raw = await readFile(filePath, 'utf8');
    return JSON.parse(raw) as PortfolioData;
  } catch (error) {
    console.error('Reading data/portfolio.json failed:', error);
    return null;
  }
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  hash: string;
  branch: string;
  desc: string;
  tech: string[];
}

export interface Education {
  title: string;
  school: string;
  period: string;
  desc: string;
  tech: string[];
}

export interface Skill {
  name: string;
  slug: string;
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  stars?: number;
  forks?: number;
  demoUrl?: string;
  repoUrl?: string;
  isPublic: boolean;
  updatedAt: string;
  language: string;
  isPinned: boolean;
}

export interface PortfolioData {
  profile: {
    name: string;
    role: string;
    shortRole: string;
    tagline: string;
    roleLine: string;
    location: string;
    status: string;
    email: string;
    github: string;
    linkedin: string;
    modules: string[];
    bio: {
      whoami: string;
      mission: string;
    };
    stats: Array<{ label: string; value: string; unit: string }>;
  };
  skills: Skill[];
  experiences: Experience[];
  education: Education[];
  projects: Project[];
}

export async function getPortfolioData(): Promise<PortfolioData> {
  try {
    const client = getRedisClient();
    if (client) {
      const raw = await client.get(PORTFOLIO_KEY);
      if (raw) return JSON.parse(raw) as PortfolioData;
    }
  } catch (error) {
    console.error('Redis fetch failed:', error);
  }

  const seed = await readSeedFile();
  if (seed) return seed;

  // Return empty structure if everything else fails
  return {
    profile: {
      name: "", role: "", shortRole: "", 
      tagline: "", roleLine: "",
      location: "", status: "",
      email: "", github: "", linkedin: "", modules: [],
      bio: { whoami: "", mission: "" },
      stats: []
    },
    skills: [],
    experiences: [],
    education: [],
    projects: []
  };
}
