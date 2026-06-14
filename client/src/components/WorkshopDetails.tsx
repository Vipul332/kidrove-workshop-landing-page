import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Baby, CalendarDays, Monitor, IndianRupee, Rocket } from 'lucide-react'

const details = [
  { Icon: Baby,          label: 'Age Group',   value: '8–14 Years',    color: 'from-violet-500 to-purple-600' },
  { Icon: CalendarDays,  label: 'Duration',    value: '4 Weeks',       color: 'from-sky-500 to-cyan-600' },
  { Icon: Monitor,       label: 'Mode',        value: 'Live Online',   color: 'from-emerald-500 to-teal-600' },
  { Icon: IndianRupee,   label: 'Fee',         value: '₹2,999',        color: 'from-amber-500 to-orange-500' },
  { Icon: Rocket,        label: 'Start Date',  value: '15 July 2026',  color: 'from-rose-500 to-pink-600' },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

const WorkshopDetails = () => {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.25 })

  return (
    <section
      id="details"
      ref={ref}
      aria-label="Workshop details"
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
            Workshop Overview
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2">
            Everything You Need to Know
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-xl mx-auto">
            A comprehensive 4-week online program crafted to spark curiosity and build real skills in young minds.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5"
          role="list"
          aria-label="Workshop details"
        >
          {details.map(({ Icon, label, value, color }) => (
            <motion.div
              key={label}
              variants={item}
              role="listitem"
              whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(0,0,0,0.10)' }}
              className="group bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-6 flex flex-col items-center text-center transition-shadow duration-300"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">
                {label}
              </span>
              <span className="font-display font-bold text-xl text-slate-800 dark:text-white">
                {value}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WorkshopDetails
