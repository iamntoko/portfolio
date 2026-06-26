import SectionHeader from "./SectionHeader";
import TimelineBlock from "./TimelineBlock";
import CertsBlock from "./CertsBlock";
import SkillsBlock from "./SkillsBlock";
import { experience, jobSimulations } from "./experience.data";
import styles from "./Background.module.css";

export default function Background() {
  return (
    <section id="background" className={styles.section}>
      <SectionHeader
        title="Background"
        icon={
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
               strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="8" r="6" />
            <path d="M8.5 13.5 7 22l5-3 5 3-1.5-8.5" />
          </svg>
        }
      />
      
      <TimelineBlock label="Experience" items={experience} />
      <CertsBlock />
      <TimelineBlock label="Job simulations" items={jobSimulations} />
      <SkillsBlock />
    </section>
  );
}