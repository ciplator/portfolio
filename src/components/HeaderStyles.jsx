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

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: #4a5568;
  font-size: 16px;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  padding: 10px 0;

  &:hover {
    color: #1a202c;
  }
`;

export const MobileMenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: block;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const LanguageButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  min-width: 300px;
  max-width: 90%;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 10px;
  padding-bottom: 20px;
`;

export const LanguageOption = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  background: none;
  border: none;
  text-align: left;

  &:hover {
    background: #f0f0f0;
  }
`;
