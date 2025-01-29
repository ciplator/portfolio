import React from 'react';
import Button from './ui/Button';
import { useLanguage } from '../context/LanguageContext';
import { HeroSection, HeroContainer, HeroTitle, HeroDescription } from './HeroStyles';

const Hero = () => {
  const { language } = useLanguage();

  const texts = {
    en: {
      title: 'Frontend Developer',
      description: 'Building beautiful and responsive web applications',
      button: 'View My Work'
    },
    ru: {
      title: 'Фронтенд разработчик',
      description: 'Создание красивых и отзывчивых веб-приложений',
      button: 'Посмотреть мои работы'
    },
    uk: {
      title: 'Фронтенд розробник',
      description: 'Створення красивих і чуйних веб-додатків',
      button: 'Переглянути мої роботи'
    }
  };

  const { title, description, button } = texts[language];

  return (
    <HeroSection>
      <HeroContainer>
        <HeroTitle>{title}</HeroTitle>
        <HeroDescription>{description}</HeroDescription>
        <Button variant="outline" className="text-white border-white hover:bg-white hover:text-blue-800">
          {button}
        </Button>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
