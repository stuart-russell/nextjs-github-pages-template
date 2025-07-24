import { Calendar, Clock, Tag, ArrowRight, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
  // Mock blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications with TypeScript",
      excerpt:
        "Learn how to structure large React applications using TypeScript, custom hooks, and modern patterns for maintainable code.",
      content: "Full article content would go here...",
      author: "Alex Johnson",
      publishedAt: "2024-01-20",
      readingTime: "8 min read",
      tags: ["React", "TypeScript", "Architecture"],
      image: "/placeholder.svg?height=200&width=400",
      featured: true,
    },
    {
      id: 2,
      title: "The Future of Web Development: What's Coming in 2024",
      excerpt:
        "Exploring upcoming trends in web development including AI integration, edge computing, and the evolution of JavaScript frameworks.",
      content: "Full article content would go here...",
      author: "Alex Johnson",
      publishedAt: "2024-01-15",
      readingTime: "6 min read",
      tags: ["Web Development", "Trends", "AI"],
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      id: 3,
      title: "Mastering CSS Grid and Flexbox for Modern Layouts",
      excerpt:
        "A comprehensive guide to creating responsive layouts using CSS Grid and Flexbox with practical examples and best practices.",
      content: "Full article content would go here...",
      author: "Alex Johnson",
      publishedAt: "2024-01-10",
      readingTime: "12 min read",
      tags: ["CSS", "Layout", "Responsive Design"],
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      id: 4,
      title: "Database Design Patterns for Modern Applications",
      excerpt:
        "Understanding when to use SQL vs NoSQL databases, normalization strategies, and performance optimization techniques.",
      content: "Full article content would go here...",
      author: "Alex Johnson",
      publishedAt: "2024-01-05",
      readingTime: "10 min read",
      tags: ["Database", "SQL", "NoSQL", "Performance"],
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      id: 5,
      title: "API Security Best Practices for Developers",
      excerpt:
        "Essential security measures every developer should implement when building APIs, including authentication, rate limiting, and data validation.",
      content: "Full article content would go here...",
      author: "Alex Johnson",
      publishedAt: "2023-12-28",
      readingTime: "7 min read",
      tags: ["API", "Security", "Authentication"],
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
    {
      id: 6,
      title: "Getting Started with Server-Side Rendering in Next.js",
      excerpt:
        "A beginner's guide to SSR, SSG, and ISR in Next.js, with examples of when to use each rendering method for optimal performance.",
      content: "Full article content would go here...",
      author: "Alex Johnson",
      publishedAt: "2023-12-20",
      readingTime: "9 min read",
      tags: ["Next.js", "SSR", "Performance"],
      image: "/placeholder.svg?height=200&width=400",
      featured: false,
    },
  ]

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent mb-4">
          Blog
        </h1>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          Thoughts, tutorials, and insights about web development, technology trends, and software engineering best
          practices.
        </p>
      </div>

      {/* Featured Post */}
      {featuredPost && (
        <div className="mb-16">
          <div className="backdrop-blur-2xl bg-white/25 rounded-3xl border border-white/40 shadow-2xl shadow-indigo-200/30 overflow-hidden transform hover:scale-[1.01] transition-all duration-500 hover:shadow-3xl hover:shadow-indigo-300/40">
            <div className="md:flex">
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </span>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center space-x-4 text-sm text-slate-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(featuredPost.publishedAt).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readingTime}</span>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">{featuredPost.title}</h2>
                <p className="text-slate-600 leading-relaxed mb-6">{featuredPost.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center space-x-1 px-3 py-1 bg-gradient-to-r from-white/40 to-white/20 backdrop-blur-sm border border-white/30 rounded-full text-xs font-medium text-slate-700"
                    >
                      <Tag className="w-3 h-3" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
                <Link
                  href={`/blog/${featuredPost.id}`}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-slate-950 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Regular Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {regularPosts.map((post, index) => (
          <article
            key={post.id}
            className="backdrop-blur-2xl bg-white/25 rounded-3xl border border-white/40 shadow-2xl shadow-indigo-200/30 overflow-hidden transform hover:scale-[1.02] transition-all duration-500 hover:shadow-3xl hover:shadow-indigo-300/40"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            {/* Post Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Post Content */}
            <div className="p-6">
              {/* Post Meta */}
              <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-3 h-3" />
                  <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{post.readingTime}</span>
                </div>
              </div>

              {/* Post Title */}
              <h3 className="text-lg font-bold text-slate-800 mb-3 line-clamp-2">{post.title}</h3>

              {/* Post Excerpt */}
              <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gradient-to-r from-white/40 to-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-xs font-medium text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
                {post.tags.length > 3 && (
                  <span className="px-2 py-1 bg-gradient-to-r from-white/40 to-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-xs font-medium text-slate-500">
                    +{post.tags.length - 3}
                  </span>
                )}
              </div>

              {/* Read More Button */}
              <Link
                href={`/blog/${post.id}`}
                className="inline-flex items-center space-x-2 text-slate-700 hover:text-slate-900 font-medium transition-all duration-300 group"
              >
                <span>Read More</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
