import ProjectCard from "../ui/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Eldars.net",
      description: "Developed a comprehensive web platform that provides [describe functionality or industry focus, e.g., data analytics for retail]. Implemented features using [relevant technologies, e.g., Java, React, SQL] to enable [key functions, e.g., customer insights, inventory tracking, real-time analytics]. Enhanced user experience with a focus on [specific UI/UX improvements or performance goals].",
      technologies: ["React", "Node.js", "sql", "Java"],
      githubUrl: null,
      liveUrl: "https://Eldars.net",
      imageUrl: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Hanbee3.com",
      description: "Built and managed a versatile platform focusing on [describe platform's core purpose or service area, e.g., e-commerce for specialty goods or educational resources]. Leveraged technologies such as [list key tech, e.g., Java, Angular, MongoDB] to implement features like [key functions, e.g., user-friendly product catalogs, real-time support, personalized recommendations]. Ensured high performance with scalability to accommodate growing user demands and improve client satisfaction.",
      technologies: ["Angular", "Node.js", "MongoDB", "Java"],
      githubUrl: null,
      liveUrl: "https://Hanbee3.com",
      imageUrl: "https://images.unsplash.com/photo-1714079761488-e0c9b9ac4138?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
    ,
    {
      title: "konsol-erp",
      description: "powerful and intuitive enterprise resource planning solution designed to transform the way businesses operate. Our platform integrates all key functions—inventory management, sales tracking, financial reporting, and user access control—into a single cohesive system. With a modern interface built using C# and DevExpress, and a robust backend powered by Java Spring Boot, KONSOL ERP offers seamless performance and unparalleled user experience. Our commitment to security and data integrity ensures that your business processes are protected and optimized.",
      technologies: ["C#", "Node.js", "MongoDB", "SpringBoot"],
      githubUrl: null,
      liveUrl: "https://konsol-erp.netlify.app/",
      imageUrl: "https://konsol-erp.netlify.app/assets/img/Screenshot%202024-09-18%20204602.png",
    },
    {
      title: "BeatStream",
      description: "BeatStream is a powerful music streaming and management application built Using Java. It allows users to download tracks and playlists from popular platforms like YouTube, SoundCloud, and Spotify. BeatStream also lets you upload your own songs, create a personalized library of tracks and playlists",
      technologies: ["Angular", "Node.js", "MongoDB", "SpringBoot"],
      githubUrl: "https://github.com/adelelawady/beat-stream",
      liveUrl: null,
      imageUrl: "https://plus.unsplash.com/premium_photo-1683140707316-42df87760f3f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
    ,
    {
      title: "VarPsManagement",
      description: "Cafe PlayStation Management System! This application is built to streamline management of PlayStation devices, tables, orders, and user shifts in a cafe environment. With an interactive admin panel, you can easily monitor real-time pricing, manage orders, and handle device allocation.",
      technologies: ["Angular","Electron", "Node.js", "MongoDB", "SpringBoot"],
      githubUrl: "https://github.com/adelelawady/VarPlaystationManager",
      liveUrl: null,
      imageUrl: "https://github.com/user-attachments/assets/ad31dd7f-f8b0-405f-ab98-23f6c8ad6d4f",
    },
    {
      title: "CV Wizardry",
      description: "CV Wizardry This tool is designed to help you create, customize, and export professional CVs quickly and easily.",
      technologies: ["React" , "Vite"],
      githubUrl: "https://github.com/adelelawady/cv_wizardy",
      liveUrl: "https://adelelawady.github.io/cv_wizardy/",
      imageUrl: "https://github.com/user-attachments/assets/093b05af-b885-465d-8241-3a8a78c9c98a",
    }
    ,
    {
      title: "Convertopia Manager",
      description: "A powerful file conversion tool built with React and TypeScript that supports multiple file formats and provides high-quality conversions.",
      technologies: ["React" , "Vite", "Pyodide","ffmpeg"],
      githubUrl: "https://github.com/adelelawady/convertopia-manager",
      liveUrl: "https://adelelawady.github.io/convertopia-manager/",
      imageUrl: "https://github.com/user-attachments/assets/759c493d-05b4-4356-bdbb-f9bed853f913",
    }
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