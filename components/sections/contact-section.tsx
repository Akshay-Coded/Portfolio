"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import CosmicCard from "@/components/ui/cosmic-card"
import type { ContactData } from "@/types/portfolio"

interface ContactSectionProps {
  data: ContactData
}

export default function ContactSection({ data }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 relative">
      {/* Cosmic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cosmic-deep/20 to-transparent"></div>

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

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <CosmicCard className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-cosmic-light">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-cosmic-light/80">Name</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="cosmic-input"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-cosmic-light/80">Email</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="cosmic-input"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-cosmic-light/80">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows={5}
                    className="cosmic-input resize-none"
                    required
                  />
                </div>
                <Button type="submit" className="w-full cosmic-button">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CosmicCard>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-cosmic-light">Connect With Me</h3>
              <div className="space-y-4">
                {data.contactMethods.map((method, index) => (
                  <motion.a
                    key={method.type}
                    href={method.value.startsWith("http") ? method.value : `mailto:${method.value}`}
                    target={method.value.startsWith("http") ? "_blank" : undefined}
                    rel={method.value.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="block"
                  >
                    <CosmicCard className="p-6 group hover:border-cosmic-blue/50 transition-all duration-300">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-cosmic-blue/20 border border-cosmic-blue/30 group-hover:border-cosmic-blue/50 transition-colors">
                          <method.icon className="w-6 h-6 text-cosmic-blue" />
                        </div>
                        <div>
                          <p className="font-semibold text-cosmic-light group-hover:text-cosmic-blue transition-colors">
                            {method.label}
                          </p>
                          <p className="text-cosmic-light/70">{method.display}</p>
                        </div>
                      </div>
                    </CosmicCard>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <CosmicCard className="p-6 bg-gradient-to-br from-cosmic-blue/10 to-cosmic-teal/10 border-cosmic-blue/30">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-cosmic-teal mt-2 animate-pulse"></div>
                  <div>
                    <h4 className="font-semibold text-cosmic-light mb-2">{data.availability.status}</h4>
                    <p className="text-cosmic-light/80 text-sm leading-relaxed">{data.availability.description}</p>
                  </div>
                </div>
              </CosmicCard>
            </motion.div>

            {/* Social Links */}
            <div className="flex justify-center gap-4">
              {data.socialLinks.map((social) => (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-cosmic-blue/20 border border-cosmic-blue/30 hover:border-cosmic-blue/50 hover:bg-cosmic-blue/30 transition-all duration-300"
                >
                  <social.icon className="w-6 h-6 text-cosmic-blue" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
