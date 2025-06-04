import { useQuery } from "@tanstack/react-query"
import pb from "../pocketbase"

export type Project = {
  id: number
  title: string
  description: string
  technologies: string[]
  github_url: string
  live_url: string
  image_url?: string
  created_at: string
}

export const useProjects = () => {
  return useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: async () => {
      const records = await pb.collection("projects").getFullList<Project>({
        sort: "-created",
      })
      return records as unknown as Project[]
    },
    staleTime: 1000 * 60 * 5,
    retry: 2,
  })
}