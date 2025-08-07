import Image from "next/image"

export default function SocialProof() {
  return (
    <section className="section bg-[#051a25]">
      <div className="container-custom">
        <h2 className="section-title text-center">Trusted by Industry Leaders</h2>

        <div className="flex flex-wrap justify-center gap-12 mt-12 opacity-70">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="relative w-32 h-16 transition-all hover:opacity-100">
              <Image
                src="/placeholder.svg?height=64&width=128"
                alt={`Client logo ${i}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
