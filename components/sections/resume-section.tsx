"use client"

import { motion } from "framer-motion"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import CosmicCard from "@/components/ui/cosmic-card"
import type { ResumeData } from "@/types/portfolio"

interface ResumeSectionProps {
  data: ResumeData
}

export default function ResumeSection({ data }: ResumeSectionProps) {
  return (
    <section id="resume" className="py-20 relative">
      {/* Cosmic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-cosmic-teal/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-cosmic-purple/10 rounded-full blur-3xl"></div>
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
          <p className="text-xl text-cosmic-light/80 max-w-3xl mx-auto mb-8">{data.subtitle}</p>
          <Button size="lg" className="cosmic-button" asChild>
            <a href={data.resumeUrl} download>
              <Download className="w-5 h-5 mr-2" />
              {data.downloadText}
            </a>
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <CosmicCard className="h-full p-6 text-center group">
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 p-3 rounded-full bg-cosmic-blue/20 border border-cosmic-blue/30 group-hover:border-cosmic-blue/50 transition-colors">
                    <cert.icon className="w-full h-full text-cosmic-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-cosmic-light leading-tight mb-3 group-hover:text-cosmic-blue transition-colors">
                    {cert.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  <p className="text-cosmic-light/70 font-medium">{cert.issuer}</p>
                  <Badge className="bg-cosmic-teal/20 border border-cosmic-teal/30 text-cosmic-teal">{cert.year}</Badge>
                </div>

                {cert.credentialUrl && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-4 cosmic-button-ghost opacity-0 group-hover:opacity-100 transition-opacity"
                    asChild
                  >
                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                      View Credential
                    </a>
                  </Button>
                )}
              </CosmicCard>
            </motion.div>
          ))}
        </div>

        {/* Experience Timeline */}
        {data.experience && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20"
          >
            <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cosmic-purple to-cosmic-teal bg-clip-text text-transparent">
              Professional Experience
            </h3>
            <div className="max-w-4xl mx-auto">
              {data.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="mb-8"
                >
                  <CosmicCard className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-cosmic-light">{exp.title}</h4>
                        <p className="text-cosmic-blue font-medium">{exp.company}</p>
                      </div>
                      <Badge className="bg-cosmic-purple/20 border border-cosmic-purple/30 text-cosmic-purple mt-2 md:mt-0">
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="text-cosmic-light/80 leading-relaxed">{exp.description}</p>
                  </CosmicCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
