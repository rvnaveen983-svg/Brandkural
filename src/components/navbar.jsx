"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownRight, Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why us" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 px-6 md:px-[5vw]">
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto flex h-24 max-w-[1669px] items-center justify-between border-b border-white/[0.12]"
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 no-underline">
          <span className="block h-[25px] w-[25px] -rotate-[35deg] rounded-[12.5px] border-[4.8px] border-brand" />
          <span className="font-heading text-[18.4px] font-extrabold tracking-[-0.04em] text-white">
            BrandKural
            <sup className="ml-0.5 text-[7px] font-bold text-[#8a96a8]">®</sup>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden list-none items-center gap-9 md:flex">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-[12.5px] text-[#abb6c7] no-underline transition-colors duration-200 hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right action */}
        <a
          href="#contact"
          className="group hidden items-center gap-2 text-[12.5px] font-semibold text-white no-underline md:flex"
        >
          Free consultation
          <ArrowDownRight
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
          />
        </a>

        {/* Mobile button */}
        <button
          className="rounded-[3px] border border-white/[0.14] bg-white/[0.04] p-2.5 text-white backdrop-blur-md md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="absolute left-0 right-0 top-full mt-2 rounded-[4px] border border-white/[0.14] bg-[rgba(7,26,53,0.94)] p-5 backdrop-blur-xl md:hidden"
            >
              <ul className="mb-5 flex list-none flex-col gap-1">
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={() => setOpen(false)}
                      className="block px-2 py-3 text-sm text-[#cbd8eb] no-underline hover:text-white"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-[3px] bg-brand-deep py-3 text-center text-sm font-semibold text-white no-underline"
              >
                Free consultation
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default Navbar;
