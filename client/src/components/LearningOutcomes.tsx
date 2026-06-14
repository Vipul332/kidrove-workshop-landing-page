import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Brain, Bot, Wrench, Code2, Repeat2, Puzzle } from 'lucide-react'

const outcomes = [
  {
    Icon: Brain,
    title: 'Understand AI Fundamentals',
    description: 'Grasp the core concepts behind Artificial Intelligence and how machines learn from data.',
    color: 'from-indigo-500 to-purple-600',
  },
  {
    Icon: Bot,
    title: 'Learn Robotics Basics',
    description: 'Discover how robots work, from sensors and actuators to logic and control systems.',
    color: 'from-sky-500 to-cyan-600',
  },
  {
    Icon: Wrench,
    title: 'Build Simple AI Projects',
    description: 'Create real mini-projects using beginner-friendly AI tools and visual programming.',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    Icon: Code2,
    title: 'Learn Coding Concepts',
    description: 'Develop logical thinking and foundational programming skills using block and text code.',
    color: 'from-violet-500 to-purple-600',
  },
  {
    Icon: Repeat2,
    title: 'Create Automation Workflows',
    description: 'Design simple automation sequences that make computers do repetitive tasks for you.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    Icon: Puzzle,
    title: 'Improve Problem-Solving',
    description: 'Strengthen analytical and creative thinking through real-world challenge activities.',
    color: 'from-rose-500 to-pink-600',
  },
]

const LearningOutcomes = () => {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section
      id="outcomes"
      ref={ref}
      aria-label="Learning outcomes"
      className="py-20 bg-white dark:bg-slate-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm uppercase tracking-widest">
            What You'll Gain
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2">
            Learning Outcomes
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-xl mx-auto">
            By the end of the 4-week workshop, your child will have developed the following skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {outcomes.map(({ Icon, title, description, color }, idx) => (
            <motion.article
              key={title}
              role="listitem"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.55, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              className="group relative bg-gradient-to-br from-slate-50 to-indigo-50/50 dark:from-slate-800 dark:to-slate-800/50 border border-slate-100 dark:border-slate-700 hover:border-indigo-200 dark:hover:border-indigo-700 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
            >
              {/* Number badge */}
              <div
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-400 dark:text-indigo-500 text-xs font-bold flex items-center justify-center"
                aria-hidden="true"
              >
                {String(idx + 1).padStart(2, '0')}
              </div>

              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon className="w-7 h-7 text-white" aria-hidden="true" />
              </div>

              <h3 className="font-display font-bold text-lg text-slate-800 dark:text-white mb-2 group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors">
                {title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                {description}
              </p>

              {/* Bottom accent line */}
              <div
                className={`absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r ${color} rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                aria-hidden="true"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LearningOutcomes
