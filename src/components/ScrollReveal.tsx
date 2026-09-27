import type { ReactNode } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './ScrollReveal.css'

type Props = {
  children: ReactNode
  className?: string
}

export function ScrollReveal({ children, className = '' }: Props) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${visible ? 'scroll-reveal--visible' : ''} ${className}`.trim()}
    >
      {children}
    </div>
  )
}
