// components/About.js
import React from 'react';

const About = ({ heading, content }) => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-4">{heading}</h2>
        <p className="text-text">{content}</p>
      </div>
    </section>
  );
};

export default About;
