// Projects component - Card layout for displaying projects

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
};

export const projects: Project[] = [
  {
    title: "Incident Pulse",
    description: 
    "A multi-tenant, real-time incident tracker — tenant isolation enforced at the database with Postgres Row-Level Security, live updates over websockets.",
    tags: ["TypeScript", "Fastify", "Postgres RLS", "Socket.io"],
    href: "#",
  },
  {
    title: "Ledger",
    description:
      "A personal finance tracker with categorised insights and a typed API surface — the sandbox for learning a stack properly, end to end.",
    tags: ["FastAPI", "Pydantic", "SQLAlchemy", "pytest"],
    href: "#",
 },
 {
    title: "Circuit",
    description:
      "A visually-rich landing page experiment: layered video backgrounds, a crossfade loop, and an animated particle-wave banner.",
    tags: ["HTML", "CSS", "Canvas", "Motion"],
    href: "#",
 },
 {
    title: "Commons",
    description:
      "A full-stack community platform on the MERN stack — JWT authentication, threaded discussions, and live replies pushed over Socket.io.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    href: "#",
 },
 {
    title: "Vantage",
    description:
      "A responsive analytics dashboard — interactive charts, filterable data tables, and cached server state managed with React Query.",
    tags: ["React", "TypeScript", "Recharts", "React Query", "Tailwind CSS"],
    href: "#",
 },
 {
    title: "Vitrine",
    description:
      "A server-rendered storefront - SSR for fast first loads and SEO, dynamic product routes, and Stripe-powered checkout.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe"],
    href: "#",
 },
];
