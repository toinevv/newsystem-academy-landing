import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import ProblemStatement from "@/components/problem-statement"
import MissionStatement from "@/components/mission-statement"
import SocialProof from "@/components/social-proof"
import UseCases from "@/components/use-cases"
import Faq from "@/components/faq"
import CallToAction from "@/components/call-to-action"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProblemStatement />
      <MissionStatement />
      <SocialProof />
      <UseCases />
      <Faq />
      <CallToAction />
      <Footer />
    </main>
  )
}
