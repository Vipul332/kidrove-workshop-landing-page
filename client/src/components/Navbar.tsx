import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { label: 'About', id: 'details' },
  { label: 'Curriculum', id: 'curriculum' },
  { label: 'Mentors', id: 'mentors' },
  { label: 'Why Us', id: 'why-us' },
  { label: 'FAQ', id: 'faq' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg shadow-indigo-100/50 dark:shadow-slate-900/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-2 cursor-pointer group"
            aria-label="AIBot Camp — scroll to top"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md group-hover:shadow-indigo-300 transition-shadow">
              <Bot className="w-5 h-5 text-white" aria-hidden="true" />
            </div>
            <span className="font-display font-bold text-lg text-slate-800 dark:text-white">
              AI<span className="text-indigo-600 dark:text-indigo-400">Bot</span> Camp
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {link.label}
              </button>
            ))}

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4" aria-hidden="true" />
              ) : (
                <Sun className="w-4 h-4" aria-hidden="true" />
              )}
            </button>

            <button
              onClick={() => scrollTo('register')}
              className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 shadow-md hover:shadow-indigo-200 hover:shadow-lg"
              aria-label="Enroll now for the workshop"
            >
              Enroll Now
            </button>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4" aria-hidden="true" />
              ) : (
                <Sun className="w-4 h-4" aria-hidden="true" />
              )}
            </button>
            <button
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-800 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-menu"
              role="menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-white dark:bg-slate-900 border-t border-indigo-100 dark:border-slate-800 py-4 px-2 space-y-1 overflow-hidden"
            >
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  role="menuitem"
                  onClick={() => scrollTo(link.id)}
                  className="block w-full text-left px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2 px-2">
                <button
                  role="menuitem"
                  onClick={() => scrollTo('register')}
                  className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-3 rounded-full transition-colors"
                >
                  Enroll Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
