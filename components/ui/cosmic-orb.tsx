"use client"

import { motion } from "framer-motion"

interface CosmicOrbProps {
  size?: "small" | "medium" | "large"
  className?: string
}

export default function CosmicOrb({ size = "medium", className = "" }: CosmicOrbProps) {
  const sizeClasses = {
    small: "w-16 h-16",
    medium: "w-24 h-24",
    large: "w-32 h-32",
  }

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {/* Outer glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute inset-0 rounded-full bg-gradient-to-r from-cosmic-blue to-cosmic-teal blur-md"
      />

      {/* Middle ring */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute inset-2 rounded-full border-2 border-cosmic-blue/30 border-dashed"
      />

      {/* Inner orb */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute inset-4 rounded-full bg-gradient-to-br from-cosmic-blue via-cosmic-purple to-cosmic-teal shadow-cosmic-glow"
      />

      {/* Core */}
      <div className="absolute inset-6 rounded-full bg-cosmic-dark border border-cosmic-blue/50" />
    </div>
  )
}
