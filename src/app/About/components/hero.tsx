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
    <section className="w-full h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-10 gap-10 bg-[#FEFFF1]">
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
        <p className="text-lg md:text-lg text-[#5B1E1B]/80">
        Your partner for social media strategy and mobile video creation.I believe every brand has a story worth telling, and the right content can transform casual scrollers into loyal fans/customers.
        Whether you&apos;re launching a product, building a community, or simply trying to stay relevant on social media, I help you show up with purpose on TikTok, Instagram, and beyond.

        </p>
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
