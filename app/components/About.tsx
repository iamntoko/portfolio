// About section component

import SectionHeader from "./SectionHeader";
import styles from "./About.module.css";

export default function About() {
    return (
        <section id="about" className={styles.section}>
            <SectionHeader 
              title="About"
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
                 strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 3.6-6 8-6s8 2 8 6" />
                </svg>
              } />
            <p className={styles.about}>
                I&apos;m a <strong>software engineer focused on backend and cloud systems</strong> — distributed
                data, tenant isolation, and the AWS tooling that ties it together. I learn by building, breaking,
                and documenting: every hard problem gets researched first, then turned into something real.
            </p>
            <div className={styles.actions}>
                <a className={`${styles.btn} ${styles.btnSolid}`} href="#background">
                    See full background <span className={styles.arrow} aria-hidden="true">→</span>
                </a>
                <a className={`${styles.btn} ${styles.btnGhost}`} href="/resume.pdf"    target="_blank" rel="noopener noreferrer">
                  View résumé
                </a>
            </div>
        </section>
    );
}