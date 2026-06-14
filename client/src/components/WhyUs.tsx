import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  GraduationCap,
  Hammer,
  Users,
  Video,
  ScrollText,
  ShieldCheck,
} from 'lucide-react'

const reasons = [
  {
    icon: GraduationCap,
    title: 'Expert Mentors',
    description:
      'Learn from industry professionals and certified educators with years of experience teaching AI and Robotics to young learners.',
    color: 'from-indigo-500 to-purple-600',
    delay: 0,
  },
  {
    icon: Hammer,
    title: 'Hands-on Learning',
    description:
      'Every concept is reinforced through real projects and interactive activities. Your child builds, breaks, and learns through doing.',
    color: 'from-sky-500 to-cyan-600',
    delay: 0.08,
  },
  {
    icon: Users,
    title: 'Small Batch Sizes',
    description:
      'Each batch is limited to 20 students so mentors can provide personalised attention, feedback, and support throughout the program.',
    color: 'from-emerald-500 to-teal-600',
    delay: 0.16,
  },
  {
    icon: Video,
    title: 'Recorded Sessions',
    description:
      'Missed a class? No problem. All live sessions are recorded and available within 24 hours for enrolled students to rewatch anytime.',
    color: 'from-violet-500 to-purple-600',
    delay: 0.24,
  },
  {
    icon: ScrollText,
    title: 'Certificate of Completion',
    description:
      'Students who complete the workshop receive an industry-recognised digital certificate — a proud addition to any portfolio.',
    color: 'from-amber-500 to-orange-500',
    delay: 0.32,
  },
  {
    icon: ShieldCheck,
    title: 'Safe Online Environment',
    description:
      'Our platform is fully child-safe with moderated sessions, vetted mentors, and strict guidelines to keep your child protected.',
    color: 'from-rose-500 to-pink-600',
    delay: 0.4,
  },
]

const WhyUs = () => {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section
      id="why-us"
      ref={ref}
      aria-label="Why parents choose us"
      className="py-20 bg-slate-50 dark:bg-slate-950"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm uppercase tracking-widest">
            Trusted by 1,000+ Families
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2">
            Why Parents Choose Us
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-xl mx-auto text-base leading-relaxed">
            We've built every aspect of this program around what matters most — your child's
            learning, safety, and success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <motion.article
                key={reason.title}
                role="listitem"
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: reason.delay, duration: 0.55, ease: 'easeOut' }}
                whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(0,0,0,0.10)' }}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm cursor-default relative overflow-hidden group"
              >
                {/* Top gradient accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${reason.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl`}
                  aria-hidden="true"
                />

                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-5 shadow-lg`}
                >
                  <Icon className="w-7 h-7 text-white" aria-hidden="true" />
                </div>

                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
