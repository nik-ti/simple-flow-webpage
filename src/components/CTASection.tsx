"use client";
import { useState, useEffect } from "react";
import styles from "./CTASection.module.css";

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

export default function CTASection() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <div className={styles.ctaCard}>
          <ShaderBackground />
          <div className={styles.ctaInner}>
            <div className={styles.ctaGrid}>
              <div className={styles.ctaLeft}>
                <span className={styles.ctaLabel}>30 MINUTES · NO FLUFF</span>
                <h2 className={styles.ctaTitle}>
                  Let&apos;s map out what we&apos;d build.
                </h2>
                <p className={styles.ctaDescription}>
                  We look at your operation, identify what should be automated or handed off to an AI agent, and walk you through exactly what we&apos;d build. No pitch deck.
                </p>

                <a href="https://cal.com/nik-t/30min" target="_blank" rel="noopener noreferrer" className={styles.bookBtn} id="cta-book-demo">
                  BOOK A CALL
                </a>

                <p className={styles.ctaFooter}>
                  STRAIGHT ANSWERS · FAST TURNAROUND · CUSTOM TO YOUR STACK
                </p>
              </div>

              <div className={styles.ctaRight}>
                <div className={styles.quoteCard}>
                  <p className={styles.quoteText}>
                    &ldquo;We import linens and bedding — it&apos;s a reorder business, but following up consistently was always the weak point. That&apos;s been solved. Old customers are coming back on their own and new inquiries don&apos;t get lost anymore. Everything just runs tighter now.&rdquo;
                  </p>
                  <div className={styles.quoteAuthor}>
                    <span className={styles.quoteName}>Samir T</span>
                    <span className={styles.quoteCompany}>Home Textile Importer &amp; Distributor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
