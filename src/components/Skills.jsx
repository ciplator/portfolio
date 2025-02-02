import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaReact, FaJsSquare, FaHtml5, FaNodeJs, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript, SiMake, SiZapier, SiOpenai} from 'react-icons/si';
import { SkillsSection, SkillsContainer, SkillItem, SkillHeader, SkillName, SkillIcon } from './SkillsStyles';

const Skills = () => {
  const { language } = useLanguage();

  const texts = {
    en: 'Skills',
    ru: 'Навыки',
    uk: 'Навички'
  };

  const skills = [
    { name: "HTML", icon: <FaHtml5 size={40} color="#E34F26" /> },
    { name: "CSS", icon: <FaCss3Alt size={40} color="#1572B6" /> },
    { name: "JavaScript", icon: <FaJsSquare size={40} color="#F7DF1E" /> },
    { name: "React", icon: <FaReact size={40} color="#61DAFB" /> },
    { name: "Node.js", icon: <FaNodeJs size={40} color="#83CD29" /> },
    { name: "TypeScript", icon: <SiTypescript size={40} color="#3178C6" /> },
    { name: "Make.com", icon: <SiMake size={40} color="#5E5DF0" /> },
    { name: "Zapier", icon: <SiZapier size={40} color="#FF4A00" /> },
    { name: "ChatGPT", icon: <SiOpenai size={40} color="#00A67E" /> },
  ];

  return (
    <SkillsSection id="skills">
      <SkillsContainer>
        <h2>{texts[language]}</h2>
        {skills.map((skill, index) => (
          <SkillItem key={index}>
            <SkillHeader>
              <SkillName>{skill.name}</SkillName>
              <SkillIcon>{skill.icon}</SkillIcon>
            </SkillHeader>
          </SkillItem>
        ))}
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;
