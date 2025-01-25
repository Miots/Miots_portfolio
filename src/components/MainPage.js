// src/components/MainPage.js
import React from 'react';
import AboutMe from './AboutMe';
import MySkills from './MySkills';
import Education from './Education';
import MyProjects from './MyProjects';
import Services from './Services';
import Certifications from './Certifications';
import Contact from './Contact';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import ThreeBackground from './ThreeBackground';

const MainPage = () => {
  return (
    <div>
      <ThreeBackground />
      <NavigationBar />
      <AboutMe />
      <MySkills />
      <Education />
      <MyProjects />
      <Services />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
};

export default MainPage;