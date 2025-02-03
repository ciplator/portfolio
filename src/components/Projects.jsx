import React from 'react';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';  // Импортируем иконки
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
  LinkButton,
  ProjectDetails
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
      technologies: [
        { name: "React", icon: <FaReact size={20} color="#61DBFB" /> },
        { name: "Node.js", icon: <FaNodeJs size={20} color="#8CC84B" /> },
        { name: "MongoDB", icon: <FaDatabase size={20} color="#4DB33D" /> }
      ],
      details: {
        technicalStack: "React, Vite, Redux, Axios, Styled-Components, React Router, NodeJS, MongoDB",
        backend: "NodeJS, Express",
        features: [
          "User authentication",
          "Product management",
          "Shopping cart",
          "Order processing"
        ]
      }
    },
    {
      title: "Task Management App",
      description: "A productivity tool for organizing daily tasks",
      url: "https://ivladyuser.github.io/cocktails-Bar/",
      github: "https://github.com/iVladyuser/cocktails-Bar",
      technologies: [
        { name: "React", icon: <FaReact size={20} color="#61DBFB" /> },
        { name: "Firebase", icon: <FaDatabase size={20} color="#FFCA28" /> },
        { name: "Tailwind CSS", icon: <FaNodeJs size={20} color="#38B2AC" /> }
      ],
      details: {
        technicalStack: "React, Firebase, Tailwind CSS",
        backend: "Firebase Functions",
        features: [
          "Task management",
          "User authentication",
          "Real-time updates"
        ]
      }
    },

    {
      title: "Task Management App",
      description: "A productivity tool for organizing daily tasks",
      url: "https://serg1853.github.io/project_team-6/",
      github: "https://github.com/Serg1853/project_team-6",
      technologies: [
        { name: "React", icon: <FaReact size={20} color="#61DBFB" /> },
        { name: "Firebase", icon: <FaDatabase size={20} color="#FFCA28" /> },
        { name: "Tailwind CSS", icon: <FaNodeJs size={20} color="#38B2AC" /> }
      ],
      details: {
        technicalStack: "React, Firebase, Tailwind CSS",
        backend: "Firebase Functions",
        features: [
          "Task management",
          "User authentication",
          "Real-time updates"
        ]
      }
    },

       {
      title: "Task Management App",
      description: "A productivity tool for organizing daily tasks",
      url: "https://ciplator.github.io/goit-markup-hw-07",
      github: "https://github.com/ciplator/goit-markup-hw-07",
      technologies: [
        { name: "React", icon: <FaReact size={20} color="#61DBFB" /> },
        { name: "Firebase", icon: <FaDatabase size={20} color="#FFCA28" /> },
        { name: "Tailwind CSS", icon: <FaNodeJs size={20} color="#38B2AC" /> }
      ],
      details: {
        technicalStack: "React, Firebase, Tailwind CSS",
        backend: "Firebase Functions",
        features: [
          "Task management",
          "User authentication",
          "Real-time updates"
        ]
      }
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
                  <TechTag key={i}>
                    {tech.icon} {tech.name}
                  </TechTag>
                ))}
              </div>

              {/* Подробности проекта */}
              <ProjectDetails>
                <div><strong>Technical Stack:</strong> {project.details.technicalStack}</div>
                <div><strong>Backend:</strong> {project.details.backend}</div>
                <div><strong>Features:</strong>
                  <ul>
                    {project.details.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </ProjectDetails>

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
