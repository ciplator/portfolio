import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: white;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
`;

export const Nav = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1a202c;
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const NavLink = styled.a`
  color: #4a5568;
  font-size: 1rem;
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
  color: #4a5568;
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #1a202c;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  right: 0;
  margin-top: 0.5rem;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.375rem;
  width: 10rem;
  overflow: hidden;
`;

export const DropdownItem = styled.button`
  width: 100%;
  padding: 0.75rem 1rem;
  text-align: left;
  background: none;
  border: none;
  color: #4a5568;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #edf2f7;
  }
`;

export const MobileMenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
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
  padding: 1rem 0;
`;
