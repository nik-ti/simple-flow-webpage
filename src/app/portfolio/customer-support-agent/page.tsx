// The moving-company support-agent case study, built on the shared case-study template.
// It reads problem → solution → steps → before/after → video → tech stack.
import type { Metadata } from 'next';
import { BeforeAfter, CaseHero, CaseStudyPage, DemoSection, ProblemSection, SolutionSection, StackSection, StepsSection } from '@/components/portfolio/case-study/CaseStudy';
import { projects } from '@/data/projects';
import { AnswerVisual, EmailVisual, HandoffVisual, InterviewVisual } from './StepVisuals';

export const metadata: Metadata = {
  title: 'Customer support AI agent — Simple Flow',
  description: 'How a moving company’s support agent answers routine questions and turns estimate requests into complete emails for the office.',
};

export default function SupportAgent() {
  return <CaseStudyPage accent="#2c5bbf" soft="#e3ebf9">
    <CaseHero
      label="AI agent"
      title={<>Customer support<br />AI agent</>}
      description={<>Moving questions answered. <br />Estimate requests ready for the team.</>}
      colors={projects[0].colors}
      visual="support"
    />

    <ProblemSection
      heading="Every question waited for someone in the office."
      story={<>
        <p>Visitors to a moving company’s website usually want the same few things: the rates, whether a move is covered, and how to get a quote. Each answer needed a person in the office to stop what they were doing and reply.</p>
        <p>Estimates took longer. Before a manager could price a move, they had to collect the addresses, the date, the size of the home, and photos of what was moving, often over several calls and texts.</p>
      </>}
      pains={[
        { icon: 'repeat', title: 'The same questions, again and again', text: 'Rates, service areas, and how quotes work were answered by hand, one customer at a time.' },
        { icon: 'puzzle', title: 'Details arrived in pieces', text: 'An estimate needs addresses, a date, the home size, and photos. Gathering them meant back-and-forth.' },
        { icon: 'moon', title: 'No one free to reply', text: 'Questions come in during jobs, in the evening, and on weekends, when the team is busy or away.' },
      ]}
    />

    <SolutionSection
      statement={<>We built Sam, a chat assistant on the website. He <em>answers routine questions</em> from the company’s own information and, when someone wants an estimate, <em>gathers everything the office needs</em>.</>}
      detail="Sam only says what is in the company’s approved material. When he doesn’t know something, he says so and passes the question to the office instead of guessing."
    />

    <StepsSection
      heading="Four things Sam does in a conversation."
      steps={[
        { title: 'Answers routine questions right away', text: <p>Sam replies in the team’s voice, using only the company’s own information about rates, services, and how quotes work.</p>, visual: <AnswerVisual /> },
        { title: 'Guides the estimate, one question at a time', text: <><p>When a customer wants a price, Sam asks for contact details, both addresses, the date, the home size, and photos.</p><p>Anything the customer already mentioned is skipped, so they never answer twice.</p></>, visual: <InterviewVisual /> },
        { title: 'Passes on what he can’t answer', text: <p>If a question isn’t covered, Sam offers to send it to the office along with the customer’s preferred contact. The customer knows where the answer will come from.</p>, visual: <HandoffVisual /> },
        { title: 'Sends the office one complete email', text: <p>Contact details, the move, and the photos arrive together. The manager has the full picture and can go straight to preparing the estimate.</p>, visual: <EmailVisual /> },
      ]}
    />

    <BeforeAfter
      heading="Less chasing. More time for the quote."
      before={[
        'Each routine question waits for a reply from the office.',
        'Estimate details arrive in pieces over calls and texts.',
        'Managers ask for photos before they can start pricing.',
        'Questions sent after hours wait until someone is back.',
      ]}
      after={[
        'Routine questions are answered right away from approved information.',
        'One email holds the contact details, the move, and the photos.',
        'Managers start from a complete request and focus on the quote.',
        'Unanswered questions reach the office with a way to reply.',
      ]}
      humanNote={<>The conversation is automated. The final price comes from a person.</>}
    />

    <DemoSection
      id="support-demo"
      heading="From the first question to the office inbox."
      text="Watch Sam handle familiar questions, guide a customer through an estimate request, and pass the organized details to the office. All details in the video are fictional."
      video={{
        videoId: 'support-agent-video',
        src: '/videos/support-agent.mp4',
        poster: '/videos/support-agent-poster.jpg',
        label: 'Example conversation: Sam answers routine questions, guides a moving estimate request, and shows the office handoff in a simulated Gmail inbox.',
      }}
    />

    <StackSection items={[
      { name: 'Python', logo: 'python', text: 'The language the whole agent is written in.' },
      { name: 'FastAPI', logo: 'fastapi', text: 'Runs the chat on the website and receives form details and photo uploads.' },
      { name: 'LangGraph', logo: 'langgraph', text: 'Guides the conversation and genuinely pauses while the customer replies.' },
      { name: 'SQLite', logo: 'sqlite', text: 'Keeps the conversation so a customer can pick up where they left off.' },
      { name: 'Resend', logo: 'resend', text: 'Delivers the request and its photos to the office.' },
    ]} />
  </CaseStudyPage>;
}
