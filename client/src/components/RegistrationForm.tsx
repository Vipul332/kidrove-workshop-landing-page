import { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { motion, useInView } from 'framer-motion'
import { User, Mail, Phone, Lock, CheckCircle2, AlertCircle, PartyPopper } from 'lucide-react'
import type { EnquiryFormData } from '../types'
import { submitEnquiry } from '../services/api'
import Spinner from './Spinner'

const RegistrationForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormData>({ mode: 'onBlur' })

  const onSubmit = async (data: EnquiryFormData) => {
    try {
      const res = await submitEnquiry(data)
      if (res.success) {
        toast.success("Registration successful! We'll contact you soon. 🎉")
        setSubmitted(true)
        reset()
      } else {
        toast.error(res.message || 'Something went wrong. Please try again.')
      }
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : 'Network error. Please check your connection.'
      toast.error(message)
    }
  }

  return (
    <section
      id="register"
      ref={ref}
      aria-label="Workshop registration form"
      className="py-20 bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-900 relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-widest">
            Limited Seats — Enroll Today
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-2">
            Register for the Workshop
          </h2>
          <p className="text-indigo-300 mt-3 text-base">
            Fill in your details and we'll reach out with payment and onboarding information.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-10"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
              className="text-center py-8"
            >
              <div className="w-20 h-20 bg-green-500/20 rounded-3xl flex items-center justify-center mx-auto mb-5">
                <PartyPopper className="w-10 h-10 text-green-400" aria-hidden="true" />
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-2">
                You're registered!
              </h3>
              <p className="text-indigo-300 text-base mb-6 leading-relaxed">
                Thank you for enrolling. Our team will contact you within 24 hours with next steps and payment details.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-indigo-300 hover:text-white underline underline-offset-2 text-sm transition-colors"
                aria-label="Register another student"
              >
                Register another student
              </button>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="space-y-6"
              aria-label="Registration form"
            >
              {/* Full Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-indigo-200 mb-2">
                  Full Name <span className="text-rose-400" aria-hidden="true">*</span>
                </label>
                <div className="relative">
                  <User
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-indigo-400/60"
                    aria-hidden="true"
                  />
                  <input
                    id="name"
                    type="text"
                    placeholder="e.g. Aarav Sharma"
                    autoComplete="name"
                    aria-required="true"
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    {...register('name', {
                      required: 'Full name is required',
                      minLength: { value: 2, message: 'Name must be at least 2 characters' },
                    })}
                    className={`w-full bg-white/10 border text-white placeholder-indigo-400/60 rounded-xl pl-10 pr-4 py-3 text-base focus:outline-none focus:ring-2 transition-all ${
                      errors.name
                        ? 'border-rose-400 focus:ring-rose-400/50'
                        : 'border-white/20 focus:ring-indigo-400/50 focus:border-indigo-400'
                    }`}
                  />
                  {errors.name && (
                    <CheckCircle2
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-rose-400"
                      aria-hidden="true"
                    />
                  )}
                </div>
                {errors.name && (
                  <p id="name-error" role="alert" className="mt-1.5 text-rose-400 text-xs flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-indigo-200 mb-2">
                  Email Address <span className="text-rose-400" aria-hidden="true">*</span>
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-indigo-400/60"
                    aria-hidden="true"
                  />
                  <input
                    id="email"
                    type="email"
                    placeholder="e.g. parent@example.com"
                    autoComplete="email"
                    aria-required="true"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    {...register('email', {
                      required: 'Email address is required',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Please enter a valid email address',
                      },
                    })}
                    className={`w-full bg-white/10 border text-white placeholder-indigo-400/60 rounded-xl pl-10 pr-4 py-3 text-base focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? 'border-rose-400 focus:ring-rose-400/50'
                        : 'border-white/20 focus:ring-indigo-400/50 focus:border-indigo-400'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p id="email-error" role="alert" className="mt-1.5 text-rose-400 text-xs flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-indigo-200 mb-2">
                  Phone Number <span className="text-rose-400" aria-hidden="true">*</span>
                </label>
                <div className="relative">
                  <Phone
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-indigo-400/60"
                    aria-hidden="true"
                  />
                  <input
                    id="phone"
                    type="tel"
                    maxLength={10}
                    placeholder="10-digit mobile number"
                    autoComplete="tel"
                    aria-required="true"
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    {...register('phone', {
                      required: 'Phone number is required',
                      pattern: {
                        value: /^[6-9]\d{9}$/,
                        message: 'Must be a valid 10-digit Indian mobile number',
                      },
                    })}
                    className={`w-full bg-white/10 border text-white placeholder-indigo-400/60 rounded-xl pl-10 pr-4 py-3 text-base focus:outline-none focus:ring-2 transition-all ${
                      errors.phone
                        ? 'border-rose-400 focus:ring-rose-400/50'
                        : 'border-white/20 focus:ring-indigo-400/50 focus:border-indigo-400'
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p id="phone-error" role="alert" className="mt-1.5 text-rose-400 text-xs flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                aria-label={isSubmitting ? 'Submitting your registration...' : 'Register now for the workshop'}
                className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 disabled:from-slate-500 disabled:to-slate-600 disabled:cursor-not-allowed text-white font-bold text-lg py-4 rounded-2xl shadow-lg shadow-orange-500/30 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
              >
                {isSubmitting ? (
                  <>
                    <Spinner size="sm" />
                    Submitting…
                  </>
                ) : (
                  'Register Now →'
                )}
              </button>

              <p className="text-center text-indigo-400 text-xs flex items-center justify-center gap-1.5">
                <Lock className="w-3.5 h-3.5" aria-hidden="true" />
                Your information is safe and will never be shared.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default RegistrationForm
