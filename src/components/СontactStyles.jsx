import styled from 'styled-components';

export const ContactSection = styled.section`
  padding: 80px 0;
  background-color: #f8fafc;

  @media (max-width: 768px) {
    padding: 48px 0;
  }
`;

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 16px;

  @media (max-width: 768px) {
    padding: 0 32px;
  }
`;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 32px;
  }
`;

export const FormWrapper = styled.div`
  max-width: 576px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Label = styled.label`
  display: block;
  color: #4a5568;
  font-weight: 500;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 16px;
  outline: none;
  transition: border 0.2s ease-in-out;

  &:focus {
    border-color: #3182ce;
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 14px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 16px;
  outline: none;
  transition: border 0.2s ease-in-out;
  resize: vertical;

  &:focus {
    border-color: #3182ce;
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 14px;
  }
`;

export const Button = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
  color: white;
  background-color: #3182ce;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #2c5282;
  }

  &:disabled {
    background-color: #a0aec0;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;
