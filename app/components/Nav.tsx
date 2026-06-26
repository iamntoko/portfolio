// app/components/Nav.tsx
"use client"; // Client Component — uses hooks and browser APIs.

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Tells us the current route.
import Link from "next/link";
import styles from "./Nav.module.css";

export default function Nav() {
  // STATE: tracks whether the user has scrolled past 20px. This is the raw input.
  const [scrolled, setScrolled] = useState(false);

  // The current route path, e.g. "/" on homepage or "/projects" elsewhere.
  const pathname = usePathname();

  // Is this the homepage? Only there do we want the transparent-at-top behavior.
  const isHome = pathname === "/";

  useEffect(() => {
    // Update the scrolled state on every scroll.
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Set initial state in case the page loads already scrolled.

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]); // Re-run effect if the route changes (e.g., navigating to /projects).

  // DERIVED DECISION: the nav is solid if EITHER we've scrolled down, OR we're
  // not on the homepage. On /projects this is always true (always solid); on
  // home it depends on scroll (transparent at top, solid once scrolled).
  const solid = scrolled || !isHome;

  // ★ ADD THE HANDLER HERE ★
  // After your other logic, before the return. It can use isHome and
  // setScrolled because both are defined above it.
  const handleLogoClick = (e: React.MouseEvent) => {
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setScrolled(false);
    }
  };

  return (
    // Apply the "solid" class based on the computed decision above.
    <nav className={`${styles.topnav} ${solid ? styles.solid : ""}`}>
      <div className={styles.navInner}>
        {/* Logo → homepage (Link, not anchor, so it routes from any page). */}
        <Link href="/" className={styles.logo} onClick={handleLogoClick}>
          <img src="/logo-ntoko-nav.png" alt="i am Ntoko — Software Engineer" />
        </Link>

        {/* Nav links → homepage anchors (leading "/" so they work from any route). */}
        <ul className={styles.links}>
          <li><Link href="/#projects">Projects</Link></li>
          <li><Link href="/#about">About</Link></li>
        </ul>
      </div>
    </nav>
  );
}