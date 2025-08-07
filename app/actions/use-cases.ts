"use server"

import { createSupabaseClient } from "@/lib/supabase"
import { unstable_cache } from "next/cache"

export interface UseCase {
  id: string
  title: string
  description: string
  detailed_description?: string
  image_url?: string
  landing_position: number
  type: "product" | "service"
  is_active: boolean
  created_at: string
  updated_at: string
}

// Cache the database queries for 1 hour (3600 seconds)
const CACHE_DURATION = 3600

async function fetchLandingUseCasesFromDB(): Promise<UseCase[]> {
  try {
    console.log("🔍 Starting fetchLandingUseCasesFromDB...")
    const supabase = await createSupabaseClient()
    console.log("✅ Supabase client created")

    console.log("🔍 Querying use_cases table...")
    const { data, error } = await supabase
      .from("use_cases")
      .select("*")
      .eq("is_active", true)
      .in("landing_position", [1, 2, 3])
      .order("landing_position", { ascending: true })

    console.log("📊 Query result:", { data, error })

    if (error) {
      console.error("❌ Supabase error in fetchLandingUseCasesFromDB:", error)
      return []
    }

    console.log("✅ Successfully fetched landing use cases:", data?.length || 0, "items")
    return data || []
  } catch (error) {
    console.error("❌ Unexpected error in fetchLandingUseCasesFromDB:", error)
    return []
  }
}

async function fetchUseCasesByTypeFromDB(type: "product" | "service"): Promise<UseCase[]> {
  try {
    console.log(`🔍 Starting fetchUseCasesByTypeFromDB for type: ${type}`)
    const supabase = await createSupabaseClient()
    console.log("✅ Supabase client created")

    console.log(`🔍 Querying use_cases table for type: ${type}`)
    const { data, error } = await supabase
      .from("use_cases")
      .select("*")
      .eq("is_active", true)
      .eq("type", type)
      .order("created_at", { ascending: false })

    console.log("📊 Query result:", { data, error })

    if (error) {
      console.error(`❌ Supabase error in fetchUseCasesByTypeFromDB (${type}):`, error)
      return []
    }

    console.log(`✅ Successfully fetched ${type} use cases:`, data?.length || 0, "items")
    return data || []
  } catch (error) {
    console.error(`❌ Unexpected error in fetchUseCasesByTypeFromDB (${type}):`, error)
    return []
  }
}

// Cached versions of the functions - these will only hit the database once per hour
export const getLandingUseCases = unstable_cache(fetchLandingUseCasesFromDB, ["landing-use-cases"], {
  revalidate: CACHE_DURATION,
  tags: ["use-cases", "landing"],
})

export const getUseCasesByType = unstable_cache(fetchUseCasesByTypeFromDB, ["use-cases-by-type"], {
  revalidate: CACHE_DURATION,
  tags: ["use-cases"],
})

export async function getAllUseCases(): Promise<UseCase[]> {
  try {
    console.log("🔍 Starting getAllUseCases...")
    const supabase = await createSupabaseClient()
    console.log("✅ Supabase client created")

    console.log("🔍 Querying use_cases table for all cases...")
    const { data, error } = await supabase
      .from("use_cases")
      .select("*")
      .eq("is_active", true)
      .order("type", { ascending: true })
      .order("landing_position", { ascending: true })

    console.log("📊 Query result:", { data, error })

    if (error) {
      console.error("❌ Supabase error in getAllUseCases:", error)
      return []
    }

    console.log("✅ Successfully fetched all use cases:", data?.length || 0, "items")
    return data || []
  } catch (error) {
    console.error("❌ Unexpected error in getAllUseCases:", error)
    return []
  }
}

// Cache the getAllUseCases function as well
export const getCachedAllUseCases = unstable_cache(getAllUseCases, ["all-use-cases"], {
  revalidate: CACHE_DURATION,
  tags: ["use-cases"],
})
