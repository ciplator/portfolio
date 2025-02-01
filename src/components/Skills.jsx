import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaReact, FaJsSquare, FaHtml5, FaNodeJs } from 'react-icons/fa';
import { SkillsSection, SkillsContainer, SkillItem, SkillHeader, SkillName, SkillIcon } from './SkillsStyles';

const Skills = () => {
  const { language } = useLanguage();

  const texts = {
    en: 'Skills',
    ru: 'Навыки',
    uk: 'Навички'
  };

  const skills = [
    { name: "React", icon: <FaReact size={40} color="#61DAFB" /> },
    { name: "JavaScript", icon: <FaJsSquare size={40} color="#F7DF1E" /> },
    { name: "HTML/CSS", icon: <FaHtml5 size={40} color="#E34F26" /> },
    { name: "Node.js", icon: <FaNodeJs size={40} color="#83CD29" /> }
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
