import { Github, ExternalLink, Calendar, Star, GitBranch } from "lucide-react"
import Image from "next/image"

export default function ProjectsPage() {
  // Mock projects data
  const projects = [
    {
      id: 1,
      name: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      githubUrl: "https://github.com/alexjohnson/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.vercel.app",
      stars: 124,
      forks: 32,
      lastUpdated: "2024-01-15",
    },
    {
      id: 2,
      name: "Task Management App",
      description:
        "A collaborative task management application built with Next.js and Supabase. Real-time updates, team collaboration, and project tracking.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Next.js", "Supabase", "TypeScript", "Tailwind"],
      githubUrl: "https://github.com/alexjohnson/task-manager",
      liveUrl: "https://taskflow-app.vercel.app",
      stars: 89,
      forks: 21,
      lastUpdated: "2024-01-10",
    },
    {
      id: 3,
      name: "Weather Dashboard",
      description:
        "A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics using OpenWeather API.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API", "CSS3"],
      githubUrl: "https://github.com/alexjohnson/weather-dashboard",
      liveUrl: "https://weather-insights.netlify.app",
      stars: 67,
      forks: 15,
      lastUpdated: "2023-12-28",
    },
    {
      id: 4,
      name: "AI Chat Assistant",
      description:
        "An intelligent chat assistant powered by OpenAI's GPT API. Features conversation memory, custom personalities, and file upload capabilities.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "OpenAI API", "Express", "MongoDB"],
      githubUrl: "https://github.com/alexjohnson/ai-chat-assistant",
      liveUrl: "https://ai-assistant-demo.vercel.app",
      stars: 203,
      forks: 45,
      lastUpdated: "2024-01-20",
    },
    {
      id: 5,
      name: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing projects and skills. Built with modern web technologies and optimized for performance.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Next.js", "Framer Motion", "MDX", "Vercel"],
      githubUrl: "https://github.com/alexjohnson/portfolio",
      liveUrl: "https://alexjohnson.dev",
      stars: 45,
      forks: 12,
      lastUpdated: "2024-01-18",
    },
    {
      id: 6,
      name: "Crypto Tracker",
      description:
        "Real-time cryptocurrency tracking application with price alerts, portfolio management, and market analysis tools.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React Native", "Redux", "CoinGecko API", "Firebase"],
      githubUrl: "https://github.com/alexjohnson/crypto-tracker",
      liveUrl: "https://crypto-tracker-app.vercel.app",
      stars: 156,
      forks: 38,
      lastUpdated: "2024-01-05",
    },
  ]

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent mb-4">
          My Projects
        </h1>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          A collection of projects I've built using various technologies and frameworks. Each project represents a
          unique challenge and learning experience.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="backdrop-blur-2xl bg-white/25 rounded-3xl border border-white/40 shadow-2xl shadow-indigo-200/30 overflow-hidden transform hover:scale-[1.02] transition-all duration-500 hover:shadow-3xl hover:shadow-indigo-300/40"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              {/* Project Header */}
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-slate-800">{project.name}</h3>
                <div className="flex items-center space-x-1 text-slate-500">
                  <Star className="w-4 h-4" />
                  <span className="text-sm">{project.stars}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">{project.description}</p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gradient-to-r from-white/40 to-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-xs font-medium text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Stats */}
              <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <GitBranch className="w-3 h-3" />
                    <span>{project.forks}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(project.lastUpdated).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-slate-950 text-white px-4 py-2 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 text-sm"
                >
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-2 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
