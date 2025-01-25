import React from "react"
import { motion } from "framer-motion"
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaReact,
  FaBootstrap,
  FaLinux,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from "react-icons/fa"
import { SiDjango, SiFlask } from "react-icons/si"
import ProgressCircle from "./ProgressCircle"

const MySkills = ({ darkMode }) => {
  const skillsData = [
    {
      title: "Languages",
      skills: [
        { name: "HTML", icon: <FaHtml5 />, percentage: 100 },
        { name: "CSS", icon: <FaCss3Alt />, percentage: 100 },
        { name: "JavaScript", icon: <FaJs />, percentage: 100 },
        { name: "Python", icon: <FaPython />, percentage: 100 },
      ],
    },
    {
      title: "Frameworks",
      skills: [
        { name: "React", icon: <FaReact />, percentage: 100 },
        { name: "Bootstrap", icon: <FaBootstrap />, percentage: 100 },
        { name: "Django", icon: <SiDjango />, percentage: 100 },
        { name: "Flask", icon: <SiFlask />, percentage: 100 },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Linux", icon: <FaLinux />, percentage: 100 },
        { name: "Git", icon: <FaGitAlt />, percentage: 100 },
        { name: "GitHub", icon: <FaGithub />, percentage: 100 },
        { name: "Docker", icon: <FaDocker />, percentage: 100 },
      ],
    },
  ]

  return (
    <motion.section
      id="skills"
      className={`py-16 bg-[var(--background)] text-[var(--text)] text-center`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-4xl font-bold mb-8 font-mono"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        &lt;MySkills&gt;
      </motion.h1>

      {skillsData.map((category, index) => (
        <motion.div
          key={category.title}
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-6 font-mono">{category.title} = &#123;</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {category.skills.map((skill, skillIndex) => (
              <motion.li
                key={skill.name}
                className={`bg-[var(--background)] p-4 rounded-lg shadow-lg backdrop-filter backdrop-blur-sm flex flex-col items-center border border-[var(--text)]`}
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px var(--primary)" }}
                transition={{ duration: 0.3 }}
              >
                <ProgressCircle percentage={skill.percentage}>
                  <div className="text-4xl text-[var(--primary)]">{skill.icon}</div>
                </ProgressCircle>
                <span className="mt-2 font-mono text-[var(--text)]">
                  {skill.name}
                </span>
              </motion.li>
            ))}
          </ul>
          <h2 className="text-2xl font-semibold mt-6 font-mono">&#125;;</h2>
        </motion.div>
      ))}
      <motion.h1
        className="text-4xl font-bold mt-8 font-mono"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        &lt;/MySkills&gt;
      </motion.h1>
    </motion.section>
  )
}

export default MySkills
