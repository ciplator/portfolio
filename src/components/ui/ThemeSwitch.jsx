import React, { useContext } from 'react';
import { Moon, Sun } from 'lucide-react';
import { ThemeContext } from '../../context/ThemeContext';
import { ThemeButton } from './ThemeSwitchStyles';

const ThemeSwitch = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  return (
    <ThemeButton onClick={() => setIsDark(!isDark)}>
      {isDark ? (
        <Sun className="w-5 h-5 text-yellow-500" />
      ) : (
        <Moon className="w-5 h-5 text-gray-700" />
      )}
    </ThemeButton>
  );
};

export default ThemeSwitch;
