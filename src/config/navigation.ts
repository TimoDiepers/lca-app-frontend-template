import {
  BarChart3,
  Database,
  GitMerge,
  LayoutDashboard,
  ShieldCheck,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

export type PageId =
  | "project-overview"
  | "pinned-tasks"
  | "data-quality-alerts"
  | "dataset-browser"
  | "process-editor"
  | "exchange-editing"
  | "inventory-library"
  | "scenario-workspace"
  | "calculation-setup"
  | "calculation-queue"
  | "results-overview"
  | "impact-drilldown"
  | "comparison-tools"
  | "sensitivity-uncertainty"
  | "reporting-sharing"
  | "collaboration-hub"
  | "system-settings"

export type NavSection = {
  id: string
  title: string
  icon: LucideIcon
  items: {
    id: PageId
    title: string
  }[]
}

export const NAV_SECTIONS: NavSection[] = [
  {
    id: "dashboard",
    title: "Dashboard",
    icon: LayoutDashboard,
    items: [
      { id: "project-overview", title: "Project Overview" },
      { id: "pinned-tasks", title: "Pinned Tasks" },
      { id: "data-quality-alerts", title: "Data Quality Alerts" },
    ],
  },
  {
    id: "data-management",
    title: "Data Management",
    icon: Database,
    items: [
      { id: "dataset-browser", title: "Dataset Browser" },
      { id: "process-editor", title: "Process Editor" },
      { id: "exchange-editing", title: "Exchange Editing" },
      { id: "inventory-library", title: "Inventory Library" },
    ],
  },
  {
    id: "scenario-planning",
    title: "Scenario Planning",
    icon: GitMerge,
    items: [
      { id: "scenario-workspace", title: "Scenario Workspace" },
      { id: "calculation-setup", title: "Calculation Setup" },
      { id: "calculation-queue", title: "Calculation Queue" },
    ],
  },
  {
    id: "insights-reporting",
    title: "Insights & Reporting",
    icon: BarChart3,
    items: [
      { id: "results-overview", title: "Results Overview" },
      { id: "impact-drilldown", title: "Impact Drill-down" },
      { id: "comparison-tools", title: "Comparison Tools" },
      { id: "sensitivity-uncertainty", title: "Sensitivity & Uncertainty" },
      { id: "reporting-sharing", title: "Reporting & Sharing" },
    ],
  },
  {
    id: "governance",
    title: "Governance",
    icon: ShieldCheck,
    items: [
      { id: "collaboration-hub", title: "Collaboration Hub" },
      { id: "system-settings", title: "System Settings" },
    ],
  },
]

export const DEFAULT_PAGE: PageId = "project-overview"

export function findSectionByPage(pageId: PageId) {
  for (const section of NAV_SECTIONS) {
    if (section.items.some((item) => item.id === pageId)) {
      return section
    }
  }
  return undefined
}
