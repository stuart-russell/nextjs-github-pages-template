import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, MessageCircle, Mail, Phone } from "lucide-react"
import Link from "next/link"
import { FULLNAME, INITIALS, TITLE } from "./config"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Main Card */}
        <div className="backdrop-blur-lg bg-white/10 dark:bg-black/10 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 dark:border-white/10 animate-fade-in">
          {/* Avatar */}
          <div className="flex justify-center mb-8 animate-float">
            <Avatar className="w-32 h-32 md:w-40 md:h-40 ring-4 ring-white/30 dark:ring-white/20 shadow-xl">
              <AvatarImage src="/placeholder.svg?height=160&width=160" alt="Profile" />
              <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                {`${INITIALS}`}
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Name and Title */}
          <div className="text-center mb-8 space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent animate-slide-up">
              {`${FULLNAME}`}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium animate-slide-up-delay">
              {`${TITLE}`}
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 mb-8 animate-slide-up-delay-2">
            <div className="flex items-center justify-center space-x-2 text-gray-700 dark:text-gray-300">
              <Mail className="w-5 h-5" />
              <span>john.doe@example.com</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-700 dark:text-gray-300">
              <Phone className="w-5 h-5" />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-slide-up-delay-3">
            <Link href="https://github.com" target="_blank">
              <Button
                variant="ghost"
                size="lg"
                className="rounded-full backdrop-blur-sm bg-white/20 dark:bg-black/20 hover:bg-white/30 dark:hover:bg-black/30 border border-white/30 dark:border-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Github className="w-6 h-6" />
              </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <Button
                variant="ghost"
                size="lg"
                className="rounded-full backdrop-blur-sm bg-white/20 dark:bg-black/20 hover:bg-white/30 dark:hover:bg-black/30 border border-white/30 dark:border-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Linkedin className="w-6 h-6" />
              </Button>
            </Link>
            <Link href="https://signal.org" target="_blank">
              <Button
                variant="ghost"
                size="lg"
                className="rounded-full backdrop-blur-sm bg-white/20 dark:bg-black/20 hover:bg-white/30 dark:hover:bg-black/30 border border-white/30 dark:border-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <MessageCircle className="w-6 h-6" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
