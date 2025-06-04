// src/hooks/useContent.ts
import { useQuery } from "@tanstack/react-query"
import pb from "../pocketbase"

export type ContentBlock = {
  id: string
  slug: string
  content: string
}

export const useContent = (slug: string) => {
  return useQuery<ContentBlock | null>({
    queryKey: ["content", slug],
    queryFn: async () => {
      try {
        const record = await pb
          .collection("sections")
          .getFirstListItem<ContentBlock>(`slug='${slug}'`)
        return record
      } catch {
        return null
      }
    },
    staleTime: 1000 * 60 * 5,
  })
}