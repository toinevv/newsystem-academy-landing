"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
      if (hoverTimeout) clearTimeout(hoverTimeout)
    }
  }, [hoverTimeout])

  const handleMouseEnter = (dropdown: string) => {
    if (hoverTimeout) clearTimeout(hoverTimeout)
    setActiveDropdown(dropdown)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null)
    }, 300) // Small delay to prevent menu from closing too quickly
    setHoverTimeout(timeout)
  }

  const handleNavClick = (path: string) => {
    // Close menus
    setActiveDropdown(null)
    setIsMenuOpen(false)

    // Check if the path contains a hash
    if (path.includes("#")) {
      const [basePath, hash] = path.split("#")

      // If we're already on the correct page, just scroll to the section
      if (
        (basePath === "" && pathname === "/") ||
        (basePath === "/product" && pathname === "/product") ||
        (basePath === "/about" && pathname === "/about") ||
        (basePath === "/services" && pathname === "/services")
      ) {
        // Directly scroll to the element
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
        return
      }

      // Navigate to the new page with the hash
      router.push(path)
    } else {
      router.push(path)
    }
  }

  const handleDropdownClick = (dropdown: string, mainPath: string) => {
    if (activeDropdown === dropdown) {
      // If dropdown is already open, navigate to main page
      setActiveDropdown(null)
      setIsMenuOpen(false)
      router.push(mainPath)
    } else {
      // Open dropdown
      setActiveDropdown(dropdown)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled || activeDropdown ? "bg-[#03202F]/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container-custom py-4 md:py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-white">NewSystem</span>
            <span className="text-[#2DD4BF]">.AI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {/* Product Dropdown */}
            <div className="relative" onMouseEnter={() => handleMouseEnter("product")} onMouseLeave={handleMouseLeave}>
              <div className="flex items-center">
                <button
                  onClick={() => handleDropdownClick("product", "/product")}
                  className="text-white hover:text-[#2DD4BF] transition-all flex items-center gap-1 cursor-pointer"
                >
                  Product
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${activeDropdown === "product" ? "rotate-180" : ""}`}
                  />
                </button>
              </div>

              {activeDropdown === "product" && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-[#051a25]/95 backdrop-blur-sm shadow-xl rounded-md border border-white/10 p-6">
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="/product#product-details"
                        className="text-white/80 hover:text-[#2DD4BF] flex items-center gap-1 transition-all"
                        onClick={(e) => {
                          e.preventDefault()
                          handleNavClick("/product#product-details")
                        }}
                      >
                        <ChevronRight size={14} className="text-[#2DD4BF]" />
                        How does it work?
                      </a>
                    </li>
                    <li>
                      <a
                        href="/product#features"
                        className="text-white/80 hover:text-[#2DD4BF] flex items-center gap-1 transition-all"
                        onClick={(e) => {
                          e.preventDefault()
                          handleNavClick("/product#features")
                        }}
                      >
                        <ChevronRight size={14} className="text-[#2DD4BF]" />
                        Platform features
                      </a>
                    </li>
                    <li>
                      <a
                        href="/product#use-cases"
                        className="text-white/80 hover:text-[#2DD4BF] flex items-center gap-1 transition-all"
                        onClick={(e) => {
                          e.preventDefault()
                          handleNavClick("/product#use-cases")
                        }}
                      >
                        <ChevronRight size={14} className="text-[#2DD4BF]" />
                        Use cases
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div className="relative" onMouseEnter={() => handleMouseEnter("services")} onMouseLeave={handleMouseLeave}>
              <div className="flex items-center">
                <button
                  onClick={() => handleDropdownClick("services", "/services")}
                  className="text-white hover:text-[#2DD4BF] transition-all flex items-center gap-1 cursor-pointer"
                >
                  Services
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${activeDropdown === "services" ? "rotate-180" : ""}`}
                  />
                </button>
              </div>

              {activeDropdown === "services" && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-[#051a25]/95 backdrop-blur-sm shadow-xl rounded-md border border-white/10 p-4">
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="/services#implementation"
                        className="text-white/80 hover:text-[#2DD4BF] flex items-center gap-1 transition-all"
                        onClick={(e) => {
                          e.preventDefault()
                          handleNavClick("/services#implementation")
                        }}
                      >
                        <ChevronRight size={14} className="text-[#2DD4BF]" />
                        Implementation
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services#custom-automation"
                        className="text-white/80 hover:text-[#2DD4BF] flex items-center gap-1 transition-all"
                        onClick={(e) => {
                          e.preventDefault()
                          handleNavClick("/services#custom-automation")
                        }}
                      >
                        <ChevronRight size={14} className="text-[#2DD4BF]" />
                        Custom automation
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services#use-cases"
                        className="text-white/80 hover:text-[#2DD4BF] flex items-center gap-1 transition-all"
                        onClick={(e) => {
                          e.preventDefault()
                          handleNavClick("/services#use-cases")
                        }}
                      >
                        <ChevronRight size={14} className="text-[#2DD4BF]" />
                        Use cases
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Pricing */}
            <Link href="/pricing" className="text-white hover:text-[#2DD4BF] transition-all">
              Pricing
            </Link>

            {/* About Dropdown */}
            <div className="relative" onMouseEnter={() => handleMouseEnter("about")} onMouseLeave={handleMouseLeave}>
              <div className="flex items-center">
                <button
                  onClick={() => handleDropdownClick("about", "/about")}
                  className="text-white hover:text-[#2DD4BF] transition-all flex items-center gap-1 cursor-pointer"
                >
                  About
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${activeDropdown === "about" ? "rotate-180" : ""}`}
                  />
                </button>
              </div>

              {activeDropdown === "about" && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-[#051a25]/95 backdrop-blur-sm shadow-xl rounded-md border border-white/10 p-4">
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="/about#team"
                        className="text-white/80 hover:text-[#2DD4BF] flex items-center gap-1 transition-all"
                        onClick={(e) => {
                          e.preventDefault()
                          handleNavClick("/about#team")
                        }}
                      >
                        <ChevronRight size={14} className="text-[#2DD4BF]" />
                        Team
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about#process"
                        className="text-white/80 hover:text-[#2DD4BF] flex items-center gap-1 transition-all"
                        onClick={(e) => {
                          e.preventDefault()
                          handleNavClick("/about#process")
                        }}
                      >
                        <ChevronRight size={14} className="text-[#2DD4BF]" />
                        Process
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about#hiring"
                        className="text-white/80 hover:text-[#2DD4BF] flex items-center gap-1 transition-all"
                        onClick={(e) => {
                          e.preventDefault()
                          handleNavClick("/about#hiring")
                        }}
                      >
                        <ChevronRight size={14} className="text-[#2DD4BF]" />
                        Careers
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Contact */}
            <Link href="/contact" className="text-white hover:text-[#2DD4BF] transition-all">
              Contact
            </Link>

            {/* Login & Try It */}
            <Link
              href="https://dashboard.newsystem.ai"
              className="border border-white/30 text-white/70 font-medium py-3 px-6 transition-all duration-200 ease-in-out hover:bg-white/10 rounded-md"
            >
              Login
            </Link>
            <Link
              href="https://demo.newsystem.ai"
              className="bg-[#2DD4BF] text-[#03202F] font-medium py-3 px-6 transition-all duration-200 ease-in-out hover:bg-opacity-90 rounded-md"
            >
              Try It
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-6 space-y-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-md mt-4 p-4">
            {/* Mobile Product */}
            <div>
              <div className="flex justify-between items-center w-full">
                <Link
                  href="/product"
                  className="text-white hover:text-[#2DD4BF] transition-all py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Product
                </Link>
                <button
                  className="text-white hover:text-[#2DD4BF] transition-all p-2"
                  onClick={() => setActiveDropdown(activeDropdown === "mobileProduct" ? null : "mobileProduct")}
                >
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${activeDropdown === "mobileProduct" ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
              {activeDropdown === "mobileProduct" && (
                <div className="pl-4 mt-2 space-y-2">
                  <a
                    href="/product#product-details"
                    className="block text-white/80 hover:text-[#2DD4BF] transition-all py-1"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick("/product#product-details")
                    }}
                  >
                    How does it work?
                  </a>
                  <a
                    href="/product#features"
                    className="block text-white/80 hover:text-[#2DD4BF] transition-all py-1"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick("/product#features")
                    }}
                  >
                    Platform features
                  </a>
                  <a
                    href="/product#use-cases"
                    className="block text-white/80 hover:text-[#2DD4BF] transition-all py-1"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick("/product#use-cases")
                    }}
                  >
                    Use cases
                  </a>
                </div>
              )}
            </div>

            {/* Mobile Services */}
            <div>
              <div className="flex justify-between items-center w-full">
                <Link
                  href="/services"
                  className="text-white hover:text-[#2DD4BF] transition-all py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <button
                  className="text-white hover:text-[#2DD4BF] transition-all p-2"
                  onClick={() => setActiveDropdown(activeDropdown === "mobileServices" ? null : "mobileServices")}
                >
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${activeDropdown === "mobileServices" ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
              {activeDropdown === "mobileServices" && (
                <div className="pl-4 mt-2 space-y-2">
                  <a
                    href="/services#implementation"
                    className="block text-white/80 hover:text-[#2DD4BF] transition-all py-1"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick("/services#implementation")
                    }}
                  >
                    Implementation
                  </a>
                  <a
                    href="/services#custom-automation"
                    className="block text-white/80 hover:text-[#2DD4BF] transition-all py-1"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick("/services#custom-automation")
                    }}
                  >
                    Custom automation
                  </a>
                  <a
                    href="/services#use-cases"
                    className="block text-white/80 hover:text-[#2DD4BF] transition-all py-1"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick("/services#use-cases")
                    }}
                  >
                    Use cases
                  </a>
                </div>
              )}
            </div>

            {/* Mobile Pricing */}
            <Link
              href="/pricing"
              className="block text-white hover:text-[#2DD4BF] transition-all py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>

            {/* Mobile About */}
            <div>
              <div className="flex justify-between items-center w-full">
                <Link
                  href="/about"
                  className="text-white hover:text-[#2DD4BF] transition-all py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <button
                  className="text-white hover:text-[#2DD4BF] transition-all p-2"
                  onClick={() => setActiveDropdown(activeDropdown === "mobileAbout" ? null : "mobileAbout")}
                >
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${activeDropdown === "mobileAbout" ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
              {activeDropdown === "mobileAbout" && (
                <div className="pl-4 mt-2 space-y-2">
                  <a
                    href="/about#team"
                    className="block text-white/80 hover:text-[#2DD4BF] transition-all py-1"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick("/about#team")
                    }}
                  >
                    Team
                  </a>
                  <a
                    href="/about#process"
                    className="block text-white/80 hover:text-[#2DD4BF] transition-all py-1"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick("/about#process")
                    }}
                  >
                    Process
                  </a>
                  <a
                    href="/about#hiring"
                    className="block text-white/80 hover:text-[#2DD4BF] transition-all py-1"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick("/about#hiring")
                    }}
                  >
                    Careers
                  </a>
                </div>
              )}
            </div>

            {/* Mobile Contact */}
            <Link
              href="/contact"
              className="block text-white hover:text-[#2DD4BF] transition-all py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            {/* Mobile Login & Try It */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="https://dashboard.newsystem.ai"
                className="border border-white/30 text-white/70 font-medium py-3 px-6 transition-all duration-200 ease-in-out hover:bg-white/10 rounded-md w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                href="https://demo.newsystem.ai"
                className="bg-[#2DD4BF] text-[#03202F] font-medium py-3 px-6 transition-all duration-200 ease-in-out hover:bg-opacity-90 rounded-md w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                Try It
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
