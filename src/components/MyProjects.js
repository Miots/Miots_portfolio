// src/components/MyProjects.js
import React from 'react';
import javaIdeWeb from '../assets/projects/java-ide-web.png';
import ecommerceWebsite from '../assets/projects/ecommerce.png';


const MyProjects = () => {
  return (
    <section id="projects">
      <h1>My Projects</h1>
      <div>
        <img src={javaIdeWeb} alt="Java IDE Web"/>
        <div className="project-details">
            <h3>Java IDE Web</h3>
            <p>A web application for managing tasks efficiently. Built with Django and Python.</p>
            <ul>
                <li>Django</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ul>
            <a href="lien.com"><i class="bx bx-right-arrow-alt"></i> Voir le projet</a>
        </div>
      </div>
      <div>
        <img src={ecommerceWebsite} alt="E-commerce website"/>
        <div className="project-details">
            <h3>E-commerce website</h3>
            <p>An e-commerce website with dynamic product listings and a user-friendly interface. Developed using HTML, CSS, and JavaScript.</p>
            <ul>
                <li>Django</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ul>
            <a href="lien.com"><i class="bx bx-right-arrow-alt"></i> Voir le projet</a>
        </div>
      </div>
    </section>
  );
};

export default MyProjects;