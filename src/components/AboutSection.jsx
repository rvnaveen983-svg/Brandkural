"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" },
  }),
};

const sideStats = [
  { value: "120+", label: "Happy Clients" },
  { value: "98%", label: "Client Retention" },
];

const AboutSection = () => (
  <section
    id="about"
    className="bg-paper px-6 py-24 font-body md:px-[5vw] md:py-36"
  >
    <div className="mx-auto max-w-[1669px]">
      {/* Eyebrow */}
      <div className="flex items-center gap-4 text-[11.5px] font-semibold tracking-[0.16em]">
        <span className="text-brand-deep">01</span>
        <span className="uppercase text-[#656c78]">About BrandKural</span>
      </div>

      {/* Heading + copy */}
      <div className="mt-12 grid gap-10 lg:grid-cols-[1.66fr_1fr] lg:gap-[8vw]">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="font-heading text-[clamp(2.6rem,5.9vw,6.8rem)] font-medium leading-[0.95] tracking-[-0.055em] text-ink"
        >
          A results-driven
          <br />
          <span className="text-brand">digital marketing agency.</span>
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          custom={0.15}
          className="pt-1 lg:pt-4"
        >
          <p className="text-[clamp(1.2rem,1.5vw,1.4rem)] leading-[1.45] tracking-[-0.02em] text-ink">
            We help businesses generate high-quality leads, increase brand
            visibility, and boost revenue through data-driven strategies.
          </p>

          <p className="py-6 text-base leading-7 text-[#646b76]">
            Our team combines creativity with analytics to deliver measurable
            growth.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-[10px] border-b border-ink pb-2 text-[13.6px] font-semibold text-ink no-underline"
          >
            Get free consultation
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>

      {/* Showcase panel */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-20 grid min-h-[520px] overflow-hidden bg-navy-2 md:mt-28 lg:h-[620px] lg:grid-cols-[2.125fr_1fr]"
      >
        {/* Left: abstract blue light + stats */}
        <div
          className="relative min-h-[300px] overflow-hidden"
          style={{
            background:
              "radial-gradient(circle at 20% 30%, rgba(37,99,235,0.55), transparent 45%), radial-gradient(circle at 70% 85%, rgba(20,91,219,0.35), transparent 50%), linear-gradient(135deg, #06162d, #0a2348)",
          }}
        >
          <div className="absolute left-[11%] top-0 h-full w-[7%] bg-[rgba(30,90,255,0.35)]" />
          <div className="absolute left-[46%] top-0 h-full w-px bg-[#2f6bff]" />
          <div className="absolute left-[50%] top-0 h-full w-[9%] bg-[rgba(25,70,220,0.45)]" />

          <div className="absolute bottom-8 left-8 flex gap-12 md:bottom-10 md:left-12 md:gap-16">
            {sideStats.map((s) => (
              <div key={s.label}>
                <p className="font-heading text-[clamp(2.4rem,4vw,4rem)] font-medium leading-none tracking-[-0.06em] text-white">
                  {s.value}
                </p>
                <p className="mt-3 text-[10px] uppercase tracking-[0.17em] text-white/65">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: big number */}
        <div
          className="flex min-h-[320px] flex-col p-8 md:p-14"
          style={{
            backgroundImage:
              "linear-gradient(152deg, rgb(12,44,91) 8.5%, rgb(7,26,53) 66.6%)",
          }}
        >
          <p className="text-[10px] uppercase tracking-[0.17em] text-[#8ba5ca]">
            Projects delivered
          </p>

          <div className="mt-auto">
            <p className="font-heading text-[clamp(5rem,11vw,12rem)] font-medium leading-[0.9] tracking-[-0.08em] text-[#4389ff]">
              250+
            </p>
            <p className="mt-4 text-[18px] leading-[1.5] text-[#cbd8eb]">
              brands grown with
              <br />
              data-driven strategies.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
