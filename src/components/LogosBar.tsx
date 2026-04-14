import styles from "./LogosBar.module.css";

const tools = [
  "Make", "GoHighLevel", "Zapier", "Stripe", "Calendly",
  "Twilio", "HubSpot", "Airtable", "Notion", "ActiveCampaign",
  "Make", "GoHighLevel", "Zapier", "Stripe", "Calendly",
  "Twilio", "HubSpot", "Airtable", "Notion", "ActiveCampaign",
];

export default function LogosBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.label}>Works with tools you already use</div>
      <div className={styles.track}>
        <div className={styles.ticker}>
          {tools.map((tool, i) => (
            <span key={i} className={styles.toolPill}>{tool}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
