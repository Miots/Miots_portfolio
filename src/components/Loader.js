import React, { useEffect } from "react"
import { motion } from "framer-motion"

const Loader = ({ onAnimationComplete }) => {
  const letters = "Miots".split("")
  const phrases = [
    "Crafting digital experiences",
    "Turning ideas into code",
    "Building the future, one line at a time",
    "Where creativity meets technology",
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      onAnimationComplete()
    }, 3000) // Durée de l'animation en millisecondes

    return () => clearTimeout(timer)
  }, [onAnimationComplete])

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-800">
      <div className="w-64 h-24 bg-gray-900 rounded-lg p-4 flex items-center justify-center mb-8">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="text-green-400 font-mono text-5xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {letter}
          </motion.span>
        ))}
        <motion.div
          className="w-0.5 h-8 bg-green-400 ml-1"
          animate={{ opacity: [0, 1, 0], height: [0, 32, 0] }}
          transition={{ duration: 1.2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 0.2 }}
        />
      </div>
      <motion.div
        className="text-green-400 font-mono text-xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        {phrases.map((phrase, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2 + index * 0.5 }}
          >
            {phrase}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Loader

