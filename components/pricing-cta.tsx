import Link from "next/link"

export default function PricingCTA() {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title">Ready to Stop Wasting Time on Manual Work?</h2>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <a
              href="#platform-plans"
              className="border-2 border-[#2DD4BF] text-[#2DD4BF] font-bold py-4 px-8 rounded-md text-lg transition-all duration-200 ease-in-out hover:bg-[#2DD4BF]/10"
            >
              Start With Platform
              <div className="text-sm font-normal mt-1">From €2,300/month</div>
            </a>

            <Link
              href="https://calendly.com/toine-newsystem/30min"
              className="bg-[#2DD4BF] text-[#03202F] font-bold py-4 px-8 rounded-md text-lg transition-all duration-200 ease-in-out hover:bg-opacity-90 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Start With Pilot
              <div className="text-sm font-normal mt-1">€13,800 (fully credited)</div>
            </Link>
          </div>

          <p className="text-[#FFFFFF]/70 mt-6">
            Join 25+ logistics companies already saving thousands of hours monthly
          </p>
        </div>
      </div>
    </section>
  )
}
