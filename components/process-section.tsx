import Image from "next/image"
import Link from "next/link"
import { Youtube } from "lucide-react"

export default function ProcessSection() {
  const blogPosts = [
    {
      title: "How We're Mining Warehouse Processes",
      excerpt:
        "Learn about our approach to extracting valuable insights from warehouse operations through conversation-based process mining.",
      date: "March 15, 2025",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      title: "Building AI Agents for Inventory Management",
      excerpt:
        "Discover how we're creating custom AI agents that can predict inventory needs and optimize stock levels.",
      date: "February 28, 2025",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      title: "The Future of Warehouse Automation",
      excerpt: "Our vision for how AI will transform logistics operations over the next decade.",
      date: "January 20, 2025",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
  ]

  return (
    <section id="process" className="section">
      <div className="container-custom">
        <h2 className="section-title text-center">Process</h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          We're documenting our process of building NewSystem.AI to share insights and learnings with the community.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
          <Link
            href="https://youtube.com/@noskinfounder?si=dx7rnQ1XMbv96bD2"
            className="bg-[#FF0000] text-white px-6 py-4 rounded-md flex items-center gap-3 hover:bg-opacity-90 transition-all"
          >
            <Youtube size={24} strokeWidth={1.5} />
            <span className="font-medium">Watch Our Journey</span>
          </Link>
          <p className="text-[#FFFFFF]/80">
            Subscribe to our YouTube channel for behind-the-scenes videos on how we're building NewSystem.AI
          </p>
        </div>

        <h3 className="text-2xl font-semibold mb-8 text-center">Latest Blog Posts</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link key={index} href={post.link} className="group">
              <div className="bg-[#051a25] p-6 shadow-md rounded-md transition-all duration-200 ease-in-out hover:shadow-lg group-hover:scale-[1.02]">
                <div className="relative h-48 mb-6 overflow-hidden rounded-md">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <p className="text-[#2DD4BF] text-sm mb-2">{post.date}</p>
                <h4 className="font-medium mb-3 group-hover:text-[#2DD4BF] transition-all">{post.title}</h4>
                <p className="text-[#FFFFFF]/80">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="border border-[#2DD4BF] text-[#2DD4BF] font-medium py-3 px-6 transition-all duration-200 ease-in-out hover:bg-[#2DD4BF] hover:bg-opacity-10 rounded-md inline-block"
          >
            View All Blog Posts
          </Link>
        </div>
      </div>
    </section>
  )
}
