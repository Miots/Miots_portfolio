import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Miotisoa Randriamihaja. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;