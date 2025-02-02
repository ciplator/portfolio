import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: white;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  padding: 16px 0;
`;

export const Nav = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #1a202c;
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  justify-content: center; /* Центрируем элементы */
`;

export const NavLink = styled.a`
  color: #4a5568;
  font-size: 16px;
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #1a202c;
  }
`;

export const DropdownContainer = styled.div`
  position: relative;
`;

export const DropdownButton = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;
  display: flex;
  align-items: center;

  img {
    width: 24px;
    height: 16px;
  }

  &:hover {
    opacity: 0.7;
  }

  &:focus {
    outline: 2px solid #3182ce;
    outline-offset: 2px;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  right: 0;
  margin-top: 8px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  width: 10rem;
  overflow: hidden;
`;

export const DropdownItem = styled.button`
  width: 100%;
  padding: 12px 16px;
  text-align: left;
  background: none;
  border: none;
  color: #4a5568;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: 24px;
    height: 16px;
  }

  &:hover {
    background-color: #edf2f7;
  }
`;

export const MobileMenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  padding: 16px 0;
  gap: 16px;
  max-width: 1120px;
  margin: 0 auto;
`;
