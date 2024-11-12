import SkillBadge from "../ui/SkillBadge";
import { Code2, Braces, Terminal, Database, Server, Github, Cloud, GitBranch } from "lucide-react";

const Skills = () => {
  const skills = [
    { name: "React", icon: <Braces className="w-12 h-12 text-primary" /> },
    { name: "TypeScript", icon: <Code2 className="w-12 h-12 text-primary" /> },
    { name: "Node.js", icon: <Terminal className="w-12 h-12 text-primary" /> },
    { name: "Python", icon: <Code2 className="w-12 h-12 text-primary" /> },
    { name: "PostgreSQL", icon: <Database className="w-12 h-12 text-primary" /> },
    { name: "Docker", icon: <Server className="w-12 h-12 text-primary" /> },
    { name: "AWS", icon: <Cloud className="w-12 h-12 text-primary" /> },
    { name: "Git", icon: <GitBranch className="w-12 h-12 text-primary" /> },
  ];

  return (
    <section className="py-20 bg-secondary/20 relative" id="skills">
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:40px_40px] pointer-events-none" />
      <div className="container px-4 relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {skills.map((skill) => (
            <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;