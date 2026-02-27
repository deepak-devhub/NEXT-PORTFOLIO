"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GraduationCap, Calendar } from "lucide-react";

interface Education {
  id: string;
  degree: string;
  institution: string;
  university: string;
  duration: string;
  status: string;
  description: string;
  coursework: string[];
}

const educations: Education[] = [
  {
    id: "bca",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "KMO Arts and Science College",
    university: "Calicut University",
    duration: "2022 – 2025",
    status: "Currently Pursuing",
    description:
      "Pursuing comprehensive knowledge in computer applications, programming, database management, software engineering, and modern web technologies.",
    coursework: [
      "Computer Programming Fundamentals",
      "Data Structures and Algorithms",
      "Database Management Systems",
      "Software Engineering Principles",
      "Web Development Technologies",
      "Network and Security Basics",
      "Operating Systems",
      "Discrete Mathematics",
      "Modern Frameworks (React, Node.js)",
      "Full-Stack Application Development",
    ],
  },
];

export default function Education() {
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
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
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
    <section ref={sectionRef} id="education" className="w-full py-24 px-4 sm:px-8 lg:px-16 bg-black/20">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-4">
            Education
          </h2>
          <p className="text-sm font-mono text-foreground/50 uppercase tracking-widest">
            Academic Foundation & Continuous Learning
          </p>
        </motion.div>

        {/* Education Cards */}
        <motion.div className="space-y-8">
          {educations.map((edu) => (
            <motion.div key={edu.id} variants={itemVariants}>
              <div className="border border-border-ghost hover:border-accent-primary/50 transition-colors duration-300 p-8 rounded-sm">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-sm border border-accent-primary flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={24} className="text-accent-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-serif font-bold text-foreground mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-accent-primary font-semibold mb-1">{edu.institution}</p>
                    <p className="text-sm text-foreground/70 mb-3">{edu.university}</p>

                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-sm text-foreground/70">
                        <Calendar size={16} />
                        {edu.duration}
                      </div>
                      <span className="text-xs font-mono px-3 py-1 bg-accent-primary/10 text-accent-primary border border-accent-primary/30 rounded-sm inline-block w-fit">
                        {edu.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-base text-foreground/80 mb-6 leading-relaxed">{edu.description}</p>

                {/* Coursework */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">Relevant Coursework:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {edu.coursework.map((course) => (
                      <div
                        key={course}
                        className="flex items-start gap-3 p-3 bg-border-ghost/30 rounded-sm border border-border-ghost/50"
                      >
                        <span className="text-accent-primary mt-1">✓</span>
                        <span className="text-sm text-foreground/80">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
