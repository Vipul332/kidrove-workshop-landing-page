import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Star, Award, ThumbsUp } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: '1,000+',
    label: 'Students Trained',
    color: 'from-indigo-500 to-purple-600',
    bg: 'bg-indigo-50 dark:bg-indigo-950/50',
  },
  {
    icon: Star,
    value: '4.8/5',
    label: 'Parent Rating',
    color: 'from-amber-500 to-orange-500',
    bg: 'bg-amber-50 dark:bg-amber-950/50',
  },
  {
    icon: Award,
    value: '50+',
    label: 'Successful Workshops',
    color: 'from-emerald-500 to-teal-600',
    bg: 'bg-emerald-50 dark:bg-emerald-950/50',
  },
  {
    icon: ThumbsUp,
    value: '95%',
    label: 'Student Satisfaction',
    color: 'from-rose-500 to-pink-600',
    bg: 'bg-rose-50 dark:bg-rose-950/50',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

const Statistics = () => {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section
      ref={ref}
      aria-label="Workshop statistics"
      className="py-20 bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-900 relative overflow-hidden"
    >
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-widest">
            Our Impact
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-2">
            Numbers That Speak for Themselves
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5"
          role="list"
          aria-label="Key statistics"
        >
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                variants={item}
                role="listitem"
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white/8 backdrop-blur border border-white/10 rounded-2xl p-6 text-center hover:border-white/25 transition-colors"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}
                >
                  <Icon className="w-7 h-7 text-white" aria-hidden="true" />
                </div>
                <div className="font-display font-extrabold text-3xl text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-indigo-300 text-sm">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Statistics
