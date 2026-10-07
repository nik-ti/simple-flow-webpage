// The reactivation case study: a system that reaches out to every past customer with one
// personal message, by email or text, spread out over weeks. Built on the shared template.
import type { Metadata } from 'next';
import { BeforeAfter, CaseHero, CaseStudyPage, DemoSection, ProblemSection, SolutionSection, StackSection, StepsSection } from '@/components/portfolio/case-study/CaseStudy';
import { projects } from '@/data/projects';
import { BookingCheckVisual, CleanVisual, MessageVisual, ScheduleVisual } from './StepVisuals';

export const metadata: Metadata = {
  title: 'Reactivation campaign — Simple Flow',
  description: 'A system that automatically reaches out to every past customer with one personal message, by email or text, spread out over weeks.',
};

export default function ReactivationCampaign() {
  return <CaseStudyPage accent="#ad4317" soft="#fae6da">
    <CaseHero
      label="Automation"
      title={<>Reactivation<br />campaign</>}
      description={<>Your past customers already liked your work. <br />We remind them you’re still here.</>}
      colors={projects[5].colors}
      visual="reactivation"
    />

    <ProblemSection
      heading="Your easiest sale is a customer you already had."
      story={<>
        <p>Most businesses have a database of hundreds or thousands of past customers. They enjoyed the service, and then simply forgot about it. Many of them will need it again, or know someone who does.</p>
        <p>Past customers are the easiest sale there is: they already know and trust you, and reaching them costs next to nothing. But checking in with each one by hand never happens, and messaging everyone at once is how you end up in the spam folder.</p>
      </>}
      pains={[
        { icon: 'clock', title: 'No follow-up after the job', text: 'Once the service is done, most companies never reach out to the customer again.' },
        { icon: 'document', title: 'A list nobody uses', text: 'Past customers sit in old systems, forgotten.' },
        { icon: 'mail', title: 'Bulk messages land in spam', text: 'Messaging everyone at once, with images and tracking links, looks like marketing to email and text filters.' },
      ]}
    />

    <SolutionSection
      statement={<>We built a system that <em>automatically reaches out to every past customer</em> with <em>one personal message</em>, by email or text, spread out over weeks.</>}
      detail="Each message reads like a short note from a person at a business they already know, with a returning-customer offer. Replies go straight to the team."
    />

    <StepsSection
      heading="Careful, one customer at a time."
      steps={[
        { title: 'Clean up the list', text: <p>Contacts from old and current systems are merged and duplicates removed. First names are pulled out of messy name fields, and each person is matched to the brand they know.</p>, visual: <CleanVisual /> },
        { title: 'Schedule in small batches', text: <><p>Every customer gets their own send date. Only two weeks are queued at a time, so the campaign can be stopped quickly if anything looks wrong.</p><p>The most recent customers go first, while the sending address builds a good reputation.</p></>, visual: <ScheduleVisual /> },
        { title: 'Write like a person', text: <p>Plain text, no images or tracking links, sent from the brand’s own address with its phone number and a simple way to opt out.</p>, visual: <MessageVisual /> },
        { title: 'Skip anyone who already came back', text: <p>Before each run, recent bookings are checked. Anyone who already came back has their queued message cancelled and is left out from then on.</p>, visual: <BookingCheckVisual /> },
      ]}
    />

    <BeforeAfter
      heading="Every past customer hears from you again."
      before={[
        'Past customers never hear from the company after the job.',
        'Contact lists are split across old and new systems.',
        'A mass message would risk the spam folder.',
        'Customers who come back on their own could still get a sales message.',
      ]}
      after={[
        'Each past customer gets one personal check-in.',
        'One clean list, with every person under the right brand.',
        'Messages go out gradually and read like a note from a person.',
        'Returning customers are found and skipped automatically.',
      ]}
      humanNote="The message starts the conversation. Replies go to a real person."
    />

    <DemoSection
      id="reactivation-demo"
      heading="From an old contact to a reply."
      text="Follow one past customer: the list is cleaned, sends are scheduled, a personal message arrives, and the reply reaches a real person. All names in the video are fictional."
      video={{
        videoId: 'reactivation-video',
        src: '/videos/reactivation-campaign.mp4',
        poster: '/videos/reactivation-campaign-poster.jpg',
        label: 'Illustration: past customers are cleaned up and scheduled, one receives a personal text, and their reply reaches the team.',
      }}
    />

    <StackSection items={[
      { name: 'Python', logo: 'python', text: 'Scripts that clean the list, schedule the messages, and run the booking check.' },
      { name: 'Resend', logo: 'resend', text: 'Holds each email until its send date and delivers it from the right brand’s domain.' },
      { name: 'Zoho', logo: 'zoho', text: 'The old CRM most past customers came from.' },
      { name: 'Supermove', logo: 'supermove', text: 'The current CRM: recent customers, and the bookings used to skip anyone who came back.' },
    ]} />
  </CaseStudyPage>;
}
