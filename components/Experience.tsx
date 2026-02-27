"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Calendar, MapPin, Briefcase } from "lucide-react";

interface Job {
  id: string;
  title: string;
  company: string;
  duration: string;
  type: string;
  location?: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements?: string[];
}

const experiences: Job[] = [
  {
    id: "bairuha-tech",
    title: "Full Stack Developer",
    company: "Bairuha Tech",
    duration: "October 2025 – Present",
    type: "Full-time",
    description: "Developing full-stack web applications with modern technologies and best practices.",
    responsibilities: [
      "Develop full-stack web applications using React, Next.js, Node.js, and NestJS",
      "Build responsive and interactive user interfaces",
      "Design and implement scalable RESTful APIs",
      "Develop backend services and microservices",
      "Database design and optimization",
      "Code reviews and quality assurance",
      "Troubleshooting and debugging",
      "Performance optimization",
      "Collaboration with cross-functional teams",
      "Implement best practices and design patterns",
    ],
    technologies: ["React", "Next.js", "Node.js", "NestJS", "TypeScript", "RESTful APIs"],
    achievements: [
      "Successfully delivered multiple full-stack projects",
      "Improved application performance through optimization",
      "Implemented secure authentication systems",
      "Built responsive, user-friendly applications",
    ],
  },
  {
    id: "icet-academy",
    title: "MERN Stack Developer Intern",
    company: "ICET Academy of Information Technology",
    duration: "February 2024",
    type: "Internship (1-month)",
    description: "Hands-on experience in full-stack development using the MERN stack.",
    responsibilities: [
      "Developed full-stack web applications using MERN stack",
      "Created responsive user interfaces with React",
      "Implemented backend APIs with Express.js and Node.js",
      "Designed and managed MongoDB databases",
      "Styled applications with Tailwind CSS and Material UI",
      "Collaborated with team members on projects",
      "Participated in code reviews",
      "Learned industry best practices",
    ],
    technologies: ["MongoDB", "Express.js","React", "Node.js", "Tailwind CSS", "Material UI"],
    achievements: [
      "Practical experience in responsive UI development",
      "Backend API creation and management",
      "Database integration and management",
      "Team-based project delivery",
    ],
  },
];

export default function Experience() {
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
    hidden: { x: -40, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <section ref={sectionRef} id="experience" className="w-full py-24 px-4 sm:px-8 lg:px-16">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-4">
            Experience
          </h2>
          <p className="text-sm font-mono text-foreground/50 uppercase tracking-widest">
            Professional Journey & Growth
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div className="space-y-12">
          {experiences.map((job, index) => (
            <motion.div key={job.id} variants={itemVariants}>
              <div className="border border-border-ghost hover:border-accent-primary/50 transition-colors duration-300 p-8 rounded-sm">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-3xl font-serif font-bold text-foreground mb-2">
                      {job.title}
                    </h3>
                    <p className="text-lg text-accent-primary font-semibold mb-2">{job.company}</p>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-sm text-foreground/70">
                        <Calendar size={16} />
                        {job.duration}
                      </div>
                      <div className="inline-block">
                        <span className="text-xs font-mono px-3 py-1 bg-border-ghost/50 text-foreground/70 rounded-sm border border-border-ghost">
                          {job.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-base text-foreground/80 mb-6 leading-relaxed">{job.description}</p>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {job.responsibilities.slice(0, 5).map((resp, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-foreground/70">
                        <span className="text-accent-primary mt-1">▸</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                    {job.responsibilities.length > 5 && (
                      <li className="text-sm text-foreground/50 italic">
                        + {job.responsibilities.length - 5} more responsibilities
                      </li>
                    )}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground/70 uppercase tracking-widest mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-3 py-1 bg-accent-primary/10 text-accent-primary border border-accent-primary/30 rounded-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                {job.achievements && (
                  <div className="pt-6 border-t border-border-ghost">
                    <h4 className="text-sm font-semibold text-foreground/70 uppercase tracking-widest mb-3">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-foreground/70">
                          <span className="text-accent-secondary">✓</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
