"use client";

import { useState } from "react";
import {
  CheckCircle,
  Sparkles,
  Phone,
  Building2,
  User,
  Send,
  ArrowRight,
  MessageCircle,
  Mail,
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
  "w-full rounded-2xl bg-white/70 border border-gray-200 px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 outline-none backdrop-blur-xl shadow-sm transition-all duration-300 focus:bg-white focus:border-gray-500 focus:ring-4 focus:ring-black/10";

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
      <section id="contact" className="relative py-24 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_35%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-lg mx-auto rounded-[36px] bg-white/90 border border-white/70 backdrop-blur-2xl shadow-[0_35px_120px_rgba(255,255,255,0.15)] p-10 md:p-12 text-center"
          >
            <div className="w-20 h-20 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-5">
              <CheckCircle className="text-black" size={52} />
            </div>

            <h3 className="text-3xl font-extrabold mb-3 text-black">
              Thank You!
            </h3>

            <p className="text-gray-600">
              We received your details. We will contact you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="relative py-24 bg-black overflow-hidden"
      style={{ perspective: "1400px" }}
    >
      {/* Premium 3D Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_35%),linear-gradient(135deg,#000000,#0a0a0a_45%,#000000)]" />

        <motion.div
          className="absolute inset-0 opacity-[0.22] bg-[linear-gradient(to_right,#ffffff18_1px,transparent_1px),linear-gradient(to_bottom,#ffffff18_1px,transparent_1px)] bg-[size:80px_80px]"
          animate={{
            x: [0, 45, 0],
            y: [0, 45, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -top-28 left-1/4 w-[420px] h-[420px] rounded-full bg-white/10 blur-[120px]"
          animate={{
            x: [0, 80, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-0 right-1/4 w-[420px] h-[420px] rounded-full bg-white/10 blur-[120px]"
          animate={{
            x: [0, -80, 0],
            y: [0, -50, 0],
            scale: [1, 1.18, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* 3D Glass Cube */}
        <motion.div
          className="absolute top-[16%] right-[10%] w-28 h-28 rounded-[30px] bg-white/10 border border-white/20 backdrop-blur-xl shadow-[0_30px_90px_rgba(255,255,255,0.15)]"
          animate={{
            rotateX: [0, 180, 360],
            rotateY: [0, 140, 360],
            y: [0, -28, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformStyle: "preserve-3d" }}
        />

        {/* 3D Floating Ring */}
        <motion.div
          className="absolute bottom-[18%] left-[9%] w-24 h-24 rounded-full border-[16px] border-white/10 shadow-[0_30px_90px_rgba(255,255,255,0.1)]"
          animate={{
            rotateX: [0, 360],
            rotateY: [360, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformStyle: "preserve-3d" }}
        />

        {/* Floating Mini Cards */}
       

        <motion.div
          className="hidden lg:block absolute bottom-[28%] right-[8%] rounded-3xl bg-white/10 border border-white/15 backdrop-blur-xl px-5 py-4 shadow-[0_25px_80px_rgba(0,0,0,0.22)]"
          animate={{
            y: [0, 24, 0],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="flex items-center gap-3 text-white">
            <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center">
              <Mail size={18} />
            </div>
            <div>
              <p className="text-xs text-white/60">Free Consultation</p>
              <p className="text-sm font-bold">Strategy Call</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/15 backdrop-blur-xl text-gray-200 text-sm font-bold tracking-widest uppercase px-5 py-2 rounded-full">
              <Sparkles size={16} />
              Get Started
            </span>

            <h2 className="text-4xl md:text-6xl font-extrabold mt-6 text-white leading-tight">
              Start Growing Your{" "}
              <span className="bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent">
                Business Today
              </span>
            </h2>

            <p className="text-white/65 max-w-xl mt-5 text-base md:text-lg leading-8 mx-auto lg:mx-0">
              Fill the form and get a free digital marketing strategy call.
              We will understand your business and suggest the right growth plan.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mt-8 max-w-xl mx-auto lg:mx-0">
              {[
                "Free Strategy",
                "Fast Response",
                "Growth Plan",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xl p-4 text-white shadow-lg"
                >
                  <CheckCircle size={20} className="text-white mb-2" />
                  <p className="text-sm font-bold">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Glassy Form */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 8 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.form
              onSubmit={handleSubmit}
              whileHover={{
                y: -6,
                rotateX: 1,
                rotateY: -1,
              }}
              transition={{
                type: "spring",
                stiffness: 160,
                damping: 18,
              }}
              className="relative overflow-hidden rounded-[36px] bg-white/90 border border-white/70 backdrop-blur-2xl shadow-[0_35px_120px_rgba(255,255,255,0.15)] p-7 md:p-9"
            >
              {/* Glass shine */}
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
              <div className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-gray-200/60 blur-3xl" />
              <div className="absolute -bottom-32 -left-32 w-72 h-72 rounded-full bg-gray-300/50 blur-3xl" />

              <div className="relative">
                <div className="flex items-center justify-between gap-4 mb-7">
                  <div>
                    <p className="text-sm font-bold text-gray-700 uppercase tracking-widest">
                      Contact Form
                    </p>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-black mt-1">
                      Get Free Quote
                    </h3>
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-black to-gray-700 flex items-center justify-center text-white shadow-lg shadow-black/25">
                    <Send size={22} />
                  </div>
                </div>

                {/* Step Indicator */}
                <div className="flex items-center gap-3 mb-8">
                  {[1, 2].map((s) => (
                    <div key={s} className="flex items-center flex-1">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-extrabold transition-all duration-300 ${
                          step >= s
                            ? "bg-gradient-to-r from-black to-gray-700 text-white shadow-lg shadow-black/30"
                            : "bg-white/70 text-gray-400 border border-gray-200"
                        }`}
                      >
                        {s}
                      </div>

                      {s < 2 && (
                        <div
                          className={`h-1 flex-1 rounded-full mx-3 transition-all duration-300 ${
                            step > 1
                              ? "bg-gradient-to-r from-black to-gray-700"
                              : "bg-gray-200"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step-one"
                      initial={{ opacity: 0, x: 35 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -35 }}
                      transition={{ duration: 0.28 }}
                      className="space-y-5"
                    >
                      <div>
                        <label className="text-sm font-bold mb-2 flex items-center gap-2 text-gray-700">
                          <User size={16} className="text-black" />
                          Your Name
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
                        <label className="text-sm font-bold mb-2 flex items-center gap-2 text-gray-700">
                          <Building2 size={16} className="text-black" />
                          Business Name
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
                        className="w-full flex items-center justify-center gap-2 bg-black hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed text-white py-3.5 rounded-2xl font-extrabold shadow-lg shadow-black/25 hover:shadow-xl hover:scale-[1.01] active:scale-[0.98] transition-all duration-200"
                      >
                        Next
                        <ArrowRight size={18} />
                      </button>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step-two"
                      initial={{ opacity: 0, x: 35 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -35 }}
                      transition={{ duration: 0.28 }}
                      className="space-y-5"
                    >
                      <div>
                        <label className="text-sm font-bold mb-2 flex items-center gap-2 text-gray-700">
                          <Phone size={16} className="text-black" />
                          Phone Number
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
                        <label className="text-sm font-bold mb-2 block text-gray-700">
                          Service Required
                        </label>

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
                          className="flex-1 bg-white/75 hover:bg-white text-gray-700 border border-gray-200 py-3.5 rounded-2xl font-extrabold hover:scale-[1.01] active:scale-[0.98] transition-all duration-200"
                        >
                          Back
                        </button>

                        <button
                          type="submit"
                          className="flex-1 flex items-center justify-center gap-2 bg-black hover:bg-neutral-800 text-white py-3.5 rounded-2xl font-extrabold shadow-lg shadow-black/25 hover:shadow-xl hover:scale-[1.01] active:scale-[0.98] transition-all duration-200"
                        >
                          <Send size={16} />
                          Submit
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
