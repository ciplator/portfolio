// src/components/ContactStyles.js
import styled from 'styled-components';

export const ContactSection = styled.section`
  padding: 80px 0;
  background: linear-gradient(135deg, #f9fafb, #e5e7eb);

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
  color: #2d3748;

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
  background: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  box-sizing: border-box; /* Исправляет проблему выхода инпутов за границы */

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 16px;
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
  box-sizing: border-box; /* Исправляет выход за границы */
  padding: 12px 16px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 16px;
  outline: none;
  transition: border 0.2s ease-in-out;

  &:focus {
    border-color: #2563eb;
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 14px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  box-sizing: border-box; /* Исправляет выход за границы */
  padding: 12px 16px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 16px;
  outline: none;
  transition: border 0.2s ease-in-out;
  resize: vertical;

  &:focus {
    border-color: #2563eb;
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
  background-color: #2563eb;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #1e40af;
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
