import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App = () => {
  return (
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
  );
};

export default App;
