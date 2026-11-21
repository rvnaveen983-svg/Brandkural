"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: "easeOut",
    },
  }),
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center bg-black px-6">
      {/* Animated Background Glow */}
      <motion.div
        className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-white/10 blur-[120px]"
        animate={{
          x: [0, 80, 0],
          y: [0, 60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-white/10 blur-[140px]"
        animate={{
          x: [0, -70, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)] bg-[size:55px_55px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      {/* Floating Cards */}
      <motion.div
        className="hidden lg:block absolute left-[8%] top-[32%] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-4 shadow-2xl"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="text-gray-400 text-xs">Monthly Leads</p>
        <h3 className="text-white text-2xl font-bold">+320%</h3>
      </motion.div>

      <motion.div
        className="hidden lg:block absolute right-[9%] top-[28%] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-4 shadow-2xl"
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="text-gray-400 text-xs">Ad Performance</p>
        <h3 className="text-white text-2xl font-bold">4.8x ROI</h3>
      </motion.div>

      <motion.div
        className="hidden lg:block absolute bottom-[20%] left-[18%] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-4 shadow-2xl"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="text-gray-400 text-xs">Brand Growth</p>
        <h3 className="text-white text-2xl font-bold">10x Faster</h3>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="inline-flex items-center gap-2 border border-white/30 text-white text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-full mb-8 backdrop-blur-md bg-white/10 shadow-[0_0_35px_rgba(255,255,255,0.12)]"
        >
          <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
          Results-Driven Digital Marketing
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.15}
          className="text-white font-extrabold text-4xl md:text-5xl lg:text-7xl leading-tight mb-6"
        >
          We Scale Your Business With
          <br />
          <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            Powerful Digital Marketing
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          From strategy to execution, we help brands grow, generate quality leads,
          increase conversions and dominate online with performance-focused marketing.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.45}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#consultation"
            className="group relative overflow-hidden bg-white hover:bg-gray-200 text-black font-semibold text-sm px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_0_45px_rgba(255,255,255,0.25)] hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Free Consultation
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>

            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-black/10 to-transparent" />
          </a>

          <a
            href="https://wa.me/916382700550"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 border border-white/20 hover:border-white/60 text-white font-semibold text-sm px-8 py-4 rounded-xl transition-all duration-300 bg-white/5 hover:bg-white/10 backdrop-blur-md hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 fill-white transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a>
        </motion.div>

        {/* Bottom Trust Text */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.6}
          className="mt-8 text-gray-500 text-sm"
        >
          SEO • Social Media Marketing • Paid Ads • Branding • Lead Generation
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
