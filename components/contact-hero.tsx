import Link from "next/link"

export default function ContactHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-16 bg-[#051a25]">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mb-6">Get in Touch</h1>
          <p className="text-xl text-[#FFFFFF]/90 mb-8">
            Have questions about how NewSystem.AI can transform your warehouse operations? Just want chat about our product or collaborate feel free to plan somethign below.
          </p>

          <Link
            href="https://calendly.com/ta-voeten/30-minute-meeting-clone"
            className="bg-[#2DD4BF] text-[#03202F] font-medium py-3 px-8 rounded-md inline-block transition-all hover:bg-opacity-90"
          >
            Speak to Us Live
          </Link>
        </div>
      </div>
    </section>
  )
}
