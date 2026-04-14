"use client";
import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className={styles.nav} id="navbar">
      <div className={styles.navInner}>
        <a href="/" className={styles.logo} id="nav-logo">
          SIMPLE FLOW
        </a>

        <div className={styles.navLinks}>
          <a href="#services" className={styles.navLink}>Services</a>
          <a href="#how-it-works" className={styles.navLink}>How It Works</a>
          <a href="#who-its-for" className={styles.navLink}>Who It&apos;s For</a>
          <a href="/case-study/splendid-moving" className={styles.navLink}>Case Study</a>
          <a href="#contact" className={styles.navLink}>Contact</a>
        </div>

        <a href="https://cal.com/nik-t/30min" target="_blank" rel="noopener noreferrer" className={styles.ctaButton} id="nav-book-call">
          BOOK A CALL
        </a>

        <button
          className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          id="nav-hamburger"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {mobileOpen && (
        <div className={styles.mobileMenu} id="mobile-menu">
          <a href="#services" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>Services</a>
          <a href="#how-it-works" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>How It Works</a>
          <a href="#who-its-for" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>Who It&apos;s For</a>
          <a href="/case-study/splendid-moving" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>Case Study</a>
          <a href="#contact" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>Contact</a>
          <a href="https://cal.com/nik-t/30min" target="_blank" rel="noopener noreferrer" className={styles.mobileCta} onClick={() => setMobileOpen(false)}>BOOK A CALL</a>
        </div>
      )}
    </nav>
  );
}
