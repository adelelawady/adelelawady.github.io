import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
};

export default Index;