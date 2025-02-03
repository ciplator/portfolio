import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Flag from 'react-world-flags';
import { useLanguage } from '../context/LanguageContext';
import AboutMeModal from './AboutMeModal';
import useBodyScrollLock from './hooks/useBodyScrollLock'; // Импортируем хук
import {
  HeaderContainer,
  Nav,
  Title,
  NavItems,
  NavLink,
  LanguageButton,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  CloseButton,
  LanguageOption,
  MobileMenuButton,
} from './HeaderStyles';

const languageIcons = {
  en: 'US',
  ru: 'RU',
  uk: 'UA'
};

const translations = {
  en: { about: 'About', projects: 'Projects', skills: 'Skills', contact: 'Contact', selectLanguage: 'Select Language', menu: 'Menu' },
  ru: { about: 'О себе', projects: 'Проекты', skills: 'Навыки', contact: 'Контакты', selectLanguage: 'Выберите язык', menu: 'Меню' },
  uk: { about: 'Про мене', projects: 'Проекти', skills: 'Навички', contact: 'Контакти', selectLanguage: 'Виберіть мову', menu: 'Меню' }
};

const Header = () => {
  const { toggleLanguage, language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutMeModalOpen, setIsAboutMeModalOpen] = useState(false);

  // Используем хук для блокировки прокрутки
  useBodyScrollLock(isModalOpen || isMenuOpen || isAboutMeModalOpen);

  const handleLanguageChange = (lang) => {
    toggleLanguage(lang);
    setIsModalOpen(false);
  };

  return (
    <>
      <HeaderContainer>
        <Nav>
          <Title>My Portfolio</Title>

          {/* Десктоп-меню */}
          <NavItems>
            <NavLink href="#about" onClick={() => setIsAboutMeModalOpen(true)}>
              {translations[language].about}
            </NavLink>
            <NavLink href="#projects">{translations[language].projects}</NavLink>
            <NavLink href="#skills">{translations[language].skills}</NavLink>
            <NavLink href="#contact">{translations[language].contact}</NavLink>

            {/* Кнопка открытия модального окна с языками */}
            <LanguageButton onClick={() => setIsModalOpen(true)}>
              <Flag code={languageIcons[language]} width={24} height={16} />
            </LanguageButton>
          </NavItems>

          {/* Кнопка открытия мобильного меню */}
          <MobileMenuButton onClick={() => setIsMenuOpen(true)}>
            <Menu className="h-6 w-6 text-gray-700" />
          </MobileMenuButton>
        </Nav>
      </HeaderContainer>

      {/* Модальное окно мобильного меню */}
      {isMenuOpen && (
        <ModalOverlay onClick={() => setIsMenuOpen(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <h3>{translations[language].menu}</h3>
              <CloseButton onClick={() => setIsMenuOpen(false)}>×</CloseButton>
            </ModalHeader>
            <ModalBody>
              <NavLink href="#about" onClick={() => {
                setIsMenuOpen(false);
                setIsAboutMeModalOpen(true);
              }}>
                {translations[language].about}
              </NavLink>
              <NavLink href="#projects" onClick={() => setIsMenuOpen(false)}>
                {translations[language].projects}
              </NavLink>
              <NavLink href="#skills" onClick={() => setIsMenuOpen(false)}>
                {translations[language].skills}
              </NavLink>
              <NavLink href="#contact" onClick={() => setIsMenuOpen(false)}>
                {translations[language].contact}
              </NavLink>

              {/* Кнопка смены языка в мобильном меню */}
              <LanguageButton onClick={() => {
                setIsMenuOpen(false);
                setIsModalOpen(true);
              }}>
                <Flag code={languageIcons[language]} width={24} height={16} />
              </LanguageButton>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* Модальное окно выбора языка */}
      {isModalOpen && (
        <ModalOverlay onClick={() => setIsModalOpen(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <h3>{translations[language].selectLanguage}</h3>
              <CloseButton onClick={() => setIsModalOpen(false)}>×</CloseButton>
            </ModalHeader>
            <ModalBody>
              {Object.entries(languageIcons).map(([lang, countryCode]) => (
                <LanguageOption key={lang} onClick={() => handleLanguageChange(lang)}>
                  <Flag code={countryCode} width={32} height={20} />
                  {lang === 'en' ? 'English' : lang === 'ru' ? 'Русский' : 'Українська'}
                </LanguageOption>
              ))}
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* Модальное окно "О себе" */}
      <AboutMeModal isOpen={isAboutMeModalOpen} onClose={() => setIsAboutMeModalOpen(false)} />
    </>
  );
};

export default Header;
