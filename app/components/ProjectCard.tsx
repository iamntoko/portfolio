// ProjectCard component - Individual card for displaying a project

import type { Project } from "./projects.data";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }: { project: Project }) {
  return (
     <a className={styles.card} href={project.href} target="_blank" rel="noopener noreferrer">
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.desc}>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </a>
  );
}