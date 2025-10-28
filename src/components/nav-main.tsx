import { ChevronRight, Check } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  useSidebar,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import type { NavSection, PageId } from "@/config/navigation"
import { cn } from "@/lib/utils"

export function NavMain({
  items,
  activePage,
  onNavigate,
}: {
  items: NavSection[]
  activePage: PageId
  onNavigate: (page: PageId) => void
}) {
  const { state, isMobile } = useSidebar()
  const isCollapsed = state === "collapsed"

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const isSectionActive = item.items.some(
            (subItem) => subItem.id === activePage
          )

          const button = (
            <SidebarMenuButton
              tooltip={item.title}
              isActive={isSectionActive}
            >
              {item.icon && <item.icon />}
              <span>{item.title}</span>
              {!isCollapsed && (
                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
              )}
            </SidebarMenuButton>
          )

          if (isCollapsed && !isMobile) {
            return (
              <SidebarMenuItem key={item.id}>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>{button}</DropdownMenuTrigger>
                  <DropdownMenuContent
                    side="right"
                    align="start"
                    className="w-56 rounded-lg"
                  >
                    {item.items.map((subItem) => (
                      <DropdownMenuItem
                        key={subItem.id}
                        onSelect={() => onNavigate(subItem.id)}
                        className={cn(
                          "flex items-center gap-2 text-sm",
                          activePage === subItem.id &&
                            "bg-sidebar-accent text-sidebar-accent-foreground"
                        )}
                      >
                        {activePage === subItem.id ? (
                          <Check className="size-4" />
                        ) : (
                          <span className="size-4" />
                        )}
                        <span>{subItem.title}</span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            )
          }

          return (
            <Collapsible
              key={item.id}
              asChild
              defaultOpen={isSectionActive}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  {button}
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.id}>
                        <SidebarMenuSubButton
                          asChild
                          isActive={activePage === subItem.id}
                        >
                          <button
                            type="button"
                            onClick={() => onNavigate(subItem.id)}
                            className="flex w-full items-center justify-start gap-2 text-left"
                          >
                            <span>{subItem.title}</span>
                          </button>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
