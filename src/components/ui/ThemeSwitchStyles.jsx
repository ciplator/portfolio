import styled from 'styled-components';

export const ThemeButton = styled.button`
  padding: 0.5rem;
  border-radius: 50%;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.hoverBg || '#e5e7eb'};
    transform: scale(1.1);
  }

  svg {
    transition: color 0.3s ease;
  }
`;
