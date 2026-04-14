import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div className={styles.companyCol}>
            <div className={styles.logo}>SIMPLE FLOW</div>
            <p className={styles.tagline}>
              Done-for-you automation for home service businesses.
            </p>
            <div className={styles.contactBlock}>
              <span className={styles.hqLabel}>Get in Touch</span>
              <a href="mailto:nik@simple-flow.co" className={styles.emailLink}>nik@simple-flow.co</a>
            </div>
          </div>

          <div className={styles.linksCol}>
            <h5 className={styles.colTitle}>Services</h5>
            <a href="#services">Customer Reactivation</a>
            <a href="#services">Lead Follow-Up</a>
            <a href="#services">Invoice Reminders</a>
            <a href="#services">Review Collection</a>
            <a href="#services">Onboarding</a>
            <a href="#services">Content & Marketing</a>
          </div>

          <div className={styles.linksCol}>
            <h5 className={styles.colTitle}>Company</h5>
            <a href="#how-it-works">How It Works</a>
            <a href="#who-its-for">Who It&apos;s For</a>
            <a href="https://cal.com/nik-t/30min" target="_blank" rel="noopener noreferrer">Book a Call</a>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>© 2026 Simple Flow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
