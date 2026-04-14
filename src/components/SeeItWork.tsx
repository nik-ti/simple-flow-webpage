import styles from "./SeeItWork.module.css";

const steps = [
  {
    circle: "1",
    time: "Instantly",
    text: "New lead comes in — followed up automatically",
    done: false,
  },
  {
    circle: "2",
    time: "Same day",
    text: "Past customer contacted — rebooked",
    done: false,
  },
  {
    circle: "3",
    time: "After the job",
    text: "Job completed — payment reminder sent",
    done: false,
  },
  {
    circle: "✓",
    time: "Job paid",
    text: "Payment collected — review request triggered",
    done: true,
  },
];

export default function SeeItWork() {
  return (
    <section className={styles.section} id="see-it-work">
      <div className={styles.container}>
        <div className={styles.textCol}>
          <h2 className={styles.title}>Every step, handled.</h2>
          <p className={styles.description}>
            From first inquiry to payment collected — automated. Your system follows up with new leads, re-engages past customers, sends job reminders, collects payment, and requests a review. Every time, without fail.
          </p>
          <a href="https://cal.com/nik-t/30min" target="_blank" rel="noopener noreferrer" className={styles.cta} id="see-it-work-cta">
            BOOK A FREE CALL
          </a>
        </div>
        <div className={styles.flowCol}>
          <div className={styles.flowCard}>
            {steps.map((step, i) => (
              <div key={i}>
                <div className={styles.flowStep}>
                  <div className={step.done ? styles.stepCircleGreen : styles.stepCircle}>
                    {step.circle}
                  </div>
                  <div className={styles.stepContent}>
                    <span className={styles.stepTime}>{step.time}</span>
                    <p className={styles.stepText}>{step.text}</p>
                  </div>
                </div>
                {i < steps.length - 1 && <div className={styles.flowLine} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
