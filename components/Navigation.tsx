"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Tech", href: "#tech" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsVisible(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 lg:px-16 py-6"
      animate={{
        opacity: isVisible ? 1 : 0,
        backdropFilter: scrollY > 100 ? "blur(20px)" : "blur(0px)",
        backgroundColor: scrollY > 100 ? "rgba(10, 10, 10, 0.8)" : "rgba(10, 10, 10, 0)",
        borderBottom:
          scrollY > 100 ? "1px solid rgba(42, 42, 42, 0.5)" : "1px solid transparent",
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-sm font-mono font-bold text-foreground uppercase tracking-widest hover:text-accent-primary transition-colors duration-300"
        >
          PORTFOLIO
        </a>

        {/* Nav Links */}
        <div className="flex gap-4 sm:gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="text-xs sm:text-sm font-mono text-foreground/70 hover:text-accent-primary transition-colors duration-300 uppercase tracking-widest relative group"
              whileHover={{ y: -2 }}
            >
              {item.label}
              <motion.div
                className="absolute bottom-0 left-0 h-px bg-accent-primary"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
