import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Flag from 'react-world-flags'; // Импортируем компонент Flag
import { useLanguage } from '../context/LanguageContext';
import {
  HeaderContainer,
  Nav,
  Title,
  NavItems,
  NavLink,
  DropdownContainer,
  DropdownButton,
  DropdownMenu,
  DropdownItem,
  MobileMenuButton,
  MobileMenu
} from './HeaderStyles';

const languageIcons = {
  en: 'US',
  ru: 'RU',
  uk: 'UA'
};

const translations = {
  en: {
    about: 'About',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact'
  },
  ru: {
    about: 'О себе',
    projects: 'Проекты',
    skills: 'Навыки',
    contact: 'Контакты'
  },
  uk: {
    about: 'Про мене',
    projects: 'Проекти',
    skills: 'Навички',
    contact: 'Контакти'
  }
};

const Header = () => {
  const { toggleLanguage, language } = useLanguage(); // Получаем текущий язык из контекста
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    setIsDropdownOpen(false);
    toggleLanguage(lang); // Меняем язык
  };

  return (
    <HeaderContainer>
      <Nav>
        <Title>My Portfolio</Title>
        <NavItems>
          <NavLink href="#about">{translations[language].about}</NavLink>
          <NavLink href="#projects">{translations[language].projects}</NavLink>
          <NavLink href="#skills">{translations[language].skills}</NavLink>
          <NavLink href="#contact">{translations[language].contact}</NavLink>
          <DropdownContainer>
            <DropdownButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <Flag code={languageIcons[language]} width={24} height={16} />
            </DropdownButton>
            {isDropdownOpen && (
              <DropdownMenu>
                {Object.entries(languageIcons).map(([lang, countryCode]) => (
                  <DropdownItem key={lang} onClick={() => handleLanguageChange(lang)}>
                    <Flag code={countryCode} width={24} height={16} />
                    {lang === 'en' ? 'English' : lang === 'ru' ? 'Русский' : 'Українська'}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            )}
          </DropdownContainer>
        </NavItems>
        <MobileMenuButton className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <Menu className="h-6 w-6 text-gray-700" />
        </MobileMenuButton>
      </Nav>
      {isMobileMenuOpen && (
        <MobileMenu>
          <NavLink href="#about">{translations[language].about}</NavLink>
          <NavLink href="#projects">{translations[language].projects}</NavLink>
          <NavLink href="#skills">{translations[language].skills}</NavLink>
          <NavLink href="#contact">{translations[language].contact}</NavLink>
          <DropdownContainer>
            <DropdownButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <Flag code={languageIcons[language]} width={24} height={16} />
            </DropdownButton>
            {isDropdownOpen && (
              <DropdownMenu>
                {Object.entries(languageIcons).map(([lang, countryCode]) => (
                  <DropdownItem key={lang} onClick={() => handleLanguageChange(lang)}>
                    <Flag code={countryCode} width={24} height={16} />
                    {lang === 'en' ? 'English' : lang === 'ru' ? 'Русский' : 'Українська'}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            )}
          </DropdownContainer>
        </MobileMenu>
      )}
    </HeaderContainer>
  );
};

export default Header;
