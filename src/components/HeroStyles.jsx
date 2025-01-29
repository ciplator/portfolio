import styled from 'styled-components';

export const HeroSection = styled.section`
  background: linear-gradient(to right, #2563eb, #1e40af);
  color: white;
  padding: 5rem 0;
  text-align: center;
`;

export const HeroContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

export const HeroDescription = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;
