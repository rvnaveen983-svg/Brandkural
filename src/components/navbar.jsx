"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why us" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#services");

  const handleLogoError = (e) => {
    const img = e.currentTarget;
    img.style.display = "none";

    const fallback = img.nextElementSibling;
    if (fallback) fallback.style.display = "block";
  };

  return (
    <header className="absolute top-4 left-0 right-0 z-50 px-4">
      <motion.nav
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative max-w-7xl mx-auto rounded-2xl border border-white/50 bg-white/25 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_8px_40px_rgba(0,60,120,0.18)]"
      >
        {/* Glass highlight line */}
        <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent" />

        <div className="px-5 md:px-8 flex items-center justify-between h-[76px] gap-8">
          {/* Logo */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 shrink-0 no-underline"
          >
            <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shrink-0 shadow-lg shadow-black/20 overflow-hidden">
              <img
                src="/Brandkural-logo.png"
                alt="BrandKural"
                className="w-11 h-11 rounded-2xl object-contain bg-white"
                onError={handleLogoError}
              />

              <svg
                className="w-5 h-5 hidden"
                style={{ display: "none" }}
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3l8 4.5V12c0 4.4-3.3 8.2-8 9-4.7-.8-8-4.6-8-9V7.5L12 3z" />
              </svg>

              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700" />
            </div>

            <div className="flex flex-col leading-none">
              <span className="text-[16px] md:text-[17px] font-extrabold tracking-[0.08em] text-black uppercase">
                BrandKural
              </span>
              <span className="text-[10px] font-semibold text-gray-700 tracking-[0.08em] uppercase mt-1">
                Digital Marketing
              </span>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1 list-none flex-1 justify-center">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setActive(href)}
                  className={[
                    "relative block px-4 py-2.5 text-[14px] font-semibold rounded-xl transition-all duration-300 no-underline",
                    active === href
                      ? "text-black"
                      : "text-gray-800 hover:text-black hover:bg-white/40",
                  ].join(" ")}
                >
                  {active === href && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-xl bg-white/50 border border-white/70 shadow-sm"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}

                  <span className="relative z-10">{label}</span>

                  {active === href && (
                    <motion.span
                      layoutId="activeDot"
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-black"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <motion.a
              href="#login"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="px-5 py-2.5 text-[13px] font-semibold text-gray-900 border border-white/60 rounded-xl no-underline transition-all bg-white/30 backdrop-blur-md hover:border-white hover:text-black hover:bg-white/60"
            >
              Log in
            </motion.a>

            <motion.a
              href="#consultation"
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative overflow-hidden px-5 py-2.5 text-[13px] font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl no-underline shadow-lg shadow-black/20"
            >
              <span className="relative z-10 flex items-center gap-2">
                Free consultation
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>

              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </motion.a>
          </div>

          {/* Mobile Button */}
          <motion.button
            whileTap={{ scale: 0.92 }}
            className="md:hidden p-2.5 text-gray-900 bg-white/40 backdrop-blur-md border border-white/60 rounded-xl shadow-sm hover:text-black hover:bg-white/70 transition-colors focus:outline-none ml-auto"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={21} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={21} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -12, height: 0 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="md:hidden overflow-hidden border-t border-white/50 bg-white/40 backdrop-blur-2xl rounded-b-2xl"
            >
              <div className="px-5 py-5">
                <ul className="flex flex-col gap-2 list-none mb-5">
                  {links.map(({ href, label }, index) => (
                    <motion.li
                      key={href}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.06 }}
                    >
                      <a
                        href={href}
                        onClick={() => {
                          setActive(href);
                          setMenuOpen(false);
                        }}
                        className={[
                          "block px-4 py-3 text-sm font-semibold rounded-xl no-underline transition-all",
                          active === href
                            ? "text-black bg-white/60 border border-white/70"
                            : "text-gray-800 hover:text-black hover:bg-white/50",
                        ].join(" ")}
                      >
                        {label}
                      </a>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-col gap-3">
                  <a
                    href="#login"
                    onClick={() => setMenuOpen(false)}
                    className="block text-center py-3 text-sm font-semibold text-gray-900 border border-white/60 rounded-xl no-underline bg-white/40 hover:bg-white/70 hover:text-black"
                  >
                    Log in
                  </a>

                  <a
                    href="#consultation"
                    onClick={() => setMenuOpen(false)}
                    className="block text-center py-3 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl no-underline shadow-lg shadow-black/20"
                  >
                    Free consultation
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default Navbar;
