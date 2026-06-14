import { motion } from 'framer-motion'
import { Backpack, Trophy, Users, CalendarDays, Zap, Star } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay },
  }),
}

const FloatingCard = ({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode
  className: string
  delay?: number
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5, type: 'spring', stiffness: 200 }}
    style={{ animation: `float ${4 + delay}s ease-in-out infinite` }}
    className={`absolute glass rounded-2xl px-4 py-2.5 shadow-xl flex items-center gap-2 ${className}`}
  >
    {children}
  </motion.div>
)

const Hero = () => {
  const scrollToRegister = () => {
    document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      aria-label="Hero section"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-900"
    >
      {/* Ambient background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-purple-500/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-indigo-400/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-3xl -translate-y-1/2" />
        {/* Dot grid */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-indigo-300/20 rounded-full"
            style={{
              top: `${(i * 37) % 100}%`,
              left: `${(i * 53) % 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="text-center lg:text-left">
            {/* Live badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 bg-indigo-800/60 border border-indigo-500/40 text-indigo-200 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true" />
              Enrollments Open · July 2026
            </motion.div>

            <motion.h1
              custom={0.1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] mb-5"
            >
              AI &amp; Robotics{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                Summer
              </span>{' '}
              Workshop
            </motion.h1>

            <motion.p
              custom={0.2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-indigo-200 text-lg sm:text-xl leading-relaxed mb-4 max-w-xl mx-auto lg:mx-0"
            >
              Explore Artificial Intelligence, Robotics, Coding, and Automation through exciting
              hands-on projects — designed specifically for young innovators.
            </motion.p>

            <motion.div
              custom={0.3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 text-amber-300 font-semibold text-base mb-8"
            >
              <Backpack className="w-5 h-5" aria-hidden="true" />
              <span>For Ages 8–14 Years</span>
            </motion.div>

            <motion.div
              custom={0.4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={scrollToRegister}
                aria-label="Enroll now in the AI & Robotics Summer Workshop"
                className="group relative bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-xl shadow-orange-500/30 transition-all duration-300 hover:scale-105 hover:shadow-orange-500/50"
              >
                <span className="relative z-10">Enroll Now — ₹2,999 →</span>
              </button>

              <button
                onClick={() => document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' })}
                aria-label="Learn more about the workshop"
                className="border-2 border-indigo-400/50 hover:border-indigo-300 text-indigo-200 hover:text-white font-semibold text-base px-8 py-4 rounded-2xl transition-all duration-200 backdrop-blur-sm hover:bg-indigo-800/40"
              >
                Learn More
              </button>
            </motion.div>

            {/* Social proof stars */}
            <motion.div
              custom={0.55}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-8 flex items-center gap-3 justify-center lg:justify-start"
            >
              <div className="flex" aria-label="4.8 out of 5 star rating">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className={`w-4 h-4 ${s <= 4 ? 'text-amber-400 fill-amber-400' : 'text-amber-300 fill-amber-300'}`}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <span className="text-indigo-300 text-sm">
                <strong className="text-white">4.8/5</strong> · Trusted by 1,000+ families
              </span>
            </motion.div>
          </div>

          {/* Right: Illustration with floating cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-80 h-80 sm:w-[400px] sm:h-[400px]">
              {/* Animated robot illustration */}
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <svg
                  viewBox="0 0 400 400"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full drop-shadow-2xl"
                  role="img"
                  aria-label="AI robot illustration"
                >
                  {/* Background glow circle */}
                  <circle cx="200" cy="200" r="175" fill="url(#bgGrad)" opacity="0.12" />

                  {/* Orbit rings */}
                  <ellipse cx="200" cy="200" rx="155" ry="55" fill="none" stroke="#818cf8" strokeWidth="1.5" strokeDasharray="8 5" opacity="0.5" />
                  <ellipse cx="200" cy="200" rx="55" ry="155" fill="none" stroke="#c084fc" strokeWidth="1.5" strokeDasharray="8 5" opacity="0.5" />

                  {/* Orbiting dots */}
                  <circle cx="355" cy="200" r="7" fill="#f97316" opacity="0.9" />
                  <circle cx="200" cy="45" r="7" fill="#8b5cf6" opacity="0.9" />

                  {/* Robot body */}
                  <rect x="128" y="158" width="144" height="122" rx="22" fill="#3730a3" />
                  <rect x="138" y="168" width="124" height="102" rx="16" fill="#4f46e5" />

                  {/* Robot screen/face */}
                  <rect x="153" y="178" width="94" height="58" rx="12" fill="#1e1b4b" />
                  {/* Eyes with glow */}
                  <circle cx="178" cy="204" r="11" fill="#4338ca" />
                  <circle cx="222" cy="204" r="11" fill="#4338ca" />
                  <circle cx="178" cy="204" r="6" fill="#818cf8" />
                  <circle cx="222" cy="204" r="6" fill="#818cf8" />
                  <circle cx="175" cy="201" r="2.5" fill="white" opacity="0.9" />
                  <circle cx="219" cy="201" r="2.5" fill="white" opacity="0.9" />
                  {/* Smile */}
                  <path d="M178 228 Q200 242 222 228" stroke="#818cf8" strokeWidth="3.5" fill="none" strokeLinecap="round" />

                  {/* Head */}
                  <rect x="143" y="108" width="114" height="62" rx="20" fill="#3730a3" />
                  <rect x="153" y="116" width="94" height="46" rx="14" fill="#4f46e5" />

                  {/* Antenna */}
                  <line x1="200" y1="108" x2="200" y2="82" stroke="#a5b4fc" strokeWidth="3.5" strokeLinecap="round" />
                  <circle cx="200" cy="76" r="9" fill="#f97316" />
                  <circle cx="200" cy="76" r="5" fill="#fed7aa" />

                  {/* Ears */}
                  <rect x="116" y="118" width="27" height="42" rx="9" fill="#312e81" />
                  <rect x="257" y="118" width="27" height="42" rx="9" fill="#312e81" />

                  {/* Arms */}
                  <rect x="88" y="166" width="42" height="26" rx="13" fill="#3730a3" />
                  <rect x="270" y="166" width="42" height="26" rx="13" fill="#3730a3" />
                  {/* Hands */}
                  <circle cx="80" cy="179" r="15" fill="#312e81" />
                  <circle cx="320" cy="179" r="15" fill="#312e81" />

                  {/* Legs */}
                  <rect x="153" y="280" width="37" height="56" rx="13" fill="#3730a3" />
                  <rect x="210" y="280" width="37" height="56" rx="13" fill="#3730a3" />
                  {/* Feet */}
                  <rect x="146" y="328" width="52" height="18" rx="9" fill="#312e81" />
                  <rect x="202" y="328" width="52" height="18" rx="9" fill="#312e81" />

                  {/* Chest indicator */}
                  <rect x="183" y="250" width="34" height="22" rx="6" fill="#312e81" />
                  <circle cx="200" cy="261" r="6" fill="#6366f1" />

                  <defs>
                    <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#818cf8" />
                      <stop offset="100%" stopColor="#4338ca" />
                    </radialGradient>
                  </defs>
                </svg>
              </motion.div>

              {/* Floating info cards */}
              <FloatingCard className="-top-6 -left-6 text-white text-xs font-semibold" delay={0.6}>
                <Trophy className="w-4 h-4 text-amber-400" aria-hidden="true" />
                <span>Certificate on Completion</span>
              </FloatingCard>

              <FloatingCard className="-bottom-6 -right-6 bg-amber-400/90 text-white text-xs font-bold" delay={0.8}>
                <Zap className="w-4 h-4" aria-hidden="true" />
                <span>₹2,999 Only!</span>
              </FloatingCard>

              <FloatingCard className="top-1/3 -right-10 text-white text-xs font-semibold hidden sm:flex" delay={1.0}>
                <Users className="w-4 h-4 text-green-400" aria-hidden="true" />
                <span>Max 20 Students</span>
              </FloatingCard>

              <FloatingCard className="-bottom-2 left-0 text-white text-xs font-semibold hidden sm:flex" delay={1.2}>
                <CalendarDays className="w-4 h-4 text-purple-300" aria-hidden="true" />
                <span>Starts 15 Jul 2026</span>
              </FloatingCard>
            </div>
          </motion.div>
        </div>

        {/* Bottom stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-indigo-700/50 pt-10"
          role="list"
          aria-label="Workshop key details"
        >
          {[
            { value: '4 Weeks', label: 'Duration' },
            { value: 'Live Online', label: 'Mode' },
            { value: 'Ages 8–14', label: 'Target Group' },
            { value: '15 Jul', label: 'Start Date' },
          ].map((stat) => (
            <div key={stat.label} className="text-center" role="listitem">
              <div className="font-display font-extrabold text-2xl text-white">{stat.value}</div>
              <div className="text-indigo-400 text-sm mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
