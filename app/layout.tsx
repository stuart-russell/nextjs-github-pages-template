"use client"

import type React from "react"

import { Inter } from "next/font/google"
import Link from "next/link"
import { usePathname } from "next/navigation"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

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
        <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-100 to-pink-200 relative overflow-hidden">
          {/* Enhanced Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/25 to-pink-400/25 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-300/15 to-blue-400/15 rounded-full blur-2xl animate-pulse"
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
