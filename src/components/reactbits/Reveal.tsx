import type { ElementType, HTMLAttributes, ReactNode } from 'react'
import AnimatedContent from './AnimatedContent'

interface RevealProps extends HTMLAttributes<HTMLElement> {
  [key: string]: unknown
  children: ReactNode
  as?: ElementType
  delay?: number
  distance?: number
  direction?: 'vertical' | 'horizontal'
  reverse?: boolean
  scale?: number
  duration?: number
}

export default function Reveal({
  children,
  as = 'div',
  className,
  style,
  delay = 0,
  distance = 30,
  direction = 'vertical',
  reverse = false,
  scale = 1,
  duration = 0.5,
  ...props
}: RevealProps) {
  return (
    <AnimatedContent
      as={as}
      className={className}
      style={style}
      distance={distance}
      direction={direction}
      reverse={reverse}
      scale={scale}
      delay={delay}
      duration={duration}
      ease="power3.out"
      threshold={0.12}
      initialOpacity={0}
      animateOpacity
      {...props}
    >
      {children}
    </AnimatedContent>
  )
}
