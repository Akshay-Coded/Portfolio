"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import CosmicCard from "@/components/ui/cosmic-card"
import type { ProjectsData } from "@/types/portfolio"

interface ProjectsSectionProps {
  data: ProjectsData
}

export default function ProjectsSection({ data }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-20 relative">
      {/* Cosmic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cosmic-deep/30 to-transparent"></div>

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

        <div className="grid lg:grid-cols-2 gap-8">
          {data.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`group ${project.featured ? "lg:col-span-2" : ""}`}
            >
              <CosmicCard className={`h-full p-8 ${project.featured ? "cosmic-card-featured" : ""}`}>
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-cosmic-blue/20 border border-cosmic-blue/30">
                      <project.icon className="w-8 h-8 text-cosmic-blue" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-cosmic-light group-hover:text-cosmic-blue transition-colors">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <Badge className="mt-2 bg-gradient-to-r from-cosmic-blue to-cosmic-teal text-white border-0">
                          Featured Project
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="sm" className="cosmic-button-ghost" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    {project.demo && (
                      <Button variant="ghost" size="sm" className="cosmic-button-ghost" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                <p className="text-cosmic-light/80 mb-6 leading-relaxed text-lg">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      className="bg-cosmic-purple/20 border border-cosmic-purple/30 text-cosmic-purple hover:bg-cosmic-purple/30 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button className="cosmic-button flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                  {project.demo && (
                    <Button variant="outline" className="cosmic-button-outline" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CosmicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
