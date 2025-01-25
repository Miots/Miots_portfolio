// src/components/MyProjects.js
import React, { useState } from 'react';
import javaIdeWeb from '../assets/projects/java-ide-web.png';
import ecommerceWebsite from '../assets/projects/ecommerce.png';

const MyProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Java IDE Web',
      description: 'A web application for managing tasks efficiently. Built with Django and Python.',
      technologies: ['Django', 'HTML', 'CSS', 'JavaScript'],
      image: javaIdeWeb,
      link: 'lien.com'
    },
    {
      id: 2,
      title: 'E-commerce website',
      description: 'An e-commerce website with dynamic product listings and a user-friendly interface. Developed using HTML, CSS, and JavaScript.',
      technologies: ['Django', 'HTML', 'CSS', 'JavaScript'],
      image: ecommerceWebsite,
      link: 'lien.com'
    }
  ];

  const handleProjectClick = (projectId) => {
    setSelectedProject(selectedProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="py-16 bg-gray-100 text-center" data-aos="fade-up">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div key={project.id} className="relative bg-white rounded-lg shadow-lg overflow-hidden" data-aos="fade-up">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover cursor-pointer"
              onClick={() => handleProjectClick(project.id)}
            />
            {selectedProject === project.id && (
              <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-center items-center text-white">
                <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                <p className="text-lg mb-4">{project.description}</p>
                <ul className="flex flex-wrap justify-center mb-4">
                  {project.technologies.map((tech, index) => (
                    <li key={index} className="bg-gray-800 bg-opacity-75 px-2 py-1 m-1 rounded">{tech}</li>
                  ))}
                </ul>
                <a href={project.link} className="text-blue-300 hover:text-blue-500">
                  <i className="fas fa-arrow-right"></i> Voir le projet
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyProjects;