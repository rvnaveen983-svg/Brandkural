"use client";
import React, { useState } from "react";

const links = [
  { href: "#about",    label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why-us",   label: "Why us" },
  { href: "#contact",  label: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#services");

  return (
    <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50"
         style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.04)" }}>
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-[72px] gap-10">

        {/* ── Logo ── */}
        <a href="/" className="flex items-center gap-2.5 shrink-0 no-underline">
          <div className="w-10 h-10 rounded-[10px] bg-[#1a56db] flex items-center justify-center shrink-0">
            {/* Swap with your actual logo image ↓ */}
            <img
              src="/Brandkural-logo.png"
              alt="BrandKural"
              className="w-10 h-10 rounded-[10px] object-contain"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "block";
              }}
            />
            <svg className="w-5 h-5 hidden" style={{ display: "none" }}
                 viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"
                 strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3l8 4.5V12c0 4.4-3.3 8.2-8 9-4.7-.8-8-4.6-8-9V7.5L12 3z" />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[16px] font-extrabold tracking-[0.07em] text-[#1a56db] uppercase">
              BrandKural
            </span>
            <span className="text-[10px] font-medium text-gray-400 tracking-[0.04em] uppercase mt-0.5">
              Digital Marketing
            </span>
          </div>
        </a>

        {/* ── Desktop Nav ── */}
        <ul className="hidden md:flex items-center gap-0.5 list-none flex-1 justify-center">
          {links.map(({ href, label }) => (
            <li key={href}>
              
               <a href={href}
                onClick={() => setActive(href)}
                className={[
                  "relative block px-3.5 py-2 text-[13.5px] font-medium rounded-[7px] transition-colors duration-150 no-underline",
                  active === href
                    ? "text-[#1a56db] font-semibold"
                    : "text-gray-500 hover:text-[#1a56db] hover:bg-blue-50",
                ].join(" ")}
              >
                {label}
                {active === href && (
                  <span className="absolute -bottom-[17px] left-1/2 -translate-x-1/2 w-6 h-[2.5px] bg-[#1a56db] rounded-t-sm" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Right actions ── */}
        <div className="hidden md:flex items-center gap-2.5 shrink-0">
          <a href="#login"
             className="px-4 py-[7px] text-[13px] font-medium text-gray-600 border border-gray-300 rounded-[7px] no-underline transition-all hover:border-blue-300 hover:text-[#1a56db] hover:bg-blue-50">
            Log in
          </a>
          <a href="#consultation"
             className="px-[18px] py-2 text-[13px] font-semibold text-white bg-[#1a56db] rounded-[7px] no-underline transition-colors hover:bg-[#1e40af]">
            Free consultation
          </a>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          className="md:hidden p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* ── Mobile menu ── */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4">
          <ul className="flex flex-col gap-1 list-none mb-4">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a href={href}
                   onClick={() => { setActive(href); setMenuOpen(false); }}
                   className={[
                     "block px-3 py-2.5 text-sm font-medium rounded-[7px] no-underline transition-colors",
                     active === href
                       ? "text-[#1a56db] bg-blue-50 font-semibold"
                       : "text-gray-600 hover:text-[#1a56db] hover:bg-blue-50",
                   ].join(" ")}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2">
            <a href="#login" onClick={() => setMenuOpen(false)}
               className="block text-center py-2.5 text-sm font-medium text-gray-600 border border-gray-300 rounded-[7px] no-underline hover:border-blue-300 hover:text-[#1a56db]">
              Log in
            </a>
            <a href="#consultation" onClick={() => setMenuOpen(false)}
               className="block text-center py-2.5 text-sm font-semibold text-white bg-[#1a56db] rounded-[7px] no-underline hover:bg-[#1e40af]">
              Free consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;