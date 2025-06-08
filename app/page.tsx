"use client"

import { useState, useEffect } from "react"
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import SkillsSection from "@/components/sections/skills-section"
import ProjectsSection from "@/components/sections/projects-section"
import ResumeSection from "@/components/sections/resume-section"
import ContactSection from "@/components/sections/contact-section"
import Navigation from "@/components/layout/navigation"
import Footer from "@/components/layout/footer"
import StarField from "@/components/ui/star-field"
import { portfolioData } from "@/data/portfolio-data"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "resume", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-cosmic-dark text-cosmic-light relative overflow-x-hidden">
      {/* Cosmic Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-cosmic-dark via-cosmic-deep to-cosmic-darker"></div>
        <StarField />
        <div className="absolute inset-0 bg-gradient-to-r from-cosmic-purple/10 via-transparent to-cosmic-blue/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          data={portfolioData.navigation}
        />

        <HeroSection data={portfolioData.hero} />
        <AboutSection data={portfolioData.about} />
        <SkillsSection data={portfolioData.skills} />
        <ProjectsSection data={portfolioData.projects} />
        <ResumeSection data={portfolioData.resume} />
        <ContactSection data={portfolioData.contact} />
        <Footer data={portfolioData.footer} />
      </div>
    </div>
  )
}
