import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>

        <ul className="space-y-6">
          <li className="flex items-start">
            <Mail size={20} strokeWidth={1.5} className="text-[#2DD4BF] mr-3 mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium">Email</p>
              <a href="mailto:info@newsystem.ai" className="text-[#FFFFFF]/80 hover:text-[#2DD4BF] transition-all">
                info@newsystem.ai
              </a>
            </div>
          </li>

          <li className="flex items-start">
            <Phone size={20} strokeWidth={1.5} className="text-[#2DD4BF] mr-3 mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium">Phone</p>
              <a href="tel:+15551234567" className="text-[#FFFFFF]/80 hover:text-[#2DD4BF] transition-all">
                +31 646
              </a>
            </div>
          </li>

          <li className="flex items-start">
            <MapPin size={20} strokeWidth={1.5} className="text-[#2DD4BF] mr-3 mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium">Address</p>
              <address className="text-[#FFFFFF]/80 not-italic">
                Prinsengracht
                <br />
                Amsterdam, 1017 AI
                <br />
                Netherlands
              </address>
            </div>
          </li>

          <li className="flex items-start">
            <Clock size={20} strokeWidth={1.5} className="text-[#2DD4BF] mr-3 mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium">Business Hours</p>
              <p className="text-[#FFFFFF]/80">
                Monday - Saturday: 7:00 AM - 9:00 PM PST
                <br />
                Sunday: Closed
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-medium mb-4">Connect With Us</h3>
        <div className="flex space-x-4">
          <Link href="#" className="bg-white/10 p-3 rounded-full hover:bg-[#2DD4BF]/20 transition-all">
            <Linkedin size={20} strokeWidth={1.5} className="text-[#2DD4BF]" />
          </Link>
          <Link href="#" className="bg-white/10 p-3 rounded-full hover:bg-[#2DD4BF]/20 transition-all">
            <Twitter size={20} strokeWidth={1.5} className="text-[#2DD4BF]" />
          </Link>
        </div>
      </div>

      <div className="relative h-[300px] rounded-md overflow-hidden mt-8">
        <Image src="/placeholder.svg?height=300&width=500" alt="Office location map" fill className="object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-[#03202F]/60">
          <p className="text-white text-lg font-medium">Map placeholder</p>
        </div>
      </div>
    </div>
  )
}
