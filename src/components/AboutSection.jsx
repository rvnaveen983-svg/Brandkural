"use client";

import { TrendingUp, Users, Target, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: TrendingUp, value: "250+", label: "Projects Delivered" },
  { icon: Users, value: "120+", label: "Happy Clients" },
  { icon: Target, value: "98%", label: "Client Retention" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 45 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" },
  }),
};

const AboutSection = () => (
  <section
    id="about"
    className="relative py-24 bg-white overflow-hidden"
    style={{ perspective: "1200px" }}
  >
    {/* White Premium Background */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.14),transparent_35%)]" />

    {/* Animated Blobs */}
    <motion.div
      className="absolute -top-28 -left-28 w-80 h-80 rounded-full bg-blue-400/20 blur-3xl"
      animate={{ x: [0, 50, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />

    <motion.div
      className="absolute -bottom-32 -right-28 w-96 h-96 rounded-full bg-cyan-400/20 blur-3xl"
      animate={{ x: [0, -50, 0], y: [0, -40, 0], scale: [1, 1.2, 1] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Soft Grid */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e40af0d_1px,transparent_1px),linear-gradient(to_bottom,#1e40af0d_1px,transparent_1px)] bg-[size:60px_60px]" />

    <div className="container mx-auto px-4 relative z-10">
      {/* Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        custom={0}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-5 shadow-sm">
          <Sparkles size={16} />
          About Us
        </div>

        <h2 className="text-gray-950 text-3xl md:text-5xl font-extrabold mt-3 mb-6 leading-tight">
          A Results-Driven{" "}
          <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
            Digital Marketing
          </span>{" "}
          Agency
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed">
          We help businesses generate high-quality leads, increase brand
          visibility, and boost revenue through data-driven strategies. Our team
          combines creativity with analytics to deliver measurable growth.
        </p>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            custom={i * 0.15}
            whileHover={{
              y: -14,
              rotateX: 6,
              rotateY: -6,
              scale: 1.03,
            }}
            transition={{ type: "spring", stiffness: 180, damping: 14 }}
            style={{ transformStyle: "preserve-3d" }}
            className="group relative bg-white border border-gray-100 rounded-3xl p-8 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)] overflow-hidden"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-400/10" />

            {/* Top Shine */}
            <div className="absolute -top-20 left-0 w-full h-32 bg-gradient-to-b from-blue-100/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Icon */}
            <motion.div
              className="relative mx-auto flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 mb-5 shadow-lg shadow-blue-500/25"
              whileHover={{ rotate: 360, scale: 1.08 }}
              transition={{ duration: 0.7 }}
            >
              <s.icon className="text-white" size={26} />
            </motion.div>

            {/* Value */}
            <motion.p
              className="relative text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.4 }}
            >
              {s.value}
            </motion.p>

            {/* Label */}
            <p className="relative text-gray-500 text-sm mt-2 font-medium">
              {s.label}
            </p>

            {/* Bottom Line */}
            <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;