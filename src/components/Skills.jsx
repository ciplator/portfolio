import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SkillsSection, SkillsContainer, SkillItem, SkillHeader, SkillName, SkillLevel, SkillBar, SkillProgress } from './SkillsStyles';

const Skills = () => {
  const { language } = useLanguage();

  const texts = {
    en: 'Skills',
    ru: 'Навыки',
    uk: 'Навички'
  };

  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "HTML/CSS", level: 95 },
    { name: "Node.js", level: 75 }
  ];

  return (
    <SkillsSection id="skills">
      <SkillsContainer>
        <h2>{texts[language]}</h2>
        {skills.map((skill, index) => (
          <SkillItem key={index}>
            <SkillHeader>
              <SkillName>{skill.name}</SkillName>
              <SkillLevel>{skill.level}%</SkillLevel>
            </SkillHeader>
            <SkillBar>
              <SkillProgress width={skill.level} />
            </SkillBar>
          </SkillItem>
        ))}
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;
