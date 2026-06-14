import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap } from 'lucide-react'

const StickyEnroll = () => {
  const [visible, setVisible] = useState(false)
  const [pastHero, setPastHero] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero')
      const registerSection = document.getElementById('register')
      if (!heroSection || !registerSection) return

      const heroBottom = heroSection.getBoundingClientRect().bottom
      const registerTop = registerSection.getBoundingClientRect().top

      // Show after hero, hide when register is visible
      const isAfterHero = heroBottom < 0
      const isRegisterVisible = registerTop < window.innerHeight

      setPastHero(isAfterHero)
      setVisible(isAfterHero && !isRegisterVisible)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToRegister = () => {
    document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 25 }}
          className="fixed bottom-6 left-4 right-4 z-40 md:hidden"
          role="complementary"
          aria-label="Sticky enroll button"
        >
          <button
            onClick={scrollToRegister}
            aria-label="Enroll now in the AI & Robotics Summer Workshop"
            className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white font-bold text-base py-4 rounded-2xl shadow-2xl shadow-orange-500/40 transition-all duration-200 active:scale-95"
          >
            <Zap className="w-5 h-5" aria-hidden="true" />
            Enroll Now — ₹2,999
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default StickyEnroll
