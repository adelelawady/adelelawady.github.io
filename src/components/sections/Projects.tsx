import ProjectCard from "../ui/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform built with React and Node.js",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application",
      technologies: ["TypeScript", "Next.js", "Prisma", "PostgreSQL"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather tracking with data visualization",
      technologies: ["React", "D3.js", "OpenWeather API"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    },
  ];

  return (
    <section className="py-20 px-4" id="projects">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;