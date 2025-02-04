import React from 'react';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';  // Importing icons
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
    en: 'Projects',
    ru: 'Проекты',
    uk: 'Проекти'
  };

  const projects = [
    {
      title: "Drink Master",
      description: {
        en: "This site offers an attractive library of popular cocktails, organized by category and the ingredients used to make them. Registered users can find a drink of interest, view the recipe and its ingredients, add it to their favorites, or write their own recipe and store it in the database.",
        ru: "Этот сайт предлагает привлекательную библиотеку популярных коктейлей, организованных по категориям и используемым ингредиентам. Зарегистрированные пользователи могут найти интересующий напиток, просмотреть рецепт и его ингредиенты, добавить его в избранное или написать свой собственный рецепт и сохранить его в базе данных.",
        uk: "Цей сайт пропонує привабливу бібліотеку популярних коктейлів, організованих за категоріями та використовуваними інгредієнтами. Зареєстровані користувачі можуть знайти напій, що цікавить, переглянути рецепт та його інгредієнти, додати його до обраного або написати власний рецепт і зберегти його в базі даних."
      },
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
      }
    },
    {
      title: "Сocktails-Bar",
      description: {
        en: "The website is dedicated to cocktails. It features descriptions of various cocktails, including classic and exotic options. Each cocktail includes a brief description of its taste and ingredients, along with a link that likely leads to more detailed information. The site also allows searching for cocktails alphabetically.",
        ru: "Сайт посвящен коктейлям. На нем представлены описания различных коктейлей, включая классические и экзотические варианты. Каждый коктейль включает краткое описание его вкуса и ингредиентов, а также ссылку, которая, вероятно, ведет на более подробную информацию. На сайте также можно искать коктейли по алфавиту.",
        uk: "Сайт присвячений коктейлям. На ньому представлені описи різних коктейлів, включаючи класичні та екзотичні варіанти. Кожен коктейль включає короткий опис його смаку та інгредієнтів, а також посилання, яке, ймовірно, веде на більш детальну інформацію. На сайті також можна шукати коктейлі за алфавітом."
      },
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
      }
    },
    {
      title: "Simply Chocolate",
      description: {
        en: "The Simply Chocolate website sells chocolate made from high-quality cocoa beans. They emphasize superior taste, affordable prices, and their own production. Various types of chocolate are offered, including milk, dark, and white, with different flavor additions (nuts, fruits).",
        ru: "Сайт Simply Chocolate продает шоколад, изготовленный из высококачественных какао-бобов. Они подчеркивают превосходный вкус, доступные цены и собственное производство. Предлагаются различные виды шоколада, включая молочный, темный и белый, с различными вкусовыми добавками (орехи, фрукты).",
        uk: "Сайт Simply Chocolate продає шоколад, виготовлений з високоякісних какао-бобів. Вони підкреслюють чудовий смак, доступні ціни та власне виробництво. Пропонуються різні види шоколаду, включаючи молочний, темний та білий, з різними смаковими добавками (горіхи, фрукти)."
      },
      url: "https://serg1853.github.io/project_team-6/",
      github: "https://github.com/Serg1853/project_team-6",
      technologies: [
        { name: "HTML", icon: <FaNodeJs size={20} color="#E44D26" /> },
        { name: "CSS", icon: <FaNodeJs size={20} color="#2965F1" /> },
        { name: "JavaScript", icon: <FaNodeJs size={20} color="#F7DF1E" /> }
      ],
      details: {
        technicalStack: "HTML, CSS, JavaScript",
        backend: "None",
      }
    },
    {
      title: "WEBSTUDIO",
      description: {
        en: "The website advertises the services of a company specializing in developing digital solutions for businesses. The company focuses on order servicing strategy, efficiency, thorough market research, and the use of modern technologies to create a digital experience.",
        ru: "Сайт рекламирует услуги компании, специализирующейся на разработке цифровых решений для бизнеса. Компания делает акцент на стратегии обслуживания заказов, эффективности, тщательном исследовании рынка и использовании современных технологий для создания цифрового опыта.",
        uk: "Сайт рекламує послуги компанії, яка спеціалізується на розробці цифрових рішень для бізнесу. Компанія робить акцент на стратегії обслуговування замовлень, ефективності, ретельному дослідженні ринку та використанні сучасних технологій для створення цифрового досвіду."
      },
      url: "https://ciplator.github.io/goit-markup-hw-07",
      github: "https://github.com/ciplator/goit-markup-hw-07",
      technologies: [
        { name: "HTML", icon: <FaNodeJs size={20} color="#E44D26" /> },
        { name: "CSS", icon: <FaNodeJs size={20} color="#2965F1" /> },
        { name: "JavaScript", icon: <FaNodeJs size={20} color="#F7DF1E" /> }
      ],
      details: {
        technicalStack: "HTML, CSS, JavaScript",
        backend: "None",
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
              {/* Site screenshot */}
              <ProjectImage src={`https://image.thum.io/get/width/600/crop/800/${project.url}`} alt={project.title} />

              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description[language]}</ProjectDescription>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <TechTag key={i}>
                    {tech.icon} {tech.name}
                  </TechTag>
                ))}
              </div>

              {/* Project Details */}
              <ProjectDetails>
                <div><strong>Technical Stack:</strong> {project.details.technicalStack}</div>
                <div><strong>Backend:</strong> {project.details.backend}</div>
              </ProjectDetails>

              {/* Buttons */}
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
