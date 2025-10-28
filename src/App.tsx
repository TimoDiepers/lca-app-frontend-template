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
import { BookOpen, Command, Plus, Search } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { ButtonGroup } from "@/components/ui/button-group"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"

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
          <div className="flex flex-wrap items-center justify-end gap-2 md:gap-3">
            <div className="hidden items-center gap-2 md:flex">
              <InputGroup className="h-9 w-[280px]">
                <InputGroupAddon>
                  <Search className="size-4 text-muted-foreground" />
                </InputGroupAddon>
                <InputGroupInput
                  placeholder="Search datasets, processes, scenarios..."
                  aria-label="Global workspace search"
                />
                <InputGroupAddon align="inline-end">
                  <InputGroupText>
                    <Command className="size-3.5" />
                    K
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </div>
            <ButtonGroup className="h-9 overflow-hidden">
              <Button variant="secondary" size="sm" className="h-9 gap-2">
                <BookOpen className="mr-2 size-4" />
                Knowledge base
              </Button>
              <Button size="sm" className="h-9 gap-2">
                <PrimaryIcon className="mr-2 size-4" />
                {primaryLabel}
              </Button>
            </ButtonGroup>
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
