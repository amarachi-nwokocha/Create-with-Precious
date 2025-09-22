"use client"

import Footer from "./components/Footer";
import HeroSection from "./components/hero";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners"
import TestimonialComp from "./components/TestimonialComp"
import CardVideoSec from "./components/CardVideoSec";
import FormsSec from "./components/FormsSec";

export default function Home() {
  return (
    <div className="relative bg-[#FEFFF1] backdrop-blur-[9px] overflow-hidden">
      <Navbar />
      <HeroSection />
      <Partners />
      <FormsSec />
        <CardVideoSec />
      <TestimonialComp />
      <Footer />
    </div>
  );
}
