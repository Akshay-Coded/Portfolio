"use client"

import { motion } from "framer-motion"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import type { NavigationData } from "@/types/portfolio"

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
  darkMode: boolean
  setDarkMode: (dark: boolean) => void
  data: NavigationData
}

export default function Navigation({ activeSection, setActiveSection, darkMode, setDarkMode, data }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("home")
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight - 100
        setIsScrolled(window.scrollY > heroBottom)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial state

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur-md bg-cosmic-dark/80 border-b border-cosmic-blue/20 transition-all duration-500 ${
        isScrolled ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-cosmic-blue to-cosmic-teal bg-clip-text text-transparent"
          >
            {data.logo}
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {data.links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`capitalize hover:text-cosmic-blue transition-colors relative ${
                  activeSection === link.id ? "text-cosmic-blue" : "text-cosmic-light/80"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cosmic-blue"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <Switch
                checked={darkMode}
                onCheckedChange={setDarkMode}
                className="data-[state=checked]:bg-cosmic-blue"
              />
              <span className="text-sm text-cosmic-light/80">Dark</span>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden cosmic-button-ghost"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 pb-4 border-t border-cosmic-blue/20"
          >
            <div className="flex flex-col space-y-4 pt-4">
              {data.links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`capitalize text-left hover:text-cosmic-blue transition-colors ${
                    activeSection === link.id ? "text-cosmic-blue" : "text-cosmic-light/80"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="flex items-center space-x-2 pt-2">
                <Switch
                  checked={darkMode}
                  onCheckedChange={setDarkMode}
                  className="data-[state=checked]:bg-cosmic-blue"
                />
                <span className="text-sm text-cosmic-light/80">Dark Mode</span>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
