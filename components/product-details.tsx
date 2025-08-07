import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function ProductDetails() {
  return (
    <section id="product-details" className="section bg-[#051a25]">
      <div className="container-custom">
        <h2 className="section-title text-center">The 3-Layer Platform Vision</h2>

        <div className="mt-16 space-y-24">
          {/* Layer 1: Observation Infrastructure */}
          <div id="process-mining" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Layer 1: Observation Infrastructure</h3>
              <p className="text-lg mb-6 text-[#FFFFFF]/90">
                We capture your operational workflows through non-intrusive monitoring.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ArrowRight className="text-[#2DD4BF] mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong>What:</strong> Intelligent screen recording that captures how operators actually work
                  </span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-[#2DD4BF] mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Why:</strong> You can't improve what you can't see
                  </span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-[#2DD4BF] mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong>How:</strong> Non-invasive monitoring that respects privacy while capturing workflows
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative h-[300px] order-1 lg:order-2">
              <Image
                src="/images/engineer-time-ticking.png"
                alt="Warehouse engineers identifying processes with time efficiency"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Layer 2: Translation Engine */}
          <div id="agent-creation" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px]">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="AI agent creation"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Layer 2: Translation Engine</h3>
              <p className="text-lg mb-6 text-[#FFFFFF]/90">
                We convert operational insights into clear technical specifications.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ArrowRight className="text-[#2DD4BF] mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong>What:</strong> AI that converts operational patterns into technical specifications
                  </span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-[#2DD4BF] mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Why:</strong> Bridges the language gap between operations and engineering
                  </span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-[#2DD4BF] mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong>How:</strong> Pattern recognition + logistics domain knowledge + specification generation
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Layer 3: Implementation Accelerator */}
          <div id="deployment" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Layer 3: Implementation Accelerator</h3>
              <p className="text-lg mb-6 text-[#FFFFFF]/90">
                We deploy your custom AI agents and continuously monitor their performance, making improvements and
                adjustments as your business evolves.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ArrowRight className="text-[#2DD4BF] mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong>What:</strong> Tools and services that turn specs into working automation
                  </span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-[#2DD4BF] mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Why:</strong> Insights without action are worthless
                  </span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-[#2DD4BF] mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong>How:</strong> Both self-serve tools and done-for-you services
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative h-[300px] order-1 lg:order-2">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Deployment and optimization"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
