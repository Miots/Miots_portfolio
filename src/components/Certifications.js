import React from "react"
import { motion } from "framer-motion"
import JavaScriptCertification from "../assets/certifications/certificate-freecodecamp-javascript-algo-data-structure.png"
import ResponsiveWebDesign from "../assets/certifications/certificate-freecodecamp-responsive-web-design.jpeg"

const Certifications = ({ darkMode }) => {
  return (
    <motion.section
      id="certifications"
      className={`py-24 bg-[var(--background)] text-[var(--text)]`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center font-mono">&lt;Certifications&gt;</h1>
        <div className="flex flex-wrap justify-center gap-8">
          <motion.div
            className={`w-full md:w-1/3 p-4 rounded-lg shadow-lg bg-[var(--background)]`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={ResponsiveWebDesign || "/placeholder.svg"}
              alt="Responsive Web Design"
              className="w-full rounded"
            />
            <p className="mt-4 text-center font-mono">{`const responsiveWebDesign = "Completed";`}</p>
          </motion.div>
          <motion.div
            className={`w-full md:w-1/3 p-4 rounded-lg shadow-lg bg-[var(--background)]`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={JavaScriptCertification || "/placeholder.svg"}
              alt="JavaScript Algorithms and Data Structures"
              className="w-full rounded"
            />
            <p className="mt-4 text-center font-mono">{`const jsAlgorithms = "Mastered";`}</p>
          </motion.div>
        </div>
        <h1 className="text-4xl font-bold mt-12 text-center font-mono">&lt;/Certifications&gt;</h1>
      </div>
    </motion.section>
  )
}

export default Certifications

