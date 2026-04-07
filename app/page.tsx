import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoint from "@/components/PainPoint";
import Solution from "@/components/Solution";
import VideoSection from "@/components/VideoSection";
import Experiences from "@/components/Experiences";
import Teacher from "@/components/Teacher";
import Science from "@/components/Science";
import Testimonials from "@/components/Testimonials";
import Locations from "@/components/Locations";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <PainPoint />
      <Solution />
      <VideoSection />
      <Experiences />
      <Teacher />
      <Science />
      <Testimonials />
      <Locations />
      <Footer />
      
      {/* Sticky CTA (Mobile-optimized) */}
      <a href="https://shop.soulvibetw.com" className="sticky-cta">
        📅 立即預約療癒體驗
      </a>
    </main>
  );
}
