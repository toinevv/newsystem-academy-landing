// Import the createClient function directly to ensure v0 picks up the dependency
import { createClient } from "@supabase/supabase-js"

// Simplified client creation with better error handling
export async function createSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  console.log("🔍 Environment variables check:")
  console.log("SUPABASE_URL exists:", !!supabaseUrl)
  console.log("SUPABASE_ANON_KEY exists:", !!supabaseAnonKey)
  console.log("SUPABASE_URL value:", supabaseUrl ? `${supabaseUrl.substring(0, 20)}...` : "undefined")

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error("❌ Missing Supabase environment variables")
    throw new Error("Missing Supabase environment variables")
  }

  try {
    const client = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: false, // Since we're using it server-side
      },
    })

    console.log("✅ Supabase client created successfully")

    // Test the connection
    const { data, error } = await client.from("use_cases").select("count", { count: "exact", head: true })
    console.log("🔍 Connection test result:", { data, error })

    if (error) {
      console.error("❌ Connection test failed:", error)
    } else {
      console.log("✅ Connection test successful")
    }

    return client
  } catch (error) {
    console.error("❌ Failed to create Supabase client:", error)
    throw error
  }
}

// Create a new client for each request to avoid stale connections
export async function getSupabaseClient() {
  return createSupabaseClient()
}
