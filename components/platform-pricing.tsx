import Link from "next/link"
import { Check } from "lucide-react"

export default function PlatformPricing() {
  return (
    <section id="platform-plans" className="section">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-4">Platform Plans</h2>

          {/* Do-It-Yourself Platform */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8">Self-Serve Platform Options</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Starter */}
              <div className="bg-[#051a25] border border-white/10 rounded-lg p-8">
                <h4 className="text-xl font-bold mb-2">Starter</h4>
                <div className="text-3xl font-bold text-[#2DD4BF] mb-4">
                  €2,300<span className="text-lg text-[#FFFFFF]/70">/month</span>
                </div>
                <p className="text-[#FFFFFF]/80 mb-6">Up to 10 operators</p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="text-[#2DD4BF] mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">Workflow recording & analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-[#2DD4BF] mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">AI automation insights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-[#2DD4BF] mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">Basic integrations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-[#2DD4BF] mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">Email support</span>
                  </li>
                </ul>
              </div>

              {/* Growth */}
              <div className="bg-[#051a25] border-2 border-[#2DD4BF] rounded-lg p-8 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#2DD4BF] text-[#03202F] px-3 py-1 rounded-full text-xs font-bold">POPULAR</span>
                </div>

                <h4 className="text-xl font-bold mb-2">Growth</h4>
                <div className="text-3xl font-bold text-[#2DD4BF] mb-4">
                  €4,600<span className="text-lg text-[#FFFFFF]/70">/month</span>
                </div>
                <p className="text-[#FFFFFF]/80 mb-6">Up to 25 operators</p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="text-[#2DD4BF] mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">Everything in Starter plus:</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-[#2DD4BF] mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">Advanced pattern detection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-[#2DD4BF] mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">Multi-warehouse support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-[#2DD4BF] mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">Priority support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-[#2DD4BF] mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">Integration templates</span>
                  </li>
                </ul>
              </div>

              {/* Enterprise */}
              <div className="bg-[#051a25] border border-white/10 rounded-lg p-8">
                <h4 className="text-xl font-bold mb-2">Enterprise</h4>
                <div className="text-3xl font-bold text-[#2DD4BF] mb-4">Let's Talk</div>
                <p className="text-[#FFFFFF]/80 mb-6">Unlimited scale</p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="text-[#2DD4BF] mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">Everything in Growth plus:</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-[#2DD4BF] mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">Custom modules</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-[#2DD4BF] mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">Dedicated success manager</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-[#2DD4BF] mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">SLA guarantees</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-[#2DD4BF] mt-1 flex-shrink-0" size={16} />
                    <span className="text-sm">Global deployment</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-center text-[#FFFFFF]/70 mt-6">*Annual commitment. Pilot fee credited to first year.</p>
            <p className="text-center text-[#2DD4BF] mt-2 font-medium">
              Platform available immediately - no pilot required for technical teams
            </p>
          </div>

          {/* Full Implementation Services */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4">Full Implementation Services</h3>
            <p className="text-lg text-[#2DD4BF] mb-6">Custom Pricing | Starting after successful pilot</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="font-semibold mb-4">What we handle:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <Check className="text-[#2DD4BF] mt-1 flex-shrink-0" size={16} />
                    <span>Complete automation development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-[#2DD4BF] mt-1 flex-shrink-0" size={16} />
                    <span>Multi-system integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-[#2DD4BF] mt-1 flex-shrink-0" size={16} />
                    <span>Continuous optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-[#2DD4BF] mt-1 flex-shrink-0" size={16} />
                    <span>No technical team needed</span>
                  </li>
                </ul>
              </div>

              <div className="text-center md:text-right">
                <Link
                  href="/contact"
                  className="border border-[#2DD4BF] text-[#2DD4BF] font-medium py-3 px-6 rounded-md transition-all duration-200 ease-in-out hover:bg-[#2DD4BF] hover:bg-opacity-10 inline-block"
                >
                  Discuss Implementation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
