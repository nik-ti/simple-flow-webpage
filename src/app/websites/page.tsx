"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
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

type Demo = {
  id: number;
  title: string;
  description: string;
  url: string;
};

const demos: Demo[] = [
  {
    id: 1,
    title: "Fernhill",
    description:
      "Warm bone-and-forest palette for a private dental practice. Soft editorial type, unclinical photography, membership CTA front and center.",
    url: "https://fernhill-demo.netlify.app",
  },
  {
    id: 2,
    title: "Halstead",
    description:
      "Industrial design-build contractor site. Paper and concrete tones, terracotta accent, tight typography — built to feel like a real shop floor, not a template.",
    url: "https://halstead-demo.netlify.app",
  },
  {
    id: 3,
    title: "Hollowpine",
    description:
      "Dark cabin-retreat landing page. Ember accents on near-black, full-bleed nature imagery, and a luxury stay vibe that still converts bookings.",
    url: "https://hollowpine-demo.netlify.app",
  },
  {
    id: 4,
    title: "Larkspur",
    description:
      "Calm SaaS product site. Soft paper backgrounds, sage and rose accents, and a clear hero promise — steady income clarity without the fintech chrome.",
    url: "https://larkspur-demo.netlify.app",
  },
  {
    id: 5,
    title: "Nocturne",
    description:
      "Dark observability product marketing. Magenta and violet accents on deep ink, dense but readable — made for technical buyers who still want polish.",
    url: "https://demo-nocturne.netlify.app",
  },
  {
    id: 6,
    title: "Plotline",
    description:
      "Warm canvas content-calendar site. Coral accent, clean board-style hierarchy, and a shipping-focused narrative for small marketing teams.",
    url: "https://demo-plotline.netlify.app",
  },
];

/**
 * Mobile browsers often discard iframe contents when the tab is backgrounded
 * (or restore a frozen page from bfcache). Bump this key when the user comes
 * back so previews remount instead of staying blank until a manual refresh.
 */
function usePreviewReloadKey() {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const remount = () => setKey((k) => k + 1);

    const onPageShow = (event: PageTransitionEvent) => {
      if (event.persisted) remount();
    };

    const onVisibility = () => {
      if (document.visibilityState === "visible") remount();
    };

    window.addEventListener("pageshow", onPageShow);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      window.removeEventListener("pageshow", onPageShow);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return key;
}

export default function WebsitesPage() {
  const previewReloadKey = usePreviewReloadKey();

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
              Live previews below. Tap a card or &ldquo;View demo&rdquo; to open the full site.
            </p>
            <div className={styles.grid}>
              {demos.map((demo) => (
                <article key={demo.id} className={styles.card} id={`demo-${demo.id}`}>
                  <div className={styles.preview}>
                    <div className={styles.browserChrome}>
                      <span className={styles.dot} />
                      <span className={styles.dot} />
                      <span className={styles.dot} />
                    </div>
                    <div className={styles.previewFrame}>
                      <div className={styles.iframeScale}>
                        <iframe
                          key={`${demo.id}-${previewReloadKey}`}
                          src={demo.url}
                          title={`${demo.title} live preview`}
                          loading="lazy"
                          tabIndex={-1}
                          sandbox="allow-scripts allow-same-origin"
                          className={styles.iframe}
                        />
                      </div>
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
