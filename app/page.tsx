"use client";

import AboutUsSection from "./components/AboutUsSection";
import CtaBand from "./components/CtaBand";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import IndustriesMarqueeSection from "./components/IndustriesMarqueeSection";
import MarketingGtmSection from "./components/MarketingGtmSection";
import OurServicesSection from "./components/OurServicesSection";
import OurWorkSection from "./components/OurWorkSection";
import ProcessRoadmapSection from "./components/ProcessRoadmapSection";
import { ScheduleCallProvider } from "./components/ScheduleCallModal";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <ScheduleCallProvider>
      <main className="w-full bg-white text-black">
        <Header />
        <HeroSection />
        <ServicesSection />
        <IndustriesMarqueeSection />
        <OurServicesSection />
        <MarketingGtmSection />
        <ProcessRoadmapSection />
        <OurWorkSection />
        <AboutUsSection />
        <FaqSection />
        <CtaBand />
        <Footer />
      </main>
    </ScheduleCallProvider>
  );
}
