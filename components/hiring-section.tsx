export default function HiringSection() {
  const openPositions = [
    {
      title: "Co-Founder - Technical - CTO",
      location: "San Francisco / EU/ Remote",
      type: "Full-time",
    },
    {
      title: "Co-Founder - Sales",
      location: "San Franciso / EU / Remote",
      type: "Full-time",
    },
    {
      title: "AI Engineer",
      location: "Remote",
      type: "Full-time",
    },
  ]

  return (
    <section id="hiring" className="section bg-[#051a25]">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title">Join Our Team</h2>
          <p className="text-xl mb-12">We're looking for individuals who want to transform the logistics industry.</p>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-md p-8 mb-10">
            <h3 className="text-2xl font-semibold mb-6">Open Positions</h3>
            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border-b border-white/10 last:border-0"
                >
                  <div>
                    <h4 className="font-medium text-xl mb-1">{position.title}</h4>
                    <p className="text-[#FFFFFF]/70">
                      {position.location} · {position.type}
                    </p>
                  </div>
                  <a
                    href="mailto:info@newsystem.ai"
                    className="mt-3 md:mt-0 bg-[#2DD4BF] text-[#03202F] font-medium py-2 px-4 rounded-md transition-all duration-200 ease-in-out hover:bg-opacity-90"
                  >
                    Apply Now
                  </a>
                </div>
              ))}
            </div>
          </div>

          <p className="text-[#FFFFFF]/90 mb-6">
            Don't see a position that fits your skills? We're always looking for talented individuals to join our team.
          </p>

          <a
            href="mailto:info@newsystem.ai"
            className="border border-[#2DD4BF] text-[#2DD4BF] font-medium py-3 px-6 transition-all duration-200 ease-in-out hover:bg-[#2DD4BF] hover:bg-opacity-10 rounded-md inline-block"
          >
            Contact Us About Opportunities
          </a>
        </div>
      </div>
    </section>
  )
}
