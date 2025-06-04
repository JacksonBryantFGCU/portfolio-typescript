// src/hooks/useContactContent.ts
import { useQuery } from "@tanstack/react-query"
import pb from "../pocketbase"

export type ContactText = {
  id: string
  label: string
  content: string
}

export const useContactContent = (label: string) => {
  return useQuery<ContactText | null>({
    queryKey: ["contact_content", label],
    queryFn: async () => {
      try {
        const record = await pb
          .collection("contact_content")
          .getFirstListItem<ContactText>(`label='${label}'`)
        return record
      } catch {
        return null
      }
    },
    staleTime: 1000 * 60 * 5,
  })
}