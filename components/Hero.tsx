"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-8">
      <motion.div
        className="max-w-5xl w-full text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main headline */}
        <motion.div variants={itemVariants}>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif font-bold leading-tight tracking-tight text-foreground mb-6">
            Crafting Digital
            <br />
            Experiences.
          </h1>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif font-bold leading-tight tracking-tight text-accent-primary">
            Full Stack Built.
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-xs sm:text-sm font-mono text-foreground/60 mt-12 mb-8 tracking-widest uppercase"
        >
          Full-Stack Developer | React & Node.js Expert | Performance Focused
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants} className="flex justify-center gap-4 flex-wrap">
          <a
            href="#work"
            className="px-8 py-3 border border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-background transition-all duration-300 text-sm font-mono uppercase tracking-wider"
          >
            View Work
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=deepakvk6334@gmail.com&su=Let%27s%20Work%20Together&body=Hi%20Deepak%2C%0A%0AI%27m%20reaching%20out%20because%20I%27m%20interested%20in%20discussing%20a%20project%20opportunity%20with%20you.%0A%0APlease%20tell%20me%20more%20about%20your%20availability%20and%20how%20we%20can%20collaborate.%0A%0ALooking%20forward%20to%20hearing%20from%20you%21%0A%0ABest%20regards"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-accent-primary text-background hover:opacity-80 transition-all duration-300 text-sm font-mono uppercase tracking-wider"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-xs font-mono text-foreground/40 mb-2">SCROLL TO EXPLORE</p>
          <svg className="w-5 h-5 mx-auto stroke-foreground/40" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
