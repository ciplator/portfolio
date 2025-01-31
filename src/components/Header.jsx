import React, { useState } from 'react';
import { Menu, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import {
  HeaderContainer,
  Nav,
  Title,
  NavLink,
  DropdownContainer,
  DropdownButton,
  DropdownMenu,
  DropdownItem,
  MobileMenuButton,
  MobileMenu
} from './HeaderStyles';

const Header = () => {
  const { toggleLanguage } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLanguageChange = (language) => {
    setIsDropdownOpen(false);
    toggleLanguage(language);
  };

  return (
    <HeaderContainer>
      <Nav>
        <Title>My Portfolio</Title>
        {/* Десктопное меню */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <DropdownContainer>
            <DropdownButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <Globe className="h-5 w-5 text-gray-700" />
            </DropdownButton>
            {isDropdownOpen && (
              <DropdownMenu>
                <DropdownItem onClick={() => handleLanguageChange('en')}>English</DropdownItem>
                <DropdownItem onClick={() => handleLanguageChange('ru')}>Русский</DropdownItem>
                <DropdownItem onClick={() => handleLanguageChange('uk')}>Українська</DropdownItem>
              </DropdownMenu>
            )}
          </DropdownContainer>
        </div>
        {/* Мобильное меню */}
        <MobileMenuButton className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <Menu className="h-6 w-6 text-gray-700" />
        </MobileMenuButton>
      </Nav>
      {isMobileMenuOpen && (
        <MobileMenu>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <DropdownContainer>
            <DropdownButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <Globe className="h-5 w-5 text-gray-700" />
            </DropdownButton>
            {isDropdownOpen && (
              <DropdownMenu>
                <DropdownItem onClick={() => handleLanguageChange('en')}>English</DropdownItem>
                <DropdownItem onClick={() => handleLanguageChange('ru')}>Русский</DropdownItem>
                <DropdownItem onClick={() => handleLanguageChange('uk')}>Українська</DropdownItem>
              </DropdownMenu>
            )}
          </DropdownContainer>
        </MobileMenu>
      )}
    </HeaderContainer>
  );
};

export default Header;
