import { MessageSquare, Search, Bot } from "lucide-react"

export default function Solution() {
  return (
    <section className="section">
      <div className="container-custom">
        <h2 className="section-title text-center">From Process Mining to Custom AI Agents in 3 Steps</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-md p-6 flex flex-col items-center text-center transition-all hover:bg-white/10">
            <div className="bg-[#2DD4BF]/10 p-4 rounded-full mb-6">
              <MessageSquare size={24} strokeWidth={1.5} className="text-[#2DD4BF]" />
            </div>
            <h3 className="font-medium">1. Mine Processes</h3>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-md p-6 flex flex-col items-center text-center transition-all hover:bg-white/10">
            <div className="bg-[#2DD4BF]/10 p-4 rounded-full mb-6">
              <Search size={24} strokeWidth={1.5} className="text-[#2DD4BF]" />
            </div>
            <h3 className="font-medium">2. Identify Automation Opportunities</h3>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-md p-6 flex flex-col items-center text-center transition-all hover:bg-white/10">
            <div className="bg-[#2DD4BF]/10 p-4 rounded-full mb-6">
              <Bot size={24} strokeWidth={1.5} className="text-[#2DD4BF]" />
            </div>
            <h3 className="font-medium">3. Deploy Custom AI Agents</h3>
          </div>
        </div>
      </div>
    </section>
  )
}
