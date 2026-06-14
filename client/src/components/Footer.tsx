import { Bot, Mail, Phone, MapPin, Instagram, Twitter, Youtube, Linkedin, Heart } from 'lucide-react'

const quickLinks = [
  { label: 'Workshop Details', id: 'details' },
  { label: 'Curriculum', id: 'curriculum' },
  { label: 'Our Mentors', id: 'mentors' },
  { label: 'Why Choose Us', id: 'why-us' },
  { label: 'Learning Outcomes', id: 'outcomes' },
  { label: 'FAQ', id: 'faq' },
  { label: 'Register Now', id: 'register' },
]

const socialLinks = [
  { Icon: Instagram, href: '#', label: 'Follow us on Instagram' },
  { Icon: Twitter,   href: '#', label: 'Follow us on Twitter' },
  { Icon: Youtube,   href: '#', label: 'Subscribe on YouTube' },
  { Icon: Linkedin,  href: '#', label: 'Connect on LinkedIn' },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer
      className="bg-slate-900 dark:bg-slate-950 text-slate-400"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14 border-b border-slate-800">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <button
              onClick={() => scrollTo('hero')}
              className="flex items-center gap-2 mb-4 group"
              aria-label="AIBot Camp — scroll to top"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md group-hover:shadow-indigo-500/30 transition-shadow">
                <Bot className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <span className="font-display font-bold text-lg text-white">
                AI<span className="text-indigo-400">Bot</span> Camp
              </span>
            </button>

            <p className="text-sm text-slate-500 leading-relaxed mb-6 max-w-xs">
              Inspiring the next generation of innovators through AI, Robotics, and Coding education. Online, safe, and fun.
            </p>

            {/* Social icons */}
            <div className="flex gap-3" role="list" aria-label="Social media links">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  role="listitem"
                  className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-indigo-600 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200 hover:scale-110"
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer quick links">
            <h3 className="font-semibold text-white text-sm mb-5 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="hover:text-indigo-400 transition-colors text-left w-full"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <address className="not-italic">
            <h3 className="font-semibold text-white text-sm mb-5 uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <a href="mailto:hello@aibotcamp.in" className="hover:text-indigo-400 transition-colors">
                  hello@aibotcamp.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <a href="tel:+919876543210" className="hover:text-indigo-400 transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>Online · Pan India</span>
              </li>
            </ul>
          </address>

          {/* Newsletter / CTA */}
          <div>
            <h3 className="font-semibold text-white text-sm mb-5 uppercase tracking-wider">
              Stay Updated
            </h3>
            <p className="text-sm text-slate-500 mb-4 leading-relaxed">
              Get early access, batch announcements, and free STEM resources for kids.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                aria-label="Email for newsletter"
                className="flex-1 bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              />
              <button
                aria-label="Subscribe to newsletter"
                className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors flex-shrink-0"
              >
                Go
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <p>© {currentYear} AIBot Camp. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Made with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" aria-hidden="true" /> for young innovators across India
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
