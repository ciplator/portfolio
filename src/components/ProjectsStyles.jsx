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
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
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
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #1e40af;
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

export const ButtonContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;
`;

export const LinkButton = styled.a`
  background-color: #2563eb;
  color: white;
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  border-radius: 8px;
  text-decoration: none;
  text-align: center;
  display: inline-block;
  width: 100%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1e40af;
  }

  ${({ secondary }) =>
    secondary &&
    `
    background-color: #6b7280;
    &:hover {
      background-color: #4b5563;
    }
  `}
`;

export const ProjectDetails = styled.div`
  margin-top: 1.5rem;
  padding: 1.25rem;
  background-color: #f3f4f6;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  div {
    margin-bottom: 1rem;
    font-size: 1rem;
    color: #4b5563;
  }

  strong {
    color: #1e40af;
    font-weight: bold;
  }

  ul {
    margin-top: 0.5rem;
    padding-left: 1.25rem;

    li {
      font-size: 0.95rem;
      color: #4b5563;
      list-style-type: disc;
      margin-bottom: 0.5rem;
    }
  }
`;
