"use server"

import { createSupabaseClient } from "@/lib/supabase"

export async function storeEmail(email: string, source: string, additionalData = {}) {
  if (!email || !email.includes("@")) {
    return { success: false, error: "Invalid email address" }
  }

  try {
    const supabase = await createSupabaseClient()

    // Check if the table exists first
    const { error: tableCheckError } = await supabase.from("leads").select("id").limit(1).maybeSingle()

    if (tableCheckError) {
      console.error("Table check error:", tableCheckError)
      // If there's an error checking the table, we'll just return success
      // This allows the user to continue with the flow even if there's a DB issue
      return { success: true }
    }

    const { error } = await supabase.from("leads").insert([
      {
        email,
        source,
        created_at: new Date().toISOString(),
        ...additionalData,
      },
    ])

    if (error) {
      // Check for unique constraint violation (error code 23505)
      if (error.code === "23505") {
        // If the email already exists, we'll still consider it a success
        // This prevents blocking users who have already submitted their email
        return { success: true }
      }

      console.error("Supabase error:", error)
      // Return success anyway to not block the user experience
      return { success: true }
    }

    return { success: true }
  } catch (error) {
    console.error("Error:", error)
    // Return success anyway to not block the user experience
    return { success: true }
  }
}
