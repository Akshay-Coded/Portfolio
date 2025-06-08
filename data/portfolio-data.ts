import { Brain, Code, Database, Cpu, Eye, MessageSquare, Zap, Github, Linkedin, Mail, MapPin } from "lucide-react"
import type { PortfolioData } from "@/types/portfolio"

export const portfolioData: PortfolioData = {
  navigation: {
    logo: "Akshay",
    links: [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },
      { id: "resume", label: "Resume" },
      { id: "contact", label: "Contact" },
    ],
  },

  hero: {
    avatar: "A",
    title: "Akshay: Data Scientist & AI Engineer!",
    subtitle:
      "Driven to design powerful Machine Learning and Deep Learning solutions that tackle real-world challenges. Mastering data science to extract actionable insights from complex datasets, I venture through the data galaxy to uncover transformative discoveries and forge a smarter tomorrow!",
    techStack: ["AI", "ML", "DL", "NLP", "CV", "LLM", "RAG", "Python"],
    ctaText: "Explore My Universe",
  },

  about: {
    title: "About Me",
    description:
      "I'm a passionate Data Scientist and AI Engineer with a strong foundation in machine learning, deep learning, and artificial intelligence.I am also adept in data science and data analysis. My journey spans from traditional ML algorithms to cutting-edge LLM applications and agentic AI systems, always pushing the boundaries of what's possible.",
    values: [
      {
        key: "curiosity",
        title: "Curiosity",
        description: "Always learning and exploring new technologies, staying at the forefront of AI innovation.",
      },
      {
        key: "precision",
        title: "Precision",
        description: "Attention to detail in model development, ensuring robust and reliable AI solutions.",
      },
      {
        key: "impact",
        title: "Impact",
        description: "Building solutions that make a meaningful difference in the world through technology.",
      },
    ],
    timeline: [
      {
        year: "2020",
        title: "Started Computer Science Journey",
        description: "Began exploring programming and data science fundamentals, discovering my passion for AI.",
      },
      {
        year: "2021",
        title: "MIT Python Certification",
        description: "Completed Introduction to Computer Science and Programming, building strong foundations.",
      },
      {
        year: "2023",
        title: "IBM Data Science Certificate",
        description: "Mastered data analysis, visualization, and machine learning techniques.",
      },
      {
        year: "2024",
        title: "ML Specialization",
        description: "Advanced machine learning techniques with DeepLearning.AI, diving deep into neural networks.",
      },
      {
        year: "2025",
        title: "Deep Learning & LLM Expert",
        description: "TensorFlow bootcamp and LLM applications, specializing in generative AI and RAG systems.",
      },
    ],
  },

  skills: {
    title: "Skills & Expertise",
    subtitle: "A comprehensive toolkit for modern AI and data science challenges",
    categories: {
      domains: [
        { name: "Artificial Intelligence", level: 90, icon: Brain },
        { name: "Machine Learning", level: 95, icon: Cpu },
        { name: "Deep Learning", level: 85, icon: Zap },
        { name: "Natural Language Processing", level: 80, icon: MessageSquare },
        { name: "Computer Vision", level: 75, icon: Eye },
        { name: "LLM Applications", level: 85, icon: Brain },
        { name: "Retrieval-Augmented Generation", level: 80, icon: Database },
        { name: "Agentic AI Systems", level: 75, icon: Cpu },
        { name: "Data Science", level: 80, icon: Database },
        { name: "Data Analysis", level: 90, icon: Database },
        { name: "Data Visualization", level: 90, icon: Eye },
        { name: "Data Engineering", level: 80, icon: Database },
      ],
      languages: [
        { name: "Python", level: 95, icon: Code },
        { name: "Java", level: 80, icon: Code },
        { name: "JavaScript", level: 80, icon: Code },
        { name: "R", level: 70, icon: Code },
        { name: "C++", level: 70, icon: Code },
        { name: "C", level: 65, icon: Code },
      ],
      frameworks: [
        { name: "TensorFlow", level: 90, icon: Brain },
        { name: "PyTorch", level: 85, icon: Brain },
        { name: "scikit-learn", level: 95, icon: Database },
        { name: "LangChain", level: 80, icon: Brain },
        { name: "HuggingFace Transformers", level: 85, icon: Brain },
        { name: "OpenCV", level: 75, icon: Eye },
        { name: "React.js", level: 75, icon: Code },
        { name: "Node.js", level: 70, icon: Code },
        { name: "Apache Spark", level: 70, icon: Database },
      ],
      tools: [
        { name: "Jupyter Notebook", level: 95, icon: Code },
        { name: "VS Code", level: 90, icon: Code },
        { name: "Git & GitHub", level: 85, icon: Database },
        { name: "Docker", level: 70, icon: Cpu },
        { name: "AWS", level: 70, icon: Database },
        { name: "Tableau", level: 75, icon: Eye },
        { name: "MongoDB", level: 75, icon: Database },
        { name: "MySQL", level: 75, icon: Database },
      ],
    },
  },

  projects: {
    title: "Featured Projects",
    subtitle: "Showcasing practical applications of AI and machine learning in the cosmic realm of data",
    projects: [
      {
        title: "Anatomical_GPT",
        description:
          "An advanced AI-powered chatbot that answers anatomy-related questions using state-of-the-art LLM architecture with Retrieval-Augmented Generation (RAG). Features intelligent context understanding and medical knowledge integration.",
        tech: ["Python", "LangChain", "OpenAI GPT", "RAG", "Vector DB", "FastAPI"],
        github: "https://github.com/akshay/anatomical-gpt",
        featured: true,
        icon: Brain,
      },
      {
        title: "AI Job Fit Evaluator",
        description:
          "The AI Job Fit Evaluator is a Streamlit application that analyzes resumes against job descriptions to provide insights on job fit, key strengths, potential gaps, and hiring recommendations.",
        tech: ["Python", "LLM", "RAG", "Web Scraping", "Streamlit"],
        github: "https://github.com/Akshay-Coded/Resume-Analyzer",
        icon: Eye,
      },
      {
        title: "EPL 2024/25 Player Statistics",
        description:
          "A Python-based analytics on Premier League 2024/25 player statistics to provide insights on player performance, team dynamics, and trends in the league.",
        tech: ["Python", "Data Analytics", "Data Engineering", "Data Visualization"],
        github: "https://github.com/Akshay-Coded/Premier-League-Data-Analysis",
        icon: Zap,
      },
      {
        title: "Movie recommendation system",
        description:
          "An AI model that recommends movies based on a movie u have watched. It is done via matching the cast, plot and genre etc. and recommend similar movies to those.",
        tech: ["NLP","Artificial Intelligence", "Streamlit","Python"],
        github: "https://github.com/Akshay-Coded/Movie-recommendation-system",
        icon: Code,
      },
      {
        title: "Bengaluru House Price Prediction",
        description:
          "This project aims to predict house prices in Bengaluru using various features. The objective is to build a predictive model that can provide accurate price estimates for houses in Bengaluru.",
        tech: ["Data Engineering", "Data Analytics", "ML", "Python","Sci-kit learn"],
        github: "https://github.com/Akshay-Coded/Bangalore-house-data-prediction",
        icon: Code,
      },
    ],
  },

  resume: {
    title: "Resume & Certifications",
    subtitle: "Professional qualifications and continuous learning journey in the AI cosmos",
    downloadText: "Download Resume",
    resumeUrl: "/resume-akshay-ai-engineer.pdf",
    certifications: [
      {
        title: "Introduction to Computer Science and Programming using Python",
        issuer: "MITx",
        year: "2021",
        icon: Code,
        credentialUrl: "https://courses.edx.org/certificates/a76b05ef74654aff8b248620f3d64839",
      },
      {
        title: "IBM Data Science Professional Certificate",
        issuer: "Coursera | IBM",
        year: "2023",
        icon: Database,
        credentialUrl: "https://coursera.org/verify/professional-cert/KEKZLTDZCHJD",
      },
      {
        title: "Machine Learning Specialization",
        issuer: "DeepLearning.AI",
        year: "2024",
        icon: Brain,
        credentialUrl: "https://coursera.org/verify/specialization/PDITV84UDM16",
      },
      {
        title: "TensorFlow for Deep Learning Bootcamp",
        issuer: "Udemy | ZTM",
        year: "2025",
        icon: Zap,
        credentialUrl: "http://ude.my/UC-af201dd5-b358-47fa-8ab4-451d92537f32",
      },
    ],
    experience: [
      {
        title: "ML Research Summer Intern",
        company: "IIT - Madras",
        period: "2025 - Present",
        description:
          "Designed and implemented scalable data pipelines and using Apache Spark and Hadoop to process large-scale datasets.Developed and deployed machine learning models with Python (scikit-learn, TensorFlow), achieving 15% improved prediction accuracy and optimizing operational efficiency.",
      },
      {
        title: "AI intern",
        company: "Voxvertex",
        period: "2024 - 2025",
        description:
          "Delivered end-to-end and Fine-tuned LLMs to decrease hallucination and improve operational efficiency.",
      },
    ],
  },

  contact: {
    title: "Get In Touch",
    subtitle:
      "Let's connect and explore the infinite possibilities of AI together. Ready to build something extraordinary?",
    contactMethods: [
      {
        type: "email",
        label: "Email",
        value: "rajinikanthakshay321@gmail.com",
        display: "rajinikanthakshay321@gmail.com",
        icon: Mail,
      },
      {
        type: "linkedin",
        label: "LinkedIn",
        value: "https://www.linkedin.com/in/akshay-rajinikanth-ai-ds-dev",
        display: "Connect professionally",
        icon: Linkedin,
      },
      {
        type: "github",
        label: "GitHub",
        value: "https://github.com/Akshay-Coded",
        display: "View my code",
        icon: Github,
      },
      {
        type: "location",
        label: "Location",
        value: "Vellore, Tamil Nadu, India",
        display: "Vellore, Tamil Nadu, India",
        icon: MapPin,
      },
    ],
    socialLinks: [
      {
        platform: "github",
        url: "https://github.com/Akshay-Coded",
        icon: Github,
      },
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/akshay-rajinikanth-ai-ds-dev",
        icon: Linkedin,
      },
      {
        platform: "email",
        url: "mrajinikanthakshay321@gmail.com",
        icon: Mail,
      },
    ],
    availability: {
      status: "Open to Opportunities",
      description:
        "I'm currently open to full-time positions, research collaborations, and exciting freelance projects in AI, ML, and Data Science. Let's build the future together!",
    },
  },

  footer: {
    copyright: "© 2025 Akshay. Crafted with",
    tech: "React, Next.js, and Cosmic Energy.",
    socialLinks: [
      {
        platform: "github",
        url: "https://github.com/Akshay-Coded",
        icon: Github,
      },
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/akshay-rajinikanth-ai-ds-dev",
        icon: Linkedin,
      },
      {
        platform: "email",
        url: "rajinikanthakshay321@gmail.com",
        icon: Mail,
      },
    ],
    tagline: "Exploring the infinite cosmos of artificial intelligence, one algorithm at a time.",
  },
}
