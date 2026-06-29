"use client";

import { TrendingUp, Users, Target } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: TrendingUp, value: "250+", label: "Projects Delivered" },
  { icon: Users, value: "120+", label: "Happy Clients" },
  { icon: Target, value: "98%", label: "Client Retention" },
];

const AboutSection = () => (
  <section
    id="about"
    className="py-24 relative bg-[#0a0f1e] overflow-hidden"
    style={{ perspective: "1000px" }}
  >
    {/* Background glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-teal-900/10 opacity-50 pointer-events-none" />

    <div className="container mx-auto px-4 relative z-10">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotateX: -8 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase">
          About Us
        </span>
        <h2 className="text-white text-3xl md:text-4xl font-bold mt-3 mb-6 leading-tight">
          A Results-Driven{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Digital Marketing
          </span>{" "}
          Agency
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          We help businesses generate high-quality leads, increase brand
          visibility, and boost revenue through data-driven strategies. Our team
          combines creativity with analytics to deliver measurable growth for
          every client we partner with.
        </p>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 60, rotateY: -15, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{
              y: -12,
              rotateX: 5,
              rotateY: 5,
              boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.3)",
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-8 text-center cursor-default"
          >
            {/* Icon */}
            <motion.div
              className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 mb-4"
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.6 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <s.icon className="text-white" size={24} />
            </motion.div>

            {/* Value */}
            <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              {s.value}
            </p>

            {/* Label */}
            <p className="text-gray-400 text-sm mt-1">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;