import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "John Doe - Portfolio",
  description: "Full Stack Developer Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-100/80 dark:from-slate-900 dark:via-purple-900/20 dark:to-indigo-950/40 relative overflow-hidden transition-colors duration-500">
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-50/30 via-transparent to-cyan-50/20 dark:from-purple-900/10 dark:via-transparent dark:to-blue-900/10"></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-blue-200/20 to-transparent dark:from-blue-500/5 dark:to-transparent rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-radial from-purple-200/20 to-transparent dark:from-purple-500/5 dark:to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-transparent via-indigo-100/10 to-transparent dark:via-indigo-400/5 rounded-full blur-2xl animate-spin-slow"></div>

            <Navigation />
            <main className="pt-20 relative z-10">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
