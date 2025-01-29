import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';

const LanguageSwitch = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 rounded ${
          language === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('ru')}
        className={`px-2 py-1 rounded ${
          language === 'ru' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'
        }`}
      >
        RU
      </button>
      <button
        onClick={() => setLanguage('uk')}
        className={`px-2 py-1 rounded ${
          language === 'uk' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'
        }`}
      >
        UK
      </button>
    </div>
  );
};

export default LanguageSwitch;
