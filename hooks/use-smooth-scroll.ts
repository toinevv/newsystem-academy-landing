"use client"

export function useSmoothScroll() {
  const scrollToSection = (sectionId: string) => {
    // Remove the # if it's included
    const id = sectionId.startsWith("#") ? sectionId.substring(1) : sectionId

    const element = document.getElementById(id)
    if (element) {
      // Scroll to the element smoothly
      element.scrollIntoView({ behavior: "smooth" })

      // Update URL without causing a page reload
      if (window.history && window.location) {
        const newUrl = window.location.pathname + "#" + id
        window.history.pushState({ path: newUrl }, "", newUrl)
      }
    }
  }

  return { scrollToSection }
}
