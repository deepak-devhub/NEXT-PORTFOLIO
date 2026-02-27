"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  link: string;
  github?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
}

const projects: Project[] = [
  {
    id: "hospital-management",
    title: "Hospital Management System",
    description: "Comprehensive hospital operations and patient management platform",
    longDescription:
      "Full-featured hospital management system built with Django backend and responsive frontend. Enables efficient doctor and patient management, appointment scheduling, and medical records tracking. Provides seamless coordination between hospital staff and patients with an intuitive user interface.",
    tags: ["Django", "Python", "MySQL", "HTML5", "CSS3", "JavaScript"],
    image: "hospital-system",
    link: "https://github.com/deepak6235",
    github: "https://github.com/deepak6235",
    metrics: [
      { label: "Appointments/Day", value: "200+" },
      { label: "Patient Records", value: "1K+" },
      { label: "Response Time", value: "<500ms" },
    ],
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Application",
    description: "Full-featured e-commerce platform with secure payments and responsive design",
    longDescription:
      "Complete e-commerce solution built with React frontend and Node.js/Express backend. Features user authentication, product catalog with filtering, shopping cart, secure payment integration, and admin dashboard. Designed for seamless shopping experience across all devices with MongoDB for flexible data storage.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Tailwind CSS"],
    image: "ecommerce-app",
    link: "https://github.com/deepak-devhub/E-commerce.git",
    github: "https://github.com/deepak-devhub",
    metrics: [
      { label: "Monthly Orders", value: "500+" },
      { label: "Product Catalog", value: "2K+" },
      { label: "Payment Success", value: "99.2%" },
    ],
  },
    {
    id: "blog-application",
    title: "Blog Application",
    description: "Full-featured blogging platform with RBAC and content management",
    longDescription:
      "Powerful blogging platform built with NestJS backend and React frontend. Features complete authentication system, role-based access control (Admin, Author, Reader), advanced filtering, and search capabilities. Includes sophisticated content management with optimized MySQL queries for performance.",
    tags: ["NestJS", "React", "MySQL", "TypeScript", "JWT", "RESTful API"],
    image: "blog-app",
    link: "https://github.com/deepak-devhub/blog.git",
    github: "https://github.com/deepak-devhub",
    metrics: [
      { label: "Posts Published", value: "500+" },
      { label: "Active Users", value: "1K+" },
      { label: "Avg Load Time", value: "<800ms" },
    ],
  },
];

export default function Work() {
  const [activeProject, setActiveProject] = useState(0);
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
        staggerChildren: 0.15,
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
    <section ref={sectionRef} id="work" className="w-full py-24 px-4 sm:px-8 lg:px-16">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-4">
            Featured Work
          </h2>
          <p className="text-sm font-mono text-foreground/50 uppercase tracking-widest">
            Crafted with precision. Scaled for impact.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div variants={itemVariants} className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer"
              onClick={() => setActiveProject(index)}
              whileHover={{ scale: 1.02 }}
            >
              <div className="border border-border-ghost hover:border-accent-primary/50 transition-colors duration-300 p-8 rounded-sm overflow-hidden">
                {/* Project Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-6">
                  <div className="flex-1">
                    <h3 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-foreground/70 mb-4">
                      {project.longDescription}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono px-3 py-1 bg-border-ghost/50 text-foreground/70 rounded-sm border border-border-ghost"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-sm border border-border-ghost flex items-center justify-center hover:border-accent-primary hover:text-accent-primary transition-all duration-300"
                    >
                      <ExternalLink size={18} />
                    </a>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-sm border border-border-ghost flex items-center justify-center hover:border-accent-primary hover:text-accent-primary transition-all duration-300"
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Metrics */}
                {/* {project.metrics && (
                  <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                    initial={false}
                    animate={activeProject === index ? { opacity: 1 } : { opacity: 0.5 }}
                  >
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="border-t border-border-ghost pt-4">
                        <p className="text-xs font-mono text-foreground/50 uppercase mb-1">
                          {metric.label}
                        </p>
                        <p className="text-xl sm:text-2xl font-serif font-bold text-accent-primary">
                          {metric.value}
                        </p>
                      </div>
                    ))}
                  </motion.div>
                )} */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
