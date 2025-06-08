"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import type { FooterData } from "@/types/portfolio"

interface FooterProps {
  data: FooterData
}

export default function Footer({ data }: FooterProps) {
  return (
    <footer className="py-12 border-t border-cosmic-blue/20 relative">
      {/* Cosmic Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-cosmic-darker to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center md:text-left"
          >
            <p className="text-cosmic-light/70 flex items-center gap-2">
              {data.copyright}
              <Heart className="w-4 h-4 text-cosmic-blue animate-pulse" />
              {data.tech}
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex space-x-6"
          >
            {data.socialLinks.map((social) => (
              <motion.a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-cosmic-light/60 hover:text-cosmic-blue transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Additional Footer Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-8 pt-8 border-t border-cosmic-blue/10 text-center"
        >
          <p className="text-cosmic-light/50 text-sm">{data.tagline}</p>
        </motion.div>
      </div>
    </footer>
  )
}
