import { useState } from 'react';
import { Mail, Send, MessageCircle } from 'lucide-react';

const regions = [
  { name: 'United States', code: '+1', flag: '🇺🇸' },
  { name: 'Canada', code: '+1', flag: '🇨🇦' },
  { name: 'United Kingdom', code: '+44', flag: '🇬🇧' },
  { name: 'Australia', code: '+61', flag: '🇦🇺' },
  { name: 'Germany', code: '+49', flag: '🇩🇪' },
  { name: 'France', code: '+33', flag: '🇫🇷' },
  { name: 'India', code: '+91', flag: '🇮🇳' },
  { name: 'Brazil', code: '+55', flag: '🇧🇷' },
  { name: 'Mexico', code: '+52', flag: '🇲🇽' },
  { name: 'Japan', code: '+81', flag: '🇯🇵' },
  { name: 'China', code: '+86', flag: '🇨🇳' },
  { name: 'South Korea', code: '+82', flag: '🇰🇷' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  );
  const [phoneError, setPhoneError] = useState('');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData({ ...formData, phone: value });

    if (value && !value.startsWith('+')) {
      setPhoneError('Phone number must start with +');
    } else {
      setPhoneError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.phone.startsWith('+')) {
      setPhoneError('Phone number must start with +');
      return;
    }

    setStatus('loading');

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="relative z-10 mx-auto max-w-6xl px-6 py-16 pb-32 md:py-24 md:pb-40"
    >
      <div className="mb-12 md:mb-16">
        <h2 className="text-4xl font-semibold md:text-5xl">
          Get In{' '}
          <span className="bg-gradient-to-r from-[#1e66ff] via-[#7c5cff] to-[#22d3ee] bg-clip-text text-transparent">
            Touch
          </span>
        </h2>
        <p className="mt-4 max-w-2xl text-zinc-400 md:text-lg">
          Ready to automate your workflow? Let's discuss how I can help
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-8"
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 outline-none transition-colors focus:border-[#1e66ff]/50 focus:bg-white/10"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 outline-none transition-colors focus:border-[#1e66ff]/50 focus:bg-white/10"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  required
                  className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-white placeholder-zinc-500 outline-none transition-colors focus:bg-white/10 ${
                    phoneError
                      ? 'border-red-500/50 focus:border-red-500/50'
                      : 'border-white/10 focus:border-[#1e66ff]/50'
                  }`}
                  placeholder="+1234567890"
                />
                {phoneError && (
                  <p className="mt-1 text-sm text-red-400">{phoneError}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  What can I help you with?
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 outline-none transition-colors focus:border-[#1e66ff]/50 focus:bg-white/10"
                  placeholder="Tell me about your project or what you'd like to automate..."
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#1e66ff]/50 bg-gradient-to-r from-[#1e66ff] to-[#7c5cff] px-6 py-3 font-medium text-white shadow-[0_0_30px_rgba(30,102,255,0.3)] transition-all hover:shadow-[0_0_40px_rgba(30,102,255,0.5)] disabled:opacity-50"
              >
                {status === 'loading' ? (
                  'Sending...'
                ) : status === 'success' ? (
                  'Message Sent!'
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        <div className="space-y-4 lg:col-span-2">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all hover:border-[#1e66ff]/50">
            <div className="mb-3 inline-flex rounded-xl border border-white/10 bg-white/5 p-2.5">
              <Mail size={20} className="text-[#22d3ee]" />
            </div>
            <h3 className="mb-2 font-medium text-white">Email</h3>
            <a
              href="mailto:contact@simple-flow.com"
              className="text-zinc-400 hover:text-[#22d3ee] transition-colors"
            >
              contact@simple-flow.com
            </a>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all hover:border-[#1e66ff]/50">
            <div className="mb-3 inline-flex rounded-xl border border-white/10 bg-white/5 p-2.5">
              <MessageCircle size={20} className="text-[#22d3ee]" />
            </div>
            <h3 className="mb-2 font-medium text-white">Telegram</h3>
            <a
              href="https://t.me/simpleflow"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-[#22d3ee] transition-colors"
            >
              @simpleflow
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
