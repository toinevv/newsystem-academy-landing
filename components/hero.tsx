"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Video, Brain, Bot } from "lucide-react"
import PilotProgramModal from "./pilot-program-modal"

export default function Hero() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)
  const [isPilotModalOpen, setIsPilotModalOpen] = useState(false)
  const router = useRouter()

  const steps = [
    {
      id: 1,
      title: "CAPTURE",
      icon: Video,
      emoji: "📹",
      description: "We record how your operators actually work",
    },
    {
      id: 2,
      title: "ANALYZE",
      icon: Brain,
      emoji: "🧠",
      description: "AI spots patterns worth automating",
    },
    {
      id: 3,
      title: "DEPLOY AI",
      icon: Bot,
      emoji: "🤖",
      description: "Deploy custom automation or use our insights",
    },
  ]

  const handleStepClick = (stepId: number) => {
    router.push("/product#product-details")
  }

  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="mb-6">Operations to AI</h1>
              <div className="mb-8">
                <h2 className="text-xl mb-6 text-[#FFFFFF]/90">
                  Your team knows logistics. We turn that knowledge into working AI, making time for human details
                </h2>

                <div className="mb-8">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {steps.map((step) => {
                      const IconComponent = step.icon
                      return (
                        <div
                          key={step.id}
                          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-md p-4 flex flex-col items-center text-center transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-lg flex-1 cursor-pointer relative"
                          onMouseEnter={() => setHoveredStep(step.id)}
                          onMouseLeave={() => setHoveredStep(null)}
                          onClick={() => handleStepClick(step.id)}
                        >
                          <div className="bg-[#2DD4BF]/10 p-3 rounded-full mb-2 transition-all duration-300 hover:bg-[#2DD4BF]/20">
                            <IconComponent size={18} strokeWidth={1.5} className="text-[#2DD4BF]" />
                          </div>
                          <p className="text-sm font-medium">{step.title}</p>

                          {/* Hover tooltip - positioned above */}
                          {hoveredStep === step.id && (
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-[#051a25]/95 backdrop-blur-sm shadow-xl rounded-md border border-white/10 p-3 z-10">
                              <p className="text-sm text-white/90">{step.description}</p>
                              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#051a25] border-r border-b border-white/10 rotate-45"></div>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* New Button Section */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="https://calendly.com/toine-newsystem/30min"
                    className="bg-[#2DD4BF] text-[#03202F] font-medium py-4 px-8 rounded-md transition-all duration-200 ease-in-out hover:bg-opacity-90 text-center shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Book a Demo
                  </Link>
                  <button
                    onClick={() => setIsPilotModalOpen(true)}
                    className="border-2 border-[#2DD4BF] text-[#2DD4BF] font-medium py-4 px-8 rounded-md transition-all duration-200 ease-in-out hover:bg-[#2DD4BF]/10 text-center transform hover:scale-105"
                  >
                    Join Pilot Program
                  </button>
                </div>
              </div>
            </div>

            <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
              <Image
                src="/images/warehouse-worker.png"
                alt="Warehouse worker using AI-powered management system"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <PilotProgramModal isOpen={isPilotModalOpen} onClose={() => setIsPilotModalOpen(false)} />
    </>
  )
}
