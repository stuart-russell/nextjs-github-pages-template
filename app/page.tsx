import { Github, MapPin, Users, Building2, Mail, MessageCircle } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  // Mock GitHub profile data
  const profileData = {
    avatar: "/placeholder.svg?height=120&width=120",
    name: "Alex Johnson",
    username: "alexjohnson",
    bio: "Full-stack developer passionate about creating beautiful, functional web experiences. Always learning, always building.",
    location: "San Francisco, CA",
    company: "Tech Innovations Inc.",
    followers: 1247,
    following: 892,
    contacts: [
      { icon: Mail, label: "Email", href: "mailto:alex@example.com" },
      { icon: MessageCircle, label: "Signal", href: "https://signal.me/#eu/your-signal-link" },
    ],
  }

  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-80px)] p-6">
      <div className="w-full max-w-md">
        {/* Profile Card */}
        <div className="backdrop-blur-2xl bg-white/25 rounded-3xl border border-white/40 shadow-2xl shadow-indigo-200/30 p-8 transform hover:scale-[1.02] transition-all duration-500 hover:shadow-3xl hover:shadow-indigo-300/40">
          {/* Profile Header */}
          <div className="text-center mb-6">
            <div className="relative inline-block mb-4">
              <Image
                src={profileData.avatar || "/placeholder.svg"}
                alt={profileData.name}
                width={120}
                height={120}
                className="rounded-full border-4 border-white/50 shadow-lg"
              />
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full p-2 border-2 border-white shadow-lg">
                <Github className="w-4 h-4 text-white" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-slate-800 mb-1">{profileData.name}</h1>
            <p className="text-slate-600 text-sm">@{profileData.username}</p>
          </div>

          {/* Bio */}
          <div className="mb-6">
            <p className="text-slate-700 text-sm leading-relaxed text-center">{profileData.bio}</p>
          </div>

          {/* Stats */}
          <div className="flex justify-center space-x-8 mb-6">
            <div className="text-center group cursor-pointer">
              <div className="flex items-center justify-center space-x-1 text-slate-600 group-hover:text-slate-800 transition-colors duration-200">
                <Users className="w-4 h-4" />
                <span className="font-semibold">{profileData.followers.toLocaleString()}</span>
              </div>
              <p className="text-xs text-slate-500 mt-1">Followers</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="flex items-center justify-center space-x-1 text-slate-600 group-hover:text-slate-800 transition-colors duration-200">
                <Users className="w-4 h-4" />
                <span className="font-semibold">{profileData.following.toLocaleString()}</span>
              </div>
              <p className="text-xs text-slate-500 mt-1">Following</p>
            </div>
          </div>

          {/* Location & Company */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-center space-x-2 text-slate-600">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{profileData.location}</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-slate-600">
              <Building2 className="w-4 h-4" />
              <span className="text-sm">{profileData.company}</span>
            </div>
          </div>

          {/* Contact */}
          <div className="border-t border-white/30 pt-6">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Mail className="w-4 h-4 text-blue-500" />
              <h3 className="text-sm font-semibold text-slate-700">Contact</h3>
            </div>
            <div className="flex justify-center space-x-6">
              {profileData.contacts.map((contact, index) => {
                const IconComponent = contact.icon
                return (
                  <a
                    key={contact.label}
                    href={contact.href}
                    className="group relative cursor-pointer"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <div className="w-14 h-14 bg-gradient-to-r from-white/40 to-white/20 backdrop-blur-sm border border-white/30 rounded-xl flex items-center justify-center transform hover:scale-110 transition-all duration-300 hover:shadow-lg hover:bg-white/50">
                      <IconComponent className="w-6 h-6 text-slate-600 group-hover:text-slate-800 transition-colors duration-200" />
                    </div>
                    {/* Tooltip */}
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                      {contact.label}
                    </div>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-8 text-center">
            <button className="bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-slate-950 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-slate-300/50">
              View GitHub Profile
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
