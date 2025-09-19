"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, MessageCircle, Share2, Calendar, Trophy, Users } from "lucide-react"

export function CommunitySection() {
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

  const communityPosts = [
    {
      user: "Jessica M.",
      avatar: "/woman-fitness.png",
      time: "2 hours ago",
      content:
        "Just completed my first CrossFit session at SYNERGYM! The trainers are incredible and so supportive. Already feeling stronger! 💪",
      likes: 24,
      comments: 8,
      image: "/crossfitsession.jpg",
    },
    {
      user: "Marcus T.",
      avatar: "/placeholder-11ve2.png",
      time: "5 hours ago",
      content:
        "6 months transformation at SYNERGYM! The personalized training program really works. Thank you to the amazing team!",
      likes: 67,
      comments: 15,
      image: "/fitness-transformation.jpg",
    },
    {
      user: "Sarah K.",
      avatar: "/placeholder-sq0tz.png",
      time: "1 day ago",
      content:
        "Morning yoga session was exactly what I needed. The mind-body connection here is unmatched. Feeling centered and ready for the day!",
      likes: 31,
      comments: 12,
      image: "/yogasession.jpg",
    },
  ]

  const events = [
    {
      title: "Summer Fitness Challenge",
      date: "July 15-30",
      participants: 150,
      description: "Join our 2-week intensive challenge with prizes for top performers!",
      type: "Challenge",
    },
    {
      title: "Nutrition Workshop",
      date: "July 22",
      participants: 45,
      description: "Learn meal prep strategies and nutrition fundamentals with our experts.",
      type: "Workshop",
    },
    {
      title: "Community BBQ",
      date: "August 5",
      participants: 200,
      description: "Celebrate our community with food, fun, and fitness demonstrations.",
      type: "Social",
    },
  ]

  return (
    <section id="community" ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
     
      <div className="absolute inset-0">
        <div className="absolute top-16 left-16 w-80 h-80 bg-primary/5 diamond-shape" />
        <div className="absolute bottom-16 right-16 w-64 h-64 bg-secondary/5 triangle-shape" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
       
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Join Our
            <span className="text-primary block">Community</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Connect with like-minded fitness enthusiasts, share your journey, and celebrate achievements together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
         
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-foreground mb-6">Community Feed</h3>
            <div className="space-y-6">
              {communityPosts.map((post, index) => (
                <Card
                  key={index}
                  className={`group hover:shadow-xl transition-all duration-500 bg-card border-border hover:border-primary/30 ${
                    isVisible ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-6">
                
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src={post.avatar || "/placeholder.svg"}
                        alt={post.user}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-card-foreground">{post.user}</h4>
                        <p className="text-sm text-muted-foreground">{post.time}</p>
                      </div>
                    </div>

                 
                    <p className="text-card-foreground mb-4 text-pretty">{post.content}</p>

                  
                    {post.image && (
                      <div className="mb-4 rounded-lg overflow-hidden">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt="Post content"
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}

                 
                    <div className="flex items-center gap-6 text-muted-foreground">
                      <button className="flex items-center gap-2 hover:text-primary transition-colors duration-200">
                        <Heart className="h-5 w-5" />
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center gap-2 hover:text-primary transition-colors duration-200">
                        <MessageCircle className="h-5 w-5" />
                        <span>{post.comments}</span>
                      </button>
                      <button className="flex items-center gap-2 hover:text-primary transition-colors duration-200">
                        <Share2 className="h-5 w-5" />
                        <span>Share</span>
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

     
          <div className="space-y-8">
     
            <div
              className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: "0.4s" }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">Upcoming Events</h3>
              <div className="space-y-4">
                {events.map((event, index) => (
                  <Card
                    key={index}
                    className="bg-card border-border hover:border-primary/30 transition-colors duration-300"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-card-foreground">{event.title}</h4>
                        <Badge variant="outline" className="border-primary/30 text-primary">
                          {event.type}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Users className="h-4 w-4" />
                        <span>{event.participants} participants</span>
                      </div>
                      <p className="text-sm text-card-foreground text-pretty">{event.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

       
            <div
              className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: "0.6s" }}
            >
              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                <CardContent className="p-6 text-center">
                  <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">Community Achievements</h3>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div>
                      <div className="text-2xl font-bold text-primary">2,500+</div>
                      <div className="text-sm text-muted-foreground">Active Members</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">15,000+</div>
                      <div className="text-sm text-muted-foreground">Workouts Completed</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">500+</div>
                      <div className="text-sm text-muted-foreground">Goals Achieved</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">50+</div>
                      <div className="text-sm text-muted-foreground">Events Hosted</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

    
        <div
          className={`mt-16 text-center transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "0.8s" }}
        >
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-12 border border-border relative overflow-hidden">
      
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 triangle-shape" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/5 diamond-shape" />
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-foreground mb-6">Ready to Join Our Community?</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
                Connect with thousands of fitness enthusiasts, share your progress, and get motivated by others on their
                journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary hover:bg-secondary text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Join Community
                </button>
                <button className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                  Download App
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
