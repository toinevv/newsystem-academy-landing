"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"
import { joinPilotProgram } from "@/app/actions/pilot-program"

interface PilotProgramModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function PilotProgramModal({ isOpen, onClose }: PilotProgramModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telnr: "",
    company: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage("")
    setError("")

    try {
      const result = await joinPilotProgram(formData)

      if (result.success) {
        setMessage("Thank you for joining our pilot program! We'll be in touch soon.")
        setFormData({
          name: "",
          email: "",
          telnr: "",
          company: "",
        })
        // Close modal after 2 seconds
        setTimeout(() => {
          onClose()
          setMessage("")
        }, 2000)
      } else {
        setError(result.error || "Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Error:", error)
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-[#03202F] p-8 rounded-md w-full max-w-md border border-white/10 shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">Join Pilot Program</h3>
          <button onClick={onClose} className="text-white/70 hover:text-white transition-all">
            <X size={24} />
          </button>
        </div>

        <p className="text-white/80 mb-6">
          Be among the first to experience our AI-powered operations platform. Limited spots available.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#2DD4BF] rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#2DD4BF] rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="telnr" className="block text-sm font-medium mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="telnr"
              name="telnr"
              value={formData.telnr}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#2DD4BF] rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-2">
              Company (Optional)
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#2DD4BF] rounded-md"
            />
          </div>

          {error && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-md">
              <p className="text-red-400">{error}</p>
            </div>
          )}

          {message && (
            <div className="p-4 bg-[#2DD4BF]/10 border border-[#2DD4BF]/20 rounded-md">
              <p className="text-[#2DD4BF]">{message}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#2DD4BF] text-[#03202F] font-medium py-3 px-6 rounded-md transition-all hover:bg-opacity-90 disabled:opacity-50"
          >
            {isSubmitting ? "Joining..." : "Join Pilot Program"}
          </button>
        </form>
      </div>
    </div>
  )
}
