import React from 'react';
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

  return (
    <ContactSection id="contact">
      <Container>
        <Title>{title}</Title>
        <FormWrapper>
          <form>
            <div>
              <Label>{nameLabel}</Label>
              <Input type="text" />
            </div>
            <div>
              <Label>{emailLabel}</Label>
              <Input type="email" />
            </div>
            <div>
              <Label>{messageLabel}</Label>
              <TextArea rows="4"></TextArea>
            </div>
            <Button type="submit">{buttonText}</Button>
          </form>
        </FormWrapper>
      </Container>
    </ContactSection>
  );
};

export default Contact;
