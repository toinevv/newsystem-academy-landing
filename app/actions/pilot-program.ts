"use server"

import { createSupabaseClient } from "@/lib/supabase"

export async function joinPilotProgram(formData: {
  name: string
  email: string
  telnr: string
  company?: string
}) {
  if (!formData.email || !formData.email.includes("@")) {
    return { success: false, error: "Invalid email address" }
  }

  if (!formData.name || formData.name.trim().length === 0) {
    return { success: false, error: "Name is required" }
  }

  if (!formData.telnr || formData.telnr.trim().length === 0) {
    return { success: false, error: "Phone number is required" }
  }

  try {
    const supabase = await createSupabaseClient()

    const { error } = await supabase.from("leads").insert([
      {
        email: formData.email.trim(),
        name: formData.name.trim(),
        telnr: formData.telnr.trim(),
        company: formData.company?.trim() || null,
        source: "pilot_program",
        created_at: new Date().toISOString(),
        additional_data: {
          program_type: "pilot",
          signup_date: new Date().toISOString(),
        },
      },
    ])

    if (error) {
      // Check for unique constraint violation (error code 23505)
      if (error.code === "23505") {
        return { success: false, error: "This email has already been registered for the pilot program." }
      }

      console.error("Supabase error:", error)
      return { success: false, error: "Something went wrong. Please try again." }
    }

    return { success: true }
  } catch (error) {
    console.error("Error:", error)
    return { success: false, error: "Something went wrong. Please try again." }
  }
}
