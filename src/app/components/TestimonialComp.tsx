"use client";

import { motion, type Variants } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";


interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "This is an awesome edit!",
    name: "Sisi Yemmie",
    role: "Food and Lifestyle Blogger",
  },
  {
    quote:
      "My content creator!!!!!!!! So lovely....Had no doubt. I love it. It made her happy... I am HAPPY.",
    name: "Dozie",
    role: "Ihunanya & Dozie Proposal",
  },
  {
    quote: "I’d gladly work with you over and over and over agaiiiiin!",
    name: "VICTOR BOLUWATIFE AFOLARANMI",
    role: "Choreographer, The Threshold",
  },
  {
    quote: "Nice job, love your work ethic and energy",
    name: "DJ BLACKY B",
    role: "Host, Let Dah Party Begin",
  },
  {
    quote:
      "During the time I worked with Precious on launching Distraction in Nigeria, she consistently brought fresh, fun, and commercially viable ideas to the table. Her creativity stood out, and she was always open to collaboration, often going above and beyond to ensure we developed engaging and relevant content for the brand. Precious brought great energy to the project and was a key contributor to its success",
    name: "HALIMA YAKUBU",
    role: "Chief Marketing Officer, Distraction.com",
  },
  {
    quote:
      "In the relatively short time that Precious was part of our team at Writers Space Africa, her impact was nothing short of remarkable. Her infusion of creativity and exceptional talent into our publicity team has been invaluable. Not only has she consistently delivered on all objectives, but her efficiency and dedication have truly stood out. And as a result, I wholeheartedly endorse her without hesitation.",
    name: "ANTHONY MARK ONUGBA",
    role: "Founder, Writers Space Africa",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function TestimonialComp() {
  return (
    <section className="w-full py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-[#5B1E1B]">
          What Past Clients Say
        </h2>
      </div>

      {/* ✅ Two-card Grid (Desktop) */}
      <div className="hidden md:grid max-w-6xl mx-auto grid-cols-2 gap-10">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            custom={index}
            className="relative bg-white shadow-lg rounded-2xl overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.03, y: -6 }}
          >
            {/* ✅ Always-visible Animated Gradient Border */}
            <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-[#5B1E1B] via-[#7B3F00] to-[#A0522D] animate-gradient-x">
              <div className="w-full h-full rounded-2xl bg-white"></div>
            </div>

            {/* ✅ Card Content */}
            <div className="relative z-10 p-8">
              {/* Quote Icon with Brown Background */}
              <div className="mb-5">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#5B1E1B] text-white shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9.5 11c0-2.8 1.6-5.3 4.1-6.5L15 2C11.1 3.3 8 7.4 8 12c0 2.6 1.1 5 3 6.7V11h-1.5zM3.5 11c0-2.8 1.6-5.3 4.1-6.5L9 2C5.1 3.3 2 7.4 2 12c0 2.6 1.1 5 3 6.7V11H3.5z" />
                  </svg>
                </div>
              </div>

              <p className="text-gray-700 italic mb-5 leading-relaxed">
                “{testimonial.quote}”
              </p>
              <p className="font-semibold text-[#5B1E1B]">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          </motion.div>



        ))}
      </div>

      {/* ✅ Mobile Carousel */}
      <div className="md:hidden max-w-md mx-auto">
        <Swiper
          spaceBetween={20}
          slidesPerView={1.1}
          centeredSlides
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                key={index}
                custom={index}
                className="relative bg-white shadow-lg p-8 rounded-2xl overflow-hidden group"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.03, y: -6 }}
              >
                {/* ✅ Animated Border Layer */}
                <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 animate-gradient-x opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="w-full h-full rounded-2xl bg-white"></div>
                </div>

                {/* ✅ Card Content */}
                <div className="relative z-10">
                  <div className="mb-4 text-[#5B1E1B]">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 opacity-30"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9.5 11c0-2.8 1.6-5.3 4.1-6.5L15 2C11.1 3.3 8 7.4 8 12c0 2.6 1.1 5 3 6.7V11h-1.5zM3.5 11c0-2.8 1.6-5.3 4.1-6.5L9 2C5.1 3.3 2 7.4 2 12c0 2.6 1.1 5 3 6.7V11H3.5z" />
                    </svg> */}
                  </div>

                  <p className="text-gray-700 italic mb-5 leading-relaxed">
                    “{testimonial.quote}”
                  </p>
                  <p className="font-semibold text-[#5B1E1B]">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
