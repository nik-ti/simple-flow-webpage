import styles from "./BottomCTA.module.css";

export default function BottomCTA() {
  return (
    <section className={styles.section} id="who-its-for">
      <div className={styles.container}>
        <h2 className={styles.title}>The stuff that always gets pushed to tomorrow — running automatically.</h2>
        <p className={styles.subtitle}>
          If you have customers who can come back, leads that went quiet, or invoices sitting unpaid — there&apos;s a system for that. We build it in 3 days.
        </p>
        <div className={styles.ctaRow}>
          <a href="https://cal.com/nik-t/30min" target="_blank" rel="noopener noreferrer" className={styles.trustLink} id="bottom-cta">
            BOOK A FREE CALL →
          </a>
        </div>
      </div>
    </section>
  );
}
