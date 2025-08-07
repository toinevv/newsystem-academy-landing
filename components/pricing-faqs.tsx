"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What exactly happens in a pilot?",
    answer:
      "We embed our technology with your team for 4 weeks, record actual workflows, identify the highest-impact automation opportunity, build it, and deliver a working solution plus roadmap for expansion.",
  },
  {
    question: "How does the €13,800 credit work?",
    answer:
      "Simple - if you sign an annual platform contract after your pilot, we subtract the full €13,800 from your first year's fees. The pilot essentially becomes free.",
  },
  {
    question: "What if we want you to build more automations after the pilot?",
    answer:
      "That's where our implementation services come in. After seeing pilot results, we can discuss a custom package for ongoing automation development.",
  },
  {
    question: "Do we need technical staff to use the platform?",
    answer:
      "For the platform-only option, yes. But many clients choose our implementation services where we handle all technical work.",
  },
  {
    question: "What systems do you integrate with?",
    answer: "All major WMS, ERP, and communication platforms. During the pilot, we map your exact tech stack.",
  },
]

export default function PricingFaqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section bg-[#051a25]">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#03202F] border border-white/10 rounded-lg">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                >
                  <span className="font-medium">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="text-[#2DD4BF] flex-shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-[#2DD4BF] flex-shrink-0" size={20} />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-[#FFFFFF]/80">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
