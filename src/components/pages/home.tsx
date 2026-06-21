import Navbar from "../layout/navbar";
import HeroSection from "../sections/hero-section";
import HowItWorksSection from "../sections/how-it-works-section";
import StatsSection from "../sections/stats-section";
import ScienceSection from "../sections/science-section";
import AccountabilitySection from "../sections/accountability-section";
import TestimonialSection from "../sections/testimonial-section";
import FounderStorySection from "../sections/founder-story-section";
import CtaSection from "../sections/cta-section";
import Footer from "../layout/footer";

export default function Page() {
  return (
    <>
      <div hidden className="hidden" />
      <main>
        <Navbar />
        <HeroSection />
        <HowItWorksSection />
        <StatsSection />
        <ScienceSection />
        <AccountabilitySection />
        <TestimonialSection />
        <FounderStorySection />
        <CtaSection />
        <Footer />
      </main>
      <div className="absolute" />
    </>
  );
}
