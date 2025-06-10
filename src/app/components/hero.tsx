"use client";

import React from 'react';
import { motion } from 'framer-motion';
// import { Element } from 'react-scroll';
import Image from 'next/image';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: 50,
      scale: 0.8,
      rotate: -5
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 0.3
      }
    },
    tap: {
      scale: 0.95
    }
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
    <div className="relative bg-[#FEFFF1]">
      {/* Background with gradient */}
      {/* <div className="absolute inset-0 bg-[#FEFFF1]"></div> */}

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#5B1E1B] rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() > 0.5 ? 20 : -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.section
        className="relative min-h-screen flex items-center justify-center px-4 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

            {/* Text Content */}
            <motion.div
              className="flex-1 text-center lg:text-left"
              variants={textVariants}
            >
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className=" bg-clip-text text-[#5B1E1B]">
                Hi, I&apos;m 
                </span>
                <br />
                <span className="text-[#5B1E1B]">
                Precious
                </span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-[#5B1E1B] mb-8 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Your go-to social media strategist and mobile content producer for entertainment, events, and service-based brands. I create audience-first, video-led strategies and scroll-stopping content that drive attention, engagement, and conversions.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                variants={buttonVariants}
              >
                <motion.button
                  onClick={() => window.location.href = 'mailto:createwithprecious@gmail.com?subject=Let%27s%20Work%20Together&body=Hi%2C%20I%27m%20interested%20in%20collaborating...'}
                  className="px-8 py-4 bg-[#5B1E1B] text-lg shadow-lg rounded text-white"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Let&apos;s Work Together
                </motion.button>



              </motion.div>
            </motion.div>

            {/* Image Content */}
            <motion.div className="flex-1 relative" variants={imageVariants}>
              <motion.div className="relative z-10" animate={floatingAnimation}>
                <div className="relative w-full max-w-[700px] h-[300px] sm:h-[400px] md:h-[400px] lg:h-[400px] xl:h-[600px] mx-auto rounded-2xl shadow-2xl bg-white/10 backdrop-blur-lg overflow-hidden">
                  <Image
                    src="/heroImg.jpg"
                    alt="Hero Image"
                    fill
                    className="object-cover rounded-2xl"
                    priority
                  />
                </div>

              </motion.div>
            </motion.div>



          </div>
        </div>

      </motion.section>
    </div>
  );
};

export default HeroSection;