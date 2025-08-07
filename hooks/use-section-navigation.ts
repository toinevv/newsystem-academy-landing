"use client"

import { useState, useEffect, useCallback } from "react"

export function useSectionNavigation() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  // Handle initial hash in URL
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      // Remove the # character
      const sectionId = hash.substring(1)

      // Wait for the page to fully load before scrolling
      setTimeout(() => {
        scrollToSection(sectionId, false)
        setActiveSection(sectionId)
      }, 500)
    }
  }, [])

  // Set up intersection observer to detect which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)

            // Update URL hash without scrolling
            const url = new URL(window.location.href)
            url.hash = entry.target.id
            window.history.replaceState({}, "", url.toString())
          }
        })
      },
      {
        rootMargin: "-20% 0px -70% 0px", // Consider a section in view when it's in the middle 10% of the viewport
        threshold: 0.1,
      },
    )

    // Observe all sections
    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  // Function to scroll to a section
  const scrollToSection = useCallback((sectionId: string, updateUrl = true) => {
    const section = document.getElementById(sectionId)
    if (section) {
      // Scroll to the section with smooth behavior
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })

      // Update the active section
      setActiveSection(sectionId)

      // Update URL hash if needed
      if (updateUrl) {
        const url = new URL(window.location.href)
        url.hash = sectionId
        window.history.pushState({}, "", url.toString())
      }
    }
  }, [])

  return { activeSection, scrollToSection }
}
