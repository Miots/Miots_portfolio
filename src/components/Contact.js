// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="animate__animated animate__fadeInDown">Contact</h2>
      <form method="post" className="contact-form animate__animated animate__fadeInUp">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        
        <button type="submit">Send</button>
      </form>
      <p>Phone: +261 34 12 345 67</p>
      <p>Contact me: 
        <a href="https://linkedin.com/in/miotisoa"  className="contact-icon"><i className="fab fa-linkedin"></i></a>
        <a href="https://github.com/miotisoa" className="contact-icon"><i className="fab fa-github"></i></a>
        <a href="https://facebook.com" className="contact-icon"><i className="fab fa-facebook"></i></a>
        <a href="https://whatsapp.com"  className="contact-icon"><i className="fab fa-whatsapp"></i></a>
        <a href="mailto:miotsrandriamihaja@mail.com" className="contact-icon"><i className="fas fa-envelope"></i></a>
      </p>    
    </section>
  );
};

export default Contact;