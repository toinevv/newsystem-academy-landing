export default function PricingHowItWorks() {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center">Your Journey to Automation</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Week 1-4: Pilot */}
            <div className="bg-[#051a25] border border-white/10 rounded-lg p-8">
              <h3 className="text-xl font-bold text-[#2DD4BF] mb-4">Week 1-4: Pilot</h3>
              <ul className="space-y-3 text-[#FFFFFF]/90">
                <li>• We record your actual workflows</li>
                <li>• AI identifies automation opportunities</li>
                <li>• We build one complete automation</li>
                <li>• You see real time savings</li>
              </ul>
            </div>

            {/* Month 2+: Platform */}
            <div className="bg-[#051a25] border border-white/10 rounded-lg p-8">
              <h3 className="text-xl font-bold text-[#2DD4BF] mb-4">Month 2+: Platform</h3>
              <ul className="space-y-3 text-[#FFFFFF]/90">
                <li>• Roll out to more operators</li>
                <li>• Access all insights</li>
                <li>• Build more automations</li>
                <li>• Track ROI continuously</li>
              </ul>
            </div>

            {/* Ongoing: Scale */}
            <div className="bg-[#051a25] border border-white/10 rounded-lg p-8">
              <h3 className="text-xl font-bold text-[#2DD4BF] mb-4">Ongoing: Scale</h3>
              <ul className="space-y-3 text-[#FFFFFF]/90">
                <li>• Expand to new processes</li>
                <li>• Add implementation help as needed</li>
                <li>• Optimize continuously</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
