import { motion } from 'framer-motion'
import { Bot, Home, Search } from 'lucide-react'

const NotFound = () => {
  return (
    <main
      className="min-h-screen bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-900 flex items-center justify-center px-4"
      role="main"
      aria-label="Page not found"
    >
      <div className="text-center max-w-md">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="w-24 h-24 bg-indigo-700/50 rounded-3xl flex items-center justify-center mx-auto mb-8"
        >
          <Bot className="w-12 h-12 text-indigo-300" aria-hidden="true" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-2">
            Error 404
          </p>
          <h1 className="font-display font-extrabold text-5xl text-white mb-4">
            Lost in Space!
          </h1>
          <p className="text-indigo-300 text-lg leading-relaxed mb-10">
            Our robot searched everywhere but couldn't find this page. It might have been moved or deleted.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white font-bold px-8 py-3.5 rounded-2xl shadow-lg transition-all duration-200 hover:scale-105"
              aria-label="Go back to homepage"
            >
              <Home className="w-5 h-5" aria-hidden="true" />
              Back to Home
            </a>
            <a
              href="/#register"
              className="inline-flex items-center justify-center gap-2 border-2 border-indigo-400/50 hover:border-indigo-300 text-indigo-200 hover:text-white font-semibold px-8 py-3.5 rounded-2xl transition-all duration-200"
              aria-label="Go to enrollment section"
            >
              <Search className="w-5 h-5" aria-hidden="true" />
              Enroll Now
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  )
}

export default NotFound
