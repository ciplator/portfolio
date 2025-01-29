import React from 'react';
import Button from './ui/Button';
import { useLanguage } from '../context/LanguageContext';

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
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        <div className="max-w-xl mx-auto">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">{nameLabel}</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">{emailLabel}</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">{messageLabel}</label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <Button type="submit" className="w-full">{buttonText}</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
