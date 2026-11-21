"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowDownRight,
  MessageCircle,
  Target,
  TrendingUp,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" },
  }),
};

const Chip = ({ icon: Icon, text, className }) => (
  <div
    className={`absolute flex items-center gap-[10px] rounded-[4px] border border-white/[0.14] bg-[rgba(7,26,53,0.66)] px-4 py-[14px] text-[11.2px] tracking-[0.06em] text-[#d9e7ff] shadow-[0_20px_50px_rgba(0,0,0,0.25)] backdrop-blur-[15px] ${className}`}
  >
    <Icon size={16} className="text-[#4f91ff]" />
    {text}
  </div>
);

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden font-body"
      style={{
        background:
          "radial-gradient(circle 1474px at 74% 48%, #123569 0%, #0a2348 24%, #071a35 49%, #06162d 75%)",
      }}
    >
      {/* Blue glow */}
      <div className="absolute right-[2%] top-[18%] h-[420px] w-[420px] rounded-full bg-[rgba(31,105,255,0.14)] blur-[70px] md:h-[834px] md:w-[834px]" />

      {/* 3D sphere visual */}
      <div
        className="pointer-events-none absolute bottom-[-60px] right-[-40px] hidden h-[650px] w-[650px] origin-bottom-right scale-[0.7] lg:block xl:scale-[0.85] 2xl:bottom-[-110px] 2xl:right-[2%] 2xl:scale-100"
        style={{ perspective: "1200px" }}
      >
        <div
          className="absolute left-[65px] top-[65px] h-[520px] w-[520px] rounded-full border border-[rgba(102,157,255,0.24)] shadow-[0_0_70px_rgba(36,112,255,0.18)]"
          style={{ transform: "rotateX(68deg) rotateZ(-12deg)" }}
        />
        <div
          className="absolute left-[13px] top-[13px] h-[624px] w-[624px] rounded-full border border-[rgba(71,131,239,0.17)] shadow-[0_0_70px_rgba(36,112,255,0.18)]"
          style={{ transform: "rotateY(70deg) rotateZ(20deg)" }}
        />

        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[175px] top-[169px] h-[312px] w-[312px] overflow-hidden rounded-full shadow-[0_0_100px_rgba(48,119,255,0.48)]"
          style={{
            background:
              "radial-gradient(circle 313px at 32% 26%, #9dc9ff 0%, #6ba7ff 4.5%, #5296ff 6.75%, #3985ff 9%, #2470df 20%, #0e4ebf 31%, #0c409b 41.25%, #0a3277 51.5%, #082453 61.75%, #06162f 72%)",
          }}
        >
          <div className="absolute left-[-26px] top-[-27px] flex h-[178px] w-[223px] items-center justify-center">
            <div className="-rotate-[28deg]">
              <div className="h-[94px] w-[203px] rounded-[69px] border border-white/[0.35] blur-[2px]" />
            </div>
          </div>
          <div className="absolute inset-0 rounded-full shadow-[inset_-35px_-35px_60px_#020711]" />
        </motion.div>

        <Chip icon={TrendingUp} text="+320% Leads" className="left-[468px] top-[108px]" />
        <Chip icon={Target} text="4.8x ROI" className="left-[33px] top-[487px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-[5vw]">
        <div className="mx-auto flex min-h-screen max-w-[1669px] flex-col justify-center pb-28 pt-36">
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="flex items-center gap-3"
          >
            <span className="block h-[7px] w-[7px] rounded-full bg-[#4f91ff] shadow-[0_0_0_6px_rgba(59,130,246,0.13),0_0_20px_#3b82f6]" />
            <span className="text-[10.9px] uppercase tracking-[0.15em] text-[#98a7bd]">
              Results-driven digital marketing
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.12}
            className="mt-9 max-w-[1050px] font-heading text-[clamp(2.5rem,5.4vw,6.25rem)] font-medium leading-[0.93] tracking-[-0.055em] text-white"
          >
            We scale your business with{" "}
            <span className="text-brand">powerful digital marketing.</span>
          </motion.h1>

          {/* Paragraph + buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.28}
            className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:gap-[6vw]"
          >
            <p className="max-w-[430px] text-base leading-[1.65] text-[#aeb9c9]">
              From strategy to execution, we help brands grow, generate quality
              leads, increase conversions and dominate online with
              performance-focused marketing.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex min-h-[54px] items-center justify-center gap-3 rounded-[3px] bg-brand-deep px-[23px] text-[13.6px] font-semibold text-white no-underline shadow-[0_12px_16px_rgba(20,91,219,0.25)] transition-colors duration-200 hover:bg-[#1a6bf0]"
              >
                Get free consultation
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>

              <a
                href="https://wa.me/916382700550"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[54px] items-center justify-center gap-3 rounded-[3px] border border-white/[0.24] bg-white/[0.04] px-[23px] text-[13.6px] font-semibold text-white no-underline backdrop-blur-[12px] transition-colors duration-200 hover:bg-white/[0.1]"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-6 z-10 flex items-center gap-[11px] text-[9.3px] uppercase tracking-[0.17em] text-[#8190a7] md:left-[5vw]">
        Scroll to explore
        <ArrowDownRight size={18} />
      </div>
    </section>
  );
};

export default HeroSection;
