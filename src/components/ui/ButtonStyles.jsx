import styled from 'styled-components';

const variants = {
  primary: {
    background: '#2563eb',
    hover: '#1e40af',
    text: '#ffffff',
    border: 'none'
  },
  secondary: {
    background: '#e5e7eb',
    hover: '#d1d5db',
    text: '#1f2937',
    border: 'none'
  },
  outline: {
    background: 'transparent',
    hover: '#eff6ff',
    text: '#2563eb',
    border: '2px solid #2563eb'
  }
};

export const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  background: ${({ variant }) => variants[variant].background};
  color: ${({ variant }) => variants[variant].text};
  border: ${({ variant }) => variants[variant].border};

  &:hover {
    background: ${({ variant }) => variants[variant].hover};
  }
`;
