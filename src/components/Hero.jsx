import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { HeroSection, HeroContainer, HeroTitle, HeroDescription, HeroButton } from './HeroStyles';

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
        <HeroButton>{button}</HeroButton>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
