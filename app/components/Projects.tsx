// Projects component - Grid of project cards

import Link from "next/link";
import { projects } from "./projects.data";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
        <SectionHeader
        title="Selected projects"
        icon={
          // Briefcase glyph, ported from your original's projects header.
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
               strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="7" width="20" height="14" rx="2" />
            <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          </svg>
        }
      />
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
          {/* View all projects link */}
        <div className={styles.viewAll}>
        {/* Link (not <a>) → client-side navigation to the /projects route. */}
        <Link href="/projects" className={styles.viewAllLink}>
          View all projects <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}