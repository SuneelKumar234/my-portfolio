// pages/index.js
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import data from '../data/data.json';

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar links={data.navbar.links} />
      <Hero title={data.hero.title} subtitle={data.hero.subtitle} cta={data.hero.cta} />
      <About heading={data.about.heading} content={data.about.content} />
      <Experience heading={data.experience.heading} jobs={data.experience.jobs} />
      <Projects heading={data.projects.heading} list={data.projects.list} />
      <Contact heading={data.contact.heading} email={data.contact.email} phone={data.contact.phone} />
      <Footer />
    </div>
  );
}
