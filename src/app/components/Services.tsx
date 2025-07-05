"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CountUp from "react-countup";
import type { ReactElement } from "react";

const services = [
  {
    icon: "/SMMS.png",
    title: "Social Media Strategy & Management",
    description:
      "End-to-end planning, scheduling, and analytics. I help you create a brand voice and presence that grows your audience and drives conversion.",
  },
  {
    icon: "/shortVid.png",
    title: "Short-form Video Content Creation",
    description:
      "TikToks, Reels, and YouTube Shorts that entertain and engage. From ideation to execution (mobile videography & short-form video editing).",
  },
  {
    icon: "/camp.png",
    title: "Launch Campaign & Entertainment Promotion",
    description:
      "Comprehensive social media marketing strategy for your next event, album drop, product launch, or service announcement.",
  },
  {
    icon: "/infl.png",
    title: "Influencer/UGC Campaign Coordination",
    description:
      "Influencer sourcing, rate negotiation, UGC production coordination, and performance tracking.",
  },
];

const stats = [
  { title: "organic TikTok views", end: 1000000, suffix: "+" },
  { title: "clients served", end: 20, suffix: "+" },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const headingVariant = {
  hidden: { x: -100, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const countupContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const countupItem = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Service() {
  return (
    <>
      <motion.section
        className="w-full  px-6 md:px-12 py-20 text-[#5B1E1B]"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          variants={headingVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          What I Do Best
          <br className="block md:hidden" />
          <span className="text-pink-500"> (Services I Offer)</span>
        </motion.h2>

        <motion.div
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-shadow flex flex-col items-start gap-5 border border-[#eaeaea]"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 relative shrink-0">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#5B1E1B]">
                  {service.title}
                </h3>
              </div>
              <p className="text-sm text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* CountUp Section */}
      <section className="bg-[#5B1E1B] py-20">
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 text-center"
          variants={countupContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {stats
            .map((stat, index) => (
              <motion.div
                key={index}
                className="text-white"
                variants={countupItem}
                whileHover={{ scale: 1.05 }}
              >
                <h2 className="text-5xl font-extrabold text-white mb-2">
                  <CountUp
                    end={stat.end}
                    duration={3}
                    separator=","
                    suffix={stat.suffix}
                  />
                </h2>
                <p className="text-lg font-medium text-[#f1f1f1]">
                  {stat.title}
                </p>
              </motion.div>
            ))
            .reduce<ReactElement[]>((prev, curr, i) => {
              if (i === 0) return [curr];
              return [
                ...prev,
                <div
                  key={`divider-${i}`}
                  className="text-white text-4xl hidden md:block"
                >
                  |
                </div>,
                curr,
              ];
            }, [])}
        </motion.div>
      </section>
    </>
  );
}
