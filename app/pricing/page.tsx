import Navbar from "@/components/navbar"
import PricingHero from "@/components/pricing-hero"
import PilotProgram from "@/components/pilot-program"
import PlatformPricing from "@/components/platform-pricing"
import ROICalculator from "@/components/roi-calculator"
import PricingHowItWorks from "@/components/pricing-how-it-works"
import PricingFaqs from "@/components/pricing-faqs"
import PricingCTA from "@/components/pricing-cta"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PricingHero />
      <PilotProgram />
      <PlatformPricing />
      <ROICalculator />
      <PricingHowItWorks />
      <PricingFaqs />
      <PricingCTA />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
