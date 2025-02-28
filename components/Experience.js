// components/Experience.js
import React from 'react';

const Experience = ({ heading, jobs }) => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8">{heading}</h2>
        <div className="space-y-8">
          {jobs.map((job, index) => (
            <div key={index} className="p-6 border rounded shadow">
              <h3 className="text-xl font-semibold">{job.role} at {job.company}</h3>
              <span className="text-sm text-secondary">{job.duration}</span>
              <p className="mt-2 text-text">{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
