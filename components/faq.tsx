"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

export default function Faq() {
  const faqs = [
    {
      question: "Where are you based?",
      answer:
        "NewSystem.AI is headquartered in Amsterdam with additional partners in SF and London. Our team works with warehouse operations across North America and Europe.",
    },
    {
      question: "Can you build AI agents from our processes?",
      answer:
        "We use a combination of natural language processing and process mining technology to extract insights from operators. These insights are then used to identify automation opportunities and build custom AI agents tailored to your specific workflows.",
    },
    {
      question: "What types of warehouse tasks can be automated?",
      answer:
        "AI agents can automate a wide range of warehouse tasks, including inventory forecasting, order processing, exception handling, route optimization, quality control, and more. Any repetitive, data-driven process is a good candidate for automation.",
    },
    {
      question: "What do your solutions cost?",
      answer:
        "Our pricing is based on the complexity of your  operations a. We offer flexible subscription plans starting at $2,500 per month, with custom enterprise pricing available for larger operations.",
    },
    {
      question: "Are you open for investments?",
      answer:
        "We're currently focused on building and selling our product. While we're not raising new investment at this stage, we're always open to meeting potential partners for future opportunities.",
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section">
      <div className="container-custom">
        <h2 className="section-title text-center">Frequently Asked Questions</h2>

        <div className="max-w-3xl mx-auto mt-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-md divide-y divide-white/10">
          {faqs.map((faq, index) => (
            <div key={index} className="border-white/10">
              <button
                className="flex justify-between items-center w-full py-6 px-6 text-left"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="font-medium">{faq.question}</h3>
                <span>
                  {openIndex === index ? (
                    <Minus size={20} strokeWidth={1.5} className="text-[#2DD4BF]" />
                  ) : (
                    <Plus size={20} strokeWidth={1.5} className="text-[#2DD4BF]" />
                  )}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 pb-6 px-6" : "max-h-0"
                }`}
              >
                <p className="text-[#FFFFFF]/80">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
