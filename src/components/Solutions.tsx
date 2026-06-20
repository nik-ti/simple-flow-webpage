import styles from "./Solutions.module.css";

const services = [
  {
    id: "ai-agents",
    color: "#1d4ed8",
    iconBg: "#dbeafe",
    icon: "⬡",
    title: "AI Agents",
    body: "We deploy AI agents that handle conversations, qualify leads, research prospects, and complete tasks autonomously. Not a chatbot — a system that acts.",
    tags: ["Autonomous agents", "Task execution", "Always on"],
  },
  {
    id: "workflow-automation",
    color: "#7c3aed",
    iconBg: "#ede9fe",
    icon: "⇄",
    title: "Workflow Automation",
    body: "Connect your tools. Automate the handoffs. We eliminate the manual steps between systems so your team stops being the glue.",
    tags: ["Tool integrations", "Process automation", "Zero manual steps"],
  },
  {
    id: "lead-followup",
    color: "#0e7490",
    iconBg: "#cffafe",
    icon: "→",
    title: "Lead Follow-Up",
    body: "Most leads go cold because nobody followed up fast enough. We build sequences that contact new leads instantly and keep following up until they respond or opt out.",
    tags: ["Auto follow-up", "SMS + Email", "More conversions"],
  },
  {
    id: "reactivation",
    color: "#15803d",
    iconBg: "#dcfce7",
    icon: "↩︎",
    title: "Customer Reactivation",
    body: "Your old customers are your easiest sale. We reach out to people who hired you before and stopped — automatically. No chasing, no manual follow-up. Just rebooked jobs.",
    tags: ["Past customers", "Automated outreach", "More revenue"],
  },
  {
    id: "invoices",
    color: "#b45309",
    iconBg: "#fef3c7",
    icon: "$",
    title: "Invoice & Payment Reminders",
    body: "Chasing unpaid invoices is a waste of your time. We set up automatic reminders that go out before and after a due date — so you get paid without the awkward calls.",
    tags: ["Overdue alerts", "Auto reminders", "Faster payments"],
  },
  {
    id: "reviews",
    color: "#be185d",
    iconBg: "#fce7f3",
    icon: "★",
    title: "Review Collection",
    body: "Most happy customers won't leave a review unless you ask. We trigger automatic review requests after a job is done — the right message, at the right time.",
    tags: ["Google reviews", "Automated ask", "Better reputation"],
  },
];

export default function Solutions() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>What we build</h2>
        <div className={styles.grid}>
          {services.map((s) => (
            <div key={s.id} className={styles.card} id={`service-${s.id}`}>
              <div
                className={styles.iconWrap}
                style={{ background: s.iconBg, color: s.color }}
              >
                {s.icon}
              </div>
              <h4 className={styles.cardTitle}>{s.title}</h4>
              <p className={styles.cardBody}>{s.body}</p>
              <div className={styles.tags}>
                {s.tags.map((t, i) => (
                  <span key={i} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
