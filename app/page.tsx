import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SolutionsSection } from "@/components/solutions-section"
import { ProgramsSection } from "@/components/programs-section"
import { TeamSection } from "@/components/team-section"
import { CommunitySection } from "@/components/community-section"
import { ContactSection } from "@/components/contact-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SolutionsSection />
      <ProgramsSection />
      <TeamSection />
      <CommunitySection />
      <ContactSection />
    </main>
  )
}
