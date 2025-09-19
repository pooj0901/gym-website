"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Play, Zap } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >

      <div className="absolute inset-0 z-0">
        <img
          src="/modern-gym-interior-with-equipment--dark-lighting-.jpg"
          alt="Modern gym interior"
          className="w-full h-full object-cover transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${(mousePosition.x - 50) * 0.02}px, ${
              (mousePosition.y - 50) * 0.02
            }px) scale(1.1)`,
          }}
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 animate-gradient-shift" />
      </div>

      <div className="absolute inset-0 z-10">
        <div
          className="absolute top-20 left-10 w-32 h-32 bg-primary/20 triangle-shape animate-float"
          style={{
            transform: `translate(${(mousePosition.x - 50) * 0.05}px, ${
              (mousePosition.y - 50) * 0.05
            }px)`,
          }}
        />
        <div
          className="absolute bottom-20 right-10 w-24 h-24 bg-secondary/30 diamond-shape animate-rotate-slow"
          style={{
            transform: `translate(${(mousePosition.x - 50) * -0.03}px, ${
              (mousePosition.y - 50) * -0.03
            }px) rotate(${mousePosition.x}deg)`,
          }}
        />
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-to-r from-primary/10 to-transparent diagonal-cut animate-pulse-glow" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-secondary/10 to-transparent diagonal-cut animate-shimmer" />

        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/40 rounded-full animate-float"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "animate-slide-up-fade" : "opacity-0"
          }`}
        >
          <div className="mb-6">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-balance">
              <span
                className="inline-block text-primary animate-bounce-in"
                style={{ animationDelay: "0.2s" }}
              >
                FITPULSE
              </span>
              <span
                className="inline-block text-foreground animate-bounce-in"
                style={{ animationDelay: "0.4s" }}
              >
                GYM
              </span>
            </h1>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <Zap className="h-16 w-16 text-primary/30 animate-pulse-glow" />
            </div>
          </div>

          <p
            className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-4 font-light text-balance animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            Where Energy Meets Strength
          </p>

          <p
            className="text-lg sm:text-xl text-card-foreground mb-12 max-w-3xl mx-auto text-pretty animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            A modern fitness hub designed to keep your body and mind in sync.
            Build strength, boost endurance, and feel the pulse of progress with
            every workout.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up"
            style={{ animationDelay: "1s" }}
          >
            <Button
              size="lg"
              onClick={() => {
                const contactElement = document.getElementById("contact")
                if (contactElement) {
                  const offsetTop = contactElement.offsetTop - 64
                  window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth",
                  })
                }
              }}
              className="bg-primary hover:bg-secondary text-primary-foreground px-8 py-4 text-lg font-semibold btn-primary hover-lift hover-glow group relative overflow-hidden"
            >
              <span className="relative z-10">Join Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const aboutElement = document.getElementById("about")
                if (aboutElement) {
                  const offsetTop = aboutElement.offsetTop - 64
                  window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth",
                  })
                }
              }}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold hover-lift hover-glow bg-transparent group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Watch Tour
            </Button>
          </div>
        </div>
      </div>

     
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-card/90 backdrop-blur-sm border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Active Members", delay: "0s" },
              { value: "50+", label: "Expert Trainers", delay: "0.2s" },
              { value: "24/7", label: "Access Hours", delay: "0.4s" },
              { value: "5", label: "Years Experience", delay: "0.6s" },
            ].map((stat, index) => (
              <div
                key={index}
                className="animate-scale-in hover-scale group cursor-pointer"
                style={{ animationDelay: stat.delay }}
              >
                <div className="text-3xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-card-foreground group-hover:text-foreground transition-colors duration-300">
                  {stat.label}
                </div>
                <div className="w-0 group-hover:w-full h-0.5 bg-primary transition-all duration-300 mx-auto mt-2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
