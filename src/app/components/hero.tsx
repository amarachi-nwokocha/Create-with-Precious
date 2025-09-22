"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const changingWords = ["watch", "love", "share"];

const DynamicWords = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % changingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="text-[#8c1825] inline-block ml-2">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
        >
          {changingWords[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default function HeroSection() {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center text-center px-4"
      style={{
        backgroundImage: "url('/about2.jpg')", // <-- put image in /public
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay to darken image */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Centered Text */}
      <div className="relative z-10 max-w-3xl">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
       Struggling to create content people
          <DynamicWords />?
          
        </motion.h1>
        <div>
      <div className="mt-6 flex justify-center gap-4">
  <a
    href="#portfolio"
    className="px-6 py-3 rounded-2xl bg-[#5B1E1B] text-white font-semibold shadow-md hover:bg-[#752823] transition"
  >
    View my portfolio
  </a>
  <a
       href="mailto:createwithprecious@gmail.com"
    className="px-4 md:px-6 py-3 rounded-2xl border-2 border-[#5B1E1B] text-white font-semibold hover:bg-[#5B1E1B] hover:text-white transition"
  >
    Reach out to me
  </a>
</div>

        </div>
      </div>
    </section>
  );
}
