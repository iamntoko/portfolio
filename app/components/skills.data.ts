export type SkillGroup = {
  name: string;
  tags: string[];
};

export const skills: SkillGroup[] = [
  { name: "Languages", tags: ["Python", "TypeScript", "JavaScript"] },
  { name: "Backend", tags: ["Node.js", "Fastify", "FastAPI", "Django", "Pydantic", "SQLAlchemy"] },
  { name: "Data", tags: ["PostgreSQL", "Row-Level Security", "Redis"] },
  { name: "Cloud / DevOps", tags: ["AWS", "Docker", "Terraform"] },
  { name: "Frontend", tags: ["React", "React Native", "Tailwind CSS"] },
  { name: "Version control", tags: ["Git", "GitHub"] },
];