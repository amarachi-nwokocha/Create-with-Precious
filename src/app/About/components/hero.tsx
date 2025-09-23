'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/about1.jpg',
  '/about2.jpg',
  '/about3.jpg',
  '/about4.jpg',
  '/about5.jpg',
];

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const fadeVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1.2, ease: 'easeInOut' } },
  exit: { opacity: 0, transition: { duration: 1.2, ease: 'easeInOut' } },
};

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-16 py-10 gap-10 bg-[#FEFFF1]">
      {/* Left: Text */}
      <motion.div
        className="w-full md:w-1/2 space-y-6 md:mt-10 text-center md:text-left"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-[#5B1E1B]">
          Hi, I’m Precious
        </h1>
        <div className="text-lg md:text-lg text-[#5B1E1B]/80">
          <p className='py-2'>
            Hi, I&apos;m Precious Adekola, a Social Media Strategist and Mobile Content Producer with a focus on platform-native storytelling for entertainment and lifestyle brands.
          </p>
          <p className='py-2'>
            My work combines clean, engaging visuals with narrative-driven strategy to drive conversation, build trust, and cultivate meaningful brand affinity.
          </p>

          <p className='py-2'>
            Over the past four years, I have executed digital strategies and produced content for more than twenty brands, creators, and events within Nigeria&apos;s entertainment and lifestyle industries.
          </p>
          <p className='py-2'>
            Notable highlights include providing mobile content production services for Chimamanda Ngozi Adichie at the Stories She Carries event, Sisi Yemmie at Gino World Jollof Festival with Hilda Baci, and producing social content for Glazia Magazine during Adichie&apos;s Lagos Homecoming Tour.
          </p>



        </div>
      </motion.div>

      {/* Right: Slideshow */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 relative h-[300px] md:h-[500px] overflow-hidden rounded-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            className="absolute inset-0"
            variants={fadeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Image
              src={images[currentImage]}
              alt="Hero Slide"
              fill
              className="object-cover rounded-xl shadow-lg"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;
