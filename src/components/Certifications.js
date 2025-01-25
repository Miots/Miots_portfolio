// src/components/Certifications.js
import React from 'react';
import JavaScriptCertification from '../assets/certfications/certificate-freecodecamp-javascript-algo-data-structure.png';
import ResponsiveWebDesign from '../assets/certfications/certificate-freecodecamp-responsive-web-design.jpeg';

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 bg-white text-center" data-aos="fade-up">
      <h1 className="text-4xl font-bold mb-8">Certifications</h1>
      <div className="flex justify-center space-x-4">
        <img src={ResponsiveWebDesign} alt="Responsive Web Design" className="w-1/3 rounded shadow" data-aos="fade-up"/>
        <img src={JavaScriptCertification} alt="JavaScript Algorithms and Data Structures" className="w-1/3 rounded shadow" data-aos="fade-up"/>
      </div>
    </section>
  );
};

export default Certifications;