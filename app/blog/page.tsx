export default function BlogPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="backdrop-blur-lg bg-white/10 dark:bg-black/10 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 dark:border-white/10 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent text-center mb-8">
            Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center">
            Coming soon... This page will feature my latest blog posts and thoughts.
          </p>
        </div>
      </div>
    </div>
  )
}
