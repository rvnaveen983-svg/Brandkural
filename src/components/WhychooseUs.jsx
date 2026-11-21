"use client";

import { BarChart3, Eye, Headphones, Activity } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: BarChart3,
    title: "ROI-focused strategies",
    desc: "Every campaign is designed to deliver measurable returns on your investment.",
  },
  {
    icon: Eye,
    title: "Transparent reporting",
    desc: "Real-time dashboards and regular reports so you always know where your money goes.",
  },
  {
    icon: Headphones,
    title: "Dedicated support",
    desc: "A personal account manager and responsive team available when you need us.",
  },
  {
    icon: Activity,
    title: "Performance tracking",
    desc: "Advanced analytics and KPI tracking to continuously optimize your campaigns.",
  },
];

const WhyChooseUs = () => (
  <section
    id="why-us"
    className="bg-white px-6 py-24 font-body md:px-[5vw] md:py-36"
  >
    <div className="mx-auto max-w-[1669px]">
      {/* Heading row */}
      <div className="grid gap-8 lg:grid-cols-[0.28fr_1fr]">
        <div className="flex items-start gap-4 pt-3 text-[11.5px] font-semibold tracking-[0.16em] lg:items-center lg:pt-0">
          <span className="text-brand-deep">03</span>
          <span className="uppercase text-[#656c78]">Why BrandKural</span>
        </div>

        <div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-heading text-[clamp(2.6rem,5.9vw,6.8rem)] font-medium leading-[0.95] tracking-[-0.055em] text-ink"
          >
            Built for
            <br />
            <span className="text-brand">your success.</span>
          </motion.h2>

          <p className="mt-6 max-w-[520px] text-base leading-[1.65] text-[#646b76]">
            We focus on performance, transparency, and long-term growth so your
            business gets real marketing results.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="mt-16 grid grid-cols-1 border-l border-t border-[#dce0e6] sm:grid-cols-2 md:mt-24 lg:grid-cols-4">
        {reasons.map((r, i) => {
          const featured = i === 0;

          return (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: "easeOut" }}
              className={`flex min-h-[380px] flex-col border-b border-r p-8 md:min-h-[480px] ${
                featured
                  ? "border-brand-deep bg-brand-deep"
                  : "border-[#dce0e6] bg-white"
              }`}
            >
              <div className="flex items-start justify-between">
                <r.icon
                  size={24}
                  strokeWidth={1.6}
                  className={featured ? "text-white" : "text-brand-deep"}
                />
                <span
                  className={`text-[10.7px] ${
                    featured ? "text-[#c9dcff]" : "text-[#9298a2]"
                  }`}
                >
                  0{i + 1}
                </span>
              </div>

              <div className="mt-auto">
                <h3
                  className={`font-heading text-[clamp(1.6rem,2.2vw,2.5rem)] font-medium leading-[1.08] tracking-[-0.055em] ${
                    featured ? "text-white" : "text-ink"
                  }`}
                >
                  {r.title}
                </h3>
                <p
                  className={`mt-6 max-w-[350px] text-[13.6px] leading-[1.65] ${
                    featured ? "text-[#c9dcff]" : "text-[#707681]"
                  }`}
                >
                  {r.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
