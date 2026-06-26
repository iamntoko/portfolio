import { skills } from "./skills.data";
import styles from "./Background.module.css";

export default function SkillsBlock() {
  return (
    <div className={styles.block}>
      <h3 className={styles.blockLabel}>Skills</h3>

      <div className={styles.skillGroups}>
        {/* Outer map: one row per skill group. */}
        {skills.map((group) => (
          <div key={group.name} className={styles.sgRow}>
            <span className={styles.sgName}>{group.name}</span>
            <div className={styles.sgTags}>
              {/* Inner map: one pill per tag — nested .map(), like the cards. */}
              {group.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}