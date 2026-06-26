// app/projects/page.tsx
// This renders at the URL "/projects" — because it's named page.tsx
// inside the "projects" folder. The folder name IS the route.

import Link from "next/link";              // Next's client-side navigation component
import Nav from "../components/Nav";        // Reuse the SAME nav (note: ../ goes up to components)
import { projects } from "../components/projects.data";
import styles from "./projects.module.css";

// Page metadata — this sets the browser tab title for THIS route specifically.
export const metadata = {
  title: "Projects — Ntoko B Ndie",
  description: "Full portfolio of backend and cloud engineering projects.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Reuse the nav so the page feels part of the same site. */}
      <Nav />

      <main className="wrap">
        {/* A back link to the homepage. Link = client-side nav, no full reload. */}
        <Link href="/" className={styles.back}>
          <span aria-hidden="true">←</span> Back to home
        </Link>

        <h1 className={styles.title}>All Projects</h1>
        <p className={styles.intro}>
          The full collection — backend services, cloud infrastructure, and the experiments along the way.
        </p>

        {/* Richer, detailed layout: each project is a full-width row, not a compact card. */}
        <div className={styles.list}>
          {projects.map((project) => (
            <article key={project.title} className={styles.item}>
              <h2 className={styles.itemTitle}>{project.title}</h2>
              <p className={styles.itemDesc}>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}