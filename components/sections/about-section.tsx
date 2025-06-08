"use client"

import { motion } from "framer-motion"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Zap, Target } from "lucide-react"
import CosmicCard from "@/components/ui/cosmic-card"
import type { AboutData } from "@/types/portfolio"

interface AboutSectionProps {
  data: AboutData
}

const valueIcons = {
  curiosity: Brain,
  precision: Zap,
  impact: Target,
}

export default function AboutSection({ data }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 relative">
      {/* Section Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cosmic-purple/5 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cosmic-blue to-cosmic-teal bg-clip-text text-transparent">
            {data.title}
          </h2>
          <p className="text-xl text-cosmic-light/80 max-w-4xl mx-auto leading-relaxed">{data.description}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <CosmicCard className="p-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Brain className="w-8 h-8 text-cosmic-blue" />
                  <span className="bg-gradient-to-r from-cosmic-blue to-cosmic-teal bg-clip-text text-transparent">
                    Core Values
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {data.values.map((value, index) => {
                  const Icon = valueIcons[value.key as keyof typeof valueIcons]
                  return (
                    <motion.div
                      key={value.key}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="flex items-start gap-4 p-4 rounded-lg bg-cosmic-blue/5 border border-cosmic-blue/20 hover:border-cosmic-blue/40 transition-all duration-300"
                    >
                      <div className="p-2 rounded-full bg-cosmic-blue/20">
                        <Icon className="w-5 h-5 text-cosmic-blue" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-cosmic-light mb-1">{value.title}</h4>
                        <p className="text-cosmic-light/70 text-sm leading-relaxed">{value.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </CardContent>
            </CosmicCard>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">
              <span className="bg-gradient-to-r from-cosmic-purple to-cosmic-teal bg-clip-text text-transparent">
                Journey Timeline
              </span>
            </h3>
            <div className="space-y-6">
              {data.timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="flex flex-col items-center">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-6 h-6 rounded-full bg-gradient-to-r from-cosmic-blue to-cosmic-teal shadow-cosmic-glow-sm"
                    ></motion.div>
                    {index < data.timeline.length - 1 && (
                      <div className="w-0.5 h-20 bg-gradient-to-b from-cosmic-blue/50 to-transparent mt-2"></div>
                    )}
                  </div>
                  <div className="pb-8 flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-bold text-cosmic-blue bg-cosmic-blue/10 px-3 py-1 rounded-full border border-cosmic-blue/30">
                        {item.year}
                      </span>
                    </div>
                    <h4 className="font-semibold text-lg text-cosmic-light mb-2 group-hover:text-cosmic-blue transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-cosmic-light/70 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
