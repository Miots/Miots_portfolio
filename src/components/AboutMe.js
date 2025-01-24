// src/components/AboutMe.js
import React from 'react';
import profilePicture from '../assets/img/profile.jpg';

const AboutMe = () => {
  return (
    <section id="about">
        <h1>FullStack Developer</h1>
        <img src={profilePicture} alt="Miotisoa RANDRIAMIHAJA"/>
        <h2>Hello I'm Miotisoa RANDRIAMIHAJA</h2>
        <p>
            I am a junior web developer. I specialize in building modern, efficient, and visually appealing web applications.
            I am passionate about technology and love solving complex problems with code.
      </p>
    </section>
  );
};

export default AboutMe;