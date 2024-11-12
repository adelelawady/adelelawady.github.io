import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <div className="space-y-6 animate-fade-up">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Hi, I'm <span className="text-primary">John Doe</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
          Full-stack developer passionate about building beautiful and functional web applications
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="outline" size="lg" onClick={() => window.open("https://github.com", "_blank")}>
            <Github className="mr-2 h-5 w-5" />
            GitHub
          </Button>
          <Button variant="outline" size="lg" onClick={() => window.open("https://linkedin.com", "_blank")}>
            <Linkedin className="mr-2 h-5 w-5" />
            LinkedIn
          </Button>
          <Button variant="outline" size="lg" onClick={() => window.open("mailto:john@example.com")}>
            <Mail className="mr-2 h-5 w-5" />
            Contact
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;