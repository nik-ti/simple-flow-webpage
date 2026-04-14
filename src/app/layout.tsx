import type { Metadata } from "next";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Simple Flow — Automation for Home Service Businesses",
  description:
    "We build systems that make you more revenue and save you more time. Done-for-you automation for cleaning companies, HVAC, dental, auto repair, and more.",
  openGraph: {
    title: "Simple Flow — Automation for Home Service Businesses",
    description:
      "We build systems that make you more revenue and save you more time. No tech knowledge required.",
    type: "website",
    url: "https://www.simpleflow.com/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simple Flow — Automation for Home Service Businesses",
    description:
      "We build systems that make you more revenue and save you more time.",
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
