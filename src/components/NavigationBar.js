// src/components/NavigationBar.js
import React from 'react';

const NavigationBar = () => {
  return (
    <nav className="bg-gray-800 text-white fixed w-full top-0 z-50">
      <ul className="flex justify-around p-4">
        <li><a href="#about" className="hover:bg-gray-700 p-2 rounded"><i className="fas fa-user"></i> About Me</a></li>
        <li><a href="#skills" className="hover:bg-gray-700 p-2 rounded"><i className="fas fa-tools"></i> My Skills</a></li>
        <li><a href="#projects" className="hover:bg-gray-700 p-2 rounded"><i className="fas fa-project-diagram"></i> My Projects</a></li>
        <li><a href="#services" className="hover:bg-gray-700 p-2 rounded"><i className="fas fa-concierge-bell"></i> Services</a></li>
        <li><a href="#certifications" className="hover:bg-gray-700 p-2 rounded"><i className="fas fa-certificate"></i> Certifications</a></li>
        <li><a href="#contact" className="hover:bg-gray-700 p-2 rounded"><i className="fas fa-envelope"></i> Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;