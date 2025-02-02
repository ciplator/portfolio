// src/components/FooterStyles.js
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #2d3748;
  color: white;
  padding: 16px;
  width: 100%;
  text-align: center;

  @media (max-width: 768px) {
    padding: 12px;
  }
`;

export const FooterContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;

export const FooterText = styled.p`
  font-size: 14px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
