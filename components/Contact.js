// components/Contact.js
import React from 'react';

const Contact = ({ heading, email, phone }) => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">{heading}</h2>
        <p className="text-text">Email: <a href={`mailto:${email}`} className="text-secondary hover:text-hover">{email}</a></p>
        <p className="text-text">Phone: <span className="text-secondary">{phone}</span></p>
      </div>
    </section>
  );
};

export default Contact;
