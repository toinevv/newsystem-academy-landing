import { Check } from "lucide-react"

export default function PilotProgram() {
  return (
    <section className="section bg-[#051a25]">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-4">Choose Your Starting Point</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Option 1: Jump Into Platform */}
            <div className="bg-[#03202F] border border-white/10 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-2">Platform</h3>
              <p className="text-[#FFFFFF]/80 text-lg mb-6">For teams ready to build</p>
              <p className="mb-6">Start using our platform today:</p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="text-[#2DD4BF] mt-1 flex-shrink-0" size={20} />
                  <span>Immediate access</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-[#2DD4BF] mt-1 flex-shrink-0" size={20} />
                  <span>Self-serve automation</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-[#2DD4BF] mt-1 flex-shrink-0" size={20} />
                  <span>From €2,300/month</span>
                </div>
              </div>

              <a
                href="#platform-plans"
                className="border border-[#2DD4BF] text-[#2DD4BF] font-medium py-3 px-6 rounded-md transition-all duration-200 ease-in-out hover:bg-[#2DD4BF] hover:bg-opacity-10 inline-block w-full text-center"
              >
                View Platform Plans ↓
              </a>
            </div>

            {/* Option 2: Start With Pilot */}
            <div className="bg-[#03202F] border border-white/10 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-2">Pilot</h3>
              <p className="text-[#FFFFFF]/80 text-lg mb-6">For teams wanting proof first</p>
              <p className="mb-6">See ROI before committing:</p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="text-[#2DD4BF] mt-1 flex-shrink-0" size={20} />
                  <span>4-week proof of concept</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-[#2DD4BF] mt-1 flex-shrink-0" size={20} />
                  <span>€13,800 (100% credited)</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-[#2DD4BF] mt-1 flex-shrink-0" size={20} />
                  <span>We build your first automation</span>
                </div>
              </div>

              <a
                href="https://calendly.com/toine-newsystem/pilot-assessment"
                className="bg-[#2DD4BF] text-[#03202F] font-bold py-3 px-6 rounded-md transition-all duration-200 ease-in-out hover:bg-opacity-90 inline-block w-full text-center"
              >
                Book Pilot Assessment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
