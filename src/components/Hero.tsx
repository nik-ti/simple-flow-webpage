export default function Hero() {
  return (
    <section
      id="hero"
      className="relative z-10 mx-auto max-w-6xl px-6 pt-32 pb-24 md:pt-40 md:pb-28"
    >
      <div className="max-w-4xl">
        <h1 className="text-balance text-5xl font-semibold sm:text-6xl md:text-7xl lg:text-8xl">
          Automate.{' '}
          <span className="bg-gradient-to-r from-[#1e66ff] via-[#7c5cff] to-[#22d3ee] bg-clip-text text-transparent">
            Integrate.
          </span>{' '}
          Scale.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-400 md:text-xl">
          Personalized automations and AI solutions that save you time and money
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <button
            onClick={() =>
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="group relative overflow-hidden rounded-full border border-[#1e66ff]/50 bg-gradient-to-r from-[#1e66ff] to-[#7c5cff] px-8 py-3 text-sm font-medium text-white shadow-[0_0_30px_rgba(30,102,255,0.3)] transition-all hover:shadow-[0_0_40px_rgba(30,102,255,0.5)]"
          >
            Get Started
          </button>
          <button
            onClick={() =>
              document
                .getElementById('projects')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="rounded-full border border-white/20 bg-white/5 px-8 py-3 text-sm font-medium text-zinc-200 backdrop-blur transition-all hover:bg-white/10"
          >
            View Projects
          </button>
        </div>
      </div>
    </section>
  );
}
