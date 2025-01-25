// src/components/Footer.js
import React, { useEffect } from 'react';
import AOS from 'aos';

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <footer className="footer bg-gray-800 text-white py-4 text-center" data-aos="fade-up">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Miotisoa Randriamihaja. Tous droits réservés.</p>
        <p>Designed by <a href="/" className="text-blue-500 hover:text-blue-700">Miots</a></p>
      </div>
    </footer>
  );
};

export default Footer;