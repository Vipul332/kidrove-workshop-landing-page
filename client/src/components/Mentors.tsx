import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Linkedin, Twitter, BookOpen } from 'lucide-react'

interface Mentor {
  name: string
  title: string
  experience: string
  skills: string[]
  bio: string
  initials: string
  gradientFrom: string
  gradientTo: string
}

const mentors: Mentor[] = [
  {
    name: 'Dr. Priya Nair',
    title: 'AI Research Scientist',
    experience: '9 Years Experience',
    skills: ['Machine Learning', 'Neural Networks', 'Python', 'TensorFlow'],
    bio: 'PhD in Computer Vision from IIT Bombay. Previously at Google Research and Infosys AI Lab. Priya has trained over 400 young learners and specialises in making complex AI concepts fun and accessible for children.',
    initials: 'PN',
    gradientFrom: '#4f46e5',
    gradientTo: '#7c3aed',
  },
  {
    name: 'Arjun Mehta',
    title: 'Robotics Engineer',
    experience: '7 Years Experience',
    skills: ['Robotics', 'Arduino', 'IoT', 'Automation'],
    bio: 'Robotics engineer from NIT Trichy with stints at Bosch and a robotics startup. Arjun has built educational robotics kits used in 50+ schools and loves turning young minds into builders and tinkerers.',
    initials: 'AM',
    gradientFrom: '#0ea5e9',
    gradientTo: '#0891b2',
  },
  {
    name: 'Sneha Kulkarni',
    title: 'EdTech & Coding Mentor',
    experience: '6 Years Experience',
    skills: ['Scratch', 'Python', 'Curriculum Design', 'Pedagogy'],
    bio: 'Certified coding instructor and curriculum designer who has taught over 1,000 students across India. Sneha holds an MSc in Educational Technology and is passionate about making STEM education equitable and joyful.',
    initials: 'SK',
    gradientFrom: '#10b981',
    gradientTo: '#0d9488',
  },
]

const MentorCard = ({ mentor, delay }: { mentor: Mentor; delay: number }) => {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.55, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      {/* Top gradient banner */}
      <div
        className="h-24 relative"
        style={{
          background: `linear-gradient(135deg, ${mentor.gradientFrom}, ${mentor.gradientTo})`,
        }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 80% 20%, white 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      {/* Avatar */}
      <div className="px-6 pb-0 -mt-10 flex items-end gap-4">
        <div
          className="w-20 h-20 rounded-2xl ring-4 ring-white dark:ring-slate-900 flex items-center justify-center text-white font-display font-bold text-2xl shadow-lg flex-shrink-0"
          style={{
            background: `linear-gradient(135deg, ${mentor.gradientFrom}, ${mentor.gradientTo})`,
          }}
          aria-label={`${mentor.name}'s avatar`}
        >
          {mentor.initials}
        </div>
        <div className="pb-2">
          <div className="flex gap-2">
            <a
              href="#"
              aria-label={`${mentor.name} on LinkedIn`}
              className="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-indigo-100 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
            <a
              href="#"
              aria-label={`${mentor.name} on Twitter`}
              className="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-sky-100 dark:hover:bg-sky-900 hover:text-sky-500 transition-colors"
            >
              <Twitter className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 pt-3">
        <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
          {mentor.name}
        </h3>
        <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm mb-1">
          {mentor.title}
        </p>
        <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500 text-xs mb-4">
          <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
          <span>{mentor.experience}</span>
        </div>

        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">
          {mentor.bio}
        </p>

        <div className="flex flex-wrap gap-2" aria-label={`${mentor.name}'s skills`}>
          {mentor.skills.map((skill) => (
            <span
              key={skill}
              className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

const Mentors = () => {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section
      id="mentors"
      ref={ref}
      aria-label="Meet your mentors"
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
            Learn from the Best
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2">
            Meet Your Mentors
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-xl mx-auto">
            World-class educators and industry professionals who love teaching kids.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor, idx) => (
            <MentorCard key={mentor.name} mentor={mentor} delay={idx * 0.12} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Mentors
