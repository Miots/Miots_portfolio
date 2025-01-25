import React from "react"
import { motion } from "framer-motion"

const Education = ({ darkMode }) => {
  const educationData = [
    {
      degree: "Bachelor's Degree in Computer Science",
      institution: "University of Technology",
      year: "2018 - 2022",
      description: "Focused on software engineering and web development.",
    },
  ]

  return (
    <motion.section
      id="education"
      className={`py-16 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'} text-center`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold mb-8 font-mono">&lt;Education&gt;</h1>
      <div className="max-w-4xl mx-auto">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className={`mb-8 p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-300'}`}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-2 text-blue-500">{edu.degree}</h2>
            <h3 className="text-xl mb-2 text-green-500">{edu.institution}</h3>
            <p className="text-lg mb-2">{edu.year}</p>
            <p>{edu.description}</p>
          </motion.div>
        ))}
      </div>
      <h1 className="text-4xl font-bold mt-8 font-mono">&lt;/Education&gt;</h1>
    </motion.section>
  )
}

export default Education
