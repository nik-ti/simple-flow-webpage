// Step illustrations for the review-request page, shown with Navat (a restaurant) as the example:
// the QR card, the star rating, the five-star path to Google, and the private feedback form.
import Icon from '@/components/portfolio/Icon';
import { Tag, Window } from '@/components/portfolio/case-study/MiniUI';
import styles from './page.module.css';

function Stars({ filled }: { filled: number }) {
  return <div className={styles.stars}>
    {[1, 2, 3, 4, 5].map(n => <span key={n} className={n <= filled ? styles.on : styles.off}><Icon name="star" size={28} /></span>)}
  </div>;
}

const qrCells = [0, 1, 2, 4, 6, 8, 9, 11, 13, 15, 17, 18, 19, 20, 23, 24, 26, 28, 30, 31, 33, 35, 37, 40, 41, 42, 44, 46, 47];

export function AskVisual() {
  return <div className={styles.qrCard}>
    <b className={styles.brand}>Navat</b>
    <p>Enjoyed your meal?</p>
    <div className={styles.qr}>{Array.from({ length: 49 }, (_, i) => <i key={i} className={qrCells.includes(i) ? styles.qrOn : undefined} />)}</div>
    <small>Scan to tell us how we did</small>
    <Tag tone="muted">Or sent by text after a job</Tag>
  </div>;
}

export function RateVisual() {
  return <div className={styles.rate}>
    <b className={styles.brand}>Navat</b>
    <h4>How was your visit?</h4>
    <Stars filled={0} />
    <small>Tap a star to rate</small>
  </div>;
}

export function GoogleVisual() {
  return <div className={styles.branch}>
    <Stars filled={5} />
    <Icon name="arrow" size={20} />
    <Window title="Navat · Write a review" icon="star">
      <div className={styles.googleStars}>{[1, 2, 3, 4, 5].map(n => <Icon key={n} name="star" size={18} />)}</div>
      <div className={styles.reviewBox}>Share details of your own experience…</div>
    </Window>
  </div>;
}

export function PrivateVisual() {
  return <div className={styles.branch}>
    <Stars filled={3} />
    <Icon name="arrow" size={20} />
    <Window title="Sorry it wasn’t perfect" icon="chat" tone="success" footer={<><Icon name="check" size={14} />Thanks for letting us know</>}>
      <p className={styles.prompt}>What could we do better?</p>
      <p className={styles.message}>The food was great, but our order took a long time.</p>
    </Window>
  </div>;
}
