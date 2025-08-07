import Image from "next/image"
import Link from "next/link"

export default function ProductHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="mb-6">AI-Powered Operations Translation</h1>
            <p className="text-xl mb-8 text-[#FFFFFF]/90">
              NewSystem.AI bridges the gap between warehouse operations and tech. We observe how your team works, create
              clear technical specifications, and deploy AI solutions that match your actual workflows.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#features"
                className="bg-[#2DD4BF] text-[#03202F] font-medium py-3 px-6 transition-all duration-200 ease-in-out hover:bg-opacity-90 rounded-md"
              >
                Explore Features
              </a>
              <Link
                href="https://demo.newsystem.ai"
                className="border border-[#2DD4BF] text-[#2DD4BF] font-medium py-3 px-6 transition-all duration-200 ease-in-out hover:bg-[#2DD4BF] hover:bg-opacity-10 rounded-md"
              >
                Try Demo
              </Link>
            </div>
          </div>

          <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
            <Image
              src="/images/process-recording-hub.png"
              alt="Warehouse worker using the Process Recording Hub"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
