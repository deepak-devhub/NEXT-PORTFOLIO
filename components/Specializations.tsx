"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Code, Server, Layers } from "lucide-react";

interface Specialization {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  focusAreas: string[];
  technologies: string[];
}

const specializations: Specialization[] = [
  {
    id: "frontend",
    title: "Front-End Development",
    icon: <Code size={32} />,
    description:
      "Specializing in creating responsive, user-friendly interfaces using modern JavaScript frameworks and design principles.",
    focusAreas: [
      "Responsive Web Design - Mobile-first approach, CSS media queries, Flexible layouts (Flexbox, CSS Grid)",
      "Modern JavaScript Frameworks - React component development, Next.js for SSR/SSG, State management (Hooks, Context API)",
      "UI/UX Implementation - Design system implementation, Accessibility (WCAG), Performance optimization",
      "Component Architecture - Reusable components, Component composition, Props drilling optimization",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap5",
      "Material UI",
      "TypeScript",
    ],
  },
  {
    id: "backend",
    title: "Back-End Development",
    icon: <Server size={32} />,
    description:
      "Expertise in building robust, scalable server-side solutions with focus on API design, database management, and authentication.",
    focusAreas: [
      "RESTful API Design - Endpoint design, HTTP methods and status codes, Error handling and validation",
      "Database Management - Schema design, Query optimization, Data integrity",
      "Server Optimization - Caching strategies, Load balancing, Performance tuning",
      "Authentication Systems - JWT implementation, OAuth integration, Session management, Authorization strategies",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "NestJS",
      "Python",
      "Django",
      "Flask",
      "MySQL",
      "MongoDB",
      "TypeORM",
    ],
  },
  {
    id: "fullstack",
    title: "Full-Stack Development",
    icon: <Layers size={32} />,
    description:
      "Complete end-to-end application development from database design through UI implementation, deployment, and maintenance.",
    focusAreas: [
      "End-to-End Solutions - Requirements analysis, Architecture design, Implementation, Testing and deployment",
      "System Architecture - Scalable design patterns, Microservices architecture, Design patterns (MVC, etc.)",
      "Deployment & DevOps - VPS Hosting, Vercel deployment, Docker containerization, CI/CD pipelines",
      "Scalability Design - Database scaling, Server optimization, Caching mechanisms, Load distribution",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "NestJS",
      "MongoDB",
      "MySQL",
      "Docker",
      "Vercel",
      "AWS",
    ],
  },
];

export default function Specializations() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);
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
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <section ref={sectionRef} id="specializations" className="w-full py-24 px-4 sm:px-8 lg:px-16">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-4">
            Specializations
          </h2>
          <p className="text-sm font-mono text-foreground/50 uppercase tracking-widest">
            Core Areas of Expertise
          </p>
        </motion.div>

        {/* Specializations Grid */}
        <motion.div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {specializations.map((spec) => (
            <motion.div key={spec.id} variants={itemVariants}>
              <div
                className="h-full border border-border-ghost hover:border-accent-primary/50 transition-all duration-300 p-8 rounded-sm cursor-pointer group"
                onClick={() => setExpandedId(expandedId === spec.id ? null : spec.id)}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-accent-primary group-hover:scale-110 transition-transform duration-300">
                    {spec.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-foreground">{spec.title}</h3>
                </div>

                {/* Description */}
                <p className="text-sm text-foreground/70 mb-6 leading-relaxed">{spec.description}</p>

                {/* Focus Areas - Show first 2, expand on click */}
                <div className="mb-6 space-y-3">
                  {spec.focusAreas.slice(0, expandedId === spec.id ? undefined : 1).map((area, idx) => (
                    <div key={idx} className="flex gap-3">
                      <span className="text-accent-primary flex-shrink-0 mt-1">▸</span>
                      <p className="text-xs text-foreground/70 leading-relaxed">{area}</p>
                    </div>
                  ))}
                  {!expandedId && spec.focusAreas.length > 1 && (
                    <p className="text-xs text-accent-primary/70 italic">
                      + {spec.focusAreas.length - 1} more focus areas...
                    </p>
                  )}
                </div>

                {/* Technologies */}
                <div className="pt-6 border-t border-border-ghost">
                  <p className="text-xs font-mono text-foreground/50 uppercase tracking-widest mb-3">
                    Key Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {spec.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2 py-1 bg-border-ghost/50 text-foreground/70 rounded-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {spec.technologies.length > 5 && (
                      <span className="text-xs text-foreground/50">+{spec.technologies.length - 5}</span>
                    )}
                  </div>
                </div>

                {/* Expand indicator */}
                <div className="mt-4 text-center">
                  <p className="text-xs text-accent-primary/70">
                    {expandedId === spec.id ? "Show Less" : "Learn More"}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
