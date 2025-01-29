import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import { LanguageProvider } from '../context/LanguageContext';

const App = () => {
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
        <footer className="bg-gray-900 text-white py-8 text-center">
          <p>© 2025 My Portfolio. All rights reserved.</p>
        </footer>
      </div>
    </LanguageProvider>
  );
};

export default App;
