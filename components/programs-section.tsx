"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, TrendingUp, Zap } from "lucide-react"

export function ProgramsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({
    programs: 0,
    classes: 0,
    members: 0,
    trainers: 0,
  })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)

         
          const targets = { programs: 25, classes: 150, members: 500, trainers: 50 }
          const duration = 2000
          const steps = 60
          const stepTime = duration / steps

          Object.keys(targets).forEach((key) => {
            const target = targets[key as keyof typeof targets]
            const increment = target / steps
            let current = 0

            const timer = setInterval(() => {
              current += increment
              if (current >= target) {
                current = target
                clearInterval(timer)
              }
              setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }))
            }, stepTime)
          })
        } else {
        
          setIsVisible(false)
          setCounters({ programs: 0, classes: 0, members: 0, trainers: 0 })
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const programs = [
    {
      title: "Strength Training",
      description: "Build muscle and increase power with our comprehensive strength programs.",
      duration: "45-60 min",
      level: "All Levels",
      participants: "8-12",
      image: "/strengthtraning.jpg?key=strength",
      features: ["Progressive overload", "Compound movements", "Personalized weights"],
    },
    {
      title: "HIIT Cardio",
      description: "High-intensity interval training for maximum calorie burn and endurance.",
      duration: "30-45 min",
      level: "Intermediate",
      participants: "10-15",
      image: "/hiitcardio.jpg?key=hiit",
      features: ["Fat burning", "Metabolic boost", "Time efficient"],
    },
    {
      title: "Yoga & Flexibility",
      description: "Improve flexibility, balance, and mental wellness through guided yoga sessions.",
      duration: "60 min",
      level: "Beginner",
      participants: "15-20",
      image: "/yoga.jpg?key=yoga",
      features: ["Stress relief", "Flexibility", "Mind-body connection"],
    },
    {
      title: "CrossFit",
      description: "Functional fitness combining strength, cardio, and agility training.",
      duration: "60 min",
      level: "Advanced",
      participants: "6-10",
      image: "/crossfit.jpg?key=crossfit",
      features: ["Functional movements", "Community driven", "Varied workouts"],
    },
    {
      title: "Boxing",
      description: "Learn boxing techniques while getting an incredible full-body workout.",
      duration: "45 min",
      level: "All Levels",
      participants: "8-12",
      image: "/boxing.jpg?key=boxing",
      features: ["Self-defense", "Coordination", "Stress relief"],
    },
    {
      title: "Personal Training",
      description: "One-on-one coaching tailored specifically to your goals and needs.",
      duration: "60 min",
      level: "Customized",
      participants: "1-on-1",
      image: "/personaltraning.jpg?key=personal",
      features: ["Personalized plan", "Expert guidance", "Flexible scheduling"],
    },
  ]

  return (
    <section id="programs" ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
    
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 diagonal-cut" />
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-secondary/5 triangle-shape" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
       
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Training <span className="text-primary block">Programs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Choose from our diverse range of training programs designed to challenge, inspire, and transform you.
          </p>
        </div>

     
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { value: counters.programs, label: "Programs" },
            { value: counters.classes, label: "Weekly Classes" },
            { value: counters.members, label: "Active Members" },
            { value: counters.trainers, label: "Expert Trainers" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-1000 ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}+</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

      
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card
              key={program.title}
              className={`group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-card border-border hover:border-primary/50 overflow-hidden ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  className="w-full h-56 md:h-64 lg:h-72 object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                  {program.level}
                </Badge>
              </div>

              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-card-foreground mb-3">{program.title}</h3>
                <p className="text-muted-foreground mb-4 text-pretty">{program.description}</p>

                <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-card-foreground">{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-card-foreground">{program.participants}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span className="text-card-foreground">{program.level}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <Zap className="h-3 w-3 text-primary flex-shrink-0" />
                      <span className="text-card-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
