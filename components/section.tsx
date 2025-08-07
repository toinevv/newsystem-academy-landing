import type { ReactNode } from "react"

interface SectionProps {
  id: string
  title: string
  children: ReactNode
  className?: string
  color?: "light" | "dark" | "accent"
}

export default function Section({ id, title, children, className = "", color = "light" }: SectionProps) {
  const bgColor = {
    light: "bg-white dark:bg-gray-900",
    dark: "bg-gray-100 dark:bg-gray-800",
    accent: "bg-blue-50 dark:bg-blue-900/20",
  }

  return (
    <section id={id} className={`py-16 md:py-24 scroll-mt-16 ${bgColor[color]} ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">{title}</h2>
        {children}
      </div>
    </section>
  )
}
