import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ModalOverlay, ModalContent, ModalHeader, ModalBody, CloseButton } from './ModalStyles';

const translations = {
  en: {
    title: 'About Me',
    content: [
      "Hi! I'm Dmitriy, a Full-Stack developer with a passion for building dynamic and efficient web applications. I specialize in React, Node.js, and databases like PostgreSQL and MongoDB.",
      "I have experience in automating business processes using Make, Airtable, and other tools, integrating multiple services to optimize workflows.",
      "What I Do Best:",
      "Frontend Development: I have a solid understanding of HTML, CSS, and JavaScript. I work with React to create responsive and user-friendly interfaces, ensuring seamless user experiences.",
      "Backend Development: I develop reliable server-side solutions and APIs using Node.js, Express, and databases (SQL/NoSQL), ensuring scalability and performance.",
      "Business Process Automation with AI: I leverage tools like Make.com, Zapier, and n8n to create intelligent automated workflows, streamlining business operations and reducing manual workload.",
      "Project Management & Team Collaboration: I am proficient in Slack, Jira, and other project management tools to ensure smooth communication and efficient task execution.",
      "Problem Solving & Continuous Learning: I enjoy tackling complex problems, optimizing code, and staying up to date with the latest industry trends to continuously enhance my development skills."
    ]
  },
  ru: {
    title: 'О себе',
    content: [
      "Привет! Я Дмитрий, Full-Stack разработчик с увлечением созданием динамичных и эффективных веб-приложений. Моя специализация — React, Node.js и базы данных, такие как PostgreSQL и MongoDB.",
      "Имею опыт автоматизации бизнес-процессов с помощью Make, Airtable и других инструментов, интегрируя различные сервисы для оптимизации рабочих процессов.",
      "Чем я занимаюсь:",
      "Фронтенд-разработка: Уверенно владею HTML, CSS и JavaScript. Работаю с React, создавая адаптивные и удобные интерфейсы, обеспечивая удобство пользователей.",
      "Бэкенд-разработка: Разрабатываю надежные серверные решения и API на основе Node.js, Express и баз данных (SQL/NoSQL), обеспечивая масштабируемость и производительность.",
      "Автоматизация бизнес-процессов с AI: Использую инструменты такие как Make.com, Zapier и n8n для создания умных автоматизированных процессов, упрощая бизнес-операции и снижая ручной труд.",
      "Управление проектами и командная работа: Владею Slack, Jira и другими инструментами управления проектами для эффективного взаимодействия и выполнения задач.",
      "Решение проблем и постоянное обучение: Люблю решать сложные задачи, оптимизировать код и постоянно развиваю свои навыки, следя за новыми трендами в индустрии."
    ]
  },
  uk: {
    title: 'Про себе',
    content: [
      "Привіт! Я Дмитро, Full-Stack розробник із захопленням створенням динамічних та ефективних веб-застосунків. Моя спеціалізація — React, Node.js і бази даних, такі як PostgreSQL і MongoDB.",
      "Маю досвід автоматизації бізнес-процесів за допомогою Make, Airtable та інших інструментів, інтегруючи різні сервіси для оптимізації робочих процесів.",
      "Чим я займаюся:",
      "Фронтенд-розробка: Впевнено володію HTML, CSS та JavaScript. Працюю з React, створюючи адаптивні та зручні інтерфейси для кращого користувацького досвіду.",
      "Бекенд-розробка: Розробляю надійні серверні рішення та API на основі Node.js, Express та баз даних (SQL/NoSQL), забезпечуючи масштабованість та продуктивність.",
      "Автоматизація бізнес-процесів з AI: Використовую такі інструменти, як Make.com, Zapier та n8n, для створення інтелектуальних автоматизованих процесів, що спрощують бізнес-операції та зменшують ручну роботу.",
      "Управління проєктами та командна робота: Володію Slack, Jira та іншими інструментами управління проєктами для ефективної комунікації та виконання завдань.",
      "Розв'язання проблем та постійне навчання: Мені подобається вирішувати складні задачі, оптимізувати код та вдосконалювати свої навички, слідкуючи за новими трендами в індустрії."
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
