// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100 text-center" data-aos="fade-up">
      <h2 className="text-4xl font-bold mb-8">Contact</h2>
      <form method="post" className="max-w-lg mx-auto bg-white p-8 rounded shadow" data-aos="fade-up">
        <label htmlFor="name" className="block text-left mb-2">Name:</label>
        <input type="text" id="name" name="name" required className="w-full p-2 mb-4 border rounded"/>
        
        <label htmlFor="email" className="block text-left mb-2">Email:</label>
        <input type="email" id="email" name="email" required className="w-full p-2 mb-4 border rounded"/>
        
        <label htmlFor="message" className="block text-left mb-2">Message:</label>
        <textarea id="message" name="message" required className="w-full p-2 mb-4 border rounded"></textarea>
        
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Send</button>
      </form>
      <p className="mt-4"><i className="fas fa-phone"></i> Phone: +261 38 30 328 24/ +261 32 06 961 99</p>
      <p className="mt-2">Contact me: 
        <a href="https://linkedin.com/in/miotisoa" className="contact-icon"><i className="fab fa-linkedin"></i></a>
        <a href="https://github.com/Miots" className="contact-icon"><i className="fab fa-github"></i></a>
        <a href="https://facebook.com" className="contact-icon"><i className="fab fa-facebook"></i></a>
        <a href="https://whatsapp.com" className="contact-icon"><i className="fab fa-whatsapp"></i></a>
        <a href="mailto:miotsrandriamihaja@mail.com" className="contact-icon"><i className="fas fa-envelope"></i></a>
      </p>    
    </section>
  );
};

export default Contact;