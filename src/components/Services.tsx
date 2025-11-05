import { Bot, Workflow, Cpu } from 'lucide-react';

const services = [
  {
    icon: Workflow,
    title: 'Automations',
    features: [
      'Connect any tools and platforms',
      'Remove repetitive tasks',
      'Workflows that run 24/7',
    ],
  },
  {
    icon: Cpu,
    title: 'AI Agents & Integrations',
    features: [
      'Personal / business AI agents',
      'Tailored AI tool integrations',
      'Intelligent systems for decisions, research, or analysis',
    ],
  },
  {
    icon: Bot,
    title: 'Telegram Bots',
    features: [
      'Custom bots for any purpose',
      'AI, crypto payments, databases, and other integrations',
      'Bots as a frontend for your tools',
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:py-24"
    >
      <div className="mb-12 md:mb-16">
        <h2 className="text-4xl font-semibold md:text-5xl">
          What{' '}
          <span className="bg-gradient-to-r from-[#1e66ff] via-[#7c5cff] to-[#22d3ee] bg-clip-text text-transparent">
            I Do
          </span>
        </h2>
        <p className="mt-4 max-w-2xl text-zinc-400 md:text-lg">
          Transform your workflow with tailored solutions that work for you
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <div
              key={idx}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all hover:border-[#1e66ff]/50 hover:shadow-[0_10px_40px_rgba(30,102,255,0.15)]"
            >
              <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-gradient-to-br from-[#1e66ff]/20 to-[#7c5cff]/20 p-3">
                <Icon size={24} className="text-[#22d3ee]" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-white">
                {service.title}
              </h3>
              <ul className="space-y-2.5">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#22d3ee]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
