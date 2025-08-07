import Image from "next/image"
import { Linkedin, Twitter, Github } from "lucide-react"

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Toine Voeten",
      role: "Founder & CEO",
      bio: "2 years in third-party warehousing and Flexport freight forwarding. After identifying opportunities to enhance logistics operations with AI, I started NewSystem.ai.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Soon",
      role: "CTO",
      bio: "Profile: Master's in Artificial Intelligence with years of practical coding and product building experience.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Soon",
      role: "CRO",
      bio: "Profile: Experienced sales leader who deeply understands the logistics industry's challenges and is passionate about driving AI adoption.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
  ]

  return (
    <section id="team" className="section bg-[#051a25]">
      <div className="container-custom">
        <h2 className="section-title text-center">Team</h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          We combine expertise in logistics operations, artificial intelligence, and product development to create
          solutions that transform warehouse operations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-[#03202F] p-6 shadow-md rounded-md transition-all duration-200 ease-in-out hover:shadow-lg"
            >
              <div className="relative h-64 mb-6 overflow-hidden rounded-md">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="font-semibold mb-1">{member.name}</h3>
              <p className="text-[#2DD4BF] font-medium mb-4">{member.role}</p>
              <p className="text-[#FFFFFF]/80 mb-4">{member.bio}</p>
              <div className="flex space-x-3">
                {member.social.linkedin && (
                  <a href={member.social.linkedin} className="text-[#FFFFFF]/70 hover:text-[#2DD4BF] transition-all">
                    <Linkedin size={20} strokeWidth={1.5} />
                  </a>
                )}
                {member.social.twitter && (
                  <a href={member.social.twitter} className="text-[#FFFFFF]/70 hover:text-[#2DD4BF] transition-all">
                    <Twitter size={20} strokeWidth={1.5} />
                  </a>
                )}
                {member.social.github && (
                  <a href={member.social.github} className="text-[#FFFFFF]/70 hover:text-[#2DD4BF] transition-all">
                    <Github size={20} strokeWidth={1.5} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
