import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Tech from "@/components/Tech";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Specializations from "@/components/Specializations";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Deepak VK | Full Stack Developer India",
  description:
    "Full Stack Developer in India specializing in React, Next.js, Node.js & NestJS. Building scalable web applications with modern tech stack. Hire me for your next project.",
};

export default function Home() {
  return (
    <main className="w-full bg-background text-foreground">
      <Navigation />
      <Hero />
      <Work />
      <Tech />
      <Experience />
      <Education />
      <Specializations />
      <Contact />
    </main>
  );
}
