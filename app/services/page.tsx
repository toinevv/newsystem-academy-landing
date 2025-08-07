import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ServiceUseCases from "@/components/service-use-cases"

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Services</h1>
            <p className="text-xl text-[#FFFFFF]/90 mb-8">
              Our comprehensive services to transform your warehouse operations with AI.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div id="implementation" className="bg-[#051a25] p-6 rounded-md">
                <h2 className="text-2xl font-semibold mb-4">Implementation</h2>
                <p className="text-[#FFFFFF]/80">
                  End-to-end implementation of AI solutions in your warehouse operations.
                </p>
              </div>

              <div id="custom-automation" className="bg-[#051a25] p-6 rounded-md">
                <h2 className="text-2xl font-semibold mb-4">Custom Automation</h2>
                <p className="text-[#FFFFFF]/80">
                  Tailored automation solutions designed specifically for your workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceUseCases />
      <Footer />
    </main>
  )
}
