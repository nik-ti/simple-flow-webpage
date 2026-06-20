import type { Metadata } from "next";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Automations & AI Agents — Simple Flow",
  description:
    "We build custom automations and AI agents that handle your operations. Done for you, live in 3 days.",
  openGraph: {
    title: "Automations & AI Agents — Simple Flow",
    description:
      "We build custom automations and AI agents that handle your operations. Done for you, live in 3 days.",
    type: "website",
    url: "https://www.simpleflow.com/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automations & AI Agents — Simple Flow",
    description:
      "We build custom automations and AI agents that handle your operations. Done for you, live in 3 days.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
