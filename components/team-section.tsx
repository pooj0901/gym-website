"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Instagram, Twitter, Linkedin } from "lucide-react"

export function TeamSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Head Trainer & Founder",
      specialties: ["Strength Training", "Nutrition"],
      experience: "8 years",
      image: "/sarah.jpg?key=sarah",
      bio: "Certified personal trainer with expertise in strength training and sports nutrition.",
      social: { instagram: "@sarahfitness", twitter: "@sarahtrains" },
    },
    {
      name: "Mike Rodriguez",
      role: "CrossFit Coach",
      specialties: ["CrossFit", "Olympic Lifting"],
      experience: "6 years",
      image: "/mike.jpg?key=mike",
      bio: "Former competitive athlete specializing in functional fitness and Olympic weightlifting.",
      social: { instagram: "@mikelifts", linkedin: "mike-rodriguez-fitness" },
    },
    {
      name: "Emma Chen",
      role: "Yoga Instructor",
      specialties: ["Yoga", "Mindfulness"],
      experience: "5 years",
      image: "/emma.jpg?key=emma",
      bio: "Certified yoga instructor focused on mind-body wellness and stress management.",
      social: { instagram: "@emmayoga", twitter: "@mindfulemma" },
    },
    {
      name: "David Thompson",
      role: "HIIT Specialist",
      specialties: ["HIIT", "Cardio"],
      experience: "7 years",
      image: "/david.jpg?key=david",
      bio: "High-intensity training expert with a passion for helping clients achieve peak fitness.",
      social: { instagram: "@davidhiit", linkedin: "david-thompson-trainer" },
    },
    {
      name: "Lisa Park",
      role: "Boxing Coach",
      specialties: ["Boxing", "Self-Defense"],
      experience: "4 years",
      image: "/lisa.jpg?key=lisa",
      bio: "Former amateur boxer teaching technique, fitness, and self-defense skills.",
      social: { instagram: "@lisaboxes", twitter: "@boxingwithLisa" },
    },
    {
      name: "Alex Morgan",
      role: "Rehabilitation Specialist",
      specialties: ["Injury Recovery", "Mobility"],
      experience: "9 years",
      image: "/alex.jpg?key=alex",
      bio: "Physical therapist specializing in injury prevention and rehabilitation.",
      social: { linkedin: "alex-morgan-pt", instagram: "@alexrehab" },
    },
  ]

  return (
    <section id="team" ref={sectionRef} className="py-20 bg-card relative overflow-hidden">
      
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 diamond-shape" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-secondary/5 triangle-shape" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-card-foreground mb-6">
            Meet Our
            <span className="text-primary block">Expert Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our certified trainers are passionate about helping you achieve your fitness goals with personalized
            guidance and expertise.
          </p>
        </div>

        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={member.name}
              className={`group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-background border-border hover:border-primary/50 overflow-hidden ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: isVisible ? `${index * 0.15}s` : "0s" }}
            >
              <div className="relative">
                
                <div className="absolute inset-0 z-10">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/80 triangle-shape" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-secondary/60 diamond-shape" />
                </div>

                
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />

                
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground z-20">
                  {member.experience}
                </Badge>
              </div>

              
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-muted-foreground mb-4">{member.bio}</p>

                
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.specialties.map((specialty, i) => (
                    <Badge key={i} variant="outline" className="border-primary/30 text-card-foreground">
                      {specialty}
                    </Badge>
                  ))}
                </div>

                
                <div className="flex gap-3">
                  {member.social.instagram && (
                    <a
                      href={`https://instagram.com/${member.social.instagram.replace("@", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                    >
                      <Instagram className="h-4 w-4 text-primary" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={`https://twitter.com/${member.social.twitter.replace("@", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                    >
                      <Twitter className="h-4 w-4 text-primary" />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a
                      href={`https://linkedin.com/in/${member.social.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                    >
                      <Linkedin className="h-4 w-4 text-primary" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
