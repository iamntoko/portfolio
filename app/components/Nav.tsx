"use client";

import { useState, useEffect } from "react";
import styles from "./Nav.module.css";

export default function Nav() {
    const [solid, setSolid] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSolid(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        handleScroll(); // Set initial state based on current scroll position
        
        return () => window.removeEventListener("scroll", handleScroll);
        }, []);
    
    return (
        <nav className={`${styles.topnav} ${solid ? styles.solid : ""}`}>
            <div className={styles.navInner}>
                <a href="#top" className={styles.logo}>
                    <img src="/logo-ntoko-nav.png" alt="i am Ntoko — Software Engineer" />
                </a>
                <ul className={styles.links}>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
           </div>
        </nav>
    );
}