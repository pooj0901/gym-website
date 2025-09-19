"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  threshold?: number
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-in" | "bounce-in"
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  threshold = 0.1,
  animation = "fade-up",
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      { threshold },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [delay, threshold])

  const getAnimationClass = () => {
    if (!isVisible) return "opacity-0"

    switch (animation) {
      case "fade-in":
        return "animate-fade-in-up"
      case "slide-left":
        return "animate-slide-in-left"
      case "slide-right":
        return "animate-slide-in-right"
      case "scale-in":
        return "animate-scale-in"
      case "bounce-in":
        return "animate-bounce-in"
      default:
        return "animate-fade-in-up"
    }
  }

  return (
    <div ref={elementRef} className={`transition-all duration-1000 ${getAnimationClass()} ${className}`}>
      {children}
    </div>
  )
}
