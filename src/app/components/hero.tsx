"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const changingWords = ['watch', 'love', 'share'];

const DynamicWords = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % changingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="text-pink-500 inline-block min-w-[60px] ml-1">
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

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.3 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotate: 0,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.8, ease: "easeOut" }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="relative bg-[#FEFFF1] backdrop-blur-[2px]">
      <motion.section
        className="relative min-h-screen flex items-center justify-center px-10 py-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">

            {/* Text Content */}
            <motion.div className="flex-1 text-center lg:text-left" variants={textVariants}>
              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#5B1E1B] mb-6 leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Struggling to create content people actually
                <DynamicWords />?
              </motion.h1>

              <motion.p
                className="text-md md:text-xl text-[#5B1E1B] mb-8 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Good news, you just found your social content partner. I help entertainment,
                lifestyle, and service-based brands create audience-first strategies and
                scroll-stopping video content that drive attention, engagement, and conversions.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                variants={buttonVariants}
              >
                <div className="flex gap-5">
                  <motion.button
                    onClick={() =>
                      window.location.href =
                        'mailto:createwithprecious@gmail.com?subject=Let%27s%20Work%20Together&body=Hi%2C%20I%27m%20interested%20in%20collaborating...'
                    }
                    className="px-8 py-4 bg-[#5B1E1B] text-lg shadow-lg rounded text-white"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    View My Portfolio
                  </motion.button>
                  <motion.button
                    onClick={() =>
                      window.location.href =
                        'mailto:createwithprecious@gmail.com?subject=Let%27s%20Work%20Together&body=Hi%2C%20I%27m%20interested%20in%20collaborating...'
                    }
                    className="px-8 py-4 bg-[#5B1E1B] text-lg shadow-lg rounded text-white"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Book a Free Discovery Call
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>

            {/* Image Content */}
            <motion.div className="flex-1 relative hidden md:block" variants={imageVariants}>
              <motion.div className="relative z-10" animate={floatingAnimation}>
                <div className="relative w-full max-w-[700px] min-h-[300px] h-[400px] xl:h-[600px] mx-auto rounded-2xl shadow-2xl bg-white/10 backdrop-blur-lg overflow-hidden">
                  <Image
                    src="/heroImg.jpg"
                    alt="Hero Image"
                    fill
                    className="object-cover rounded-2xl border-2 border-[#5B1E1B]"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Mobile Image */}
            <div className="relative w-full max-w-[700px] h-[300px] sm:h-[400px] mx-auto rounded-2xl shadow-2xl bg-white/10 backdrop-blur-lg overflow-hidden border-2 border-[#5B1E1B] block md:hidden">
              <Image
                src="/heroImg.jpg"
                alt="Hero Image"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default HeroSection;
