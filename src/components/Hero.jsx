import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { HeroSection, HeroContainer, HeroTitle, HeroDescription } from './HeroStyles';

const Hero = () => {
  const { language } = useLanguage();

  const texts = {
    en: {
      title: 'Full-Stack Developer & AI Automation Expert',
      description: `I specialize in crafting modern, high-performance web applications
                    with a focus on user experience, responsive design, and accessibility.
                    With expertise in React, Node.js, JavaScript, and the latest web technologies,
                    I bring ideas to life through elegant and efficient code.
                    Additionally, I automate business processes and workflows using AI-driven tools
                    like Make.com, Zapier, and n8n to enhance efficiency, integration, and decision-making.`
    },
    ru: {
      title: 'Full-Stack Developer & AI Automation Expert',
      description: `Я специализируюсь на создании современных, высокопроизводительных веб-приложений,
                    ориентированных на удобство пользователей, адаптивный дизайн и доступность.
                    Обладая опытом работы с React, Node.js, JavaScript и современными веб-технологиями,
                    я воплощаю идеи в элегантный и эффективный код.
                    Кроме того, я автоматизирую бизнес-процессы и рабочие процессы с помощью инструментов
                    на базе ИИ, таких как Make.com, Zapier и n8n, улучшая эффективность, интеграцию и принятие решений.`
    },
    uk: {
      title: 'Full-Stack Developer & AI Automation Expert',
      description: `Я спеціалізуюсь на створенні сучасних, високопродуктивних веб-додатків,
                    орієнтованих на зручність користувачів, адаптивний дизайн і доступність.
                    Маючи досвід роботи з React, Node.js, JavaScript і сучасними веб-технологіями,
                    я втілюю ідеї в елегантний та ефективний код.
                    Також я автоматизую бізнес-процеси та робочі процеси за допомогою
                    інструментів на базі ШІ, таких як Make.com, Zapier та n8n,
                    покращуючи ефективність, інтеграцію та прийняття рішень.`
    }
  };

  const { title, description } = texts[language] || texts.en;

  return (
    <HeroSection>
      <HeroContainer>
        <HeroTitle>{title}</HeroTitle>
        <HeroDescription>{description}</HeroDescription>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
