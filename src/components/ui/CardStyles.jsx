import styled from 'styled-components';

export const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.cardBg || 'white'};
  color: ${({ theme }) => theme.textColor || 'black'};
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
`;
