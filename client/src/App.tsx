import { Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorkshopDetails from './components/WorkshopDetails'
import Statistics from './components/Statistics'
import LearningOutcomes from './components/LearningOutcomes'
import WhyUs from './components/WhyUs'
import CurriculumTimeline from './components/CurriculumTimeline'
import Mentors from './components/Mentors'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import RegistrationForm from './components/RegistrationForm'
import Footer from './components/Footer'
import StickyEnroll from './components/StickyEnroll'
import ErrorBoundary from './components/ErrorBoundary'
import { SectionSkeleton } from './components/Skeleton'

const App = () => {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-indigo-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <ErrorBoundary>
          <Hero />
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionSkeleton />}>
            <WorkshopDetails />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Statistics />
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<SectionSkeleton />}>
            <LearningOutcomes />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <WhyUs />
        </ErrorBoundary>

        <ErrorBoundary>
          <CurriculumTimeline />
        </ErrorBoundary>

        <ErrorBoundary>
          <Mentors />
        </ErrorBoundary>

        <ErrorBoundary>
          <Testimonials />
        </ErrorBoundary>

        <ErrorBoundary>
          <FAQ />
        </ErrorBoundary>

        <ErrorBoundary>
          <RegistrationForm />
        </ErrorBoundary>
      </main>

      <Footer />
      <StickyEnroll />
    </>
  )
}

export default App
