"use client";

import { BarChart3, Eye, HeadphonesIcon, Activity } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: BarChart3,
    title: "ROI-Focused Strategies",
    desc: "Every campaign is designed to deliver measurable returns on your investment.",
    gradient: "from-blue-500 to-cyan-500",
    glow: "group-hover:shadow-blue-500/20",
    ring: "group-hover:ring-blue-500/30",
  },
  {
    icon: Eye,
    title: "Transparent Reporting",
    desc: "Real-time dashboards and regular reports so you always know where your money goes.",
    gradient: "from-violet-500 to-purple-500",
    glow: "group-hover:shadow-violet-500/20",
    ring: "group-hover:ring-violet-500/30",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    desc: "A personal account manager and responsive team available when you need us.",
    gradient: "from-emerald-500 to-teal-500",
    glow: "group-hover:shadow-emerald-500/20",
    ring: "group-hover:ring-emerald-500/30",
  },
  {
    icon: Activity,
    title: "Performance Tracking",
    desc: "Advanced analytics and KPI tracking to continuously optimize your campaigns.",
    gradient: "from-orange-500 to-rose-500",
    glow: "group-hover:shadow-orange-500/20",
    ring: "group-hover:ring-orange-500/30",
  },
];

const WhyChooseUs = () => (
  <section
    id="why-us"
    className="py-24 bg-gray-950 relative overflow-hidden"
    style={{ perspective: "1000px" }}
  >
    {/* Background glow blobs */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl" />
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
          Why Choose Us
        </span>
        <h2 className="text-white font-bold text-3xl md:text-4xl mt-3 leading-tight">
          Built for{" "}
          <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Your Success
          </span>
        </h2>
      </motion.div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{
              opacity: 0,
              x: i % 2 === 0 ? -50 : 50,
              rotateY: i % 2 === 0 ? -10 : 10,
            }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className={`
              group relative flex gap-5 p-8 cursor-pointer
              rounded-2xl bg-gray-900/60 backdrop-blur-sm
              border border-gray-800 hover:border-gray-700
              ring-1 ring-transparent ${r.ring}
              shadow-xl ${r.glow}
              transition-all duration-300 ease-out
            `}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Icon */}
            <motion.div
              className={`w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br ${r.gradient} flex items-center justify-center shadow-lg`}
              whileHover={{ rotateY: 180, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <r.icon className="text-white" size={22} />
            </motion.div>

            {/* Text */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-2">
                {r.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{r.desc}</p>
            </div>

            {/* Subtle gradient overlay on hover */}
            <div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${r.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;