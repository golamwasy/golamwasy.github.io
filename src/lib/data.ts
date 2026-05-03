import { get } from '@vercel/edge-config';

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

export interface PortfolioData {
  profile: {
    name: string;
    role: string;
    shortRole: string;
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
  experiences: Experience[];
  education: Education[];
}

export async function getPortfolioData(): Promise<PortfolioData> {
  try {
    const data = await get<PortfolioData>('portfolio');
    if (data) return data;
  } catch (error) {
    console.error('Edge Config fetch failed:', error);
  }
  
  // Return empty structure if fetch fails
  return {
    profile: {
      name: "", role: "", shortRole: "", location: "", status: "",
      email: "", github: "", linkedin: "", modules: [],
      bio: { whoami: "", mission: "" },
      stats: []
    },
    experiences: [],
    education: []
  };
}
