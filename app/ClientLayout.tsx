"use client"

import type React from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect } from "react"
import "./globals.css"
import { globalConfig } from "@/lib/globalConfig"

const inter = Inter({ subsets: ["latin"] })

// Configure theme here - change this variable to switch themes
// Options: cosmic, ocean, sunset, forest, monochrome, lavender,
// cherry, neon, autumn, arctic, tropical, rosegold, electric
const SELECTED_THEME: string = globalConfig.site.theme || "cosmic"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  useEffect(() => {
    // Apply the selected theme on mount
    const html = document.documentElement
    if (SELECTED_THEME === "cosmic") {
      html.removeAttribute("data-theme")
    } else {
      html.setAttribute("data-theme", SELECTED_THEME)
    }
  }, [])

  const getNavItemClass = (path: string) => {
    const isActive = pathname === path
    return `font-medium transition-all duration-300 hover:scale-105 relative group ${
      isActive ? "text-slate-900" : "text-slate-700 hover:text-slate-900"
    }`
  }

  const getNavItemUnderlineClass = (path: string) => {
    const isActive = pathname === path
    return `absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 ${
      isActive ? "w-full" : "w-0 group-hover:w-full"
    }`
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen theme-background relative overflow-hidden">
          {/* Enhanced Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 floating-orb-1 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute top-3/4 right-1/4 w-80 h-80 floating-orb-2 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 floating-orb-3 rounded-full blur-2xl animate-pulse"
              style={{ animationDelay: "4s" }}
            ></div>
          </div>

          {/* Navbar */}
          <nav className="backdrop-blur-lg bg-white/20 border-b border-white/30 sticky top-0 z-50 shadow-lg shadow-white/10">
            <div className="max-w-6xl mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  className="text-2xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent"
                >
                  Portfolio
                </Link>

                <div className="flex space-x-8">
                  <Link href="/" className={getNavItemClass("/")}>
                    About
                    <span className={getNavItemUnderlineClass("/")}></span>
                  </Link>
                  <Link href="/projects" className={getNavItemClass("/projects")}>
                    Projects
                    <span className={getNavItemUnderlineClass("/projects")}></span>
                  </Link>
                  <Link href="/blog" className={getNavItemClass("/blog")}>
                    Blog
                    <span className={getNavItemUnderlineClass("/blog")}></span>
                  </Link>
                  <Link href="/resume" className={getNavItemClass("/resume")}>
                    Resume
                    <span className={getNavItemUnderlineClass("/resume")}></span>
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Page Content */}
          {children}
        </div>
      </body>
    </html>
  )
}
