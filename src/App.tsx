import { useMemo, useState } from "react"

import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
  DEFAULT_PAGE,
  findSectionByPage,
  type PageId,
} from "@/config/navigation"
import { getPageDefinition } from "@/pages/page-registry"
import { ChevronRight, Plus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export default function Page() {
  const [activePage, setActivePage] = useState<PageId>(DEFAULT_PAGE)

  const pageDefinition = useMemo(
    () => getPageDefinition(activePage),
    [activePage]
  )
  const section = useMemo(
    () => findSectionByPage(activePage),
    [activePage]
  )
  const Content = pageDefinition.content
  const PrimaryIcon = pageDefinition.primaryAction?.icon ?? Plus
  const primaryLabel =
    pageDefinition.primaryAction?.label ?? "New dataset / process"

  return (
    <SidebarProvider>
      <AppSidebar activePage={activePage} onNavigate={setActivePage} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b bg-background px-4 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Lifecycle Workspace</BreadcrumbLink>
                </BreadcrumbItem>
                {section && (
                  <>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem className="hidden md:block">
                      <BreadcrumbLink href="#">{section.title}</BreadcrumbLink>
                    </BreadcrumbItem>
                  </>
                )}
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{pageDefinition.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 md:flex">
              <Input
                placeholder="Search datasets, processes, scenarios..."
                className="h-9 w-[260px]"
              />
              <Button variant="outline" size="sm">
                <ChevronRight className="mr-2 size-4" />
                Knowledge base
              </Button>
            </div>
            <Button size="sm">
              <PrimaryIcon className="mr-2 size-4" />
              {primaryLabel}
            </Button>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-6 pb-8">
          <div className="rounded-xl border bg-background p-4 shadow-sm">
            <h1 className="text-lg font-semibold">{pageDefinition.title}</h1>
            <p className="text-muted-foreground text-sm">
              {pageDefinition.description}
            </p>
          </div>
          <Content />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
