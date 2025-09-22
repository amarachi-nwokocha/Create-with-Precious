"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const logos = [
  "/logos/New1.JPG",
  "/logos/1.jpg",
  "/logos/2.png",
  "/logos/3.png",
  "/logos/4.jpg",
  "/logos/5.JPG",
  "/logos/6.jpeg",
  "/logos/7.JPG",
  "/logos/8.JPG",
  "/logos/9.png",
  "/logos/10.png",
  "/logos/11.PNG",
];

const TrustedBySlider = () => {
  // Shorter duration for mobile
  const duration =
    typeof window !== "undefined" && window.innerWidth < 640 ? 10 : 20;

  return (
    <section className="w-full">
      <div className="w-full flex items-center">
        {/* Trusted By Text */}
        <div className="bg-[#5B1E1B] px-4 h-[120px] sm:h-[150px] flex items-center justify-center">
          <h3 className="text-lg sm:text-xl w-24 sm:w-28 font-semibold text-center text-white">
            Trusted By:
          </h3>
        </div>

        {/* Logo Slider */}
        <div className="overflow-hidden border-2 border-solid border-[#5B1E1B] py-8 sm:py-10 px-2 w-full">
          <motion.div
            className="flex gap-6 sm:gap-10 items-center"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration,
              ease: "linear",
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="min-w-[80px] sm:min-w-[100px] h-[50px] sm:h-[67px] relative flex-shrink-0"
              >
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

export default TrustedBySlider
