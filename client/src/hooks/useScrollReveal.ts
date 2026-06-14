import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

export const useScrollReveal = (threshold = 0.15) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: threshold })
  return { ref, isInView }
}
