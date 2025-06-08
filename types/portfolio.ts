import type { LucideIcon } from "lucide-react"

export interface NavigationLink {
  id: string
  label: string
}

export interface NavigationData {
  logo: string
  links: NavigationLink[]
}

export interface HeroData {
  avatar: string
  title: string
  subtitle: string
  techStack: string[]
  ctaText: string
}

export interface Value {
  key: string
  title: string
  description: string
}

export interface TimelineItem {
  year: string
  title: string
  description: string
}

export interface AboutData {
  title: string
  description: string
  values: Value[]
  timeline: TimelineItem[]
}

export interface Skill {
  name: string
  level: number
  icon: LucideIcon
}

export interface SkillsData {
  title: string
  subtitle: string
  categories: {
    domains: Skill[]
    languages: Skill[]
    frameworks: Skill[]
    tools: Skill[]
  }
}

export interface Project {
  title: string
  description: string
  tech: string[]
  github: string
  demo?: string
  featured: boolean
  icon: LucideIcon
}

export interface ProjectsData {
  title: string
  subtitle: string
  projects: Project[]
}

export interface Certification {
  title: string
  issuer: string
  year: string
  icon: LucideIcon
  credentialUrl?: string
}

export interface Experience {
  title: string
  company: string
  period: string
  description: string
}

export interface ResumeData {
  title: string
  subtitle: string
  downloadText: string
  resumeUrl: string
  certifications: Certification[]
  experience?: Experience[]
}

export interface ContactMethod {
  type: string
  label: string
  value: string
  display: string
  icon: LucideIcon
}

export interface SocialLink {
  platform: string
  url: string
  icon: LucideIcon
}

export interface ContactData {
  title: string
  subtitle: string
  contactMethods: ContactMethod[]
  socialLinks: SocialLink[]
  availability: {
    status: string
    description: string
  }
}

export interface FooterData {
  copyright: string
  tech: string
  socialLinks: SocialLink[]
  tagline: string
}

export interface PortfolioData {
  navigation: NavigationData
  hero: HeroData
  about: AboutData
  skills: SkillsData
  projects: ProjectsData
  resume: ResumeData
  contact: ContactData
  footer: FooterData
}
