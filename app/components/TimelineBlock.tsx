import type { TimelineItem } from "./experience.data";
import styles from "./Background.module.css";


export default function TimelineBlock({ label, items }: { label: string; items: TimelineItem[] }) {
  return (
    <div className={styles.block}>
      <h3 className={styles.blockLabel}>{label}</h3>

      
      {items.map((item) => (
        <div key={item.role} className={styles.xpItem}>
          <div className={styles.xpRole}>
            {item.role}
            
            {item.badge && <span className={styles.badge}>{item.badge}</span>}
          </div>
          <div className={styles.xpMeta}>{item.meta}</div>
          <p className={styles.xpDesc}>{item.description}</p>

          
          {item.certUrl && (
            <a className={styles.verify} href={item.certUrl} target="_blank" rel="noopener noreferrer">
              View certificate <span className={styles.arrow} aria-hidden="true">→</span>
            </a>
          )}
        </div>
      ))}
    </div>
  );
}