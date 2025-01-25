import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import AboutMe from "./AboutMe"
import MySkills from "./MySkills"
import Education from "./Education"
import MyProjects from "./MyProjects"
import Services from "./Services"
import Certifications from "./Certifications"
import Contact from "./Contact"
import NavigationBar from "./NavigationBar"
import Footer from "./Footer"
import Loader from "./Loader"
import MatrixBackground from "./MatrixBackground"

const MainPage = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [loading, setLoading] = useState(true)
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true"
    setDarkMode(isDarkMode)
    document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light")

    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem("darkMode", newDarkMode.toString())
    document.documentElement.setAttribute("data-theme", newDarkMode ? "dark" : "light")
  }

  const handleAnimationComplete = () => {
    setAnimationComplete(true)
  }

  if (loading || !animationComplete) {
    return <Loader onAnimationComplete={handleAnimationComplete} />
  }

  return (
    <div className={`transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
      <MatrixBackground /> {/* Utilisez le composant ici */}
      <NavigationBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 pt-20 pb-20"
      >
        <AboutMe darkMode={darkMode} />
        <MySkills darkMode={darkMode} />
        <Education darkMode={darkMode} />
        <MyProjects darkMode={darkMode} />
        <Services darkMode={darkMode} />
        <Certifications darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </motion.div>
      <Footer darkMode={darkMode} />
    </div>
  )
}

export default MainPage
