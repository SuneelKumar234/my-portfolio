// components/Projects.js
import React from 'react';

const Projects = ({ heading, list }) => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {list.map((project, index) => (
            <div key={index} className="p-6 border rounded shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-text mb-4">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-hover">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
