// Step illustrations for the Voice Type page: the hotkey and waveform, on-device
// transcription, raw vs. polished text, and the paste into the original app.
import Icon from '@/components/portfolio/Icon';
import { Note, Tag, Window } from '@/components/portfolio/case-study/MiniUI';
import styles from './page.module.css';

const wave = [10, 18, 30, 14, 36, 46, 28, 16, 38, 52, 40, 22, 12, 26, 42, 30, 16, 34, 20, 12];

export function HotkeyVisual() {
  return <div className={styles.recorder}>
    <div className={styles.keys}><kbd>fn</kbd><span>hold to talk</span></div>
    <div className={styles.pill}>
      <span className={styles.mic}><Icon name="mic" size={18} /></span>
      <div className={styles.wave}>{wave.map((h, i) => <i key={i} style={{ height: h }} />)}</div>
    </div>
  </div>;
}

export function LocalVisual() {
  return <Window title="Speech to text" icon="mic" footer={<Note icon="shield">Processed on this Mac. Nothing uploaded.</Note>} tone="success">
    <p className={styles.raw}>so um I think we should uh move the call to thursday because the the design isn’t ready yet</p>
    <Tag tone="muted">English · Russian · more European languages</Tag>
  </Window>;
}

export function PolishVisual() {
  return <div className={styles.compare}>
    <div className={styles.rawCard}><small>Heard</small><p>so um I think we should uh move the call to thursday because the the design isn’t ready yet</p></div>
    <div className={styles.cleanCard}><small>Polished</small><p>I think we should move the call to Thursday, because the design isn’t ready yet.</p></div>
  </div>;
}

export function PasteVisual() {
  return <Window title="Messages" icon="chat">
    <div className={styles.compose}>
      <p>I think we should move the call to Thursday, because the design isn’t ready yet.<span className={styles.caret} /></p>
    </div>
    <Tag tone="success"><Icon name="check" size={12} />Pasted where you started</Tag>
  </Window>;
}
