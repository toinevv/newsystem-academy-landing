import { ArrowRight, Target, Database, TrendingUp } from "lucide-react"

export default function PricingHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6">Start With Proof, Scale With Confidence</h1>
          <p className="text-xl text-[#FFFFFF]/90 mb-12">
            Every pilot fee is 100% credited toward your annual contract. Zero risk, guaranteed value.
          </p>

          {/* 3-Step Visual Progression */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-16">
            {/* Pilot Step */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 text-center min-w-[220px]">
              <Target className="text-[#2DD4BF] mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-[#2DD4BF] mb-2">Pilot</h3>
              <p className="text-sm text-[#FFFFFF]/60 mb-3">Optional Start</p>
              <p className="text-xs text-[#FFFFFF]/80">Week 1-4</p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-xs text-[#FFFFFF]/70">From assumptions</p>
                <div className="w-full bg-white/10 rounded-full h-2 mt-2">
                  <div className="bg-[#2DD4BF] h-2 rounded-full w-1/4"></div>
                </div>
              </div>
            </div>

            <ArrowRight className="text-[#2DD4BF] hidden md:block" size={24} />
            <div className="md:hidden text-[#2DD4BF]">↓</div>

            {/* Platform Step */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 text-center min-w-[220px]">
              <Database className="text-[#2DD4BF] mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-[#2DD4BF] mb-2">Platform</h3>
              <p className="text-sm text-[#FFFFFF]/60 mb-3">Core Solution</p>
              <p className="text-xs text-[#FFFFFF]/80">Month 2+</p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-xs text-[#FFFFFF]/70">To data insights</p>
                <div className="w-full bg-white/10 rounded-full h-2 mt-2">
                  <div className="bg-[#2DD4BF] h-2 rounded-full w-2/3"></div>
                </div>
              </div>
            </div>

            <ArrowRight className="text-[#2DD4BF] hidden md:block" size={24} />
            <div className="md:hidden text-[#2DD4BF]">↓</div>

            {/* Scale Step */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 text-center min-w-[220px]">
              <TrendingUp className="text-[#2DD4BF] mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-[#2DD4BF] mb-2">Scale</h3>
              <p className="text-sm text-[#FFFFFF]/60 mb-3">Unlimited Growth</p>
              <p className="text-xs text-[#FFFFFF]/80">Continuous</p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-xs text-[#FFFFFF]/70">To data-driven decisions</p>
                <div className="w-full bg-white/10 rounded-full h-2 mt-2">
                  <div className="bg-[#2DD4BF] h-2 rounded-full w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
