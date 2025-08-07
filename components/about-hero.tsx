import Image from "next/image"

export default function AboutHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="mb-6">About NewSystem.AI</h1>
            <div className="space-y-6">
              <p className="text-xl text-[#FFFFFF]/90">
                The logistics industry is undergoing a fundamental transformation powered by AI.
              </p>
              <p className="text-lg text-[#FFFFFF]/80">
                After working at Flexport and experiencing third-party logistics operations firsthand, I discovered a fundamental truth: The people who best understand what needs to be automated (operators) can't effectively communicate it to the people who build automation (engineers).
              </p>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px]">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="NewSystem.AI team working on logistics solutions"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
