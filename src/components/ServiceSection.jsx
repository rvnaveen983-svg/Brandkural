"use client";

import { Share2, Target, Search, Globe, Palette } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Share2,
    title: "Social Media Marketing",
    desc: "Build a loyal community and drive engagement across all social platforms with data-backed content strategies.",
    gradient: "from-pink-500 to-rose-500",
    shadow: "group-hover:shadow-pink-500/25",
    ring: "group-hover:ring-pink-500/30",
  },
  {
    icon: Target,
    title: "Meta & Google Ads",
    desc: "Maximize your ROI with precision-targeted ad campaigns that reach the right audience at the right time.",
    gradient: "from-orange-500 to-amber-500",
    shadow: "group-hover:shadow-orange-500/25",
    ring: "group-hover:ring-orange-500/30",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Dominate search rankings and drive organic traffic with our proven SEO methodologies and keyword strategies.",
    gradient: "from-green-500 to-emerald-500",
    shadow: "group-hover:shadow-green-500/25",
    ring: "group-hover:ring-green-500/30",
  },
  {
    icon: Globe,
    title: "Website Development",
    desc: "High-performance, conversion-optimized websites designed to turn visitors into paying customers.",
    gradient: "from-blue-500 to-cyan-500",
    shadow: "group-hover:shadow-blue-500/25",
    ring: "group-hover:ring-blue-500/30",
  },
  {
    icon: Palette,
    title: "Branding & Creative Design",
    desc: "Memorable brand identities and stunning visuals that set you apart from the competition.",
    gradient: "from-violet-500 to-purple-500",
    shadow: "group-hover:shadow-violet-500/25",
    ring: "group-hover:ring-violet-500/30",
  },
];

const ServicesSection = () => (
  <section
    id="services"
    className="py-24 bg-gray-950 relative overflow-hidden"
    style={{ perspective: "1200px" }}
  >
    {/* Background decoration */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase">
          Our Services
        </span>
        <h2 className="text-white font-bold text-3xl md:text-4xl mt-3 leading-tight">
          Everything You Need to{" "}
          <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Grow Online
          </span>
        </h2>
      </motion.div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 70, rotateX: 15, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -14, scale: 1.03 }}
            className={`
              group relative cursor-pointer rounded-2xl p-8
              bg-gray-900/60 border border-gray-800
              ring-1 ring-transparent ${s.ring}
              shadow-xl ${s.shadow}
              hover:border-gray-700
              transition-all duration-300 ease-out
              backdrop-blur-sm
            `}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Icon */}
            <motion.div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-5 shadow-lg`}
              whileHover={{ rotate: 12, scale: 1.15 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <s.icon className="text-white" size={22} />
            </motion.div>

            {/* Text */}
            <h3 className="text-white text-xl font-semibold mb-3">
              {s.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>

            {/* Hover glow overlay */}
            <div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;