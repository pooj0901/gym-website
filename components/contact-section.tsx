"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Loader2, CheckCircle, XCircle } from "lucide-react"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500)) 
      console.log("Form submitted:", formData)

      setStatus("success")
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })

      setTimeout(() => setStatus("idle"), 3000) 
    } catch (err) {
      console.error(err)
      setStatus("error")
      setTimeout(() => setStatus("idle"), 3000)
    }
  }

  const contactInfo = [
    { icon: MapPin, title: "Visit Us", details: ["123 Fitness Street", "Downtown District", "City, State 12345"] },
    { icon: Phone, title: "Call Us", details: ["+1 (555) 123-4567", "+1 (555) 987-6543"] },
    { icon: Mail, title: "Email Us", details: ["info@fitpulse.com", "support@fitpulsegym.com"] },
    { icon: Clock, title: "Hours", details: ["Mon-Fri: 5:00 AM - 11:00 PM", "Sat-Sun: 6:00 AM - 10:00 PM"] },
  ]

  const faqs = [
    {
      question: "What should I bring for my first visit?",
      answer:
        "Just bring comfortable workout clothes, a water bottle, and a positive attitude! We provide towels and all equipment.",
    },
    {
      question: "Do you offer personal training?",
      answer:
        "Yes! We have certified personal trainers available for one-on-one sessions. Book a consultation to get started.",
    },
    {
      question: "Can I freeze my membership?",
      answer:
        "Absolutely. We offer flexible membership options including the ability to freeze your membership for up to 3 months per year.",
    },
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-card relative overflow-hidden">
  
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 triangle-shape" />
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-secondary/5 diamond-shape" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
     
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-card-foreground mb-6 text-balance">
            Get In <span className="text-primary block">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Ready to start your fitness journey? Contact us today and let's discuss how we can help you achieve your
            goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
 
          <div
            className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <Card className="bg-background border-border hover:border-primary/30 transition-colors duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">Send us a Message</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select a subject</option>
                        <option value="membership">Membership Inquiry</option>
                        <option value="personal-training">Personal Training</option>
                        <option value="classes">Group Classes</option>
                        <option value="facilities">Facilities Tour</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us about your fitness goals and how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-primary hover:bg-secondary text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : status === "success" ? (
                      <>
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        Sent!
                      </>
                    ) : status === "error" ? (
                      <>
                        <XCircle className="h-5 w-5 text-red-500" />
                        Failed
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </CardContent>
            </Card>
          </div>


      
          <div className="space-y-8">
     
            <div className={`transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-background border-border hover:border-primary/30">
                    <CardContent className="p-6 flex gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{info.title}</h4>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-muted-foreground">{detail}</p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>


            <div className={`transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
              <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
              <div className="flex flex-col lg:flex-row gap-4">
                {faqs.map((faq, index) => (
                  <Card key={index} className="flex-1 bg-background border-border hover:border-primary/30">
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-3">{faq.question}</h4>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

  
        <div className={`mt-16 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <Card className="bg-background border-border overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-96 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h4 className="text-2xl font-bold mb-2">Find Us Here</h4>
                  <p className="text-muted-foreground">123 Fitness Street, Downtown District</p>
                  <Badge className="mt-4 bg-primary text-primary-foreground">Interactive Map Coming Soon</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
