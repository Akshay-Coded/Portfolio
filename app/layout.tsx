import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Akshay - Data Science & AI Engineer",
  description:
    "Portfolio website showcasing expertise in Data Science, Machine Learning, Deep Learning, and AI applications.",
  keywords: "Data Science, Machine Learning, AI, Deep Learning, NLP, Computer Vision, LLM, Python",
  authors: [{ name: "Akshay" }],
  openGraph: {
    title: "Akshay - Data Science & AI Engineer",
    description:
      "Portfolio website showcasing expertise in Data Science, Machine Learning, Deep Learning, and AI applications.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
