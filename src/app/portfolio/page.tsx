// The portfolio starts with a short introduction, then lets the projects speak.
// Suspense contains client-side URL filters without making the whole route dynamic.
import { Suspense } from 'react';
import Gallery from '@/components/portfolio/Gallery';
import styles from './page.module.css';
export default function Portfolio() {
  return <main id="main" className={styles.page}><div className={styles.intro}><div><p className={styles.label}><span />Our work</p><h1>A few things we’ve <br className={styles.desktopBreak} />put on autopilot.</h1></div><p className={styles.description}>AI agents, everyday automations,<br className={styles.desktopBreak} /> and tools that give people their time back.<br className={styles.desktopBreak} /> Here’s what that looks like.</p></div><Suspense fallback={<p className={styles.loading}>Loading projects…</p>}><Gallery /></Suspense></main>;
}
