import React from 'react';
import Button from './ui/Button';
import { useLanguage } from '../context/LanguageContext';

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
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
          <p className="text-xl md:text-2xl mb-8">{description}</p>
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-blue-800">
            {button}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
