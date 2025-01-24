// src/components/MainPage.js
import React from 'react';
import AboutMe from './AboutMe';
import MySkills from './MySkills';
import MyProjects from './MyProjects';
import Services from './Services';
import Certifications from './Certifications';
import Contact from './Contact';
import NavigationBar from './NavigationBar';
import Footer from './Footer';

const MainPage = () => {
  return (
    <div>
      <NavigationBar />
      <AboutMe />
      <MySkills />
      <MyProjects />
      <Services />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
};

export default MainPage;