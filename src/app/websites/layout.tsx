import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Websites & Landing Pages — Simple Flow",
  description:
    "Besides profitable automations and AI agents, we build custom websites and landing pages. Check out demo sites we've built.",
  openGraph: {
    title: "Websites & Landing Pages — Simple Flow",
    description:
      "Besides profitable automations and AI agents, we build custom websites and landing pages. Check out demo sites we've built.",
    type: "website",
  },
};

export default function WebsitesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
