"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

interface SocialLink {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
}

const socialLinks: SocialLink[] = [
  {
    id: "email",
    label: "Email",
    icon: <Mail size={24} />,
    href: "mailto:deepakvk6334@gmail.com",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: <Linkedin size={24} />,
    href: "https://linkedin.com/in/deepak-vk/",
  },
  {
    id: "github",
    label: "GitHub",
    icon: <Github size={24} />,
    href: "https://github.com/deepak6235",
  },
  {
    id: "twitter",
    label: "Twitter",
    icon: <Twitter size={24} />,
    href: "https://twitter.com",
  },
];

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
    <section ref={sectionRef} id="contact" className="w-full py-24 px-4 sm:px-8 lg:px-16">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Main CTA */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-4">
            Ready to Create
            <br />
            Something Extraordinary?
          </h2>
          <p className="text-sm sm:text-base text-foreground/60 max-w-2xl mx-auto">
            Let's collaborate on projects that push boundaries and leave lasting impressions.
            Whether it's a complete redesign, new feature development,
            I'm here to bring your vision to life.
          </p>
        </motion.div>

        {/* Email CTA */}
        <motion.div variants={itemVariants} className="mb-20">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center justify-center px-8 sm:px-12 py-4 bg-accent-primary text-background hover:opacity-80 transition-all duration-300 text-sm sm:text-base font-mono uppercase tracking-wider hover:scale-105"
          >
            Get In Touch
            <span className="ml-2">→</span>
          </a>
        </motion.div>

        {/* Social Links Grid */}
        <motion.div variants={itemVariants}>
          <p className="text-xs font-mono text-foreground/50 uppercase tracking-widest mb-6">
            Follow the work
          </p>
          <div className="flex justify-center gap-4 sm:gap-6 flex-wrap">
            {socialLinks.map((social) => (
              <motion.a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-sm border border-border-ghost flex items-center justify-center hover:border-accent-primary text-foreground/70 hover:text-accent-primary transition-all duration-300 group"
                onHoverStart={() => setHoveredId(social.id)}
                onHoverEnd={() => setHoveredId(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Hover background */}
                <motion.div
                  className="absolute inset-0 bg-accent-primary/10 rounded-sm"
                  initial={{ scaleX: 0 }}
                  animate={
                    hoveredId === social.id
                      ? { scaleX: 1 }
                      : { scaleX: 0 }
                  }
                  transition={{ duration: 0.3, origin: "center" }}
                />

                {/* Icon */}
                <span className="relative z-10">{social.icon}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div variants={itemVariants} className="mt-20 pt-8 border-t border-border-ghost">
          <p className="text-xs font-mono text-foreground/40 uppercase tracking-widest">
            © 2025. Architecting intelligence, building scale.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
