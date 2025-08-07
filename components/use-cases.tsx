import Image from "next/image"
import { getLandingUseCases } from "@/app/actions/use-cases"

export default async function UseCases() {
  const useCases = await getLandingUseCases()

  // If no use cases are available, don't render the section
  if (!useCases || useCases.length === 0) {
    return null
  }

  return (
    <section id="use-cases" className="section">
      <div className="container-custom">
        <h2 className="section-title text-center">Use Cases</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase) => (
            <div
              key={useCase.id}
              className="bg-[#051a25] p-6 shadow-md rounded-md transition-all duration-200 ease-in-out hover:shadow-lg hover:scale-[1.02]"
            >
              <div className="relative h-48 mb-6 overflow-hidden rounded-md">
                <Image
                  src={useCase.image_url || "/placeholder.svg?height=200&width=300"}
                  alt={useCase.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <h3 className="font-medium mb-3">{useCase.title}</h3>
              <p className="text-[#FFFFFF]/80">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
