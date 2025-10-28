import type { PageId } from "@/config/navigation"
import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

export type PageContent = () => ReactNode

export type PageDefinition = {
  id: PageId
  title: string
  description: string
  primaryAction?: {
    label: string
    icon: LucideIcon
  }
  content: PageContent
}
