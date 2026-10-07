// Wraps every portfolio page in the site's own navigation and footer.
// The `portfolio` class scopes a few base styles the case studies rely on (see portfolio.css).
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./portfolio.css";

export const metadata: Metadata = {
  title: "Our work — Simple Flow",
  description: "AI agents, everyday automations, and tools we’ve built: what each one does, how it works, and a short film of it in action.",
  openGraph: {
    title: "Our work — Simple Flow",
    description: "AI agents, everyday automations, and tools we’ve built: what each one does, how it works, and a short film of it in action.",
    type: "website",
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="portfolio">{children}</div>
      <Footer />
    </>
  );
}
