import Navbar from "@/components/navbar"
import AboutHero from "@/components/about-hero"
import TeamSection from "@/components/team-section"
import ProcessSection from "@/components/process-section"
import HiringSection from "@/components/hiring-section"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AboutHero />
      <TeamSection />
      <ProcessSection />
      <HiringSection />
      <Footer />
    </main>
  )
}
