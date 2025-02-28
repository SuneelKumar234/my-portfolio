// components/Navbar.js
import React from 'react';

const Navbar = ({ links }) => {
  return (
    <nav className="bg-background shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-primary font-bold text-xl">My Portfolio</div>
        <ul className="flex space-x-6">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="text-text hover:text-hover">{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
