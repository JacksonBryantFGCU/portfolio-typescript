// src/hooks/useCertifications.ts
import { useQuery } from "@tanstack/react-query"
import pb from "../pocketbase"

export type Certification = {
    id: number
    title: string
    issuer: string
    url: string
    image: string | null
    description: string
    skills: string[]
    github: string | null
    date: string // format: "MM/DD/YYYY"
}

export const useCertifications = () => {
  return useQuery<Certification[]>({
    queryKey: ["certifications"],
    queryFn: async () => {
      const records = await pb
        .collection("certifications")
        .getFullList<Certification>({ sort: "-created" })

      return records.sort((a: Certification, b: Certification) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      })
    },
    staleTime: 1000 * 60 * 5,
  })
}