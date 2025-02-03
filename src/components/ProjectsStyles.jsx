import styled from 'styled-components';

export const ProjectsSection = styled.section`
  background-color: #f9fafb;
  padding: 5rem 0;
  text-align: center;
`;

export const ProjectsContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem;

  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
`;

export const ProjectCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const ProjectDescription = styled.p`
  color: #4b5563;
  margin-bottom: 1rem;
`;

export const TechTag = styled.span`
  display: inline-block;
  background-color: #eff6ff;
  color: #1e40af;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
`;

/* Контейнер для кнопок */
export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 1rem;
`;

/* Стили для кнопок */
export const LinkButton = styled.a`
  display: inline-block;
  padding: 10px 16px;
  font-size: 0.875rem;
  font-weight: bold;
  color: white;
  background-color: ${({ secondary }) => (secondary ? "#1f2937" : "#2563eb")};
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.2s ease-in-out;

  &:hover {
    background-color: ${({ secondary }) => (secondary ? "#111827" : "#1e40af")};
  }
`;
