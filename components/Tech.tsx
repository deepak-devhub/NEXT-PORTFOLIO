"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Code2,
  Database,
  Brain,
  Zap,
  Palette,
  GitBranch,
  Cloud,
  Settings,
} from "lucide-react";

interface SkillCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  size: "small" | "medium" | "large";
}

const skills: SkillCard[] = [
  {
    id: "react",
    title: "React & Next.js",
    description: "Modern component architecture, server-side rendering, responsive design",
    icon: <Zap size={32} />,
    color: "accent-primary",
    size: "large",
  },
  {
    id: "nodejs",
    title: "Node.js & Express",
    description: "Backend API development, microservices, real-time applications",
    icon: <Code2 size={32} />,
    color: "accent-primary",
    size: "medium",
  },
  {
    id: "database",
    title: "Databases",
    description: "MongoDB, MySQL, SQLite3 design, optimization, and query performance",
    icon: <Database size={32} />,
    color: "accent-secondary",
    size: "medium",
  },
  {
    id: "nestjs",
    title: "NestJS & Python",
    description: "Scalable backend frameworks, Django development, enterprise patterns",
    icon: <Brain size={32} />,
    color: "accent-secondary",
    size: "small",
  },
  {
    id: "styling",
    title: "Styling & CSS",
    description: "Tailwind CSS, Bootstrap5, Material UI, responsive design, CSS3",
    icon: <Palette size={32} />,
    color: "accent-primary",
    size: "small",
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    description: "Vercel deployment, Heroku hosting, Git workflows, CI/CD integration",
    icon: <Cloud size={32} />,
    color: "accent-secondary",
    size: "medium",
  },
  {
    id: "git",
    title: "Version Control",
    description: "Git/GitHub workflows, code review processes, collaborative development",
    icon: <GitBranch size={32} />,
    color: "accent-primary",
    size: "small",
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    description: "TypeScript, Figma, Testing frameworks, REST APIs, Authentication",
    icon: <Settings size={32} />,
    color: "accent-secondary",
    size: "medium",
  },
];

export default function Tech() {
  const [isVisible, setIsVisible] = useState(false);
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
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
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

  const getSizeClasses = (size: string) => {
    switch (size) {
      case "large":
        return "col-span-1 sm:col-span-2 row-span-2";
      case "medium":
        return "col-span-1 sm:col-span-2 md:col-span-1";
      case "small":
        return "col-span-1";
      default:
        return "col-span-1";
    }
  };

  return (
    <section ref={sectionRef} id="tech" className="w-full py-24 px-4 sm:px-8 lg:px-16 bg-black/20">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-4">
            Tech Stack
          </h2>
          <p className="text-sm font-mono text-foreground/50 uppercase tracking-widest">
            Tools and technologies that power our builds
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 auto-rows-max"
          variants={containerVariants}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className={getSizeClasses(skill.size)}
              variants={itemVariants}
            >
              <div
                className={`relative h-full min-h-40 sm:min-h-48 p-6 border border-border-ghost rounded-sm hover:border-accent-primary/50 transition-all duration-300 group cursor-pointer overflow-hidden`}
              >
                {/* Hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/0 to-accent-secondary/0 group-hover:from-accent-primary/10 group-hover:to-accent-secondary/10 transition-all duration-500" />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`text-${skill.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-foreground mb-2">
                      {skill.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  {/* Accent indicator */}
                  <div className={`w-1 h-1 rounded-full bg-${skill.color} group-hover:scale-150 transition-transform duration-300 mt-4`} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
