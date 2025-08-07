import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Github, Building2 } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#021824] pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">NewSystem.AI</h3>
            <p className="text-[#FFFFFF]/70 mb-4">Transforming operations with AI.</p>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/company/new-system-ai"
                className="text-[#FFFFFF]/70 hover:text-[#2DD4BF] transition-all"
              >
                <Linkedin size={20} strokeWidth={1.5} />
              </Link>
              <Link href="#" className="text-[#FFFFFF]/70 hover:text-[#2DD4BF] transition-all">
                <Github size={20} strokeWidth={1.5} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-[#FFFFFF]/70 hover:text-[#2DD4BF] transition-all">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/product" className="text-[#FFFFFF]/70 hover:text-[#2DD4BF] transition-all">
                  Product
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#FFFFFF]/70 hover:text-[#2DD4BF] transition-all">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#FFFFFF]/70 hover:text-[#2DD4BF] transition-all">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="https://dashboard.newsystem.ai"
                  className="text-[#FFFFFF]/70 hover:text-[#2DD4BF] transition-all"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-[#FFFFFF]/70 hover:text-[#2DD4BF] transition-all">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#FFFFFF]/70 hover:text-[#2DD4BF] transition-all">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/about#hiring" className="text-[#FFFFFF]/70 hover:text-[#2DD4BF] transition-all">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#FFFFFF]/70 hover:text-[#2DD4BF] transition-all">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#FFFFFF]/70 hover:text-[#2DD4BF] transition-all">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={20} strokeWidth={1.5} className="text-[#2DD4BF] mr-3 mt-1 flex-shrink-0" />
                <span className="text-[#FFFFFF]/70">info@newsystem.ai</span>
              </li>
              <li className="flex items-start">
                <Phone size={20} strokeWidth={1.5} className="text-[#2DD4BF] mr-3 mt-1 flex-shrink-0" />
                <span className="text-[#FFFFFF]/70">+31 6</span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} strokeWidth={1.5} className="text-[#2DD4BF] mr-3 mt-1 flex-shrink-0" />
                <div className="text-[#FFFFFF]/70">
                  <div>Prinsengracht</div>
                  <div>Amsterdam, 1017 KA</div>
                  <div>Netherlands</div>
                </div>
              </li>
              <li className="flex items-start">
                <Building2 size={20} strokeWidth={1.5} className="text-[#2DD4BF] mr-3 mt-1 flex-shrink-0" />
                <div className="text-[#FFFFFF]/70">
                  <div>New System AI</div>
                  <div>KVK: 86492101</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#FFFFFF]/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#FFFFFF]/70 text-sm mb-4 md:mb-0">
              &copy; {currentYear} NewSystem.AI. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-[#FFFFFF]/70 hover:text-[#2DD4BF] text-sm transition-all">
                Privacy Policy
              </Link>
              <Link href="#" className="text-[#FFFFFF]/70 hover:text-[#2DD4BF] text-sm transition-all">
                Terms of Service
              </Link>
              <Link href="#" className="text-[#FFFFFF]/70 hover:text-[#2DD4BF] text-sm transition-all">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
