// The AI Flow case study: a Telegram channel that finds, filters, writes, and posts AI news
// on its own. It uses a shorter layout than the other pages: what it does → how → live channel link → stack.
import type { Metadata } from 'next';
import { CaseHero, CaseStudyPage, LiveLinkSection, ProblemSection, StackSection, StepsSection } from '@/components/portfolio/case-study/CaseStudy';
import { projects } from '@/data/projects';
import { DedupeVisual, EditorVisual, FilterVisual, LivePostVisual, PostVisual, SourcesVisual } from './StepVisuals';

export const metadata: Metadata = {
  title: 'AI news channel — Simple Flow',
  description: 'A fully automated Telegram channel that tracks AI news across the web, filters out the noise, and writes complete, fact-checked posts.',
};

export default function NewsChannel() {
  return <CaseStudyPage accent="#94600f" soft="#f6ead4">
    <CaseHero
      label="Automation"
      title={<>An AI news channel<br />that runs itself</>}
      description={<>AI news, found, filtered, written, <br />and posted to Telegram on its own.</>}
      colors={projects[3].colors}
      visual="news"
      next="what-it-does"
    />

    <ProblemSection
      id="what-it-does"
      label="What it does"
      heading="A fully automated news channel, from source to finished post."
      story={<>
        <p>AI Flow is a Telegram channel about AI tools that regular people can actually use: freelancers, business owners, designers, students.</p>
        <p>Nobody runs it by hand. The system finds the news, decides what’s worth posting, writes the post, checks it, and publishes it, around the clock.</p>
      </>}
      pains={[
        { icon: 'clock', title: 'Tracks sources across the web', text: 'AI labs’ own blogs, newsletters, GitHub, and the accounts that break AI news first, checked all day.' },
        { icon: 'shield', title: 'Filters out the junk', text: 'Repeats, hype, and news nobody can use today are dropped before a single word is written.' },
        { icon: 'document', title: 'Outputs a complete post', text: 'What it is, why it matters, who it’s for, and the link, with the right picture or clip. Everything you need in one post.' },
      ]}
    />

    <StepsSection
      number="02"
      heading="From a flood of news to one clear post."
      steps={[
        { title: 'Watches the sources', text: <p>New items are collected from company blogs, newsletters, GitHub, and X. For each one, the full article is read, not just the headline.</p>, visual: <SourcesVisual /> },
        { title: 'Keeps one copy of each story', text: <><p>Several checks catch repeats: the same link, the same headline, the same wording, and finally the same news told differently.</p><p>A repeat that adds something new becomes material for the next update instead of a duplicate post.</p></>, visual: <DedupeVisual /> },
        { title: 'Keeps only what’s useful', text: <p>An AI sorter asks one question: can a regular person use this today? Funding rounds, opinion pieces, and thin headlines are dropped.</p>, visual: <FilterVisual /> },
        { title: 'Writes, then fact-checks', text: <><p>One model writes the post in plain, simple language. An editor model from a different AI lab checks every fact against the source, and a last check makes sure readers haven’t seen it already.</p><p>If anything can’t be checked, nothing is posted.</p></>, visual: <EditorVisual /> },
        { title: 'Posts to Telegram', text: <p>The finished post goes out with the one picture or clip that shows what it’s about, and a direct link to the product.</p>, visual: <PostVisual /> },
      ]}
    />

    <LiveLinkSection
      number="03"
      id="news-live"
      heading={<>Read it on<br />Telegram</>}
      text="AI Flow is live. New posts land through the day, each one found, written, and checked by the system above."
      href="https://t.me/ai_flow_daily"
      cta="Open @ai_flow_daily"
      colors={projects[3].colors}
    >
      <LivePostVisual />
    </LiveLinkSection>

    <StackSection items={[
      { name: 'Python', logo: 'python', text: 'The language the whole pipeline is written in.' },
      { name: 'LangGraph', logo: 'langgraph', text: 'Runs the editorial steps in order: drop repeats, sort, group into stories, write, edit, check, publish.' },
      { name: 'SQLite', logo: 'sqlite', text: 'Remembers every item and story, so nothing is posted twice.' },
      { name: 'Telegram', logo: 'telegram', text: 'Where the finished posts are published.' },
      { name: 'FastAPI', logo: 'fastapi', text: 'Serves the data for a private dashboard that shows every decision the system made.' },
      { name: 'Next.js', logo: 'nextdotjs', text: 'The dashboard itself: posts, stories, stats, and why each item was kept or dropped.' },
      { name: 'Vercel', logo: 'vercel', text: 'Hosts the dashboard.' },
    ]} />
  </CaseStudyPage>;
}
