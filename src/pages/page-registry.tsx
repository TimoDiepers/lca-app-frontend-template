import { DEFAULT_PAGE, type PageId } from "@/config/navigation"
import type { PageDefinition } from "@/pages/PageTypes"
import { CalculationQueuePage } from "@/pages/page-definitions/CalculationQueuePage"
import { CalculationSetupPage } from "@/pages/page-definitions/CalculationSetupPage"
import { CollaborationHubPage } from "@/pages/page-definitions/CollaborationHubPage"
import { ComparisonToolsPage } from "@/pages/page-definitions/ComparisonToolsPage"
import { DataQualityAlertsPage } from "@/pages/page-definitions/DataQualityAlertsPage"
import { DatasetBrowserPage } from "@/pages/page-definitions/DatasetBrowserPage"
import { ExchangeEditingPage } from "@/pages/page-definitions/ExchangeEditingPage"
import { ImpactDrilldownPage } from "@/pages/page-definitions/ImpactDrilldownPage"
import { InventoryLibraryPage } from "@/pages/page-definitions/InventoryLibraryPage"
import { PinnedTasksPage } from "@/pages/page-definitions/PinnedTasksPage"
import { ProcessEditorPage } from "@/pages/page-definitions/ProcessEditorPage"
import { ProjectOverviewPage } from "@/pages/page-definitions/ProjectOverviewPage"
import { ReportingSharingPage } from "@/pages/page-definitions/ReportingSharingPage"
import { ResultsOverviewPage } from "@/pages/page-definitions/ResultsOverviewPage"
import { ScenarioWorkspacePage } from "@/pages/page-definitions/ScenarioWorkspacePage"
import { SensitivityUncertaintyPage } from "@/pages/page-definitions/SensitivityUncertaintyPage"
import { SystemSettingsPage } from "@/pages/page-definitions/SystemSettingsPage"

const pageDefinitions: PageDefinition[] = [
  ProjectOverviewPage,
  PinnedTasksPage,
  DataQualityAlertsPage,
  DatasetBrowserPage,
  ProcessEditorPage,
  ExchangeEditingPage,
  InventoryLibraryPage,
  ScenarioWorkspacePage,
  CalculationSetupPage,
  CalculationQueuePage,
  ResultsOverviewPage,
  ImpactDrilldownPage,
  ComparisonToolsPage,
  SensitivityUncertaintyPage,
  ReportingSharingPage,
  CollaborationHubPage,
  SystemSettingsPage,
]

export const PAGE_DEFINITIONS: Record<PageId, PageDefinition> =
  pageDefinitions.reduce(
    (acc, curr) => {
      acc[curr.id] = curr
      return acc
    },
    {} as Record<PageId, PageDefinition>
  )

export function getPageDefinition(pageId?: PageId) {
  if (!pageId) {
    return PAGE_DEFINITIONS[DEFAULT_PAGE]
  }

  return PAGE_DEFINITIONS[pageId] ?? PAGE_DEFINITIONS[DEFAULT_PAGE]
}
