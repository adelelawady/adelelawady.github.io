import SkillBadge from "../ui/SkillBadge";

const Skills = () => {
  const skills = [
    { name: "React", icon: "/placeholder.svg" },
    { name: "TypeScript", icon: "/placeholder.svg" },
    { name: "Node.js", icon: "/placeholder.svg" },
    { name: "Python", icon: "/placeholder.svg" },
    { name: "PostgreSQL", icon: "/placeholder.svg" },
    { name: "Docker", icon: "/placeholder.svg" },
    { name: "AWS", icon: "/placeholder.svg" },
    { name: "Git", icon: "/placeholder.svg" },
  ];

  return (
    <section className="py-20 bg-secondary/20" id="skills">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {skills.map((skill) => (
            <SkillBadge key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;