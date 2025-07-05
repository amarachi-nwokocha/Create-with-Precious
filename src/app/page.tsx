import Footer from "./components/Footer";
import HeroSection from "./components/hero";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners"
import Services from "./components/Services";
import TestimonialComp from "./components/TestimonialComp"
import FloatingBalls from "./components/FloatingBalls";
import PortfolioSection from "./components/PortfolioSection";

export default function Home() {
  return (
    <div className="relative bg-[#FEFFF1] backdrop-blur-[9px] overflow-hidden">
      <FloatingBalls />
      <Navbar />
      <HeroSection />
      <Partners />
      <Services />
      <TestimonialComp />
      <PortfolioSection />
      <Footer />
    </div>
  );
}
