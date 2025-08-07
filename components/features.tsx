import { MessageCircle, Store, Settings, TrendingUp } from "lucide-react"

export default function Features() {
  return (
    <section id="features" className="section bg-[#051a25]">
      <div className="container-custom">
        <h2 className="section-title text-center">Key Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mt-12">
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="bg-[#2DD4BF]/10 p-4 rounded-full">
                <MessageCircle size={28} className="text-[#2DD4BF]" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Natural Process Capture</h3>
              <p className="text-[#FFFFFF]/80">
                We observe your operations through conversations and workflow monitoring. No disruption to your daily operations.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="bg-[#2DD4BF]/10 p-4 rounded-full">
                <Store size={28} className="text-[#2DD4BF]" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Operational-to-Technical Translation</h3>
              <p className="text-[#FFFFFF]/80">
                We transform complex logistics operations into clear technical specifications that engineers can implement.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="bg-[#2DD4BF]/10 p-4 rounded-full">
                <Settings size={28} className="text-[#2DD4BF]" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Implementation Acceleration</h3>
              <p className="text-[#FFFFFF]/80">
                Reduce the time from concept to working solution by 70%. Eliminate costly back-and-forth between operations and tech teams.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="bg-[#2DD4BF]/10 p-4 rounded-full">
                <TrendingUp size={28} className="text-[#2DD4BF]" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Perfect Operational Alignment</h3>
              <p className="text-[#FFFFFF]/80">
                Our solutions match exactly how your team actually works, not how someone thinks they work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
