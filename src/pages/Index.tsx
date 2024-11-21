import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import { CertificatesSection } from "@/components/sections/CertificatesSection";

const Index = () => {
  return (
    <main className="bg-background text-foreground bg-img">
      <Hero />
      <Projects />
      <CertificatesSection />
      <Skills />
      <Contact />
    
    </main>
  );
};

export default Index;