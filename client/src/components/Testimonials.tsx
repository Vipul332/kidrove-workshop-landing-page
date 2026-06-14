import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

interface Testimonial {
  name: string
  role: string
  rating: number
  review: string
  child: string
  initials: string
  accent: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Kavitha Rajan',
    role: 'Parent · Chennai',
    rating: 5,
    review:
      'My daughter was hesitant about tech at first, but by Week 2 she was explaining machine learning to me at the dinner table! The mentors are incredibly patient and the batch size meant she never felt lost. Absolutely worth every rupee.',
    child: 'Daughter, age 11',
    initials: 'KR',
    accent: 'from-indigo-500 to-purple-600',
  },
  {
    name: 'Suresh Iyer',
    role: 'Parent · Bengaluru',
    rating: 5,
    review:
      'The final project showcase in Week 4 was the highlight. My son built a simple AI that could classify shapes and presented it live. Seeing his confidence was priceless. The certificate is now proudly framed in his room!',
    child: 'Son, age 13',
    initials: 'SI',
    accent: 'from-sky-500 to-cyan-600',
  },
  {
    name: 'Meera Agarwal',
    role: 'Parent · Delhi',
    rating: 5,
    review:
      'I was worried about online safety but the platform is excellent — moderated classes, verified mentors. The recorded sessions were a lifesaver when my child was unwell. Outstanding experience from registration to certificate!',
    child: 'Son, age 10',
    initials: 'MA',
    accent: 'from-emerald-500 to-teal-600',
  },
]

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`} role="img">
    {[1, 2, 3, 4, 5].map((s) => (
      <Star
        key={s}
        className={`w-4 h-4 ${s <= rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}`}
        aria-hidden="true"
      />
    ))}
  </div>
)

const Testimonials = () => {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section
      id="testimonials"
      ref={ref}
      aria-label="Parent testimonials"
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
            Parent Reviews
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-2">
            What Families Are Saying
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-xl mx-auto">
            Real reviews from parents whose children have completed the workshop.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.12, duration: 0.55, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-indigo-100 dark:hover:border-indigo-800 transition-all duration-300 flex flex-col relative"
            >
              {/* Quote icon */}
              <div
                className={`absolute top-5 right-5 w-9 h-9 rounded-xl bg-gradient-to-br ${t.accent} flex items-center justify-center opacity-10`}
                aria-hidden="true"
              >
                <Quote className="w-5 h-5 text-white" />
              </div>

              {/* Stars */}
              <StarRating rating={t.rating} />

              {/* Review */}
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mt-4 mb-6 flex-1">
                "{t.review}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-700">
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${t.accent} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white text-sm">
                    {t.name}
                  </div>
                  <div className="text-slate-400 dark:text-slate-500 text-xs">{t.role}</div>
                  <div className="text-indigo-500 dark:text-indigo-400 text-xs font-medium">
                    {t.child}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
