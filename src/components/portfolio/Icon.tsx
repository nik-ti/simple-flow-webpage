// Small interface icons share a consistent stroke and remain decorative.
// Interactive elements provide their own accessible text labels.
import type { CSSProperties } from 'react';
const paths = {
  arrow: 'M5 12h14m-6-6 6 6-6 6', diagonal: 'M6 18 18 6M6 6h12v12', back: 'M19 12H5m6-6-6 6 6 6',
  check: 'm5 12 4 4L19 6', chat: 'M20 11a8 8 0 0 1-8 8H4l1-5a8 8 0 1 1 15-3Z',
  mail: 'M3 5h18v14H3V5Zm0 1 9 7 9-7', pause: 'M9 5v14M15 5v14', play: 'm8 5 11 7-11 7V5Z',
  replay: 'M4 10a8 8 0 1 1 1 7M4 4v6h6', document: 'M5 3h9l5 5v13H5V3Zm9 0v6h5M8 13h8M8 17h6',
  photo: 'M3 4h18v16H3V4Zm0 12 5-5 5 5 3-3 5 5M15 8h.01', star: 'm12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z',
  mic: 'M9 5a3 3 0 0 1 6 0v7a3 3 0 0 1-6 0V5Zm-3 6v1a6 6 0 0 0 12 0v-1M12 18v4m-4 0h8',
  clock: 'M12 7v5l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  repeat: 'M17 2l4 4-4 4M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4M21 13v2a3 3 0 0 1-3 3H3',
  shield: 'M12 3 5 6v5c0 4.5 3 8.3 7 10 4-1.7 7-5.5 7-10V6l-7-3Zm-3 9 2 2 4-4',
  moon: 'M20 13.5A8 8 0 1 1 10.5 4a6.5 6.5 0 0 0 9.5 9.5Z', minus: 'M6 12h12',
  puzzle: 'M4 7h4a2 2 0 1 1 4 0h4v4a2 2 0 1 1 0 4v4h-4a2 2 0 1 0-4 0H4v-4a2 2 0 1 0 0-4V7Z',
};
export default function Icon({ name, size = 20, style }: { name: keyof typeof paths; size?: number; style?: CSSProperties }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={style}><path d={paths[name]} /></svg>;
}
