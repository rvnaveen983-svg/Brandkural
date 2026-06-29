"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

const serviceOptions = [
  "Social Media Marketing",
  "Meta & Google Ads",
  "SEO Optimization",
  "Website Development",
  "Branding & Creative Design",
  "Full Digital Marketing Package",
];

const LeadForm = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    business: "",
    phone: "",
    service: "",
  });

  const update = (field, value) =>
    setForm((p) => ({ ...p, [field]: value }));

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
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-12 text-center">
            <CheckCircle className="mx-auto text-blue-500 mb-4" size={56} />
            <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
              Thank You!
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              We will contact you within 24 hours.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="py-24 relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-blue-500 text-sm font-semibold tracking-widest uppercase">
            Get Started
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-gray-900 dark:text-white">
            Start{" "}
            <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Growing Today
            </span>
          </h2>
        </div>

        {/* Card */}
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-8 md:p-10"
        >
          {/* Step Indicators */}
          <div className="flex items-center justify-center gap-3 mb-8">
            {[1, 2].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                    step >= s
                      ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md shadow-blue-200 dark:shadow-blue-900 scale-110"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-400"
                  }`}
                >
                  {s}
                </div>
                {s < 2 && (
                  <div
                    className={`w-12 h-0.5 transition-colors duration-300 ${
                      step > 1
                        ? "bg-gradient-to-r from-blue-500 to-indigo-500"
                        : "bg-gray-200 dark:bg-gray-700"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step 1 */}
          {step === 1 && (
            <div className="space-y-5">
              <div>
                <label className="text-sm font-medium mb-1.5 block text-gray-700 dark:text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="John Doe"
                  className="w-full rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block text-gray-700 dark:text-gray-300">
                  Business Name
                </label>
                <input
                  type="text"
                  required
                  value={form.business}
                  onChange={(e) => update("business", e.target.value)}
                  placeholder="Acme Corp"
                  className="w-full rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>
              <button
                type="button"
                onClick={() => {
                  if (form.name && form.business) setStep(2);
                }}
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white py-3.5 rounded-lg font-semibold shadow-md shadow-blue-200 dark:shadow-blue-900 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                Next →
              </button>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="space-y-5">
              <div>
                <label className="text-sm font-medium mb-1.5 block text-gray-700 dark:text-gray-300">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block text-gray-700 dark:text-gray-300">
                  Service Required
                </label>
                <select
                  required
                  value={form.service}
                  onChange={(e) => update("service", e.target.value)}
                  className="w-full rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 py-3.5 rounded-lg font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white py-3.5 rounded-lg font-semibold shadow-md shadow-blue-200 dark:shadow-blue-900 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  Get My Free Strategy Call
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default LeadForm;