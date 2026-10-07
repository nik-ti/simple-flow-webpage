// Shared building blocks for every project page: hero, problem, solution, steps,
// before/after, demo, and tech stack. Each page passes its own copy and illustrations,
// so all case studies keep the same problem → solution reading order.
import type { CSSProperties, ReactNode } from 'react';
import Link from 'next/link';
import Gradient from '@/components/portfolio/Gradient';
import ProjectVisual from '@/components/portfolio/ProjectVisual';
import Icon from '@/components/portfolio/Icon';
import type { Visual } from '@/data/projects';
import { logos, type Logo, type LogoName } from './serviceLogos';
import styles from './CaseStudy.module.css';

type IconName = Parameters<typeof Icon>[0]['name'];

function SectionLabel({ number, children }: { number: string; children: ReactNode }) {
  return <p className={styles.label}><span>{number}</span>{children}</p>;
}

export function CaseStudyPage({ accent, soft, children }: { accent: string; soft: string; children: ReactNode }) {
  return <main id="main" className={styles.page} style={{ '--accent': accent, '--accent-soft': soft } as CSSProperties}>
    <div className={styles.breadcrumb}><Link href="/portfolio"><Icon name="back" size={17} />All projects</Link></div>
    {children}
    <div className={styles.return}><Link href="/portfolio"><Icon name="back" size={18} />Back to all projects</Link></div>
  </main>;
}

export function CaseHero({ label, title, description, colors, visual, next = 'problem' }: {
  label: string; title: ReactNode; description: ReactNode; colors: string[]; visual: Visual; next?: string;
}) {
  return <section className={styles.hero} aria-labelledby="project-title">
    <Gradient colors={colors} />
    <div className={styles.heroText}>
      <p className={styles.client}>{label}</p>
      <h1 id="project-title">{title}</h1>
      <p className={styles.heroDescription}>{description}</p>
      <a href={`#${next}`} className={styles.heroLink}>See how it works <Icon name="arrow" size={18} /></a>
    </div>
    <div className={styles.heroVisual}><ProjectVisual kind={visual} /></div>
  </section>;
}

type Card = { icon: IconName; title: string; text: ReactNode };

export function ProblemSection({ heading, story, pains, id = 'problem', number = '01', label = 'The problem' }: {
  heading: ReactNode; story: ReactNode; pains: Card[]; id?: string; number?: string; label?: string;
}) {
  return <section id={id} className={styles.section} aria-labelledby={`${id}-title`}>
    <SectionLabel number={number}>{label}</SectionLabel>
    <div className={styles.split}>
      <h2 id={`${id}-title`}>{heading}</h2>
      <div className={styles.story}>{story}</div>
    </div>
    <div className={styles.pains}>
      {pains.map(pain => <article key={pain.title} className={styles.pain} data-pain-point>
        <span className={styles.painIcon}><Icon name={pain.icon} size={22} /></span>
        <h3>{pain.title}</h3>
        <p>{pain.text}</p>
      </article>)}
    </div>
  </section>;
}

export function SolutionSection({ statement, detail }: { statement: ReactNode; detail: ReactNode }) {
  return <section id="solution" className={styles.section} aria-labelledby="solution-title">
    <SectionLabel number="02">The solution</SectionLabel>
    <div className={styles.solution}>
      <h2 id="solution-title" className={styles.statement}>{statement}</h2>
      <p className={styles.solutionDetail}>{detail}</p>
    </div>
  </section>;
}

export function StepsSection({ heading, steps, number = '03' }: {
  heading: ReactNode; steps: { title: string; text: ReactNode; visual: ReactNode }[]; number?: string;
}) {
  return <section id="how-it-works" className={styles.section} aria-labelledby="steps-title">
    <SectionLabel number={number}>How it works</SectionLabel>
    <h2 id="steps-title" className={styles.sectionHeading}>{heading}</h2>
    <ol className={styles.steps}>
      {steps.map((step, i) => <li key={step.title} className={styles.step} data-step>
        <div className={styles.stepText}>
          <span className={styles.stepNumber} aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
          <h3>{step.title}</h3>
          <div className={styles.stepBody}>{step.text}</div>
        </div>
        <div className={styles.stepVisual} aria-hidden="true">{step.visual}</div>
      </li>)}
    </ol>
  </section>;
}

