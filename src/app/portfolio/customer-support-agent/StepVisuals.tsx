// Small illustrated mockups for the four "How it works" steps on the support-agent page.
// They are decorative examples with fictional details, not live chat or real customer data.
import type { ReactNode } from 'react';
import Icon from '@/components/portfolio/Icon';
import styles from './page.module.css';

function Chat({ messages, footer }: { messages: { from: 'customer' | 'sam'; text: string }[]; footer?: ReactNode }) {
  return <div className={styles.chat}>
    <div className={styles.chatHeader}><span className={styles.avatar}>S</span><b>Sam · Moving support</b></div>
    <div className={styles.chatBody}>
      {messages.map((m, i) => <p key={i} className={m.from === 'customer' ? styles.customer : styles.sam}>{m.text}</p>)}
    </div>
    {footer}
  </div>;
}

export function AnswerVisual() {
  return <Chat
    messages={[
      { from: 'customer', text: 'Do you handle out-of-state moves?' },
      { from: 'sam', text: 'Yes, we do long-distance and out-of-state moves. Want me to start an estimate?' },
    ]}
    footer={<div className={styles.source}><Icon name="document" size={15} />Answered from the company’s approved information</div>}
  />;
}

export function InterviewVisual() {
  const fields: [string, 'done' | 'now' | 'next'][] = [['Name', 'done'], ['Phone or email', 'done'], ['Addresses', 'done'], ['Move date', 'now'], ['Home size', 'next'], ['Photos', 'next']];
  return <div className={styles.interview}>
    <Chat messages={[{ from: 'sam', text: 'Got it. What date are you planning to move?' }]} />
    <ul className={styles.checklist}>
      {fields.map(([label, state]) => <li key={label} className={styles[state]}>
        <span>{state === 'done' ? <Icon name="check" size={12} /> : null}</span>{label}
      </li>)}
    </ul>
  </div>;
}

export function HandoffVisual() {
  return <Chat
    messages={[
      { from: 'customer', text: 'Just a fridge, how much extra?' },
      { from: 'sam', text: 'I’m not sure of the exact fee. Want me to send that to the office so someone can get back to you?' },
    ]}
    footer={<div className={styles.sent}><Icon name="mail" size={15} />Question sent to the office</div>}
  />;
}

function FurniturePreview({ kind }: { kind: 'sofa' | 'table' }) {
  return <svg viewBox="0 0 240 140" fill="none" aria-hidden="true">
    <path d="M25 108h190M43 108V30h154v78" stroke="#d2d8e1" />
    {kind === 'sofa' ? <>
      <path d="M65 88V62c0-7 5-12 12-12h86c7 0 12 5 12 12v26" fill="#bac7d7" stroke="#6e829e" strokeWidth="1.5" />
      <path d="M58 72c-4 0-7 3-7 7v21h138V79a7 7 0 0 0-14 0v8H65v-8c0-4-3-7-7-7Z" fill="#e0e6ee" stroke="#6e829e" strokeWidth="1.5" />
      <path d="M68 100v8m104-8v8M120 52v32M66 88h108" stroke="#6e829e" strokeWidth="1.5" />
    </> : <>
      <path d="m57 72 69-26 61 22-69 27-61-23Z" fill="#d9c5ae" stroke="#9f8c78" strokeWidth="1.5" />
      <path d="M61 74v28m57-7v24m65-49v29" stroke="#9f8c78" strokeWidth="5" />
      <path d="M157 34v22m0-11c-12 0-16-8-13-14 9 1 13 6 13 14Zm0-6c12 0 17-8 14-14-9 1-14 6-14 14Z" stroke="#7b9887" fill="#b9c8b8" />
    </>}
  </svg>;
}

export function EmailVisual() {
  return <div className={styles.requestSheet}>
    <div className={styles.sheetHeading}><Icon name="mail" size={20} /><b>Estimate request</b></div>
    <div className={styles.customerLine}><strong>Jordan Lee</strong><span>jordan@example.com</span></div>
    <div className={styles.moveRoute}><span>Echo Park</span><Icon name="arrow" size={18} /><span>Venice</span></div>
    <div className={styles.moveDetails}><span>Two bedrooms</span><span>Elevators at both ends</span></div>
    <div className={styles.attachments}>
      <div><FurniturePreview kind="sofa" /><span>Living room</span></div>
      <div><FurniturePreview kind="table" /><span>Furniture</span></div>
    </div>
  </div>;
}
