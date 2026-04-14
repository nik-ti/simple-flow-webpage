import styles from "./FeatureCards.module.css";

const features = [
  {
    id: "revenue",
    eyebrow: "OUTCOME",
    title: "Old customers, new revenue.",
    description:
      "Most past customers didn't leave because they were unhappy. They just never heard from you again. We change that automatically.",
    mockup: (
      <div className={styles.revenueCard}>
        <div className={styles.revenueRow}>
          <span className={styles.revenueLabel}>Customers re-engaged</span>
          <span className={styles.revenueVal}>+12</span>
        </div>
        <div className={styles.revenueRow}>
          <span className={styles.revenueLabel}>Jobs rebooked</span>
          <span className={styles.revenueVal}>+9</span>
        </div>
        <div className={styles.revenueRow}>
          <span className={styles.revenueLabel}>Revenue recovered</span>
          <span className={styles.revenueVal}>+$2,700</span>
        </div>
        <div className={styles.revenueDivider} />
        <div className={styles.revenueTotal}>
          <span>This month, zero effort</span>
          <span className={styles.revenueTotalVal}>✓</span>
        </div>
      </div>
    ),
  },
  {
    id: "time",
    eyebrow: "OUTCOME",
    title: "27 hours back every month.",
    description:
      "The average our clients stop spending on manual follow-ups, payment chasing, and check-ins. Same output, less time.",
    mockup: (
      <div className={styles.timeCard}>
        {[
          { task: "Following up leads manually", hrs: "8 hrs/mo", saved: true },
          { task: "Chasing unpaid invoices", hrs: "6 hrs/mo", saved: true },
          { task: "Asking for reviews", hrs: "4 hrs/mo", saved: true },
          { task: "Re-engaging past customers", hrs: "9 hrs/mo", saved: true },
        ].map((row, i) => (
          <div key={i} className={styles.timeRow}>
            <div className={styles.timeLeft}>
              <span className={styles.timeSavedTag}>SAVED</span>
              <span className={styles.timeTask}>{row.task}</span>
            </div>
            <span className={styles.timeHrs}>{row.hrs}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "simple",
    eyebrow: "HOW WE WORK",
    title: "You don't set anything up.",
    description:
      "No software to configure. No sequences to write. We build it, connect it, and it runs. You just see the results.",
    mockup: (
      <div className={styles.simpleCard}>
        <div className={styles.simpleRow}>
          <span className={styles.simpleIcon}>✓</span>
          <span>One-time setup fee</span>
        </div>
        <div className={styles.simpleRow}>
          <span className={styles.simpleIcon}>✓</span>
          <span>No monthly retainer</span>
        </div>
        <div className={styles.simpleRow}>
          <span className={styles.simpleIcon}>✓</span>
          <span>Works with tools you already have</span>
        </div>
        <div className={styles.simpleRow}>
          <span className={styles.simpleIcon}>✓</span>
          <span>No upfront payment</span>
        </div>
        <div className={styles.simpleRow}>
          <span className={styles.simpleIcon}>✓</span>
          <span>Live in under 3 days</span>
        </div>
      </div>
    ),
  },
];

export default function FeatureCards() {
  return (
    <section className={styles.section} id="features">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>What changes when nothing slips through.</h2>
        <div className={styles.grid}>
          {features.map((f) => (
            <div key={f.id} className={styles.card} id={`feature-${f.id}`}>
              <div className={styles.cardMockup}>{f.mockup}</div>
              <span className={styles.eyebrow}>{f.eyebrow}</span>
              <h4 className={styles.cardTitle}>{f.title}</h4>
              <p className={styles.cardDescription}>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
