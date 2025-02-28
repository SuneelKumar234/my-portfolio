// components/Hero.js
import React from 'react';

const Hero = ({ title, subtitle, cta }) => {
  return (
    <section id="hero" className="bg-primary text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-xl mb-8">{subtitle}</p>
        <a href="#projects" className="bg-secondary text-white px-6 py-3 rounded-full hover:bg-hover transition">
          {cta}
        </a>
      </div>
    </section>
  );
};

export default Hero;
