import React from "react"
import { motion } from "framer-motion"
import { FaCode, FaPaintBrush, FaDatabase, FaCloud, FaSearch, FaWrench, FaRocket } from "react-icons/fa"

const Services = ({ darkMode }) => {
  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description: "I create responsive and modern websites using the latest technologies.",
    },
    {
      icon: <FaPaintBrush />,
      title: "Web Design",
      description: "I design visually appealing and user-friendly interfaces.",
    },
    {
      icon: <FaDatabase />,
      title: "Database Management",
      description: "I manage and optimize databases for efficient data storage and retrieval.",
    },
    {
      icon: <FaWrench />,
      title: "Customization",
      description: "I customize websites or applications to meet specific needs and preferences.",
    },
    {
      icon: <FaSearch />,
      title: "SEO Optimization",
      description: "I optimize websites to rank higher in search engine results.",
    },
    {
      icon: <FaCloud />,
      title: "Cloud Services",
      description: "I provide cloud services to ensure scalability and reliability.",
    },
    {
      icon: <FaRocket />,
      title: "Website Deployment",
      description: "I deploy websites to ensure they are accessible and performant.",
    },
  ]

  return (
    <motion.section
      id="services"
      className={`py-24 bg-[var(--background)] text-[var(--text)]`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center font-mono">&lt;Services&gt;</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg shadow-md bg-[var(--background)]`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl mb-4 text-[var(--primary)]">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 font-mono">{`function ${service.title.replace(/\s+/g, "")}() {`}</h3>
              <p className={`font-mono text-[var(--text)]`}>{`  return "${service.description}";`}</p>
              <p className="font-mono">{"}"}</p>
            </motion.div>
          ))}
        </div>
        <h2 className="text-4xl font-bold mt-8 text-center font-mono">&lt;/Services&gt;</h2>
      </div>
    </motion.section>
  )
}

export default Services

