import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false); // По умолчанию светлая тема

  const toggleTheme = () => {
    setIsDark((prevTheme) => !prevTheme);
    document.documentElement.classList.toggle('dark', !isDark); // Меняем класс для темной темы
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
