import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ProjectsSection, ProjectsContainer, ProjectCard, ProjectImage, ProjectTitle, ProjectDescription, TechTag } from './ProjectsStyles';

const Projects = () => {
  const { language } = useLanguage();

  const texts = {
    en: 'My Projects',
    ru: 'Мои проекты',
    uk: 'Мої проекти'
  };

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
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <h2>{texts[language]}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <TechTag key={i}>{tech}</TechTag>
                ))}
              </div>
            </ProjectCard>
          ))}
        </div>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;
