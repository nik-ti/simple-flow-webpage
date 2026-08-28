"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

function hasWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
  } catch {
    return false;
  }
}

function ShaderBackground() {
  const [Shader, setShader] = useState<React.ComponentType<Record<string, unknown>> | null>(null);

  useEffect(() => {
    if (!hasWebGL()) return;
    import("@paper-design/shaders-react")
      .then((mod) => setShader(() => mod.MeshGradient))
      .catch(() => {});
  }, []);

  if (!Shader) {
    return <div className={styles.shaderFallback} />;
  }

  return (
    <>
      <Shader
        className={styles.shaderBase}
        colors={["#1e14c0", "#3a28e0", "#5a3cf5", "#7b5bf5", "#140ea0"]}
        speed={0.8}
        distortion={0.6}
        swirl={0.5}
      />
      <Shader
        className={styles.shaderOverlay}
        colors={["#a87bff", "#d9a0f7", "#7b5bf5", "#a87bff"]}
        speed={0.6}
        distortion={0.4}
        swirl={0.4}
      />
    </>
  );
}

export default function SplendidMovingCaseStudy() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className={styles.heroSection}>
          <div className={styles.heroContainer}>
            <div className={styles.heroCard}>
              <ShaderBackground />
              <div className={styles.heroContent}>
                <Link href="/" className={styles.backLink}>← Back to Simple Flow</Link>
                <div className={styles.heroMain}>
                  <span className={styles.eyebrow}>CASE STUDY</span>
                  <h1 className={styles.company}>Splendid Moving</h1>
                  <p className={styles.companyTagline}>One of LA&apos;s Top-Rated Moving Companies</p>
                </div>
                <div className={styles.metrics}>
                  <div className={styles.metric}>
                    <span className={styles.metricNumber}>8</span>
                    <span className={styles.metricLabel}>jobs rebooked</span>
                  </div>
                  <div className={styles.metricDivider} />
                  <div className={styles.metric}>
                    <span className={styles.metricNumber}>~9 hrs</span>
                    <span className={styles.metricLabel}>saved per week</span>
                  </div>
                  <div className={styles.metricDivider} />
                  <div className={styles.metric}>
                    <span className={styles.metricNumber}>95%</span>
                    <span className={styles.metricLabel}>automated</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <div className={styles.contentWrap}>
          <div className={styles.content}>

            <section className={styles.block}>
              <div className={styles.blockLabel}>THE PROBLEM</div>
              <h2 className={styles.blockTitle}>Two silent revenue leaks.</h2>
              <p className={styles.blockBody}>
                Splendid Moving had built a solid customer base over three years — but two things were quietly costing them money. The first was booking. Every single job went through the same manual chain: a manager would pull the customer&apos;s details out of a text message, type them into the CRM by hand, then open Google Calendar — where the entire company&apos;s schedule lives — and create the event for the move. When the deposit came in, someone had to remember to go back into that event and update it. A few minutes here, a few minutes there, repeated across every lead, every day.
              </p>
              <p className={styles.blockBody}>
                Second, they had no system for staying in touch with past clients. Staff were too busy with incoming work to follow up, so when former customers were ready to move again — typically six months or more later — they&apos;d simply find someone else.
              </p>
            </section>

            <div className={styles.separator} />

            <section className={styles.block}>
              <div className={styles.blockLabel}>OUR APPROACH</div>
              <h2 className={styles.blockTitle}>Three systems. Zero new tools.</h2>
              <div className={styles.approachList}>
                <div className={styles.approachItem}>
                  <div className={styles.approachNum}>1</div>
                  <div className={styles.approachBody}>
                    <h4 className={styles.approachHeading}>Automatic reactivation workflow</h4>
                    <p className={styles.approachText}>
                      Built a fully automatic reactivation workflow that scans the client database for customers who moved at least six months ago, checks whether they were happy with their experience, and sends a friendly email and text reminding them of their returning customer discount — with zero new tools and zero extra work for the team.
                    </p>
                  </div>
                </div>
                <div className={styles.approachItem}>
                  <div className={styles.approachNum}>2</div>
                  <div className={styles.approachBody}>
                    <h4 className={styles.approachHeading}>Hands-off job booking</h4>
                    <p className={styles.approachText}>
                      Wired the whole booking chain together end to end. Customer details flow straight into the CRM, the Google Calendar event for the move is created automatically — formatted exactly the way the team already writes them — and the moment a deposit is paid, that event updates itself. No re-typing, nothing to remember, and no jobs sitting on the calendar with outdated payment info.
                    </p>
                  </div>
                </div>
                <div className={styles.approachItem}>
                  <div className={styles.approachNum}>3</div>
                  <div className={styles.approachBody}>
                    <h4 className={styles.approachHeading}>An AI assistant that books the job for you</h4>
                    <p className={styles.approachText}>
                      On top of that, we built an assistant the managers talk to in plain English. Send it a screenshot of the customer&apos;s message and it reads the details straight off the image, completes and verifies the pickup and drop-off addresses, creates the contact in the CRM, sends the customer their deposit payment link, and adds the job to the calendar. One screenshot in, a fully booked job out — without a manager typing a single field.
                    </p>
                    <p className={styles.approachText}>
                      It&apos;s also connected to the company&apos;s internal data, so the team can just ask: how many jobs did we run last month, what&apos;s on the schedule for the next three days, how did this week compare to the last. Answers come back in seconds instead of someone digging through the CRM to piece them together.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div className={styles.separator} />

            <section className={styles.block}>
              <div className={styles.blockLabel}>THE RESULT</div>
              <h2 className={styles.blockTitle}>Running in the background, every day.</h2>
              <p className={styles.blockBody}>
                The reactivation system now runs continuously in the background — re-engaging past customers who often book again or refer friends and family. In the very first month alone, it brought in 8 additional jobs with no manual effort from the team.
              </p>
              <p className={styles.blockBody}>
                Booking went from a chain of manual steps to a single message. What used to be several minutes of copying, pasting and calendar-wrangling for every job now happens on its own — or in the time it takes to forward a screenshot to the assistant. Deposits are always reflected on the calendar, nothing slips through because someone got busy, and the numbers managers used to hunt for are one question away. That freed-up time goes straight into growing the business.
              </p>

              <div className={styles.resultMetrics}>
                <div className={styles.resultMetric}>
                  <span className={styles.resultNumber}>8</span>
                  <span className={styles.resultLabel}>jobs rebooked<br />first 30 days</span>
                </div>
                <div className={styles.resultMetric}>
                  <span className={styles.resultNumber}>~9 hrs</span>
                  <span className={styles.resultLabel}>saved per<br />week</span>
                </div>
                <div className={styles.resultMetric}>
                  <span className={styles.resultNumber}>95%</span>
                  <span className={styles.resultLabel}>of the process<br />automated</span>
                </div>
              </div>
            </section>

          </div>
        </div>

        {/* Bottom CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaInner}>
            <p className={styles.ctaText}>Want results like this?</p>
            <a
              href="https://cal.com/nik-t/30min"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtn}
            >
              BOOK A CALL
            </a>
            <p className={styles.ctaNote}>30 minutes</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
