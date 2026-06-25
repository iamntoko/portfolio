// Projects component - Grid of project cards

import { projects } from "./projects.data";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
    </section>
  );
}