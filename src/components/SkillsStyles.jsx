import styled from 'styled-components';

export const SkillsSection = styled.section`
  padding: 5rem 0;
  background: #f9fafb;
  text-align: center;
`;

export const SkillsContainer = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 0 1rem;

  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
`;

export const SkillItem = styled.div`
  margin-bottom: 1.5rem;
`;

export const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

export const SkillName = styled.span`
  color: #374151;
`;

export const SkillLevel = styled.span`
  color: #1f2937;
`;

export const SkillBar = styled.div`
  width: 100%;
  height: 8px;
  background: #e5e7eb;
  border-radius: 9999px;
  position: relative;
`;

export const SkillProgress = styled.div`
  height: 100%;
  width: ${({ width }) => width}%;
  background: #2563eb;
  border-radius: 9999px;
  transition: width 0.4s ease-in-out;
`;
