// The VoiceType case study: a Mac dictation app that turns speech into clean text
// on the device and pastes it where you were typing. Built on the shared template.
import type { Metadata } from 'next';
import { BeforeAfter, CaseHero, CaseStudyPage, DemoSection, ProblemSection, SolutionSection, StackSection, StepsSection } from '@/components/portfolio/case-study/CaseStudy';
import { projects } from '@/data/projects';
import { HotkeyVisual, LocalVisual, PasteVisual, PolishVisual } from './StepVisuals';

export const metadata: Metadata = {
  title: 'VoiceType — Simple Flow',
  description: 'A free Mac dictation app: hold a key, speak, and clean text is pasted where you were typing. Everything runs on the device.',
};

export default function VoiceType() {
  return <CaseStudyPage accent="#1b7266" soft="#def0eb">
    <CaseHero
      label="App"
      title={<>VoiceType —<br />don’t type it, just say it</>}
      description={<>Hold a key and speak. Clean text appears <br />where you were typing. All on your Mac.</>}
      colors={projects[2].colors}
      visual="voice"
    />

    <ProblemSection
      heading="Typing is slower than talking, and dictation is messy."
      story={<>
        <p>Messages, notes, and AI prompts take longer to type than to say. Built-in dictation helps a little, but the raw text keeps every “um”, repeated word, and missing comma, so it needs editing before it can be sent.</p>
        <p>Tools that clean up dictation usually send each recording to a remote server and charge a monthly fee.</p>
      </>}
      pains={[
        { icon: 'clock', title: 'Slow to type', text: 'Longer messages and notes take far longer to type than to say out loud.' },
        { icon: 'repeat', title: 'Transcripts need cleaning', text: 'Raw speech-to-text keeps filler words and run-on sentences, so you end up editing anyway.' },
        { icon: 'shield', title: 'Recordings leave the computer', text: 'Many dictation tools process your voice on someone else’s server.' },
      ]}
    />

    <SolutionSection
      statement={<>We built VoiceType, a menu-bar app for Mac. Hold a key and speak: <em>recognition and clean-up run on your own computer</em>, and <em>the text is pasted where you were typing</em>.</>}
      detail="It’s free, and once its models are downloaded it works without an internet connection."
    />

    <StepsSection
      heading="Hold, speak, release."
      steps={[
        { title: 'Hold the key and speak', text: <><p>Hold Fn and a small waveform appears. A soft sound tells you the microphone is ready.</p><p>For longer takes, lock recording on and talk hands-free.</p></>, visual: <HotkeyVisual /> },
        { title: 'Speech becomes text on your Mac', text: <p>A speech model runs on the Mac’s own chip. English and Russian are supported, along with several other European languages.</p>, visual: <LocalVisual /> },
        { title: 'Polished, if you want it', text: <><p>Polished mode uses a small language model, also on the device, to tidy longer takes: filler words out, punctuation in.</p><p>If the model is busy or slow, simple rules clean the text instead, so you never wait long.</p></>, visual: <PolishVisual /> },
        { title: 'Pasted where you started', text: <p>The text lands in the app you were using. If you switched apps in the meantime, it waits on the clipboard rather than typing into the wrong window.</p>, visual: <PasteVisual /> },
      ]}
    />

    <BeforeAfter
      heading="Say it once. Send it as is."
      before={[
        'Long messages are typed out by hand.',
        'Dictated text needs cleaning before it can be sent.',
        'Recordings are processed on remote servers.',
        'Good dictation tools come with a subscription.',
      ]}
      after={[
        'Hold a key, speak, and release.',
        'Filler words and punctuation are handled automatically.',
        'Everything is processed on the Mac itself.',
        'Free, and works offline after setup.',
      ]}
      humanNote="You stay in control: text is never typed into an app you’ve moved away from."
    />

    <DemoSection
      id="voice-demo"
      heading="From voice to finished text."
      text="Hold Fn, speak with all the usual “ums”, release, and a clean sentence is pasted into the message."
      video={{
        videoId: 'voice-type-video',
        src: '/videos/voice-type.mp4',
        poster: '/videos/voice-type-poster.jpg',
        label: 'VoiceType on a Mac: holding Fn, speaking, and a polished sentence pasted into a message.',
      }}
    />

    <StackSection items={[
      { name: 'Swift', logo: 'swift', text: 'The whole app is written in Swift as a native menu-bar app.' },
      { name: 'Apple silicon', logo: 'apple', text: 'Speech and language models run on the Mac’s own chip and graphics.' },
      { name: 'NVIDIA Parakeet', logo: 'nvidia', text: 'The speech recognition model that turns audio into text.' },
      { name: 'Qwen3', logo: 'qwen', text: 'A small language model that polishes longer takes, entirely on the device.' },
      { name: 'SQLite', logo: 'sqlite', text: 'Keeps a local history of past dictations.' },
    ]} />
  </CaseStudyPage>;
}
