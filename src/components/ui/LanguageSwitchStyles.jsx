import styled from 'styled-components';

export const LanguageButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: background-color 0.3s ease, color 0.3s ease;
  background-color: ${({ active }) => (active ? '#2563eb' : '#e5e7eb')};
  color: ${({ active }) => (active ? '#ffffff' : '#1f2937')};

  &:hover {
    background-color: ${({ active }) => (active ? '#1e40af' : '#d1d5db')};
  }
`;
