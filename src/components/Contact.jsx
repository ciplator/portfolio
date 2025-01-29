import React, { useState } from 'react';
import Button from './ui/Button';
import { useLanguage } from '../context/LanguageContext';
import {
  ContactSection,
  Container,
  Title,
  FormWrapper,
  Label,
  Input,
  TextArea
} from './СontactStyles';

const Contact = () => {
  const { language } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const texts = {
    en: {
      title: 'Contact Me',
      nameLabel: 'Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      buttonText: 'Send Message'
    },
    ru: {
      title: 'Связаться со мной',
      nameLabel: 'Имя',
      emailLabel: 'Email',
      messageLabel: 'Сообщение',
      buttonText: 'Отправить сообщение'
    },
    uk: {
      title: 'Зв\'яжіться зі мною',
      nameLabel: 'Ім\'я',
      emailLabel: 'Email',
      messageLabel: 'Повідомлення',
      buttonText: 'Відправити повідомлення'
    }
  };

  const { title, nameLabel, emailLabel, messageLabel, buttonText } = texts[language];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    console.log('Отправка данных:', formData); // Проверяем, какие данные уходят

    try {
      const response = await fetch('https://hook.eu1.make.com/ry4wjw8tk959n3v8hr95q8qwyrwdiepy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json' // Добавляем этот заголовок
        },
        body: JSON.stringify(formData)
      });

      const result = await response.text(); // Смотрим, что возвращает сервер
      console.log('Ответ от сервера:', result);

      if (response.ok) {
        alert('Сообщение отправлено успешно!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Не удалось отправить сообщение');
      }
    } catch (error) {
      console.error('Ошибка:', error);
      setErrorMessage('Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте снова.');
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <ContactSection id="contact">
      <Container>
        <Title>{title}</Title>
        <FormWrapper>
          <form onSubmit={handleSubmit}>
            <div>
              <Label>{nameLabel}</Label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label>{emailLabel}</Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label>{messageLabel}</Label>
              <TextArea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></TextArea>
            </div>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Отправка...' : buttonText}
            </Button>
          </form>
        </FormWrapper>
      </Container>
    </ContactSection>
  );
};

export default Contact;
