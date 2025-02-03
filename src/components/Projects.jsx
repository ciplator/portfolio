import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  ProjectsSection,
  ProjectsContainer,
  ProjectCard,
  ProjectImage,
  ProjectTitle,
  ProjectDescription,
  TechTag,
  ButtonContainer,
  LinkButton
} from './ProjectsStyles';

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
      url: "https://ivladyuser.github.io/drink_Master-React_Node-frontend/",
      github: "https://github.com/iVladyuser/drink_Master-React_Node-frontend",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Task Management App",
      description: "A productivity tool for organizing daily tasks",
      url: "https://taskmanager.com",
      github: "https://github.com/yourusername/task-manager",
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
              {/* Скриншот сайта */}
              <ProjectImage src={`https://image.thum.io/get/width/600/crop/800/${project.url}`} alt={project.title} />

              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>

              {/* Технологии */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <TechTag key={i}>{tech}</TechTag>
                ))}
              </div>

              {/* Кнопки */}
              <ButtonContainer>
                <LinkButton href={project.url} target="_blank">
                  Visit Site
                </LinkButton>

                {project.github && (
                  <LinkButton href={project.github} target="_blank" secondary>
                    View Code
                  </LinkButton>
                )}
              </ButtonContainer>
            </ProjectCard>
          ))}
        </div>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;
