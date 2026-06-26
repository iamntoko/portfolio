// app/components/BackToTop.tsx
"use client"; // Needs scroll detection + a click handler — must run in the browser.

import { useState, useEffect } from "react";
import styles from "./BackToTop.module.css";

export default function BackToTop() {
  // Tracks whether the button should be visible (after scrolling down a bit).
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show the button once the user scrolls past 400px — matches your original.
    const handleScroll = () => setShow(window.scrollY > 400);

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // check initial position in case page loads scrolled

    // Cleanup — remove the listener when the component unmounts.
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smoothly scroll to the very top when clicked.
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      // Conditionally add the "show" class based on state — same dynamic
      // className pattern as your nav's solid toggle.
      className={`${styles.toTop} ${show ? styles.show : ""}`}
      aria-label="Back to top"
    >
      {/* Up-arrow icon, from your original. */}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
           strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 19V5" />
        <path d="m5 12 7-7 7 7" />
      </svg>
    </button>
  );
}