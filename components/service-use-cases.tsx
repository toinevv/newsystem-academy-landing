import Image from "next/image"
import { getUseCasesByType } from "@/app/actions/use-cases"

export default async function ServiceUseCases() {
  const useCases = await getUseCasesByType("service")

  // If no use cases are available, don't render the section
  if (!useCases || useCases.length === 0) {
    return null
  }

  return (
    <section id="use-cases" className="section">
      <div className="container-custom">
        <h2 className="section-title text-center">Service Use Cases</h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          Discover how our implementation and consulting services deliver custom solutions for complex operational
          challenges.
        </p>

        <div className="space-y-16">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">{useCase.title}</h3>
                <p className="text-lg mb-6 text-[#FFFFFF]/90">{useCase.description}</p>
                <div className="bg-[#051a25] border border-white/10 rounded-md p-6">
                  <p className="text-[#FFFFFF]/80 leading-relaxed">
                    {useCase.detailed_description || useCase.description}
                  </p>
                </div>
              </div>
              <div className={`relative h-[300px] ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <Image
                  src={useCase.image_url || "/placeholder.svg?height=300&width=500"}
                  alt={useCase.title}
                  fill
                  className="object-contain rounded-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
