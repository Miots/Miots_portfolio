import React from "react"
import { motion } from "framer-motion"
import Typical from "react-typical"
import profilePicture from "../assets/img/profile.jpg"

const AboutMe = ({ darkMode }) => {
  return (
    <motion.section
      id="about"
      className={`py-24 bg-[var(--background)] text-[var(--text)]`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.img
            src={profilePicture}
            alt="Miotisoa RANDRIAMIHAJA"
            className="w-64 h-64 rounded-full mb-8 md:mb-0 md:mr-8 border-4 border-[var(--primary)]"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.5 }}
          />
          <div className="text-center md:text-left font-mono">
            <Typical
              steps={['console.log("FullStack Developer");', 3000, 'console.log("Web Designer");', 3000]}
              loop={Number.POSITIVE_INFINITY}
              wrapper="h1"
              className="text-3xl font-bold mb-4 text-[var(--text)]"
            />
            <h2 className="text-2xl font-semibold mb-4">
              <span className="text-[var(--primary)]">const</span> developer =
              <span className="text-[var(--secondary)]">"Miotisoa RANDRIAMIHAJA"</span>;
            </h2>
            <p className="text-lg mb-6 max-w-2xl text-[var(--text)]">
              <span className="text-[var(--primary)]">function</span>{" "}
              <span className="text-[var(--secondary)]">introduce</span>() &#123;
              <br />
              &nbsp;&nbsp;return (I am a junior web developer specializing in building modern, efficient, and visually
              appealing websites and web applications. Passionate about technology, I love solving complex problems with
              code.);
              <br />
              &#125;
            </p>
            <motion.a
              href="#contact"
              className="inline-block bg-[var(--primary)] text-[var(--background)] px-6 py-3 rounded-full hover:bg-[var(--secondary)] transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact.send()
            </motion.a>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default AboutMe

