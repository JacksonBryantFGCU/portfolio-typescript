// src/hooks/useExperience.ts
import { useQuery } from "@tanstack/react-query"
import pb from "../pocketbase"

export type Experience = {
  id: number
  role: string
  company: string
  year: string // e.g., "Apr 2024 – Present"
  description: string
  skills: string[]
}

export const useExperience = () => {
  return useQuery<Experience[]>({
    queryKey: ["experience"],
    queryFn: async () => {
      const records = await pb
        .collection("experience")
        .getFullList<Experience>({ sort: "-created" })

      const sorted = [...records].sort((a, b) => {
        const getStartYear = (entry: Experience) =>
          parseInt(entry.year.match(/\d{4}/)?.[0] || "0")
        return getStartYear(b) - getStartYear(a)
      })

      return sorted
    },
    staleTime: 1000 * 60 * 5,
  })
}