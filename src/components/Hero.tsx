"use client";
import { useRef, useState, useEffect } from "react";
import styles from "./Hero.module.css";

function hasWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl")
    );
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
      .catch(() => { });
  }, []);

  if (!Shader) {
    return <div className={styles.shaderFallback} />;
  }

  return (
    <>
      <Shader
        className={styles.shaderBase}
        colors={["#c94a1a", "#e05a00", "#ff6a1a", "#ff9940", "#b83a10"]}
        speed={0.8}
        distortion={0.6}
        swirl={0.5}
      />
      <Shader
        className={styles.shaderOverlay}
        colors={["#ff8830", "#e05a10", "#ff7020", "#ff8830"]}
        speed={0.6}
        distortion={0.4}
        swirl={0.4}
      />
    </>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className={styles.heroSection} id="hero">
      <div className={styles.heroContainer}>
        <div ref={containerRef} className={styles.heroCard}>
          <ShaderBackground />
          <div className={styles.lightFade} />

          <div className={styles.heroContent}>
            <div className={styles.heroTop}>
              <div className={styles.tagline}>
                DONE-FOR-YOU AUTOMATION
              </div>
            </div>

            <h1 className={styles.heroTitle}>
              Work less on your<br className={styles.titleBr} />business. Earn more<br className={styles.titleBr} />from it.
            </h1>

            <a href="https://cal.com/nik-t/30min" target="_blank" rel="noopener noreferrer" className={styles.heroButton} id="hero-book-call">
              BOOK A FREE CALL
            </a>

            <div className={styles.heroBottom}>
              <div className={styles.heroDescription}>
                <p>
                  We build systems that save you time and make you more money. Simple.
                </p>
                <div className={styles.badges}>
                  <div className={styles.badgeItem}>
                    <span className={styles.badgeIcon}>✓</span>
                    <span>No upfront payment</span>
                  </div>
                  <div className={styles.badgeItem}>
                    <span className={styles.badgeIcon}>✓</span>
                    <span>Live in 3 days</span>
                  </div>
                  <div className={styles.badgeItem}>
                    <span className={styles.badgeIcon}>✓</span>
                    <span>No monthly retainer</span>
                  </div>
                </div>
              </div>

              <a href="/case-study/splendid-moving" className={styles.caseStudyCard} id="hero-case-study">
                <span className={styles.csEyebrow}>CASE STUDY</span>
                <span className={styles.csTagline}>Read a success story →</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
