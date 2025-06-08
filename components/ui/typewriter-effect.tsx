"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TypewriterEffectProps {
  text: string
  className?: string
  speed?: number
}

export default function TypewriterEffect({ text, className = "", speed = 100 }: TypewriterEffectProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timer)
    }
  }, [currentIndex, text, speed])

  return (
    <div className={className}>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
        className="text-cosmic-blue ml-1"
      >
        |
      </motion.span>
    </div>
  )
}
