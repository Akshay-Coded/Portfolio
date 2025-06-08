"use client"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import TypewriterEffect from "@/components/ui/typewriter-effect"
import CosmicOrb from "@/components/ui/cosmic-orb"
import type { HeroData } from "@/types/portfolio"
import { useState, useEffect } from "react"

interface HeroSectionProps {
  data: HeroData
}

export default function HeroSection({ data }: HeroSectionProps) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Set initial dimensions
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });

    // Update dimensions on window resize
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      {/* Floating Cosmic Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: dimensions.width * Math.random(),
              y: dimensions.height * Math.random(),
              opacity: 0,
            }}
            animate={{
              x: dimensions.width * Math.random(),
              y: dimensions.height * Math.random(),
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <div
              className={`w-1 h-1 rounded-full ${
                i % 3 === 0 ? "bg-cosmic-blue" : i % 3 === 1 ? "bg-cosmic-purple" : "bg-cosmic-teal"
              } shadow-cosmic-glow`}
            />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Avatar with Cosmic Orb */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative mx-auto w-40 h-40"
          >
            <CosmicOrb size="large" />
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-cosmic-blue via-cosmic-purple to-cosmic-teal p-1">
              <div className="w-full h-full rounded-full bg-cosmic-dark flex items-center justify-center border border-cosmic-blue/30">
                <span className="text-4xl font-bold bg-gradient-to-r from-cosmic-blue to-cosmic-teal bg-clip-text text-transparent">
                  {data.avatar}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Typewriter Title */}
          <div className="space-y-4">
            <TypewriterEffect
              text={data.title}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cosmic-blue via-cosmic-purple to-cosmic-teal bg-clip-text text-transparent"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="text-xl text-cosmic-light/80 max-w-3xl mx-auto leading-relaxed"
            >
              {data.subtitle}
            </motion.p>
          </div>

          {/* Tech Stack Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            {data.techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.5 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Badge className="px-4 py-2 bg-cosmic-blue/20 border border-cosmic-blue/30 text-cosmic-blue hover:bg-cosmic-blue/30 transition-all duration-300 shadow-cosmic-glow-sm">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3 }}>
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="cosmic-button px-8 py-4 text-lg font-semibold"
            >
              {data.ctaText}
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-cosmic-blue/60 animate-pulse" />
        </motion.div>
      </div>
    </section>
  )
}
