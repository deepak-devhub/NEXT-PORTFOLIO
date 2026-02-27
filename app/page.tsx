import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Tech from "@/components/Tech";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Specializations from "@/components/Specializations";
import Contact from "@/components/Contact";

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
