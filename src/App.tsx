import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Services from './components/Services';
import Process from './components/Process';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services', 'process', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScrollTop = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    handleScrollTop();
    window.addEventListener('scroll', handleScrollTop, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollTop);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0d12] text-white">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-20 -left-24 h-64 w-64 rounded-full blur-3xl md:-top-32 md:-left-40 md:h-[420px] md:w-[420px]"
        style={{
          background:
            'radial-gradient(60% 60% at 50% 50%, #7c5cff55 0%, #1e66ff25 50%, transparent 70%)',
        }}
        animate={{ y: [0, 10, -8, 0], rotate: [0, 8, -6, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full blur-3xl md:-bottom-32 md:-right-40 md:h-[520px] md:w-[520px]"
        style={{
          background:
            'radial-gradient(60% 60% at 50% 50%, #22d3ee55 0%, #14b8a625 50%, transparent 70%)',
        }}
        animate={{ y: [0, -12, 10, 0], rotate: [0, -10, 6, 0] }}
        transition={{ duration: 22, repeat: Infinity }}
      />

      <Navigation activeSection={activeSection} />
      <Hero />
      <Services />
      <Process />
      <Projects />
      <Contact />

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 shadow-[0_10px_30px_rgba(30,102,255,0.25)] backdrop-blur transition-all hover:-translate-y-1 hover:border-[#1e66ff]/60 hover:bg-white/10 hover:text-white"
        >
          <ArrowUp size={16} />
          Top
        </button>
      )}
    </div>
  );
}

export default App;
