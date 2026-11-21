"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";

const serif = "'Playfair Display', Georgia, serif";
const sans = "'Inter', sans-serif";

// Background video (hosted remotely). To self-host: save it as /public/hero.mp4 and use "/hero.mp4"
const VIDEO_SRC =
  "https://pub-1e5b4001b36b47e28e6a2fb775966a79.r2.dev/templates/glacier/hero.mp4";

const label = {
  fontSize: "10.5px",
  fontWeight: 500,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.6)",
  fontFamily: sans,
  textDecoration: "none",
};

const HeroSection = () => {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        width: "100%",
        height: "100svh",
        minHeight: "640px",
        overflow: "hidden",
        background: "linear-gradient(180deg, #06162d 0%, #071a35 100%)",
      }}
    >
      {/* Background video */}
      <video
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        src={VIDEO_SRC}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlays */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.20)" }} />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.26) 0%, transparent 22%, transparent 60%, rgba(0,0,0,0.38) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(0,0,0,0.15) 0%, transparent 18%, transparent 82%, rgba(0,0,0,0.15) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-14%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "1000px",
          height: "720px",
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(59,130,246,0.08) 0%, transparent 68%)",
          pointerEvents: "none",
        }}
      />

      {/* Centered lockup */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 24px",
        }}
      >
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            marginBottom: "26px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span
              style={{
                display: "block",
                width: "18px",
                height: "18px",
                borderRadius: "9px",
                border: "3.5px solid #3b82f6",
                transform: "rotate(-35deg)",
              }}
            />
            <span
              style={{
                fontSize: "15px",
                fontWeight: 500,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#fff",
                fontFamily: sans,
                paddingLeft: "0.28em",
              }}
            >
              BrandKural
            </span>
          </div>
          <span
            style={{
              fontSize: "10px",
              fontWeight: 500,
              letterSpacing: "0.34em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.65)",
              fontFamily: sans,
              paddingLeft: "0.34em",
            }}
          >
            Digital Marketing
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.24, ease: "easeOut" }}
          style={{
            margin: 0,
            fontFamily: serif,
            textTransform: "uppercase",
            color: "#fff",
            textShadow: "0 2px 40px rgba(0,0,0,0.4)",
          }}
        >
          <span
            style={{
              display: "block",
              fontWeight: 400,
              fontSize: "clamp(3.3rem, 8.6vw, 6.4rem)",
              lineHeight: 1,
              letterSpacing: "0.02em",
            }}
          >
            Scale Your
          </span>
          <span
            style={{
              display: "block",
              fontWeight: 700,
              fontSize: "clamp(3rem, 8.2vw, 6.2rem)",
              lineHeight: 0.98,
              letterSpacing: "0.01em",
            }}
          >
            Business
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.42, ease: "easeOut" }}
          style={{
            margin: "24px 0 0",
            maxWidth: "520px",
            fontFamily: serif,
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: 1.5,
            color: "rgba(255,255,255,0.85)",
            textShadow: "0 1px 20px rgba(0,0,0,0.45)",
          }}
        >
          From strategy to execution, we help brands grow, generate quality
          leads and dominate online with powerful digital marketing.
        </motion.p>

        {/* Oval button — true ellipse via border-radius: 50% */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.58, ease: "easeOut" }}
          whileHover={{ backgroundColor: "rgba(255,255,255,0.12)" }}
          whileTap={{ scale: 0.97 }}
          style={{
            marginTop: "38px",
            padding: "20px 52px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.6)",
            color: "#fff",
            textDecoration: "none",
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            fontFamily: sans,
            whiteSpace: "nowrap",
            backgroundColor: "rgba(255,255,255,0)",
          }}
        >
          Get Free Consultation
        </motion.a>
      </div>

      {/* Footer bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        className="px-6 md:px-10"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: "26px",
        }}
      >
        {/* Left: contact icons */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <a
            href="https://wa.me/916382700550"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            style={{ display: "flex", color: "rgba(255,255,255,0.7)" }}
          >
            <MessageCircle size={16} />
          </a>
          <a
            href="mailto:rvnaveen983@gmail.com"
            aria-label="Send an email"
            style={{ display: "flex", color: "rgba(255,255,255,0.7)" }}
          >
            <Mail size={16} />
          </a>
        </div>

        {/* Center */}
        <div
          className="absolute left-1/2 hidden -translate-x-1/2 gap-[5px] md:flex"
          style={label}
        >
          <span style={{ color: "rgba(255,255,255,0.9)", fontWeight: 600 }}>
            Scroll
          </span>
          <span>To Navigate</span>
        </div>

        {/* Right */}
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <a href="#contact" style={label}>
            Free Consultation
          </a>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity: 0.7 }}
          >
            <path
              d="M5 15V9M10 19V5M15 16V8M20 13v-2"
              stroke="#fff"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
