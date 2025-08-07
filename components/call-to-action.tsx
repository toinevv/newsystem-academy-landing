"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { storeEmail } from "@/app/actions/email"

export default function CallToAction() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage("")

    try {
      const result = await storeEmail(email, "mail_list")

      if (result.success) {
        setEmail("")
        setMessage("Thank you for joining our mailing list! We'll keep you updated.")
      } else {
        setMessage("Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Error:", error)
      setMessage("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="section bg-[#051a25]">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title">Stay Up to Date</h2>
          <p className="text-xl mb-8">Your entry point to the AI application layer reshaping logistics.</p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-8">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#2DD4BF] rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
            />
            <button
              type="submit"
              className="bg-[#2DD4BF] text-[#03202F] font-medium py-3 px-6 transition-all duration-200 ease-in-out hover:bg-opacity-90 rounded-md whitespace-nowrap"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Joining..." : "Join Mailing List"}
            </button>
          </form>

          {message && (
            <div className="mb-8 p-4 bg-[#2DD4BF]/10 border border-[#2DD4BF]/20 rounded-md">
              <p className="text-[#2DD4BF]">{message}</p>
            </div>
          )}

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="https://calendly.com/toine-newsystem/30min"
              className="bg-[#2DD4BF] text-[#03202F] font-medium py-3 px-6 rounded-md transition-all duration-200 ease-in-out hover:bg-opacity-90"
            >
              Schedule a Demo
            </Link>
            <Link
              href="https://demo.newsystem.ai"
              className="border border-[#2DD4BF] text-[#2DD4BF] font-medium py-3 px-6 transition-all duration-200 ease-in-out hover:bg-[#2DD4BF] hover:bg-opacity-10 rounded-md"
            >
              Try Our Product
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
