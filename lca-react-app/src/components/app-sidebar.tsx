"use client"

import * as React from "react"
import {
  BatteryCharging,
  Building2,
  Factory,
  Globe2,
  Leaf,
  Recycle,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { NAV_SECTIONS, type PageId } from "@/config/navigation"

// This is sample data.
const data = {
  user: {
    name: "Elena Martín",
    email: "elena.martin@circularearth.io",
    avatar: "/avatars/elena-martin.png",
  },
  teams: [
    {
      name: "Circular Earth",
      logo: Globe2,
      plan: "Enterprise Workspace",
    },
    {
      name: "Material Flow Lab",
      logo: Recycle,
      plan: "Advanced Pilot",
    },
    {
      name: "Impact Center",
      logo: Factory,
      plan: "Core",
    },
  ],
  projects: [
    {
      name: "EV Battery Revamp",
      url: "#",
      icon: BatteryCharging,
    },
    {
      name: "Modular Retrofit",
      url: "#",
      icon: Building2,
    },
    {
      name: "Plant-Based Packaging",
      url: "#",
      icon: Leaf,
    },
  ],
}

type AppSidebarProps = React.ComponentProps<typeof Sidebar> & {
  activePage: PageId
  onNavigate: (page: PageId) => void
}

export function AppSidebar({
  activePage,
  onNavigate,
  ...props
}: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain
          items={NAV_SECTIONS}
          activePage={activePage}
          onNavigate={onNavigate}
        />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
