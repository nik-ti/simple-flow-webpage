// The review-request case study: a short feedback page that sends happy customers to Google
// and lets everyone else speak to the business privately. Examples use Navat, a restaurant.
import type { Metadata } from 'next';
import { BeforeAfter, CaseHero, CaseStudyPage, DemoSection, ProblemSection, SolutionSection, StackSection, StepsSection } from '@/components/portfolio/case-study/CaseStudy';
import { projects } from '@/data/projects';
import { GoogleVisual, PrivateVisual, RateVisual, AskVisual } from './StepVisuals';

export const metadata: Metadata = {
  title: 'More 5-star reviews on autopilot — Simple Flow',
  description: 'A short feedback page sent after every job or visit: five-star customers go straight to Google reviews, and everyone else tells the business privately.',
};

export default function ReviewRequests() {
  return <CaseStudyPage accent="#a3365c" soft="#f8e4eb">
    <CaseHero
      label="Automation"
      title={<>More 5-star reviews<br />on autopilot</>}
      description={<>Happy customers, sent to Google. <br />Everyone else, heard in private.</>}
      colors={projects[4].colors}
      visual="feedback"
    />

    <ProblemSection
      heading="Happy customers rarely write reviews. Unhappy ones often do."
      story={<>
        <p>After a good experience, most customers simply get on with their day. The ones who had a problem are more likely to say so, and often the first place the business hears about it is a public review.</p>
        <p>Asking every customer for feedback by hand is the kind of task that gets skipped on a busy week.</p>
      </>}
      pains={[
        { icon: 'star', title: 'Good experiences go unmentioned', text: 'Satisfied customers rarely think to leave a review on their own.' },
        { icon: 'chat', title: 'Problems surface in public', text: 'Complaints reach Google before the business has a chance to respond.' },
        { icon: 'clock', title: 'Asking by hand gets skipped', text: 'Following up after every job or visit is easy to forget when the team is busy.' },
      ]}
    />

    <SolutionSection
      statement={<>We built a short feedback page that every customer gets after their job or visit. <em>Five-star customers go straight to Google</em> to post a review, and <em>everyone else tells the business privately</em>.</>}
      detail="It takes the customer a few seconds and the team no time at all. The request goes out on its own, so nobody has to remember to ask."
    />

    <StepsSection
      heading="One link, one tap."
      steps={[
        { title: 'A quick ask after every job or visit', text: <p>A thank-you text after the job, or a QR code on the table or receipt, opens a short feedback page with the business’s own look.</p>, visual: <AskVisual /> },
        { title: 'The customer taps a star', text: <p>The page asks one question: how was it?</p>, visual: <RateVisual /> },
        { title: 'Five stars: straight to Google', text: <p>Google’s “write a review” box opens directly, with no searching for the business. Happy customers post while the experience is still fresh.</p>, visual: <GoogleVisual /> },
        { title: 'One to four stars: a private message', text: <><p>The customer sees a simple “what could we do better?” form. Most people say what they need to say right there, and move on.</p><p>Their message lands in the owner’s inbox instead of on Google, so the business can fix it and follow up.</p></>, visual: <PrivateVisual /> },
      ]}
    />

    <BeforeAfter
      heading="Feedback reaches the right place."
      before={[
        'Review requests depend on someone remembering to send them.',
        'Happy customers aren’t prompted to share their experience.',
        'Problems are often first heard about in public.',
        'There’s no easy way to tell who a comment came from.',
      ]}
      after={[
        'A request goes out automatically after every job or visit.',
        'Five-star customers land right on the review box.',
        'Other feedback reaches the owner first, so they can respond.',
        'Each message arrives with the customer’s name or the location attached.',
      ]}
      humanNote="The page collects feedback. Following up is done by a person."
    />

    <DemoSection
      id="feedback-demo"
      heading="Both paths, side by side."
      text="A guest scans the QR code at Navat and taps five stars, straight to the review box. A second guest taps three stars and tells the restaurant privately. Guest messages are fictional."
      video={{
        videoId: 'review-requests-video',
        src: '/videos/review-requests.mp4',
        poster: '/videos/review-requests-poster.jpg',
        label: 'Navat feedback page: a five-star rating goes to the review box, a three-star rating opens a private feedback form.',
      }}
    />

    <StackSection items={[
      { name: 'HTML, CSS & JavaScript', logo: 'javascript', text: 'A single, lightweight page with no framework, so it loads quickly on any phone.' },
      { name: 'Vercel', logo: 'vercel', text: 'Hosts the page and the small function that sends feedback emails.' },
      { name: 'Resend', logo: 'resend', text: 'Delivers each private message to the owner’s inbox.' },
      { name: 'Google reviews', logo: 'google', text: 'Five-star customers open the business’s review box directly.' },
    ]} />
  </CaseStudyPage>;
}
