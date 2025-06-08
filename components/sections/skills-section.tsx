"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Brain, Code, Database, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import CosmicCard from "@/components/ui/cosmic-card"
import SkillBar from "@/components/ui/skill-bar"
import type { SkillsData } from "@/types/portfolio"

interface SkillsSectionProps {
  data: SkillsData
}

const categoryIcons = {
  domains: Brain,
  languages: Code,
  frameworks: Database,
  tools: Cpu,
}

export default function SkillsSection({ data }: SkillsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("domains")

  return (
    <section id="skills" className="py-20 relative">
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cosmic-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cosmic-blue/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cosmic-blue via-cosmic-purple to-cosmic-teal bg-clip-text text-transparent">
            {data.title}
          </h2>
          <p className="text-xl text-cosmic-light/80 max-w-3xl mx-auto">{data.subtitle}</p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.keys(data.categories).map((category) => {
            const Icon = categoryIcons[category as keyof typeof categoryIcons]
            return (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`cosmic-button-outline ${
                  activeCategory === category ? "cosmic-button-active" : ""
                } flex items-center gap-2 capitalize`}
              >
                <Icon className="w-4 h-4" />
                {category}
              </Button>
            )
          })}
        </motion.div>

        {/* Skills Display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <CosmicCard className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {data.categories[activeCategory as keyof typeof data.categories].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <SkillBar name={skill.name} level={skill.level} icon={skill.icon} delay={index * 0.1} />
                </motion.div>
              ))}
            </div>
          </CosmicCard>
        </motion.div>

        {/* Skill Cloud Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {Object.values(data.categories)
              .flat()
              .map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`px-3 py-1 rounded-full text-sm font-medium border transition-all duration-300 cursor-default ${
                    skill.level >= 90
                      ? "bg-cosmic-blue/20 border-cosmic-blue/40 text-cosmic-blue"
                      : skill.level >= 80
                        ? "bg-cosmic-purple/20 border-cosmic-purple/40 text-cosmic-purple"
                        : "bg-cosmic-teal/20 border-cosmic-teal/40 text-cosmic-teal"
                  }`}
                >
                  {skill.name}
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
