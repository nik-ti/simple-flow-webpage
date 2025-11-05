import { ExternalLink } from 'lucide-react';

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:py-24"
    >
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold md:text-5xl">
            Completed{' '}
            <span className="bg-gradient-to-r from-[#1e66ff] via-[#7c5cff] to-[#22d3ee] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mt-4 text-lg text-zinc-400 md:text-xl">
            See the projects that have already helped my customers save time and
            money
          </p>
          <a
            href="https://projects.simple-flow.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-2 rounded-full border border-[#1e66ff]/50 bg-gradient-to-r from-[#1e66ff] to-[#7c5cff] px-8 py-4 text-base font-medium text-white shadow-[0_0_30px_rgba(30,102,255,0.3)] transition-all hover:shadow-[0_0_40px_rgba(30,102,255,0.5)]"
          >
            View Portfolio
            <ExternalLink
              size={18}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
