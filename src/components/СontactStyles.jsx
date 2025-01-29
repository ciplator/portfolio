import styled from 'styled-components';

export const ContactSection = styled.section`
  padding: 5rem 0;
  background-color: #f8fafc;
`;

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
`;

export const FormWrapper = styled.div`
  max-width: 36rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Label = styled.label`
  display: block;
  color: #4a5568;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  font-size: 1rem;
  outline: none;
  transition: border 0.2s ease-in-out;

  &:focus {
    border-color: #3182ce;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  font-size: 1rem;
  outline: none;
  transition: border 0.2s ease-in-out;
  resize: vertical;

  &:focus {
    border-color: #3182ce;
  }
`;
