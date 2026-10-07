// Step illustrations for the ops-agent page: a screenshot being read, a follow-up question,
// the approval summary, the four completed actions, and a schedule answer. Example data only.
import Icon from '@/components/portfolio/Icon';
import { Bubble, Checklist, Rows, Stack, Tag, Window } from '@/components/portfolio/case-study/MiniUI';
import styles from './page.module.css';

export function ScreenshotVisual() {
  return <Window title="Ops agent · Team chat" icon="chat">
    <div className={styles.shot}>
      <span className={styles.shotIcon}><Icon name="photo" size={18} /></span>
      <div><b>enquiry.png</b><small>Customer message from a review site</small></div>
    </div>
    <Rows rows={[['Customer', 'Jordan Lee'], ['Contact', 'jordan@example.com'], ['Move date', 'Friday, Oct 24'], ['Crew', 'Three movers']]} />
  </Window>;
}

export function MissingVisual() {
  return <Window title="Ops agent · Team chat" icon="chat">
    <Bubble from="them">Got it. I still need the pickup address before I can book this.</Bubble>
    <Bubble from="me">Sunset Blvd, Echo Park</Bubble>
    <Bubble from="them">Found it: the full address is verified and filled in. Anything else to change?</Bubble>
  </Window>;
}

export function ApproveVisual() {
  return <Window title="Ready to book" icon="document" footer={<><Icon name="clock" size={14} />Waiting for a “yes”</>}>
    <Checklist items={[['Create the customer contact', 'next'], ['Book Friday on the calendar', 'next'], ['Text the deposit invoice', 'next'], ['Send the confirmation email', 'next']]} />
    <Bubble from="me">yes</Bubble>
  </Window>;
}

export function ActionsVisual() {
  return <Window title="Booking report" icon="check" tone="success" footer={<><Icon name="check" size={14} />All steps finished</>}>
    <Checklist items={[['Customer details verified', 'done'], ['Contact created in the CRM', 'done'], ['Calendar event booked', 'done'], ['Deposit invoice texted', 'done'], ['Confirmation email sent', 'done']]} />
  </Window>;
}

export function ScheduleVisual() {
  return <Window title="Ops agent · Team chat" icon="chat">
    <Bubble from="me">How did last month look?</Bubble>
    <div className={styles.answer}>
      <p>Here’s last month by crew size:</p>
      <Stack>
        {[['Two movers', 92], ['Three movers', 64], ['Four movers', 34]].map(([label, width]) => <div key={label} className={styles.bar}>
          <span>{label}</span><i style={{ width: `${width}%` }} />
        </div>)}
      </Stack>
      <Tag>Read from the calendar</Tag>
    </div>
  </Window>;
}
