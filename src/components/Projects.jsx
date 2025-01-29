import React from 'react';
import Card from './ui/Card';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured online store built with React and Node.js",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Task Management App",
      description: "A productivity tool for organizing daily tasks",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Firebase", "Tailwind CSS"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
