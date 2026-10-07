// Small building blocks for the "How it works" step illustrations: a window, chat bubbles,
// a checklist, label/value rows, and tags. They pick up each page's --accent color.
// All content shown in them is fictional example data.
import type { ReactNode } from 'react';
import Icon from '@/components/portfolio/Icon';
import styles from './MiniUI.module.css';

type IconName = Parameters<typeof Icon>[0]['name'];

export function Window({ title, icon, mark, children, footer, tone = 'neutral' }: {
  title: ReactNode; icon?: IconName; mark?: string; children: ReactNode; footer?: ReactNode; tone?: 'neutral' | 'success';
}) {
  return <div className={styles.window}>
    <div className={styles.header}>
      {mark ? <span className={styles.mark}>{mark}</span> : icon ? <span className={styles.headerIcon}><Icon name={icon} size={16} /></span> : null}
      <b>{title}</b>
    </div>
    <div className={styles.body}>{children}</div>
    {footer && <div className={tone === 'success' ? styles.footerSuccess : styles.footer}>{footer}</div>}
  </div>;
}

export function Bubble({ from, children }: { from: 'me' | 'them'; children: ReactNode }) {
  return <p className={from === 'me' ? styles.me : styles.them}>{children}</p>;
}

export function Checklist({ items }: { items: [string, 'done' | 'now' | 'next'][] }) {
  return <ul className={styles.checklist}>
    {items.map(([label, state]) => <li key={label} className={styles[state]}>
      <span>{state === 'done' ? <Icon name="check" size={12} /> : null}</span>{label}
    </li>)}
  </ul>;
}

export function Rows({ rows }: { rows: [string, ReactNode][] }) {
  return <dl className={styles.rows}>
    {rows.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
  </dl>;
}

export function Tag({ children, tone = 'accent' }: { children: ReactNode; tone?: 'accent' | 'muted' | 'success' }) {
  return <span className={`${styles.tag} ${styles[tone]}`}>{children}</span>;
}

export function Note({ icon, children }: { icon: IconName; children: ReactNode }) {
  return <span className={styles.note}><Icon name={icon} size={15} />{children}</span>;
}

export function Stack({ children }: { children: ReactNode }) {
  return <div className={styles.stack}>{children}</div>;
}
