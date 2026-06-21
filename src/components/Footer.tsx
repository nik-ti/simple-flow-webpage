import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.container}>
        <div className={styles.logo}>SIMPLE FLOW</div>
        <p className={styles.tagline}>
          Automations and AI agents for businesses that want to scale.
        </p>
        <a href="mailto:nik@simple-flow.co" className={styles.emailLink}>nik@simple-flow.co</a>
      </div>
    </footer>
  );
}
