// A reusable header component for sections

import type { ReactNode } from "react";
import styles from "./SectionHeader.module.css";

export default function SectionHeader({ title, icon }: { title: string; icon?: ReactNode }) { 
    return (
        <div className={styles.head}>
            <span className={styles.icon}>{icon}</span> 
            <h2 className={styles.title}>{title}</h2>
        </div>
    );
}