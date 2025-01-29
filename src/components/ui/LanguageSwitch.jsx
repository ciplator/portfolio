import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { LanguageButton } from './LanguageSwitchStyles';

const LanguageSwitch = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className="flex space-x-2">
      <LanguageButton
        active={language === 'en'}
        onClick={() => setLanguage('en')}
      >
        EN
      </LanguageButton>
      <LanguageButton
        active={language === 'ru'}
        onClick={() => setLanguage('ru')}
      >
        RU
      </LanguageButton>
      <LanguageButton
        active={language === 'uk'}
        onClick={() => setLanguage('uk')}
      >
        UK
      </LanguageButton>
    </div>
  );
};

export default LanguageSwitch;
