"use client";

import { BarChart3, Eye, HeadphonesIcon, Activity, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: BarChart3,
    title: "ROI-Focused Strategies",
    desc: "Every campaign is designed to deliver measurable returns on your investment.",
    gradient: "from-black to-gray-700",
  },
  {
    icon: Eye,
    title: "Transparent Reporting",
    desc: "Real-time dashboards and regular reports so you always know where your money goes.",
    gradient: "from-gray-900 to-gray-600",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    desc: "A personal account manager and responsive team available when you need us.",
    gradient: "from-gray-800 to-gray-500",
  },
  {
    icon: Activity,
    title: "Performance Tracking",
    desc: "Advanced analytics and KPI tracking to continuously optimize your campaigns.",
    gradient: "from-gray-700 to-black",
  },
];

const WhyChooseUs = () => (
  <section
    id="why-us"
    className="relative py-24 bg-white overflow-hidden"
    style={{ perspective: "1300px" }}
  >
    {/* 3D Animated White Background */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.06),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.05),transparent_34%)]" />

      {/* Moving grid */}
      <motion.div
        className="absolute inset-0 opacity-[0.45] bg-[linear-gradient(to_right,#00000012_1px,transparent_1px),linear-gradient(to_bottom,#00000012_1px,transparent_1px)] bg-[size:75px_75px]"
        animate={{
          x: [0, 35, 0],
          y: [0, 35, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 3D floating cube */}
      <motion.div
        className="absolute top-[18%] right-[12%] w-24 h-24 rounded-3xl bg-white/70 border border-gray-200 shadow-[0_25px_80px_rgba(0,0,0,0.15)] backdrop-blur-xl"
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
        className="absolute bottom-[18%] left-[10%] w-20 h-20 rounded-2xl bg-gray-100/70 border border-gray-300 shadow-[0_25px_80px_rgba(0,0,0,0.15)] backdrop-blur-xl"
        animate={{
          rotateX: [360, 180, 0],
          rotateZ: [0, 180, 360],
          y: [0, 28, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transformStyle: "preserve-3d" }}
      />

      {/* Orbit circle */}
      <motion.div
        className="absolute top-[28%] left-[8%] w-36 h-36 rounded-full border border-gray-300"
        animate={{ rotate: 360 }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute top-1 left-1/2 w-3 h-3 rounded-full bg-black shadow-[0_0_25px_rgba(0,0,0,0.5)]" />
      </motion.div>

      {/* Soft blur balls */}
      <motion.div
        className="absolute top-24 left-1/3 w-80 h-80 bg-gray-200/50 rounded-full blur-[100px]"
        animate={{
          x: [0, 100, 0],
          y: [0, 60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-10 right-1/3 w-80 h-80 bg-gray-300/40 rounded-full blur-[100px]"
        animate={{
          x: [0, -100, 0],
          y: [0, -60, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
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
        <span className="inline-flex items-center gap-2 bg-gray-100 border border-gray-200 text-gray-800 text-sm font-bold tracking-widest uppercase px-5 py-2 rounded-full">
          <CheckCircle2 size={16} />
          Why Choose Us
        </span>

        <h2 className="text-black font-extrabold text-3xl md:text-5xl mt-5 leading-tight">
          Built for{" "}
          <span className="bg-gradient-to-r from-black via-gray-600 to-black bg-clip-text text-transparent">
            Your Success
          </span>
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mt-5 text-base md:text-lg leading-relaxed">
          We focus on performance, transparency, and long-term growth so your
          business gets real marketing results.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-5xl mx-auto">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{
              opacity: 0,
              y: 60,
              rotateX: 12,
              rotateY: i % 2 === 0 ? -10 : 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              rotateX: 0,
              rotateY: 0,
            }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.65,
              delay: i * 0.12,
              ease: "easeOut",
            }}
            whileHover={{
              y: -14,
              scale: 1.025,
              rotateX: 4,
              rotateY: i % 2 === 0 ? -4 : 4,
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="group relative overflow-hidden rounded-[28px] bg-white border border-gray-200 p-7 md:p-8 shadow-[0_20px_70px_rgba(0,0,0,0.08)] hover:shadow-[0_35px_90px_rgba(0,0,0,0.2)] transition-shadow duration-300"
          >
            {/* Hover gradient background */}
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${r.gradient}`}
            />

            {/* Shine effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-gray-200/70 to-transparent" />

            {/* Big number */}
            <span className="absolute right-6 top-4 text-[80px] font-black text-black/[0.04] leading-none">
              0{i + 1}
            </span>

            <div className="relative flex gap-5">
              {/* Icon */}
              <motion.div
                animate={{
                  y: [0, -7, 0],
                  rotate: [0, 3, 0],
                }}
                transition={{
                  duration: 3 + i * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br ${r.gradient} flex items-center justify-center shadow-lg`}
                style={{ transform: "translateZ(40px)" }}
              >
                <r.icon className="text-white" size={24} />
              </motion.div>

              {/* Text */}
              <div style={{ transform: "translateZ(30px)" }}>
                <h3 className="text-black text-xl font-extrabold mb-3">
                  {r.title}
                </h3>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {r.desc}
                </p>
              </div>
            </div>

            {/* Bottom line */}
            <div
              className={`relative mt-7 h-[3px] w-16 rounded-full bg-gradient-to-r ${r.gradient}`}
            />

            {/* Glow circle */}
            <div
              className={`absolute -right-20 -bottom-20 w-52 h-52 rounded-full bg-gradient-to-br ${r.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
