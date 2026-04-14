import styles from "./Reviews.module.css";

const reviews = [
  {
    quote: "Nik really got our business and all our quirky little processes right away. I didn't even realize how much time we were wasting — our managers were spending hours on things that didn't need to be done by hand. He spotted those bottlenecks and automated them. It's made a real difference in how smoothly everything runs now.",
    name: "Jim",
    role: "Founder",
    company: "Splendid Moving",
  },
  {
    quote: "Before Nik, our funnels were a total mess. We'd bounce between tools, stack one thing on top of another, and nothing ever clicked. He cut through all of it, simplified our entire client flow, and made it perform way better. We're now bringing in clients consistently and delivering without the usual stress.",
    name: "Olesya",
    role: "Founder",
    company: "NMD Consulting",
  },
  {
    quote: "After working with Nik, I save hours every week on client delivery. What used to be a bunch of repetitive manual steps is now handled automatically. That extra time lets me focus on growing my marketing and doing more of the actual design work I enjoy.",
    name: "Julie",
    role: "Designer",
    company: "",
  },
];

export default function Reviews() {
  return (
    <section className={styles.section} id="reviews">
      <div className={styles.container}>
        <span className={styles.eyebrow}>WHAT OUR CLIENTS SAY</span>
        <h2 className={styles.title}>Results that speak for themselves.</h2>
        <div className={styles.reviewGrid}>
          {reviews.map((r, i) => (
            <div key={i} className={styles.reviewCard}>
              <p className={styles.reviewQuote}>&ldquo;{r.quote}&rdquo;</p>
              <div className={styles.reviewAuthor}>
                <span className={styles.reviewName}>{r.name}</span>
                <span className={styles.reviewMeta}>{r.role}{r.company ? `, ${r.company}` : ""}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
