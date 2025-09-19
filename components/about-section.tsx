"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else {
          setIsVisible(false) 
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-card relative overflow-hidden"
    >
     
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-40 h-40 bg-primary/5 triangle-shape" />
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-secondary/5 diamond-shape" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
         
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-card-foreground mb-6 text-balance">
              Your Fitness Journey
              <span className="text-primary block">Starts Here</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              At FitPulse Gym, we believe fitness is more than just physical
              transformation. It's about building confidence, creating lasting
              habits, and becoming the best version of yourself.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    Expert Guidance
                  </h3>
                  <p className="text-muted-foreground">
                    Our certified trainers provide personalized coaching to help
                    you reach your goals safely and effectively.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    State-of-the-Art Equipment
                  </h3>
                  <p className="text-muted-foreground">
                    Train with the latest fitness technology and equipment
                    designed for maximum results and safety.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    Inclusive Community
                  </h3>
                  <p className="text-muted-foreground">
                    Join a supportive community where everyone is welcome,
                    regardless of fitness level or background.
                  </p>
                </div>
              </div>
            </div>
          </div>

          
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            <Card className="relative overflow-hidden group">
              <img
                src="/professional-fitness-trainer-helping-client-with-w.jpg"
                alt="Professional trainer helping client"
                className="w-full h-[600px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Professional Training
                </h3>
                <p className="text-card-foreground">
                  Experience personalized coaching that adapts to your unique
                  fitness journey.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
