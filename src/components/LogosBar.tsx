import styles from "./LogosBar.module.css";

const stats = [
  { value: "3 days", label: "Average setup time" },
  { value: "12+", label: "Businesses worked with" },
  { value: "27+ hrs", label: "Saved per client monthly" },
  { value: "$0", label: "Upfront payment required" },
];

export default function LogosBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        {stats.map((stat, i) => (
          <div key={i} className={styles.stat}>
            <span className={styles.statValue}>{stat.value}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
