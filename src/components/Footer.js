import React from "react"
import { motion } from "framer-motion"

const Footer = ({ darkMode }) => {
  return (
    <motion.footer
      className={`py-8 bg-[var(--background)] text-[var(--text)] text-center`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4">
        <p className="text-sm font-mono">
          &copy; {new Date().getFullYear()} Miotisoa RANDRIAMIHAJA. All rights reserved.
        </p>
        <p className="text-sm mt-2 font-mono">
          Built with <span className="text-[var(--primary)]">React</span> and{" "}
          <span className="text-[var(--secondary)]">❤️</span>
        </p>
      </div>
    </motion.footer>
  )
}

export default Footer

