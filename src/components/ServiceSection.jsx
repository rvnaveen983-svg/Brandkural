"use client";

import { Share2, Target, Search, Globe, Palette, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Share2,
    title: "Social Media Marketing",
    desc: "Build a loyal community and drive engagement across all social platforms with data-backed content strategies.",
    gradient: "from-white to-gray-400",
    glow: "group-hover:shadow-white/20",
  },
  {
    icon: Target,
    title: "Meta & Google Ads",
    desc: "Maximize your ROI with precision-targeted ad campaigns that reach the right audience at the right time.",
    gradient: "from-gray-100 to-gray-500",
    glow: "group-hover:shadow-white/20",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Dominate search rankings and drive organic traffic with our proven SEO methodologies and keyword strategies.",
    gradient: "from-white to-gray-400",
    glow: "group-hover:shadow-white/20",
  },
  {
    icon: Globe,
    title: "Website Development",
    desc: "High-performance, conversion-optimized websites designed to turn visitors into paying customers.",
    gradient: "from-gray-100 to-gray-500",
    glow: "group-hover:shadow-white/20",
  },
  {
    icon: Palette,
    title: "Branding & Creative Design",
    desc: "Memorable brand identities and stunning visuals that set you apart from the competition.",
    gradient: "from-white to-gray-400",
    glow: "group-hover:shadow-white/20",
  },
];

const floatingDots = [
  "top-[18%] left-[12%]",
  "top-[34%] right-[14%]",
  "bottom-[24%] left-[18%]",
  "bottom-[18%] right-[22%]",
  "top-[58%] left-[50%]",
];

const ServicesSection = () => (
  <section
    id="services"
    className="relative py-24 bg-black overflow-hidden"
    style={{ perspective: "1400px" }}
  >
    {/* 3D Animated Background */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Animated grid */}
      <motion.div
        className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:70px_70px]"
        animate={{
          x: [0, 35, 0],
          y: [0, 35, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Big moving glow */}
      <motion.div
        className="absolute top-10 left-1/4 w-[420px] h-[420px] bg-white/10 rounded-full blur-[130px]"
        animate={{
          x: [0, 120, 0],
          y: [0, 80, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 right-1/4 w-[420px] h-[420px] bg-white/10 rounded-full blur-[130px]"
        animate={{
          x: [0, -100, 0],
          y: [0, -80, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 3D floating cube */}
      <motion.div
        className="absolute top-[18%] right-[10%] w-24 h-24 rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md shadow-2xl"
        animate={{
          rotateX: [0, 180, 360],
          rotateY: [0, 120, 360],
          y: [0, -35, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transformStyle: "preserve-3d" }}
      />

      <motion.div
        className="absolute bottom-[20%] left-[8%] w-20 h-20 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md"
        animate={{
          rotateX: [360, 180, 0],
          rotateZ: [0, 180, 360],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transformStyle: "preserve-3d" }}
      />

      {/* Orbit ring */}
      <motion.div
        className="absolute top-[28%] left-[7%] w-36 h-36 rounded-full border border-white/20"
        animate={{ rotate: 360 }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute top-2 left-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_25px_rgba(255,255,255,0.8)]" />
      </motion.div>

      {/* Floating dots */}
      {floatingDots.map((pos, i) => (
        <motion.span
          key={i}
          className={`absolute ${pos} w-2 h-2 rounded-full bg-white/70 shadow-[0_0_20px_rgba(255,255,255,0.8)]`}
          animate={{
            y: [0, -22, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>

    <div className="container mx-auto px-4 relative z-10">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <span className="inline-flex items-center px-5 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-semibold tracking-widest uppercase backdrop-blur-md">
          Our Services
        </span>

        <h2 className="text-white font-extrabold text-3xl md:text-5xl mt-5 leading-tight">
          Everything You Need to{" "}
          <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            Grow Online
          </span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mt-5 text-base md:text-lg leading-relaxed">
          Powerful digital solutions designed to attract customers, increase leads,
          and grow your brand faster.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 80, rotateX: 18, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{
              duration: 0.65,
              delay: i * 0.1,
              ease: "easeOut",
            }}
            whileHover={{
              y: -16,
              rotateX: 7,
              rotateY: i % 2 === 0 ? -6 : 6,
              scale: 1.035,
            }}
            style={{ transformStyle: "preserve-3d" }}
            className={`
              group relative rounded-3xl p-[1px] cursor-pointer
              bg-gradient-to-br from-white/20 via-white/5 to-white/10
              shadow-2xl ${s.glow}
              transition-all duration-300
            `}
          >
            {/* Glow Border */}
            <div
              className={`absolute -inset-[1px] rounded-3xl bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}
            />

            {/* Card Body */}
            <div className="relative h-full rounded-3xl bg-neutral-950/90 border border-white/10 backdrop-blur-xl p-8 overflow-hidden">
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              {/* Top mini line */}
              <div
                className={`absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r ${s.gradient} opacity-60`}
              />

              {/* Icon */}
              <motion.div
                className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-6 shadow-lg`}
                whileHover={{
                  rotate: 360,
                  scale: 1.12,
                }}
                transition={{ duration: 0.65 }}
                style={{ transform: "translateZ(45px)" }}
              >
                <s.icon className="text-black" size={24} />
              </motion.div>

              {/* Text */}
              <div className="relative" style={{ transform: "translateZ(30px)" }}>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-white text-xl font-bold leading-snug">
                    {s.title}
                  </h3>

                  <ArrowUpRight
                    size={20}
                    className="text-gray-500 group-hover:text-white transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>

              {/* Bottom hover bar */}
              <motion.div
                className={`absolute left-8 bottom-6 h-[3px] rounded-full bg-gradient-to-r ${s.gradient}`}
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
              />

              {/* Background icon blur */}
              <s.icon className="absolute -right-6 -bottom-6 text-white/5 group-hover:text-white/10 transition-colors duration-300" size={110} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
