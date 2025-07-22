"use client"

import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export function Navigation() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { name: "About", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Resume", href: "/resume" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-lg bg-white/10 dark:bg-black/10 rounded-2xl px-6 py-4 shadow-xl">
        <div className="flex items-center justify-between">
          {/* Navigation Links */}
          <div className="flex space-x-1">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <Button
                  variant="ghost"
                  className={`rounded-xl transition-all duration-300 ${
                    pathname === item.href
                      ? "bg-white/20 dark:bg-white/10 text-gray-900 dark:text-white shadow-md"
                      : "text-gray-700 dark:text-gray-300 hover:bg-white/10 dark:hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-xl backdrop-blur-sm bg-white/20 dark:bg-black/20 hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300 hover:scale-105"
            disabled={!mounted}
          >
            {!mounted ? (
              <div className="w-4 h-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            ) : theme === "dark" ? (
              <Sun className="w-4 h-4 transition-transform duration-300 hover:rotate-12" />
            ) : (
              <Moon className="w-4 h-4 transition-transform duration-300 hover:-rotate-12" />
            )}
          </Button>
        </div>
      </div>
    </nav>
  )
}
