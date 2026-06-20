import styles from "./BottomCTA.module.css";

export default function BottomCTA() {
  return (
    <section className={styles.section} id="who-its-for">
      <div className={styles.container}>
        <h2 className={styles.title}>The work that slows you down — automated and handed off.</h2>
        <p className={styles.subtitle}>
          If your team is doing repetitive work that a system could handle, we&apos;ll build that system. Deployed in 3 days.
        </p>
        <div className={styles.ctaRow}>
          <a href="https://cal.com/nik-t/30min" target="_blank" rel="noopener noreferrer" className={styles.trustLink} id="bottom-cta">
            BOOK A CALL →
          </a>
        </div>
      </div>
    </section>
  );
}
