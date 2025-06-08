"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface SkillBarProps {
  name: string
  level: number
  icon?: LucideIcon
  delay?: number
}

export default function SkillBar({ name, level, icon: Icon, delay = 0 }: SkillBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="space-y-3"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {Icon && <Icon className="w-5 h-5 text-cosmic-blue" />}
          <span className="font-medium text-cosmic-light">{name}</span>
        </div>
        <span className="text-sm text-cosmic-light/70 font-mono">{level}%</span>
      </div>

      <div className="relative">
        <div className="w-full h-2 bg-cosmic-dark/50 rounded-full border border-cosmic-blue/20">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            transition={{ duration: 1.5, delay: delay + 0.2, ease: "easeOut" }}
            className="h-full rounded-full bg-gradient-to-r from-cosmic-blue via-cosmic-purple to-cosmic-teal relative overflow-hidden"
          >
            <motion.div
              animate={{ x: ["0%", "100%"] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
