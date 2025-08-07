import { TrendingUp, Package, Code } from "lucide-react"

export default function ProblemStatement() {
  return (
    <section className="section bg-[#051a25]">
      <div className="container-custom">
        <h2 className="section-title text-center">Don't Miss the AI Revolution in Logistics</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-[#051a25] p-6 shadow-md rounded-md transition-all duration-200 ease-in-out hover:shadow-lg hover:scale-[1.02] flex flex-col items-center text-center">
            <div className="bg-[#2DD4BF]/10 p-4 rounded-full mb-6">
              <TrendingUp size={24} strokeWidth={1.5} className="text-[#2DD4BF]" />
            </div>
            <h3 className="font-medium">Auto-Detect Improvement Opportunities</h3>
          </div>

          <div className="bg-[#051a25] p-6 shadow-md rounded-md transition-all duration-200 ease-in-out hover:shadow-lg hover:scale-[1.02] flex flex-col items-center text-center">
            <div className="bg-[#2DD4BF]/10 p-4 rounded-full mb-6">
              <Package size={24} strokeWidth={1.5} className="text-[#2DD4BF]" />
            </div>
            <h3 className="font-medium">Complex Operations into AI Use Cases </h3>
          </div>

          <div className="bg-[#051a25] p-6 shadow-md rounded-md transition-all duration-200 ease-in-out hover:shadow-lg hover:scale-[1.02] flex flex-col items-center text-center">
            <div className="bg-[#2DD4BF]/10 p-4 rounded-full mb-6">
              <Code size={24} strokeWidth={1.5} className="text-[#2DD4BF]" />
            </div>
            <h3 className="font-medium">No Software Engineer Costs to Translate Ops Needs</h3>
          </div>
        </div>
      </div>
    </section>
  )
}
