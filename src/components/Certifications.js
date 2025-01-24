// src/components/Certifications.js
import React from 'react';
import JavaScriptCertification from '../assets/certfications/certificate-freecodecamp-javascript-algo-data-structure.png';
import ResponsiveWebDesign from '../assets/certfications/certificate-freecodecamp-responsive-web-design.jpeg';


const Certifications = () => {
  return (
    <section id="certifications">
      <h1>Certifications</h1>
      <div>
        <img src={JavaScriptCertification} alt="JavaScript Algorithms and Data Structures" />
        <img src={ResponsiveWebDesign} alt="Responsive Web Design" />
      </div>
    </section>
  );
};

export default Certifications;