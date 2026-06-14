import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'Do children need prior coding experience?',
    answer:
      'No. This workshop is completely beginner-friendly. We start from scratch and guide every student step by step through all concepts, ensuring no prior knowledge is needed.',
  },
  {
    question: 'Will recordings be available?',
    answer:
      'Yes, all live sessions are recorded and made available to enrolled students within 24 hours. You can revisit any lesson at your own pace throughout the program.',
  },
  {
    question: 'What device is required?',
    answer:
      'A laptop or desktop computer with a stable internet connection is recommended. The software and tools used in this workshop are web-based and completely free to use.',
  },
  {
    question: 'Will students receive certificates?',
    answer:
      'Yes! Every student who successfully completes the 4-week workshop and all assignments will receive a digital Certificate of Completion, signed by the instructors.',
  },
  {
    question: 'What is the batch size?',
    answer:
      'To ensure personalised attention, each batch is limited to 20 students. This allows our instructors to give individual feedback and support throughout the program.',
  },
  {
    question: 'How do I pay the fee?',
    answer:
      'After submitting your registration form, our team will reach out via WhatsApp/email with payment details. We accept UPI, net banking, and major credit/debit cards.',
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const toggle = (idx: number) => setOpenIndex(openIndex === idx ? null : idx)

  return (
    <section
      id="faq"
      ref={ref}
      aria-label="Frequently asked questions"
      className="py-20 bg-slate-50 dark:bg-slate-950"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-indigo-100 dark:bg-indigo-950 mb-4">
            <HelpCircle className="w-7 h-7 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
          </div>
          <span className="block text-indigo-600 dark:text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-2">
            Got Questions?
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-3" role="list">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              role="listitem"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.07, duration: 0.45, ease: 'easeOut' }}
              className={`rounded-2xl border transition-colors duration-200 ${
                openIndex === idx
                  ? 'bg-white dark:bg-slate-900 border-indigo-200 dark:border-indigo-700 shadow-md'
                  : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:border-indigo-100 dark:hover:border-indigo-900'
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
                onClick={() => toggle(idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
                id={`faq-question-${idx}`}
              >
                <span className="font-semibold text-slate-800 dark:text-white text-base">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    openIndex === idx
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" aria-hidden="true" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    id={`faq-answer-${idx}`}
                    role="region"
                    aria-labelledby={`faq-question-${idx}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
