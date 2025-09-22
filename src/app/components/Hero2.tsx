import Image from "next/image";
import React from "react";

export default function HeroSection2() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-28">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Text */}
          <div className="space-y-6 lg:pr-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Build beautiful interfaces that users love
            </h1>

            <p className="text-lg sm:text-xl text-gray-200 max-w-prose">
              Ship responsive, accessible, and performant UIs with confidence —
              engineered for real world usage and delightful details.
            </p>

            <div className="flex gap-4 items-center">
              <a
                href="#"
                className="inline-block rounded-full px-6 py-3 bg-green-400 text-black font-semibold shadow-lg hover:shadow-xl transition"
              >
                Get started
              </a>
              <a href="#" className="text-sm text-gray-300 underline">
                Learn more
              </a>
            </div>
          </div>

          {/* Right: Visual (image overlapped) */}
          <div className="hidden lg:block relative">
            {/* Decorative card behind image to enhance overlapping effect */}
            <div className="absolute -right-10 -top-10 w-[420px] h-[320px] bg-white/5 rounded-2xl transform rotate-3 shadow-2xl"></div>

            <div className="relative w-[420px] h-[320px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&q=80"
                alt="Abstract UI preview"
                className="object-cover w-full h-full"
              />

              {/* Small overlay card to make image feel layered */}
              <div className="absolute left-6 bottom-6 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-md">
                <p className="text-sm text-gray-100">Dashboard preview • Live data</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile image that overlaps the bottom of the hero for smaller sizes */}
      <div className="lg:hidden absolute inset-x-0 bottom-0 flex justify-center pointer-events-none">
        <div className="w-[86%] max-w-xl transform translate-y-1/2 rounded-xl overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80"
            alt="Mobile UI preview"
            className="w-full h-44 object-cover"
          />
        </div>
      </div>
    </section>
  );
}


