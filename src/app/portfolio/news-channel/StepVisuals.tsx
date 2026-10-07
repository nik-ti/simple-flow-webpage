// Step illustrations for the AI news channel page: sources being watched, repeats collapsing
// into one story, the usefulness filter, the writer/editor checks, and the finished post. Example data only.
import Icon from '@/components/portfolio/Icon';
import { Checklist, Note, Tag, Window } from '@/components/portfolio/case-study/MiniUI';
import styles from './page.module.css';

export function SourcesVisual() {
  return <Window title="Watching" icon="clock">
    {[['LAB', 'AI labs’ own blogs', 'Launches and updates'], ['RSS', 'Newsletters', 'Daily roundups'], ['GH', 'GitHub', 'Trending tools and skills'], ['X', 'X accounts', 'The first to break news']].map(([mark, name, when]) => <div key={name} className={styles.source}>
      <span>{mark}</span><b>{name}</b><small>{when}</small>
    </div>)}
  </Window>;
}

export function DedupeVisual() {
  return <div className={styles.dedupe}>
    <div className={styles.copies}>
      {['New free app turns voice notes into to-do lists', 'This app writes your to-do list from voice memos', 'BREAKING: voice notes → tasks, for free'].map(text => <p key={text}>{text}</p>)}
    </div>
    <Icon name="arrow" size={20} />
    <div className={styles.single}><Tag>One story</Tag><p>A free app turns voice notes into to-do lists</p></div>
  </div>;
}

export function FilterVisual() {
  return <Window title="Can people use it today?" icon="document">
    {[['Image app adds free background removal', 'Post', true], ['New writing assistant opens to everyone', 'Post', true], ['AI startup raises a new round', 'Skip', false], ['Opinion: is AI overhyped?', 'Skip', false]].map(([title, verdict, keep]) => <div key={title as string} className={styles.verdict}>
      <span>{title}</span><Tag tone={keep ? 'accent' : 'muted'}>{verdict}</Tag>
    </div>)}
  </Window>;
}

export function EditorVisual() {
  return <Window title="Before it’s posted" icon="shield" tone="success" footer={<Note icon="check">Approved</Note>}>
    <Checklist items={[['Written in plain, simple language', 'done'], ['Every fact checked against the source', 'done'], ['Tells readers something new', 'done'], ['Picture or clip only if it helps', 'done']]} />
  </Window>;
}

export function PostVisual() {
  return <Window title="AI Flow" mark="AI" footer={<><Icon name="check" size={14} />Published to Telegram</>}>
    <p className={styles.headline}>A free app now turns your voice notes into a to-do list.</p>
    <ul className={styles.points}>
      <li>Record a note and it pulls out every task</li>
      <li>Works on phone and desktop, free to start</li>
      <li>Handy for anyone who thinks out loud</li>
    </ul>
    <p className={styles.link}>Try it →</p>
  </Window>;
}
