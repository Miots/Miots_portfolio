// src/components/AboutMe.js
import React from 'react';
import profilePicture from '../assets/img/profile.jpg';

const AboutMe = () => {
  return (
    <section id="about" className="py-16 bg-white text-center" data-aos="fade-up">
      <h1 className="text-4xl font-bold mb-4">FullStack Developer, Web Designer.</h1>
      <img src={profilePicture} alt="Miotisoa RANDRIAMIHAJA" className="w-32 h-32 rounded-full mx-auto mb-4" data-aos="fade-up"/>
      <h2 className="text-2xl font-semibold mb-2" data-aos="fade-up">Hello I'm Miotisoa RANDRIAMIHAJA</h2>
      <p className="text-lg mb-4" data-aos="fade-up">
        I am a junior web developer. I specialize in building modern, efficient, and visually appealing websites and web applications.
        I am passionate about technology and love solving complex problems with code.
      </p>
      <a href="#contact" className="text-blue-500 hover:text-blue-700" data-aos="fade-up"> <i className="fas fa-envelope"></i> Contact me</a>
    </section>
  );
};

export default AboutMe;