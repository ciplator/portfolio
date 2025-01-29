import React from 'react';
import Button from './ui/Button';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Frontend Developer
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Building beautiful and responsive web applications
          </p>
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-blue-800">
            View My Work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
