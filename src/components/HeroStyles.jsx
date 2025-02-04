import styled from 'styled-components';

export const HeroSection = styled.section`
  background: linear-gradient(to right, #2563eb, #1e40af);
  color: white;
  padding: 80px 0;
  text-align: center;
`;

export const HeroContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const HeroTitle = styled.h1`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    font-size: 64px;
  }
`;

export const HeroDescription = styled.p`
  font-size: 20px;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;
