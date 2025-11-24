import { Search, Pencil, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Evaluate',
    description:
      "Understand what's slowing you down. We analyze your current work process to find repetitive tasks, bottlenecks, and opportunities for automation.",
  },
  {
    icon: Pencil,
    title: 'Design',
    description:
      'Create a personalized solution. Map out the exact automations and systems you need—no generic templates, just what works for you.',
  },
  {
    icon: Rocket,
    title: 'Execute',
    description:
      'Build and deploy. We implement the solution, test everything, and make sure it runs smoothly so you can start saving time and money immediately.',
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:py-24"
    >
      <div className="mb-12 md:mb-16">
        <h2 className="text-4xl font-semibold md:text-5xl">
          How It{' '}
          <span className="bg-gradient-to-r from-[#1e66ff] via-[#7c5cff] to-[#22d3ee] bg-clip-text text-transparent">
            Works
          </span>
        </h2>
        <p className="mt-4 max-w-2xl text-zinc-400 md:text-lg">
          A simple three-step process to get you from idea to implementation
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div key={idx} className="relative">
              <div className="relative">
                <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-[#1e66ff]/20 to-[#7c5cff]/20 shadow-[0_0_30px_rgba(30,102,255,0.2)]">
                  <Icon size={32} className="text-[#22d3ee]" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
