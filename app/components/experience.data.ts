export type TimelineItem = {
  role: string;
  meta: string;
  description: string;
  badge?: string;
  verifyHref?: string;
};

export const experience: TimelineItem[] = [
  {
    role: "Software Engineer",
    meta: "Company name · 2023 – Present",
    description:
      "Building and operating multi-tenant backend services — tenant isolation at the database, real-time updates, and the AWS infrastructure behind them.",
  },
  {
    role: "Backend Developer",
    meta: "Company name · 2021 – 2023",
    description:
      "Designed Python APIs and data models with an emphasis on tested, well-documented services.",
  },
];

export const jobSimulations: TimelineItem[] = [
  {
    role: "Company — Program name",
    meta: "Virtual experience · 2025",
    badge: "Forage",
    description:
      "One line on what the simulation involved — lead with the outcome. Replace with a real Forage program relevant to backend or cloud.",
    verifyHref: "#",
  },
];