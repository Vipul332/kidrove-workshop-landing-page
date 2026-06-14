import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Brain, BarChart2, Bot, Trophy } from 'lucide-react'

const weeks = [
  {
    week: 'Week 1',
    title: 'Introduction to AI',
    description:
      'Discover what Artificial Intelligence really is. Explore real-world AI applications, learn how machines perceive data, and build your first AI-powered project using beginner-friendly tools.',
    topics: ['What is AI?', 'AI in everyday life', 'Data & Patterns', 'First AI project'],
    icon: Brain,
    color: 'from-indigo-500 to-purple-600',
    accent: 'bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300',
  },
  {
    week: 'Week 2',
    title: 'Machine Learning Basics',
    description:
      'Understand how machines learn from examples. Train simple models, explore classification and prediction, and see how ML powers products like recommendation systems and spam filters.',
    topics: ['Supervised Learning', 'Training Models', 'Classification', 'Making Predictions'],
    icon: BarChart2,
    color: 'from-sky-500 to-cyan-600',
    accent: 'bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300',
  },
  {
    week: 'Week 3',
    title: 'Robotics & Automation',
    description:
      'Step into the world of robots! Learn how robots sense and respond to the world, design simple automation workflows, and code your own logic-driven robotic behaviours.',
    topics: ['How Robots Work', 'Sensors & Actuators', 'Automation Logic', 'Build a Robot Sim'],
    icon: Bot,
    color: 'from-emerald-500 to-teal-600',
    accent: 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300',
  },
  {
    week: 'Week 4',
    title: 'Final Project Showcase',
    description:
  "Apply everything you've learned to build and present a capstone project. Receive mentor feedback, earn your certificate, and showcase your creation to family and peers.",
    topics: ['Project Planning', 'Build & Iterate', 'Mentor Review', 'Live Showcase'],
    icon: Trophy,
    color: 'from-amber-500 to-orange-500',
    accent: 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300',
  },
]

const CurriculumTimeline = () => {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section
      id="curriculum"
      ref={ref}
      aria-label="4-week curriculum timeline"
      className="py-20 bg-white dark:bg-slate-900"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm uppercase tracking-widest">
            4-Week Program
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2">
            Curriculum Timeline
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-xl mx-auto">
            A structured, progressive learning journey from AI fundamentals to a live project showcase.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-200 via-purple-200 to-amber-200 dark:from-indigo-800 dark:via-purple-800 dark:to-amber-800 sm:-translate-x-px"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {weeks.map((week, idx) => {
              const Icon = week.icon
              const isRight = idx % 2 === 0

              return (
                <motion.div
                  key={week.week}
                  initial={{ opacity: 0, x: isRight ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: idx * 0.15, duration: 0.6, ease: 'easeOut' }}
                  className={`relative flex items-start gap-6 sm:gap-0 ${
                    isRight ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  {/* Card */}
                  <div
                    className={`ml-16 sm:ml-0 sm:w-[calc(50%-3rem)] ${
                      isRight ? 'sm:pr-8 sm:text-right' : 'sm:pl-8 sm:text-left'
                    }`}
                  >
                    <motion.article
                      whileHover={{ y: -4 }}
                      className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all"
                    >
                      <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${week.accent}`}>
                        {week.week}
                      </span>
                      <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-2">
                        {week.title}
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">
                        {week.description}
                      </p>
                      <div
                        className={`flex flex-wrap gap-2 ${isRight ? 'sm:justify-end' : ''}`}
                        aria-label={`Topics covered in ${week.week}`}
                      >
                        {week.topics.map((topic) => (
                          <span
                            key={topic}
                            className="text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-full"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </motion.article>
                  </div>

                  {/* Timeline node */}
                  <div className="absolute left-8 sm:left-1/2 sm:-translate-x-1/2 top-5">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${week.color} flex items-center justify-center shadow-lg ring-4 ring-white dark:ring-slate-900`}
                    >
                      <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CurriculumTimeline
