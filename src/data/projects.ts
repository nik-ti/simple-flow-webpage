// Project copy, palettes, and page links for the portfolio gallery live here.
// Client company names are deliberately left out of the public pages.
export type Category = 'AI agents' | 'Automations' | 'Apps';
export type Visual = 'support' | 'ops' | 'news' | 'voice' | 'feedback' | 'reactivation';
export type Project = {
  id: Visual; title: string; category: Category; summary: string;
  colors: string[]; visual: Visual; href: string;
};
export const kindLabel: Record<Category, string> = { 'AI agents': 'AI agent', Automations: 'Automation', Apps: 'App' };
export const categories = ['All', 'AI agents', 'Automations', 'Apps'] as const;
export type Filter = typeof categories[number];
export const projects: Project[] = [
  { id: 'support', title: 'Customer support AI agent', category: 'AI agents', summary: 'From the first question to a move-ready request. A helpful first point of contact.', colors: ['#133aa6', '#316bd5', '#85b2f4', '#3864c4', '#162b78'], visual: 'support', href: '/portfolio/customer-support-agent' },
  { id: 'ops', title: 'Internal Ops Agent', category: 'AI agents', summary: 'A customer inquiry becomes a booking, invoice, and confirmation. Right from chat.', colors: ['#492591', '#8255ba', '#b995e3', '#6543a0', '#351d70'], visual: 'ops', href: '/portfolio/ops-agent' },
  { id: 'voice', title: 'VoiceType — don’t type it, just say it', category: 'Apps', summary: 'Speak naturally. Get clean, polished text with a transcription app that runs locally.', colors: ['#0b655f', '#3a9e90', '#a8d9c3', '#377e73', '#064a48'], visual: 'voice', href: '/portfolio/voice-type' },
  { id: 'news', title: 'An AI news channel that runs itself', category: 'Automations', summary: 'Tracks AI news across the web, filters out the noise, and posts complete updates to Telegram.', colors: ['#8b5811', '#c89a43', '#f3d496', '#c99c4e', '#81501c'], visual: 'news', href: '/portfolio/news-channel' },
  { id: 'feedback', title: 'More 5-star reviews on autopilot', category: 'Automations', summary: 'Automatic review requests and a simple way for customers to share their feedback.', colors: ['#8f3453', '#c77991', '#eeb7c2', '#b45879', '#722b49'], visual: 'feedback', href: '/portfolio/review-requests' },
  { id: 'reactivation', title: 'Reactivation campaign', category: 'Automations', summary: 'A thoughtful follow-up to previous customers, sent automatically when it is time.', colors: ['#a53b16', '#e1783e', '#f8b483', '#d76833', '#90300f'], visual: 'reactivation', href: '/portfolio/reactivation-campaign' },
];
