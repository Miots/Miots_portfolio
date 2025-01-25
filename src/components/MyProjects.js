import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import javaIdeWeb from "../assets/projects/java-ide-web.png"
import ecommerceWebsite from "../assets/projects/ecommerce.png"

const MyProjects = ({ darkMode }) => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "Java IDE Web",
      description: "A web application for managing tasks efficiently. Built with Django and Python.",
      technologies: ["Django", "HTML", "CSS", "JavaScript"],
      image: javaIdeWeb,
      link: "lien.com",
    },
    {
      id: 2,
      title: "E-commerce website",
      description:
        "An e-commerce website with dynamic product listings and a user-friendly interface. Developed using HTML, CSS, and JavaScript.",
      technologies: ["Django", "HTML", "CSS", "JavaScript"],
      image: ecommerceWebsite,
      link: "lien.com",
    },
  ]

  const handleProjectClick = (projectId) => {
    setSelectedProject(selectedProject === projectId ? null : projectId)
  }

  return (
    <motion.section
      id="projects"
      className={`py-16 bg-[var(--background)] text-[var(--text)] text-center`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold mb-8 font-mono">&lt;MyProjects&gt;</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className={`relative bg-[var(--background)] rounded-lg shadow-lg overflow-hidden`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-64 object-cover cursor-pointer"
              onClick={() => handleProjectClick(project.id)}
            />
            <AnimatePresence>
              {selectedProject === project.id && (
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-white mb-4 font-mono">{`const ${project.title} = {`}</h2>
                  <p className="text-white mb-4 font-mono">{`description: "${project.description}",`}</p>
                  <ul className="flex flex-wrap justify-center mb-4">
                    {project.technologies.map((tech, index) => (
                      <li
                        key={index}
                        className="bg-[var(--primary)] text-[var(--background)] px-2 py-1 rounded-full m-1 font-mono"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  {/*<a
                    href={project.link}
                    className="bg-[var(--primary)] text-[var(--background)] px-4 py-2 rounded-full hover:bg-[var(--secondary)] transition-colors duration-300 font-mono"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    view(project)
                  </a>*/}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      <h1 className="text-4xl font-bold mt-8 font-mono">&lt;/MyProjects&gt;</h1>
    </motion.section>
  )
}

export default MyProjects

