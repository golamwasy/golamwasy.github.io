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

export const PROFILE = {
  name: "Golam Wasy",
  role: "Full Stack Engineer",
  shortRole: "Full_Stack_Engineer",
  location: "Helsinki, Finland",
  status: "ACTIVE",
  email: "golamwasy@gmail.com",
  github: "@golamwasy",
  linkedin: "@golamwasy",
  modules: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Java', 'Spring'],
  bio: {
    whoami: "Software Engineer with a mix of deep-dive research and hands-on building. From analyzing telecom data at the University of Helsinki to architecting enterprise-grade APIs, I focus on building robust features and modernizing high-availability systems with a focus on customer needs.",
    mission: "Translating complex business requirements into robust technical solutions. Experienced in AWS, Docker, Kubernetes, and full-stack development using Spring Boot and React/Angular."
  },
  stats: [
    { label: "EXPERIENCE", value: "4+", unit: "YRS" },
    { label: "PROJECTS", value: "15+", unit: "PRJ" },
    { label: "HACKATHONS", value: "1", unit: "WIN" }
  ]
};

export const EXPERIENCES: Experience[] = [
  {
    company: 'Ritchie Bros.',
    role: 'Associate Software Engineer',
    period: '2025-06 - Present',
    hash: 'rb_0625',
    branch: 'payments',
    desc: 'Architecting backend systems and features for a digital payments platform. Migrating legacy internal tools to React, handling multi-payment workflows, and resolving security vulnerabilities.',
    tech: ['Java', 'Spring Boot', 'React', 'Snyk', 'CircleCI', 'LaunchDarkly']
  },
  {
    company: 'University of Helsinki',
    role: 'Research Assistant (Thesis)',
    period: '2025-01 - 2025-04',
    hash: 'uh_0125',
    branch: 'thesis',
    desc: 'Focused on adaptive data normalization for telecommunications and IoT datasets to improve anomaly detection performance.',
    tech: ['Python', 'IoT', 'Anomaly Detection', 'Data Modeling']
  },
  {
    company: 'University of Helsinki & Nokia Bell Labs',
    role: 'Research Assistant (Intern)',
    period: '2024-05 - 2024-08',
    hash: 'nokia_0524',
    branch: 'intern',
    desc: 'Collaborated on data efficiency techniques for mobile networks research, evaluating normalization methods for 6G research.',
    tech: ['Data Efficiency', 'Mobile Networks', 'Research']
  },
  {
    company: 'Wavelet Solutions Sdn. Bhd.',
    role: 'Software Developer (Freelance)',
    period: '2022-03 - 2023-02',
    hash: 'wav_0322',
    branch: 'freelance',
    desc: 'Developed mobile apps and web consoles using Ionic/Angular. Built RESTful APIs and managed PostgreSQL databases on AWS.',
    tech: ['Angular', 'Ionic', 'Java', 'Spring Boot', 'AWS']
  },
  {
    company: 'BigLedger Sdn. Bhd.',
    role: 'Software Developer (Intern)',
    period: '2021-08 - 2022-02',
    hash: 'big_0821',
    branch: 'backend',
    desc: 'Specialized in Java Spring Boot for backend development and database migration scripts. Deployed applications on AWS.',
    tech: ['Java', 'Spring Boot', 'Database Migration', 'AWS', 'Git']
  }
];

export const EDUCATION: Education[] = [
  {
    title: "M.Sc. Computer Science",
    school: "University of Helsinki",
    period: "2023 - 2025",
    desc: "Focusing on adaptive data normalization techniques to improve anomaly detection performance on telecommunication and IoT datasets.",
    tech: ["Data Normalization", "Anomaly Detection"]
  },
  {
    title: "B.Sc. Software Engineering",
    school: "Universiti Teknologi Malaysia",
    period: "2018 - 2022",
    desc: "Bachelor of Computer Science (Software Engineering). Graduated with Dean's List honors. Thesis: Data Analytics for COVID-19 Prediction.",
    tech: ["Software Engineering", "Data Analytics"]
  }
];