export function BeforeAfter({ heading, before, after, humanNote }: {
  heading: ReactNode; before: string[]; after: string[]; humanNote: ReactNode;
}) {
  return <section id="what-changes" className={styles.section} aria-labelledby="changes-title">
    <SectionLabel number="04">What changes</SectionLabel>
    <h2 id="changes-title" className={styles.sectionHeading}>{heading}</h2>
    <div className={styles.compare}>
      <div className={styles.before} data-before>
        <h3>Before</h3>
        <ul>{before.map(item => <li key={item}><Icon name="minus" size={18} />{item}</li>)}</ul>
      </div>
      <div className={styles.after} data-after>
        <h3>After</h3>
        <ul>{after.map(item => <li key={item}><Icon name="check" size={18} />{item}</li>)}</ul>
      </div>
    </div>
    <p className={styles.humanNote}>{humanNote}</p>
  </section>;
}

export function DemoSection({ id, heading, text, video, number = '05' }: {
  id: string; heading: ReactNode; text: ReactNode; number?: string;
  video?: { videoId: string; src: string; poster: string; label: string };
}) {
  return <section id={id} className={styles.section} aria-labelledby={`${id}-title`}>
    <SectionLabel number={number}>See it in action</SectionLabel>
    <div className={styles.demoIntro}>
      <h2 id={`${id}-title`} className={styles.sectionHeading}>{heading}</h2>
      <p>{text}</p>
    </div>
    <div className={styles.filmFrame}>
      {video
        ? <video id={video.videoId} className={styles.film} width="1920" height="1080" controls playsInline preload="metadata" poster={video.poster} aria-label={video.label}>
            <source src={video.src} type="video/mp4" />
            Your browser does not support embedded video. <a href={video.src}>Open the video file</a>.
          </video>
        : <div className={styles.placeholder} data-demo-placeholder><Icon name="play" size={28} /><p>Demo video coming soon</p></div>}
    </div>
  </section>;
}

// Light brand colors (e.g. JavaScript yellow) get a dark glyph so the logo stays readable.
function isLight(hex: string) {
  const [r, g, b] = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16));
  return 0.299 * r + 0.587 * g + 0.114 * b > 170;
}

type StackItem = { name: string; text: string; logo?: LogoName; icon?: IconName };

function LogoTile({ item, small }: { item: StackItem; small?: boolean }) {
  const brand: Logo | null = item.logo ? logos[item.logo] : null;
  const glyph = brand && isLight(brand.hex) ? '#1c1c1e' : '#fff';
  return <span className={small ? styles.logoSmall : styles.logo} style={{ background: brand?.hex ?? 'var(--accent)' }} aria-hidden="true">
    {brand
      ? <svg viewBox={brand.viewBox ?? '0 0 24 24'} fill={glyph} fillRule={brand.evenOdd ? 'evenodd' : undefined}>
          {brand.parts ? brand.parts.map(part => <path key={part.d} d={part.d} fill={part.fill} />) : <path d={brand.path} />}
        </svg>
      : <Icon name={item.icon ?? 'shield'} size={small ? 14 : 22} style={{ color: '#fff' }} />}
  </span>;
}

export function StackSection({ items }: { items: StackItem[] }) {
  return <details className={styles.technical} data-stack>
    <summary>
      How it’s built
      <span className={styles.summaryEnd}>
        <span className={styles.logoRow}>{items.filter(item => item.logo).map(item => <LogoTile key={item.name} item={item} small />)}</span>
        <span className={styles.toggle} aria-hidden="true">+</span>
      </span>
    </summary>
    <div className={styles.stack}>
      {items.map(item => <div key={item.name} className={styles.stackItem}>
        <LogoTile item={item} />
        <div><h3>{item.name}</h3><p>{item.text}</p></div>
      </div>)}
    </div>
  </details>;
}
