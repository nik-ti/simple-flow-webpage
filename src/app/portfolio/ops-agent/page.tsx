// The ops-agent case study: an internal assistant in team chat that books jobs from a
// screenshot and answers schedule questions. Built on the shared case-study template.
import type { Metadata } from 'next';
import { BeforeAfter, CaseHero, CaseStudyPage, DemoSection, ProblemSection, SolutionSection, StackSection, StepsSection } from '@/components/portfolio/case-study/CaseStudy';
import { projects } from '@/data/projects';
import { ActionsVisual, ApproveVisual, MissingVisual, ScheduleVisual, ScreenshotVisual } from './StepVisuals';

export const metadata: Metadata = {
  title: 'Internal Ops Agent — Simple Flow',
  description: 'An internal assistant that books moving jobs from a screenshot of the enquiry and answers questions about the schedule.',
};

export default function OpsAgent() {
  return <CaseStudyPage accent="#6a3fb0" soft="#ede6f8">
    <CaseHero
      label="AI agent"
      title={<>Internal<br />Ops Agent</>}
      description={<>Bookings from a screenshot. <br />Schedule answers in team chat.</>}
      colors={projects[1].colors}
      visual="ops"
    />

    <ProblemSection
      heading="Booking one job meant working through four different tools."
      story={<>
        <p>Enquiries reach a moving company’s office as Yelp and Google messages, texts, and emails. To book someone, managers asked the customer for their details, then typed them into the CRM by hand, created the calendar event, sent the deposit invoice, and wrote the confirmation email, one tool at a time.</p>
        <p>Besides that, getting simple stats, like how many jobs they had in the last few days, weeks, or months, meant manual work as well.</p>
      </>}
      pains={[
        { icon: 'repeat', title: 'The same manual booking process, again and again', text: 'Customer types their info → managers type it into their CRM → managers send the deposit payment link and confirmation letter.' },
        { icon: 'puzzle', title: 'Hard to spot errors', text: 'Customers often send non-existent emails or misspelled addresses.' },
        { icon: 'clock', title: 'Answers buried in the calendar', text: 'Checking the schedule or counting past jobs took scrolling and tallying.' },
      ]}
    />

    <SolutionSection
      statement={<>We built an assistant the team talks to in Google Chat. It <em>books a job from a screenshot</em> of the enquiry and <em>answers questions about the schedule</em>.</>}
      detail="Nothing is created or sent until someone on the team reviews the plan and replies “yes”. If one step fails, the report says exactly which, so nothing is left half-done without anyone knowing."
    />

    <StepsSection
      heading="From a screenshot to a booked job."
      steps={[
        { title: 'Drop in the enquiry', text: <p>Paste a screenshot of the customer’s message. The agent reads the name, contact details, addresses, date, and crew size from the image.</p>, visual: <ScreenshotVisual /> },
        { title: 'It asks for anything missing', text: <><p>Addresses are completed and verified, and emails are read character by character, so a typo doesn’t slip through. If something needed for a booking is missing, it asks.</p><p>The conversation genuinely pauses until the answer comes, whether that’s a minute or an hour later.</p></>, visual: <MissingVisual /> },
        { title: 'You approve the plan', text: <p>The agent shows exactly what it is about to do. Nothing happens until someone replies “yes”.</p>, visual: <ApproveVisual /> },
        { title: 'Every step, done together', text: <p>It verifies the info, creates or updates the CRM contact, books the calendar event, texts the customer a deposit invoice, and sends the confirmation email. It reports exactly what it did, and if there were any errors.</p>, visual: <ActionsVisual /> },
        { title: 'Ask about the schedule', text: <p>Questions like “how did last month look?” are answered from the calendar, broken down by job type and crew size.</p>, visual: <ScheduleVisual /> },
      ]}
    />

    <BeforeAfter
      heading="One message instead of four tools."
      before={[
        'Customer details are typed by hand into several systems.',
        'Invalid customer information isn’t always spotted.',
        'Invoices and confirmation emails are sent by hand.',
        'Schedule questions mean scrolling and counting in the calendar.',
      ]}
      after={[
        'Details are read once and entered into every system automatically.',
        'Addresses and emails are checked before anything is booked.',
        'Contact, calendar, invoice, and email are handled in one go, with a report of what was done and any errors.',
        'Schedule questions are answered in chat.',
      ]}
      humanNote="The agent does the busywork. A person approves every booking."
    />

    <DemoSection
      id="ops-demo"
      heading="A booking, start to finish."
      text="Watch the agent read an enquiry screenshot, ask for a missing address, wait for a “yes”, then book the job and answer a schedule question. All details in the video are fictional."
      video={{
        videoId: 'ops-agent-video',
        src: '/videos/ops-agent.mp4',
        poster: '/videos/ops-agent-poster.jpg',
        label: 'Example chat: the ops agent books a job from an enquiry screenshot, then answers a question about last month. Fictional data.',
      }}
    />

    <StackSection items={[
      { name: 'Python', logo: 'python', text: 'The language the whole agent is written in.' },
      { name: 'LangGraph', logo: 'langgraph', text: 'Lets the conversation pause for a missing detail or an approval, then pick up exactly where it stopped.' },
      { name: 'OpenAI', logo: 'openai', text: 'The vision model that reads the customer’s details from the screenshot.' },
      { name: 'Google Cloud Vision', logo: 'googlecloud', text: 'Reads the exact characters on screen, so emails and phone numbers come through without typos.' },
      { name: 'Google Chat', logo: 'googlechat', text: 'Where the team talks to the agent.' },
      { name: 'Google Calendar', logo: 'googlecalendar', text: 'The schedule it books into and answers questions from.' },
      { name: 'Google Maps', logo: 'googlemaps', text: 'Turns a partial address into a full, verified one.' },
      { name: 'GoHighLevel', logo: 'gohighlevel', text: 'The company’s CRM: customer contacts, deposit invoices, texts, and the confirmation email go through it.' },
      { name: 'Railway', logo: 'railway', text: 'Hosts the agent and keeps conversations on a saved volume.' },
    ]} />
  </CaseStudyPage>;
}
