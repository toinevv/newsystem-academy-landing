"use client"

import type React from "react"

import { useState } from "react"

interface EmailFormProps {
  buttonText: string
  placeholder?: string
  className?: string
}

export default function EmailForm({ buttonText, placeholder = "Enter your email", className = "" }: EmailFormProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage("")

    try {
      // This would be replaced with your actual form submission logic
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Success
      setEmail("")
      setMessage("Thank you! We will be in touch soon.")
    } catch (error) {
      setMessage("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          placeholder={placeholder}
          className="flex-grow px-4 py-3 bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#2DD4BF]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isSubmitting}
        />
        <button
          type="submit"
          className="bg-[#2DD4BF] text-[#03202F] font-medium py-3 px-6 transition-all hover:bg-opacity-90 whitespace-nowrap"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : buttonText}
        </button>
      </form>

      {message && <p className="mt-4 text-[#2DD4BF]">{message}</p>}
    </div>
  )
}
