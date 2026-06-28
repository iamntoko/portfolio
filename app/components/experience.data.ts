export type TimelineItem = {
  role: string;
  meta: string;
  description: string;
  badge?: string;
  certUrl?: string;
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
    role: "Software Engineering Virtual Experience",
    meta: "J.P. Morgan · Forage · March 2023",
    badge: "Forage",
    description:
      "Built a real-time data-visualization feed for traders using J.P. Morgan's open-source Perspective library — streaming a live updating graph from a data feed. Debugged and repaired the application codebase to render correctly.",
    certUrl: "https://www.theforage.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_c962wZKni3NYqarpS_1678218787609_completion_certificate.pdf",
  },
];