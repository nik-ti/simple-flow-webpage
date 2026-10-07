// Step illustrations for the reactivation page: the cleaned customer list, the two-week
// sending schedule, the plain personal message, and the booking check. Example data only.
import Icon from '@/components/portfolio/Icon';
import { Checklist, Note, Rows, Tag, Window } from '@/components/portfolio/case-study/MiniUI';
import styles from './page.module.css';

export function CleanVisual() {
  return <Window title="Past customers" icon="document" tone="success" footer={<Note icon="check">Ready to schedule</Note>}>
    <Checklist items={[['Old and current systems merged', 'done'], ['Duplicates removed', 'done'], ['First names tidied up', 'done'], ['Each person matched to their brand', 'done']]} />
  </Window>;
}

export function ScheduleVisual() {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  return <Window title="Sending schedule" icon="clock" footer={<Note icon="shield">Only two weeks are queued at a time</Note>}>
    <div className={styles.calendar}>
      {days.map((d, i) => <span key={`h${i}`} className={styles.dayName}>{d}</span>)}
      {Array.from({ length: 14 }, (_, i) => <span key={i} className={styles.day}><i style={{ height: `${40 + ((i * 37) % 50)}%` }} /></span>)}
    </div>
    <Tag tone="muted">Spread across the morning, newest customers first</Tag>
  </Window>;
}

export function MessageVisual() {
  return <Window title="Hi Jordan, it’s been a while" icon="chat" footer={<Note icon="mail">By email or text</Note>}>
    <div className={styles.email}>
      <p>Hi Jordan,</p>
      <p>It’s Steve. It’s been a while since we last worked together, so I wanted to check in.</p>
      <p>If you need us again, or know someone who does, there’s a returning-customer discount for you and anyone you refer. Just reply here.</p>
      <small>Reply anytime · Opt out</small>
    </div>
  </Window>;
}

export function BookingCheckVisual() {
  return <Window title="Before each run" icon="shield">
    <Rows rows={[['Jordan Lee', <Tag key="j" tone="success"><Icon name="check" size={12} />Booked again</Tag>], ['Queued email', <Tag key="q" tone="muted">Cancelled</Tag>], ['Future emails', <Tag key="f" tone="muted">Skipped</Tag>]]} />
  </Window>;
}
