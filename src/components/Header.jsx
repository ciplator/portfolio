import React, { useState } from 'react';
import { Menu } from 'lucide-react';
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
  MobileMenuButton
} from './HeaderStyles';

const Header = () => {
  const { toggleLanguage } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLanguageChange = (language) => {
    setIsDropdownOpen(false);
    toggleLanguage(language);
  };

  return (
    <HeaderContainer>
      <Nav>
        <Title>My Portfolio</Title>
        <div className="hidden md:flex space-x-8">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#contact">Contact</NavLink>

          {/* Выпадающее меню для выбора языка */}
          <DropdownContainer>
            <DropdownButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              Language
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
        <MobileMenuButton className="md:hidden">
          <Menu className="h-6 w-6 text-gray-700" />
        </MobileMenuButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
