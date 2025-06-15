"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const footerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Footer() {
  return (
    <motion.footer
      className="w-full bg-[#5B1E1B] text-white py-16 px-6"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold">Work With Me</h2>
        <p className="text-lg">Let’s make something unforgettable.</p>

        <div className="space-y-2">
          <p>Email me directly: <span className="underline">createwithprecious@gmail.com</span></p>
          <p>
            LinkedIn (if you&apos;re feeling serious):{" "}
            <a
              href="https://www.linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#c2ee03] transition"
            >
              Visit LinkedIn
            </a>
          </p>
          <p>
            Prefer a quick chat? Book a 15-minute discovery call and tell me what you’re dreaming up.
          </p>
        </div>

        <div className="pt-4">
          <Link
            href="mailto:createwithprecious@gmail.com"
            className="inline-block bg-[#c2ee03] text-[#5B1E1B] font-semibold px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300"
          >
            Email Me
          </Link>
        </div>
      </div>
    </motion.footer>
  );
}
