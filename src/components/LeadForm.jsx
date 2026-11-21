"use client";

import { useState } from "react";
import {
  CheckCircle,
  Phone,
  Building2,
  User,
  Send,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const serviceOptions = [
  "Social Media Marketing",
  "Meta & Google Ads",
  "SEO Optimization",
  "Website Development",
  "Branding & Creative Design",
  "Full Digital Marketing Package",
];

const inputClass =
  "w-full rounded-[3px] border border-white/[0.14] bg-white/[0.04] px-4 py-3.5 text-sm text-white placeholder:text-[#7e8797] outline-none transition-all duration-200 focus:border-brand focus:bg-white/[0.07] focus:ring-4 focus:ring-brand/20 [&>option]:bg-[#071a35] [&>option]:text-white";

const labelClass =
  "mb-2 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#98a7bd]";

const LeadForm = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    business: "",
    phone: "",
    service: "",
  });

  const update = (field, value) => {
    setForm((p) => ({ ...p, [field]: value }));
  };

  const goNext = () => {
    if (form.name.trim() && form.business.trim()) {
      setStep(2);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const msg = encodeURIComponent(
      `New Lead:\nName: ${form.name}\nBusiness: ${form.business}\nPhone: ${form.phone}\nService: ${form.service}`
    );

    window.open(`https://wa.me/916382700550?text=${msg}`, "_blank");

    const mailBody = encodeURIComponent(
      `Name: ${form.name}\nBusiness: ${form.business}\nPhone: ${form.phone}\nService: ${form.service}`
    );

    const mailLink = document.createElement("a");
    mailLink.href = `mailto:rvnaveen983@gmail.com?subject=${encodeURIComponent(
      "New Lead from Website"
    )}&body=${mailBody}`;
    mailLink.click();

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section
        id="contact"
        className="bg-ink px-6 py-24 font-body md:px-[5vw] md:py-36"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-lg rounded-[4px] border border-white/[0.14] bg-navy-2 p-10 text-center md:p-12"
        >
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-brand-deep">
            <CheckCircle className="text-white" size={34} />
          </div>

          <h3 className="font-heading text-3xl font-medium tracking-[-0.04em] text-white">
            Thank you!
          </h3>

          <p className="mt-3 text-[#aeb9c9]">
            We received your details. We will contact you within 24 hours.
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-ink px-6 py-24 font-body md:px-[5vw] md:py-36"
    >
      {/* Soft blue glow */}
      <div className="pointer-events-none absolute -left-[200px] bottom-[-120px] h-[500px] w-[500px] rounded-full bg-[rgba(31,105,255,0.16)] blur-[100px]" />

      <div className="relative mx-auto max-w-[1669px]">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 text-[11.5px] font-semibold tracking-[0.16em]">
          <span className="text-brand-soft">04</span>
          <span className="uppercase text-[#7e8797]">Get started</span>
        </div>

        <div className="mt-12 grid items-start gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-[6vw]">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="font-heading text-[clamp(2.6rem,5.4vw,6.2rem)] font-medium leading-[0.95] tracking-[-0.055em] text-white">
              Start growing your
              <br />
              <span className="text-brand">business today.</span>
            </h2>

            <p className="mt-8 max-w-[520px] text-base leading-[1.7] text-[#aeb9c9]">
              Fill the form and get a free digital marketing strategy call. We
              will understand your business and suggest the right growth plan.
            </p>

            <div className="mt-10 grid max-w-xl border-l border-t border-white/[0.14] sm:grid-cols-3">
              {["Free Strategy", "Fast Response", "Growth Plan"].map((item) => (
                <div
                  key={item}
                  className="border-b border-r border-white/[0.14] p-5"
                >
                  <CheckCircle size={20} className="mb-3 text-[#4f91ff]" />
                  <p className="text-sm font-semibold text-white">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="rounded-[4px] border border-white/[0.14] p-7 md:p-10"
            style={{
              backgroundImage:
                "linear-gradient(152deg, rgb(12,44,91) 8.5%, rgb(7,26,53) 66.6%)",
            }}
          >
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.17em] text-[#8ba5ca]">
                  Contact form
                </p>
                <h3 className="mt-2 font-heading text-[clamp(1.6rem,2.4vw,2.2rem)] font-medium tracking-[-0.045em] text-white">
                  Get free quote
                </h3>
              </div>

              {/* Step indicator */}
              <p className="text-[11px] font-semibold tracking-[0.16em] text-[#8ba5ca]">
                <span className="text-brand-soft">0{step}</span> / 02
              </p>
            </div>

            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step-one"
                  initial={{ opacity: 0, x: 28 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -28 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-5"
                >
                  <div>
                    <label className={labelClass}>
                      <User size={14} className="text-[#4f91ff]" />
                      Your name
                    </label>

                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="Enter your name"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>
                      <Building2 size={14} className="text-[#4f91ff]" />
                      Business name
                    </label>

                    <input
                      type="text"
                      required
                      value={form.business}
                      onChange={(e) => update("business", e.target.value)}
                      placeholder="Enter your business name"
                      className={inputClass}
                    />
                  </div>

                  <button
                    type="button"
                    onClick={goNext}
                    disabled={!form.name.trim() || !form.business.trim()}
                    className="flex min-h-[54px] w-full items-center justify-center gap-3 rounded-[3px] bg-brand-deep text-[13.6px] font-semibold text-white shadow-[0_12px_16px_rgba(20,91,219,0.25)] transition-colors duration-200 hover:bg-[#1a6bf0] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Next
                    <ArrowRight size={18} />
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step-two"
                  initial={{ opacity: 0, x: 28 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -28 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-5"
                >
                  <div>
                    <label className={labelClass}>
                      <Phone size={14} className="text-[#4f91ff]" />
                      Phone number
                    </label>

                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      placeholder="+91 xxxxxxx"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>Service required</label>

                    <select
                      required
                      value={form.service}
                      onChange={(e) => update("service", e.target.value)}
                      className={inputClass}
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex gap-3 pt-1">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex min-h-[54px] flex-1 items-center justify-center rounded-[3px] border border-white/[0.24] bg-white/[0.04] text-[13.6px] font-semibold text-white transition-colors duration-200 hover:bg-white/[0.1]"
                    >
                      Back
                    </button>

                    <button
                      type="submit"
                      className="flex min-h-[54px] flex-1 items-center justify-center gap-2 rounded-[3px] bg-brand-deep text-[13.6px] font-semibold text-white shadow-[0_12px_16px_rgba(20,91,219,0.25)] transition-colors duration-200 hover:bg-[#1a6bf0]"
                    >
                      <Send size={16} />
                      Submit
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
