import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ShaderBackground from "./ShaderBackground";
import demos from "@/data/demos.json";
import styles from "./page.module.css";

export default function WebsitesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className={styles.heroSection}>
          <div className={styles.heroContainer}>
            <div className={styles.heroCard}>
              <ShaderBackground />
              <div className={styles.heroContent}>
                <Link href="/" className={styles.backLink}>
                  ← Back to Simple Flow
                </Link>
                <div className={styles.heroMain}>
                  <span className={styles.eyebrow}>WEB DESIGN</span>
                  <h1 className={styles.title}>Websites and landing pages</h1>
                  <p className={styles.tagline}>
                    Automations run the business. Websites bring the customers in.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.introSection}>
          <div className={styles.introInner}>
            <h2 className={styles.introTitle}>
              Beyond agents and automations.
            </h2>
            <p className={styles.introBody}>
              We also build custom websites and landing pages — designed to look
              sharp and convert, not just sit pretty. Check out a few demos
              we&apos;ve put together.
            </p>
          </div>
        </section>

        <section className={styles.demosSection} id="demos">
          <div className={styles.demosContainer}>
            <h2 className={styles.demosTitle}>Demo sites</h2>
            <p className={styles.demosSubtitle}>
              Tap a card or &ldquo;View demo&rdquo; to open the full site.
            </p>
            <div className={styles.grid}>
              {demos.map((demo, index) => (
                <article key={demo.id} className={styles.card} id={`demo-${demo.id}`}>
                  <div className={styles.preview}>
                    <div className={styles.browserChrome}>
                      <span className={styles.dot} />
                      <span className={styles.dot} />
                      <span className={styles.dot} />
                    </div>
                    <div className={styles.previewFrame}>
                      <Image
                        src={`/demos/${demo.slug}.jpg`}
                        alt={`${demo.title} demo site homepage`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 900px) 50vw, 33vw"
                        priority={index < 3}
                        className={styles.previewImage}
                      />
                      <a
                        href={demo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.previewClick}
                        aria-label={`Open ${demo.title} demo`}
                      />
                    </div>
                  </div>
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{demo.title}</h3>
                    <p className={styles.cardDescription}>{demo.description}</p>
                    <a
                      href={demo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.viewLink}
                    >
                      View demo →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
