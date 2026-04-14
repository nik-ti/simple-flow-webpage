"use client";
import { useState } from "react";
import styles from "./PlatformTabs.module.css";

const steps = [
  {
    id: "learn",
    number: "01",
    label: "We Learn",
    subtitle: "Your business",
    title: "One call. That's all we need.",
    description:
      "We ask the right questions about your business — where you're losing time, where you're losing money, what tools you already use. Then we figure out exactly what to build.",
    mockup: "learn",
  },
  {
    id: "build",
    number: "02",
    label: "We Build",
    subtitle: "Your system",
    title: "You don't touch a thing.",
    description:
      "We build the automations, connect them to your existing tools, test everything, and hand you a fully running system. No new software to learn. No setup on your end.",
    mockup: "build",
  },
  {
    id: "results",
    number: "03",
    label: "You Win",
    subtitle: "See the results",
    title: "We handle the work that doesn't need you.",
    description:
      "Follow-ups, reminders, payment nudges, review requests — necessary, repetitive, and easy to push off. We automate exactly that, so you stay focused on the actual job you like doing.",
    mockup: "results",
  },
];

function LearnMockup() {
  return (
    <div className={styles.mockupCard}>
      <div className={styles.mockupHeader}>
        <span className={styles.mockupTitle}>Discovery Call</span>
        <span className={styles.mockupBadge}>30 min</span>
      </div>
      <div className={styles.checkList}>
        {[
          "Where are leads going cold?",
          "Are past customers coming back?",
          "How do you track jobs and payments?",
          "What's eating your time every week?",
        ].map((q, i) => (
          <div key={i} className={styles.checkItem}>
            <span className={styles.checkDot} />
            <span>{q}</span>
          </div>
        ))}
      </div>
      <div className={styles.mockupFooter}>
        <span className={styles.footerTag}>→ We identify your biggest time-wasters</span>
      </div>
    </div>
  );
}

function BuildMockup() {
  return (
    <div className={styles.mockupCard}>
      <div className={styles.mockupHeader}>
        <span className={styles.mockupTitle}>System Build</span>
        <span className={styles.mockupBadge}>~3 days</span>
      </div>
      <div className={styles.buildSteps}>
        {[
          { label: "Automations built", done: true },
          { label: "Connected to your tools", done: true },
          { label: "Tested end-to-end", done: true },
          { label: "You approve — we launch", done: false },
        ].map((step, i) => (
          <div key={i} className={styles.buildStep}>
            <span className={step.done ? styles.stepDone : styles.stepPending}>
              {step.done ? "✓" : "○"}
            </span>
            <span className={step.done ? styles.stepTextDone : styles.stepText}>
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ResultsMockup() {
  return (
    <div className={styles.mockupCard}>
      <div className={styles.mockupHeader}>
        <span className={styles.mockupTitle}>This Month</span>
        <span className={styles.mockupBadgeLive}>● LIVE</span>
      </div>
      <div className={styles.resultRows}>
        <div className={styles.resultRow}>
          <span className={styles.resultLabel}>Leads followed up</span>
          <span className={styles.resultValue}>47</span>
        </div>
        <div className={styles.resultRow}>
          <span className={styles.resultLabel}>Jobs rebooked</span>
          <span className={styles.resultValue}>9</span>
        </div>
        <div className={styles.resultRow}>
          <span className={styles.resultLabel}>Invoices collected</span>
          <span className={styles.resultValue}>$3,200</span>
        </div>
        <div className={styles.resultRow}>
          <span className={styles.resultLabel}>Reviews requested</span>
          <span className={styles.resultValue}>31</span>
        </div>
      </div>
      <div className={styles.mockupFooter}>
        <span className={styles.footerTag}>32 hrs saved this month</span>
      </div>
    </div>
  );
}

const mockups = { learn: LearnMockup, build: BuildMockup, results: ResultsMockup };

export default function PlatformTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const step = steps[activeTab];
  const MockupComponent = mockups[step.mockup as keyof typeof mockups];

  return (
    <section className={styles.section} id="how-it-works">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>How it works</h2>
        <p className={styles.sectionSub}>
          From first call to fully running system — in three steps.
        </p>

        <div className={styles.tabHeaders}>
          {steps.map((s, i) => (
            <button
              key={s.id}
              className={`${styles.tabHeader} ${activeTab === i ? styles.active : ""}`}
              onClick={() => setActiveTab(i)}
              id={`step-${s.id}`}
            >
              <span className={styles.stepNumber}>{s.number}</span>
              <span className={styles.tabLabel}>{s.label}</span>
              <span className={styles.tabSubtitle}>{s.subtitle}</span>
            </button>
          ))}
        </div>

        <div className={styles.tabContent}>
          <div className={styles.tabGrid}>
            <div className={styles.mockupArea}>
              <MockupComponent />
            </div>
            <div className={styles.textArea}>
              <h3 className={styles.tabTitle}>{step.title}</h3>
              <p className={styles.tabDescription}>{step.description}</p>
              <a href="https://cal.com/nik-t/30min" target="_blank" rel="noopener noreferrer" className={styles.learnMore} id={`cta-step-${step.id}`}>
                BOOK A FREE CALL
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
