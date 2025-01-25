import React, { useState } from "react"
import { motion } from "framer-motion"
import { FaCode, FaTerminal } from "react-icons/fa"

const NavigationBar = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <motion.nav
      className={`fixed w-full top-0 z-50 shadow-lg h-16 bg-[var(--background)] text-[var(--text)]`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <motion.div className="flex items-center" whileHover={{ scale: 1.1 }}>
            <FaCode className="text-2xl mr-2 text-[var(--primary)]" />
            <span className="font-mono text-xl">Miotisoa.dev</span>
          </motion.div>
          <ul className="hidden md:flex space-x-6 font-mono">
            <li>
              <a href="#about" className="hover:text-[var(--primary)] transition-colors duration-300">
                &lt;About /&gt;
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-[var(--primary)] transition-colors duration-300">
                &lt;Skills /&gt;
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-[var(--primary)] transition-colors duration-300">
                &lt;Projects /&gt;
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-[var(--primary)] transition-colors duration-300">
                &lt;Services /&gt;
              </a>
            </li>
            <li>
              <a href="#certifications" className="hover:text-[var(--primary)] transition-colors duration-300">
                &lt;Certifications /&gt;
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[var(--primary)] transition-colors duration-300">
                &lt;Contact /&gt;
              </a>
            </li>
          </ul>
          {/*<motion.button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-[var(--text)] text-[var(--background)]"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {darkMode ? <FaTerminal /> : <FaCode />}
          </motion.button>*/}
          <button onClick={toggleMenu} className="md:hidden p-2 rounded-full bg-[var(--text)] text-[var(--background)]">
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
        {menuOpen && (
          <ul className="md:hidden flex flex-col space-y-4 mt-4 font-mono">
            <li>
              <a href="#about" className="hover:text-[var(--primary)] transition-colors duration-300">
                &lt;About /&gt;
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-[var(--primary)] transition-colors duration-300">
                &lt;Skills /&gt;
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-[var(--primary)] transition-colors duration-300">
                &lt;Projects /&gt;
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-[var(--primary)] transition-colors duration-300">
                &lt;Services /&gt;
              </a>
            </li>
            <li>
              <a href="#certifications" className="hover:text-[var(--primary)] transition-colors duration-300">
                &lt;Certifications /&gt;
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[var(--primary)] transition-colors duration-300">
                &lt;Contact /&gt;
              </a>
            </li>
          </ul>
        )}
      </div>
    </motion.nav>
  )
}

export default NavigationBar

