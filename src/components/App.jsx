// src/components/App.jsx
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import { LanguageProvider } from '../context/LanguageContext';
import Footer from './Footer';  // Импортируем Footer
import { ScrollToTopButton } from './AppStyles';

const App = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <Contact />
        </main>
        {/* Используем новый компонент Footer */}
        <Footer />

        {/* Кнопка вверх */}
        {showScroll && (
          <ScrollToTopButton onClick={scrollToTop}>
            <ArrowUp size={24} />
          </ScrollToTopButton>
        )}
      </div>
    </LanguageProvider>
  );
};

export default App;
