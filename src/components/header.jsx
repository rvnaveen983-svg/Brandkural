"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

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

/* ---------- Clouds ---------- */
const clouds = [
  { top: "8%", left: "6%", scale: 1.1, opacity: 0.95, speed: -60, drift: 40, dur: 26 },
  { top: "16%", left: "58%", scale: 1.5, opacity: 0.9, speed: -120, drift: -50, dur: 32 },
  { top: "34%", left: "-4%", scale: 1.8, opacity: 0.85, speed: -180, drift: 60, dur: 38 },
  { top: "50%", left: "70%", scale: 1.3, opacity: 0.9, speed: -90, drift: -40, dur: 30 },
  { top: "68%", left: "18%", scale: 2.1, opacity: 0.95, speed: -220, drift: 50, dur: 40 },
  { top: "80%", left: "62%", scale: 1.7, opacity: 1, speed: -150, drift: -60, dur: 34 },
];

const Cloud = () => (
  <div className="relative w-64 h-28">
    <span className="absolute bottom-0 left-0 h-12 w-full rounded-full bg-white" />
    <span className="absolute bottom-5 left-8 h-20 w-20 rounded-full bg-white" />
    <span className="absolute bottom-7 left-24 h-24 w-24 rounded-full bg-white" />
    <span className="absolute bottom-5 right-8 h-16 w-16 rounded-full bg-white" />
  </div>
);

const CloudItem = ({ c, progress }) => {
  // Clouds slide opposite to the plane as you scroll = feeling of speed
  const x = useTransform(progress, [0, 1], [0, c.speed]);

  return (
    <motion.div
      className="absolute"
      style={{ top: c.top, left: c.left, x, opacity: c.opacity }}
    >
      <motion.div
        style={{ scale: c.scale }}
        animate={{ x: [0, c.drift, 0] }}
        transition={{ duration: c.dur, repeat: Infinity, ease: "easeInOut" }}
        className="blur-[1px] drop-shadow-[0_12px_24px_rgba(60,120,190,0.25)]"
      >
        <Cloud />
      </motion.div>
    </motion.div>
  );
};

/* ---------- Airplane ---------- */
const Plane = () => (
  <svg
    viewBox="0 0 240 100"
    className="w-28 md:w-44 shrink-0 drop-shadow-xl"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* tail fin */}
    <path d="M20 42 L6 8 L34 8 L62 42 Z" fill="#111111" />
    {/* fuselage */}
    <path
      d="M8 52 C8 40 26 36 50 36 L188 36 C220 38 236 46 236 54 C236 62 220 68 188 68 L50 68 C26 68 8 64 8 52 Z"
      fill="#ffffff"
      stroke="#cbd5e1"
      strokeWidth="2"
    />
    {/* stripe */}
    <path d="M18 56 H226" stroke="#111111" strokeWidth="3" strokeLinecap="round" />
    {/* windows */}
    {[110, 126, 142, 158, 174].map((cx) => (
      <circle key={cx} cx={cx} cy="48" r="4" fill="#1f2937" />
    ))}
    {/* cockpit */}
    <path d="M200 40 C218 40 230 46 233 52 L200 52 Z" fill="#1f2937" />
    {/* wing */}
    <path
      d="M92 62 L152 62 L120 98 L92 98 Z"
      fill="#e5e7eb"
      stroke="#9ca3af"
      strokeWidth="2"
    />
    {/* engine */}
    <ellipse cx="126" cy="84" rx="16" ry="7" fill="#111111" />
  </svg>
);

const HeroSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 24,
    mass: 0.5,
  });

  // Plane flies left -> right while scrolling
  const planeLeft = useTransform(progress, [0, 0.95], ["-100%", "110%"]);
  const planeTop = useTransform(progress, [0, 0.5, 1], ["24%", "20%", "26%"]);
  const planeRotate = useTransform(progress, [0, 0.5, 1], [-3, 0, 3]);
  const hintOpacity = useTransform(progress, [0, 0.08], [1, 0]);

  return (
    <section ref={ref} id="home" className="relative h-[300vh]">
      <div
        className="sticky top-0 h-screen overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #3b9ef0 0%, #7cc4fa 45%, #cfeaff 80%, #f4fbff 100%)",
        }}
      >
        {/* Sun glow */}
        <div className="absolute -top-24 right-[12%] h-72 w-72 rounded-full bg-white/70 blur-[90px]" />

        {/* Clouds */}
        <div className="absolute inset-0 pointer-events-none">
          {clouds.map((c, i) => (
            <CloudItem key={i} c={c} progress={progress} />
          ))}
        </div>

        {/* Airplane + banner */}
        <motion.div
          className="absolute z-20 flex items-center pointer-events-none"
          style={{
            left: planeLeft,
            top: planeTop,
            y: "-50%",
            rotate: planeRotate,
          }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center"
          >
            {/* Banner */}
            <motion.div
              animate={{ skewY: [-1.5, 1.5, -1.5] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center justify-center w-52 md:w-[26rem] h-12 md:h-20 bg-white border-2 border-black text-black font-extrabold uppercase tracking-wide md:tracking-wider text-[9px] sm:text-[10px] md:text-xl rounded-sm shadow-lg whitespace-nowrap"
            >
              Digital Marketing Services
            </motion.div>

            {/* Rope */}
            <div className="w-8 md:w-14 h-[2px] bg-black/70" />

            <Plane />
          </motion.div>
        </motion.div>

        {/* Floating Cards */}
        <motion.div
          className="hidden lg:block absolute left-[8%] top-[42%] z-10 rounded-2xl border border-white/60 bg-white/30 backdrop-blur-xl px-5 py-4 shadow-xl"
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <p className="text-gray-700 text-xs">Monthly Leads</p>
          <h3 className="text-black text-2xl font-bold">+320%</h3>
        </motion.div>

        <motion.div
          className="hidden lg:block absolute right-[9%] top-[40%] z-10 rounded-2xl border border-white/60 bg-white/30 backdrop-blur-xl px-5 py-4 shadow-xl"
          animate={{ y: [0, 18, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <p className="text-gray-700 text-xs">Ad Performance</p>
          <h3 className="text-black text-2xl font-bold">4.8x ROI</h3>
        </motion.div>

        <motion.div
          className="hidden lg:block absolute bottom-[16%] left-[18%] z-10 rounded-2xl border border-white/60 bg-white/30 backdrop-blur-xl px-5 py-4 shadow-xl"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <p className="text-gray-700 text-xs">Brand Growth</p>
          <h3 className="text-black text-2xl font-bold">10x Faster</h3>
        </motion.div>

        {/* Main Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center max-w-5xl mx-auto pt-24">
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 border border-white/70 text-black text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-full mb-8 backdrop-blur-md bg-white/40 shadow-lg"
            >
              <span className="h-2 w-2 rounded-full bg-black animate-pulse" />
              Results-Driven Digital Marketing
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.15}
              className="text-black font-extrabold text-4xl md:text-5xl lg:text-7xl leading-tight mb-6"
            >
              We Scale Your Business With
              <br />
              <span className="text-white [text-shadow:0_4px_28px_rgba(0,80,160,0.5)]">
                Powerful Digital Marketing
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
              className="text-gray-800 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
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
                className="group relative overflow-hidden bg-black hover:bg-neutral-800 text-white font-semibold text-sm px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Free Consultation
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>

                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
              </a>

              <a
                href="https://wa.me/916382700550"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 border border-white/70 hover:border-black text-black font-semibold text-sm px-8 py-4 rounded-xl transition-all duration-300 bg-white/40 hover:bg-white/70 backdrop-blur-md hover:scale-105"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-black transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
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
              className="mt-8 text-gray-700 text-sm"
            >
              SEO • Social Media Marketing • Paid Ads • Branding • Lead Generation
            </motion.p>
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          style={{ opacity: hintOpacity }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-black/70 text-xs font-semibold tracking-widest uppercase"
        >
          Scroll
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="block h-8 w-[2px] bg-black/50 rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
