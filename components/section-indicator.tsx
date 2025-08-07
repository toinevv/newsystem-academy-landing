"use client"

import { useSectionNavigation } from "@/hooks/use-section-navigation"

interface SectionIndicatorProps {
  sections: Array<{ id: string; label: string }>
}

export default function SectionIndicator({ sections }: SectionIndicatorProps) {
  const { activeSection, scrollToSection } = useSectionNavigation()

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col items-center space-y-4">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group flex items-center"
            aria-label={`Navigate to ${section.label} section`}
          >
            <span className="opacity-0 group-hover:opacity-100 mr-2 text-sm font-medium transition-opacity duration-200">
              {section.label}
            </span>
            <div
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? "bg-blue-500 scale-125"
                  : "bg-gray-300 dark:bg-gray-600 group-hover:bg-blue-300"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
