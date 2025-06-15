"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "I’d gladly work with you over and over and over agaiiiiin!",
    name: "VICTOR BOLUWATIFE AFOLARANMI",
    role: "Choreographer, The Threshold",
  },
  {
    quote:
      "In the relatively short time that Precious was part of our team at Writers Space Africa, her impact was nothing short of remarkable. Her infusion of creativity and exceptional talent into our publicity team has been invaluable. Not only has she consistently delivered on all objectives, but her efficiency and dedication have truly stood out. And as a result, I wholeheartedly endorse her without hesitation.",
    name: "ANTHONY MARK ONUGBA",
    role: "Founder, Writers Space Africa",
  },
  {
    quote:
      "Precious was a great addition to our team. She's got this amazing knack for bringing fresh ideas to the table. She's not just a team player; she's the kind of person you want on your side. Quick on the uptake and always ready to tweak things based on feedback. Her ideas seriously spiced up our events, and the way she connects with our community is just top-notch.",
    name: "GOODNESS NWACHUKWU",
    role: "Founder, Charis Black Projects",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function TestimonialComp() {
  return (
    <section className="w-full bg-[#FEFFF1] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-[#5B1E1B]">What Past Clients Say</h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.slice(0, 2).map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md p-6 rounded-xl text-left border-l-4 border-[#5B1E1B]"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <p className="text-gray-800 italic mb-4">“{testimonial.quote}”</p>
            <p className="font-semibold text-[#5B1E1B]">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </motion.div>
        ))}
      </div>

      <div className="max-w-2xl mx-auto mt-8">
        <motion.div
          className="bg-white shadow-md p-6 rounded-xl text-left border-l-4 border-[#5B1E1B]"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ scale: 1.03, y: -5 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <p className="text-gray-800 italic mb-4">“{testimonials[2].quote}”</p>
          <p className="font-semibold text-[#5B1E1B]">{testimonials[2].name}</p>
          <p className="text-sm text-gray-500">{testimonials[2].role}</p>
        </motion.div>
      </div>
    </section>
  );
}
