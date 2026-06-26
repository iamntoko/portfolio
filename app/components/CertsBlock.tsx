import { certifications } from "./certifications.data";
import styles from "./Background.module.css";

export default function CertsBlock() {
  return (
    <div className={styles.block}>
      <h3 className={styles.blockLabel}>Certifications</h3>

      <ul className={styles.certs}>
        {certifications.map((cert) => (
          // The status union drives the branch: earned vs pending render paths.
          <li key={cert.name} className={cert.status === "earned" ? styles.certEarned : styles.certPending}>
            {cert.status === "earned" ? (
              // EARNED branch: badge image (linked to Credly) + name.
              <>
                <a href={cert.verifyHref} target="_blank" rel="noopener noreferrer"
                   aria-label={`Verify ${cert.name} on Credly`}>
                  {/* The Credly badge image. */}
                  <img src={cert.badgeImg} alt="" width={72} height={72} />
                </a>
                <span>{cert.name}</span>
              </>
            ) : (
              // PENDING branch: dashed-circle icon + name + status label.
              <>
                {/* If a badge image is provided, show it (dimmed). Otherwise, the dashed circle.
        This conditional lets SOME pending certs have a badge and others not. */}
                {cert.badgeImg ? (
                  <img src={cert.badgeImg} alt="" width={72} height={72} className={styles.badgePending} />
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" strokeDasharray="3 3" />
                  </svg>
                )}    
                {cert.name} <span className={styles.statusBadge}>{cert.label}</span>
              </>
            )}
          </li>
        ))}
      </ul>

      {/* Verify-all link — placeholder URL for now (you'll add your real Credly profile). */}
      <a className={styles.verifyBtn} href="https://www.credly.com/users/iamntoko/badges/credly" target="_blank" rel="noopener noreferrer">
        Verify certs on Credly <span className={styles.arrow} aria-hidden="true">→</span>
      </a>
    </div>
  );
}