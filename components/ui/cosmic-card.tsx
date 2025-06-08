"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface CosmicCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export default function CosmicCard({ children, className, hover = true }: CosmicCardProps) {
  return (
    <motion.div whileHover={hover ? { y: -5, scale: 1.02 } : undefined} transition={{ duration: 0.3 }}>
      <Card
        className={cn(
          "bg-cosmic-dark/50 backdrop-blur-sm border border-cosmic-blue/20 hover:border-cosmic-blue/40 transition-all duration-300 shadow-lg hover:shadow-cosmic-glow-sm",
          className,
        )}
      >
        {children}
      </Card>
    </motion.div>
  )
}
