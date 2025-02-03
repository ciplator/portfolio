import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ModalOverlay, ModalContent, ModalHeader, ModalBody, CloseButton } from './ModalStyles';

const translations = {
  en: {
    title: 'About Me',
    content: [
      "Hi! I'm Dmitriy, a Full-Stack developer with experience in building web applications. My specialization is React, Node.js, and databases like PostgreSQL and MongoDB.",
      "I can automate processes using Make, Airtable, and other tools."
    ]
  },
  ru: {
    title: 'О себе',
    content: [
      "Привет! Я Дмитрий, Full-Stack разработчик с опытом в создании веб-приложений. Моя специализация — React, Node.js и базы данных, такие как PostgreSQL и MongoDB.",
      "Умею автоматизировать процессы с помощью Make, Airtable и других инструментов."
    ]
  },
  uk: {
    title: 'Про себе',
    content: [
      "Привіт! Я Дмитро, Full-Stack розробник із досвідом створення веб-застосунків. Моя спеціалізація — React, Node.js і бази даних, такі як PostgreSQL і MongoDB.",
      "Вмію автоматизувати процеси за допомогою Make, Airtable та інших інструментів."
    ]
  }
};

const AboutMeModal = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const { title, content } = translations[language] || translations.en;

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <h3>{title}</h3>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>
        <ModalBody>
          {content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AboutMeModal;
