"use client"

import type React from "react"

import { useState } from "react"
import { storeEmail } from "@/app/actions/email"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telnr: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    setErrorMessage("")

    try {
      const result = await storeEmail(formData.email, "contact_form", {
        name: formData.name,
        telnr: formData.telnr,
        company: formData.company,
        message: formData.message,
      })

      if (result.success) {
        setFormData({
          name: "",
          email: "",
          telnr: "",
          company: "",
          message: "",
        })
        setMessage("Thank you for your message! We'll be in touch soon.")
      } else {
        // Check if it's a duplicate email error
        if (result.error.includes("already been registered")) {
          setErrorMessage("This email has already been registered. Would you like to send another message?")
        } else {
          setErrorMessage(result.error || "Something went wrong. Please try again.")
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setErrorMessage("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-[#03202F] p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
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
            Email
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
            Phone Number
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
            Company
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

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#2DD4BF] rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-[#2DD4BF] text-[#03202F] font-medium py-3 px-6 transition-all duration-200 ease-in-out hover:bg-opacity-90 rounded-md w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>

      {message && (
        <div className="mt-6 p-4 bg-[#2DD4BF]/10 border border-[#2DD4BF]/20 rounded-md">
          <p className="text-[#2DD4BF]">{message}</p>
        </div>
      )}

      {errorMessage && (
        <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-md">
          <p className="text-red-400">{errorMessage}</p>
        </div>
      )}
    </div>
  )
}
