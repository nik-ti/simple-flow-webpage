import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogosBar from "@/components/LogosBar";
import PlatformTabs from "@/components/PlatformTabs";
import FeatureCards from "@/components/FeatureCards";
import SeeItWork from "@/components/SeeItWork";
import Solutions from "@/components/Solutions";
import Reviews from "@/components/Reviews";
import BottomCTA from "@/components/BottomCTA";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogosBar />
        <PlatformTabs />
        <FeatureCards />
        <SeeItWork />
        <Solutions />
        <Reviews />
        <BottomCTA />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
