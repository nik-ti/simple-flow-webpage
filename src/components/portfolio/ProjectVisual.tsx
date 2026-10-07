// Lightweight, project-specific UI illustrations explain what each system does.
// These are decorative previews, not interactive controls or measured results.
import type { Visual } from '@/data/projects';
import Icon from './Icon';
import styles from './ProjectVisual.module.css';
export default function ProjectVisual({ kind }: { kind: Visual }) {
  return <div className={`${styles.stage} ${styles[kind]}`} aria-hidden="true">
    {kind === 'support' && <>
      <div className={styles.chatWindow}><div className={styles.windowHeader}><span className={styles.avatar}>S</span><div><b>Sam · Support</b><small>Moving questions, answered.</small></div><span className={styles.online} /></div><div className={styles.chatBody}><p className={styles.customer}>Can you help with a 2-bedroom move?</p><div className={styles.agentReply}><span className={styles.smallAvatar}>S</span><p>Absolutely. Let’s get a few details so our team can put together an estimate.</p></div><div className={styles.input}>Tell us about your move <Icon name="arrow" size={14} /></div></div></div>
      <div className={styles.floatingNote}><span className={styles.success}><Icon name="check" size={14} /></span><div><b>Ready for the office</b><small>Details collected. Photos attached.</small></div></div>
    </>}
    {kind === 'ops' && <>
      <div className={styles.opsPrompt}><span className={styles.avatar}><Icon name="chat" size={17} /></span><div><small>Team chat</small><b>Book this move for October 24.</b></div><div className={styles.file}><Icon name="photo" size={21} /></div></div>
      <div className={styles.flowStem} /><div className={styles.approval}><Icon name="check" size={12} /> Confirmed by the team</div><div className={styles.flowStem} />
      <div className={styles.flowOutputs}>{[['document', 'Contact'], ['clock', 'Booking'], ['mail', 'Confirmation']].map(([icon, label]) => <div key={label}><Icon name={icon as 'document' | 'clock' | 'mail'} size={20} /><span>{label}</span><i><Icon name="check" size={10} /></i></div>)}</div>
    </>}
    {kind === 'voice' && <>
      <div className={styles.voiceBar}><span className={styles.mic}><Icon name="mic" size={22} /></span><div className={styles.wave}>{[10,20,30,14,36,49,31,18,39,56,42,24,13,28,43,31,17,36,22,12,25,39,18,10].map((height,i) => <i key={i} style={{height}} />)}</div><span className={styles.key}>fn</span></div>
      <div className={styles.transcript}><div><Icon name="document" size={16} /><span>Polished text</span><span className={styles.local}>On your device</span></div><p>Hey team, a quick update on the project. The first version is ready for a look.</p><span className={styles.caret} /></div>
    </>}
    {kind === 'news' && <>
      <div className={styles.newsBehind} /><div className={styles.newsWindow}><div className={styles.newsHeader}><span className={styles.newsAvatar}>AI</span><div><b>AI Flow</b><small>AI news you can use.</small></div><Icon name="diagonal" size={16} /></div><div className={styles.newsBody}><span className={styles.newsTag}>New tool</span><h4>The news.<br />Without the noise.</h4><div className={styles.newsLines}><span /><span /><span /></div></div><div className={styles.newsFooter}><span>Telegram channel</span><span>Published <Icon name="check" size={12} /></span></div></div>
    </>}
    {kind === 'feedback' && <>
      <div className={styles.reviewWindow}><span className={styles.reviewMark}><Icon name="chat" size={21} /></span><h4>How was your visit?</h4><p>A little feedback goes a long way.</p><div className={styles.stars}>{[1,2,3,4,5].map(n=><Icon name="star" size={26} key={n} />)}</div><div className={styles.reviewBottom}>Thanks for sharing your experience.</div></div><div className={styles.reviewNote}><Icon name="mail" size={16} /><span>Sent after every visit</span><Icon name="check" size={14} /></div>
    </>}
    {kind === 'reactivation' && <>
      <div className={styles.timeline}><span>Job completed</span><i /><span className={styles.timePill}><Icon name="clock" size={13} /> Time passes</span><i /></div><div className={styles.emailWindow}><div className={styles.emailHeader}><span className={styles.mailIcon}><Icon name="mail" size={19} /></span><div><small>A familiar name in their inbox</small><b>Need us again?</b></div></div><p>Hi Jordan,<br />It’s been a while. Whenever you need us, we’d love to help again.</p><div className={styles.emailBottom}><span>From a familiar name</span><span><Icon name="check" size={12} /> Follow-up sent</span></div></div>
    </>}
  </div>;
}
