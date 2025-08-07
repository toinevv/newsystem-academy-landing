import Navbar from "@/components/navbar"
import ProductHero from "@/components/product-hero"
import ProductDetails from "@/components/product-details"
import Features from "@/components/features"
import ProductUseCases from "@/components/product-use-cases"
import Faq from "@/components/faq"
import CallToAction from "@/components/call-to-action"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

export default function ProductPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ProductHero />
      <section id="product-details">
        <ProductDetails />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="use-cases">
        <ProductUseCases />
      </section>
      <section id="faq">
        <Faq />
      </section>
      <CallToAction />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
