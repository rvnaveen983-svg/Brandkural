"use client";

import {
  Share2,
  Target,
  Search,
  Globe,
  Palette,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Share2,
    tag: "SOCIAL",
    title: "Social Media Marketing",
    desc: "Build a loyal community and drive engagement across all social platforms with data-backed content strategies.",
  },
  {
    icon: Target,
    tag: "PERFORMANCE",
    title: "Meta & Google Ads",
    desc: "Maximize your ROI with precision-targeted ad campaigns that reach the right audience at the right time.",
  },
  {
    icon: Search,
    tag: "ORGANIC",
    title: "SEO Optimization",
    desc: "Dominate search rankings and drive organic traffic with our proven SEO methodologies and keyword strategies.",
  },
  {
    icon: Globe,
    tag: "DIGITAL",
    title: "Website Development",
    desc: "High-performance, conversion-optimized websites designed to turn visitors into paying customers.",
  },
  {
    icon: Palette,
    tag: "IDENTITY",
    title: "Branding & Creative Design",
    desc: "Memorable brand identities and stunning visuals that set you apart from the competition.",
  },
];

const cardBg = {
  backgroundImage:
    "linear-gradient(150deg, rgba(255,255,255,0.024) 6%, rgba(255,255,255,0) 94%)",
};

const ServicesSection = () => (
  <section
    id="services"
    className="bg-ink px-6 py-24 font-body md:px-[5vw] md:py-36"
  >
    <div className="mx-auto max-w-[1669px]">
      {/* Eyebrow */}
      <div className="flex items-center gap-4 text-[11.5px] font-semibold tracking-[0.16em]">
        <span className="text-brand-soft">02</span>
        <span className="uppercase text-[#7e8797]">Our services</span>
      </div>

      {/* Heading row */}
      <div className="mt-12 grid items-end gap-8 lg:grid-cols-2">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-heading text-[clamp(2.6rem,5.9vw,6.8rem)] font-medium leading-[0.95] tracking-[-0.055em] text-white"
        >
          Everything you need
          <br />
          to <span className="text-brand">grow online.</span>
        </motion.h2>

        <p className="max-w-[320px] text-base leading-[1.6] text-[#8d95a2] lg:pb-3">
          Powerful digital solutions designed to attract customers, increase
          leads, and grow your brand faster.
        </p>
      </div>

      {/* Grid */}
      <div className="mt-16 grid grid-cols-1 border-l border-t border-white/[0.14] sm:grid-cols-2 md:mt-20 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.article
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.07, ease: "easeOut" }}
            style={cardBg}
            className="group relative flex min-h-[300px] flex-col justify-between border-b border-r border-white/[0.14] p-[25.6px] transition-colors duration-300 hover:bg-white/[0.04] md:min-h-[350px]"
          >
            <div className="flex items-start justify-between">
              <s.icon size={25} className="text-[#4f91ff]" strokeWidth={1.6} />
              <span className="text-[8.8px] tracking-[0.13em] text-[#747b87]">
                {s.tag}
              </span>
            </div>

            <div>
              <h3 className="font-heading text-[24.8px] font-medium leading-[1.5] tracking-[-0.055em] text-white">
                {s.title}
              </h3>
              <p className="mt-3 max-w-[290px] text-[13.76px] leading-[1.6] text-[#878e99]">
                {s.desc}
              </p>
            </div>
          </motion.article>
        ))}

        {/* CTA cell */}
        <a
          href="#contact"
          className="group flex min-h-[300px] flex-col justify-between border-b border-r border-brand-deep bg-brand-deep p-[25.6px] no-underline transition-colors duration-300 hover:bg-[#1a6bf0] md:min-h-[350px]"
        >
          <span className="text-[8.8px] tracking-[0.13em] text-[#c9dcff]">
            LET&rsquo;S TALK
          </span>

          <div>
            <h3 className="font-heading text-[24.8px] font-medium leading-[1.3] tracking-[-0.055em] text-white">
              Get a free consultation
            </h3>
            <span className="mt-4 inline-flex items-center gap-2 text-[13.6px] font-semibold text-white">
              Start a project
              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </span>
          </div>
        </a>
      </div>
    </div>
  </section>
);

export default ServicesSection;
