"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

const DumbbellIcon = () => (
  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6h12l-6 6-6-6z" />
  </svg>
)

const HeartIcon = () => (
  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
    />
  </svg>
)

const BrainIcon = () => (
  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth={2} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8M12 8v8" />
  </svg>
)

const UsersIcon = () => (
  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
    />
    <circle cx="9" cy="7" r="4" strokeWidth={2} />
  </svg>
)

const ClockIcon = () => (
  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth={2} />
    <polyline points="12,6 12,12 16,14" strokeWidth={2} />
  </svg>
)

const TrophyIcon = () => (
  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v18" />
  </svg>
)


export function SolutionsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const solutions = [
    {
      icon: DumbbellIcon,
      title: "Strength Training",
      description:
        "Build lean muscle and increase your overall strength with our comprehensive weight training programs.",
      benefits: ["Progressive overload", "Muscle building", "Bone density improvement"],
    },
    {
      icon: HeartIcon,
      title: "Cardiovascular Health",
      description: "Improve your heart health and endurance with our cardio programs designed for all fitness levels.",
      benefits: ["Heart health", "Endurance building", "Weight management"],
    },
    {
      icon: BrainIcon,
      title: "Mental Wellness",
      description:
        "Exercise isn't just physical - boost your mental health, reduce stress, and improve cognitive function.",
      benefits: ["Stress reduction", "Mood enhancement", "Better sleep"],
    },
    {
      icon: UsersIcon,
      title: "Community Support",
      description: "Join a supportive community that motivates and encourages you throughout your fitness journey.",
      benefits: ["Accountability", "Motivation", "Lasting friendships"],
    },
    {
      icon: ClockIcon,
      title: "Flexible Scheduling",
      description: "Work out on your schedule with 24/7 access and flexible class times that fit your lifestyle.",
      benefits: ["24/7 access", "Flexible classes", "Personal scheduling"],
    },
    {
      icon: TrophyIcon,
      title: "Goal Achievement",
      description: "Set and achieve your fitness goals with personalized training plans and progress tracking.",
      benefits: ["Goal setting", "Progress tracking", "Personal records"],
    },
  ]


  const [visibleItems, setVisibleItems] = useState<boolean[]>(Array(solutions.length).fill(false))

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    solutions.forEach((_, index) => {
      const el = document.getElementById(`solution-${index}`)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          setVisibleItems((prev) => {
            const updated = [...prev]
            updated[index] = entry.isIntersecting // toggle on/off
            return updated
          })
        },
        { threshold: 0.2 }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [solutions.length])

  return (
    <section id="solutions" ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
    
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 diagonal-cut" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-secondary/5 triangle-shape" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Complete Fitness
            <span className="text-primary block">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Discover comprehensive fitness solutions designed to transform your body, mind, and lifestyle. Every program
            is crafted to deliver real, lasting results.
          </p>
        </div>

       
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <Card
                id={`solution-${index}`}
                key={solution.title}
                className={`group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-card border-border hover:border-primary/50 ${
                  visibleItems[index] ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon />
                    </div>
                    <h3 className="text-2xl font-bold text-card-foreground mb-3">{solution.title}</h3>
                    <p className="text-muted-foreground text-pretty">{solution.description}</p>
                  </div>

                  <div className="space-y-2">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-card-foreground text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

      
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border">
            <h3 className="text-3xl font-bold text-card-foreground mb-4">Ready to Transform Your Life?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-pretty">
              Join thousands of members who have already started their fitness transformation. Your journey to a
              stronger, healthier you begins today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-secondary text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Start Your Journey
              </button>
              <button className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Schedule Tour
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
