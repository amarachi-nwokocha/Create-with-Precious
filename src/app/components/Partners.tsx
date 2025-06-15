"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const logos = [
  "/logos/spotify.png",
  "/logos/audiomack.png",
  "/logos/boomplay.png",
  "/logos/apple-music.png",
];

const TrustedBySlider = () => {
  return (
    <section className="bg-[#FEFFF1] w-full">
      <div className="w-full flex items-center">
        {/* Trusted By Text */}
        <div className="bg-[#5B1E1B] px-6 h-[8.2rem] flex items-center justify-center">
          <h3 className="text-xl w-28 font-semibold text-center text-white">Trusted By:</h3>
        </div>

        {/* Logo Slider */}
        <div className="overflow-hidden border-2 border-solid border-[#5B1E1B] py-10 px-2 w-full">
          <motion.div
            className="flex gap-10 items-center animate-slide"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="min-w-[100px] h-12 relative flex-shrink-0">
                <Image
                  src={logo}
                  alt={`Trusted logo ${index}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySlider;
