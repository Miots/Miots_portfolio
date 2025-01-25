import React from "react"
import { motion } from "framer-motion"

const ProgressCircle = ({ percentage, children }) => {
  const circumference = 2 * Math.PI * 48 // 2πr, where r = 48 (as the circle has a radius of 50 - 2 for stroke width)

  return (
    <div className="relative w-24 h-24">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle
          className="text-gray-200"
          strokeWidth="4"
          stroke="currentColor"
          fill="transparent"
          r="48"
          cx="50"
          cy="50"
        />
        <motion.circle
          className="text-blue-500"
          strokeWidth="4"
          stroke="currentColor"
          fill="transparent"
          r="48"
          cx="50"
          cy="50"
          initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference - (percentage / 100) * circumference }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">{children}</div>
    </div>
  )
}

export default ProgressCircle

