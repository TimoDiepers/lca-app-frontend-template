import { cardClass, listCardClass, sectionClass } from "@/pages/PageSharedStyles"
import type { PageDefinition } from "@/pages/PageTypes"
import { Download } from "lucide-react"

type DatasetRow = {
  name: string
  sector: string
  stage: string
  version: string
  status: string
}

const datasets: DatasetRow[] = [
  {
    name: "Cathode drying EU",
    sector: "Batteries",
    stage: "Manufacturing",
    version: "v3.2",
    status: "Needs review",
  },
  {
    name: "Anode paste mix",
    sector: "Batteries",
    stage: "Manufacturing",
    version: "v2.1",
    status: "Validated",
  },
  {
    name: "Grid electricity FR",
    sector: "Energy",
    stage: "Upstream",
    version: "v5.0",
    status: "Linked",
  },
]

export const DatasetBrowserPage: PageDefinition = {
  id: "dataset-browser",
  title: "Dataset browser",
  description:
    "Browse and curate datasets with rich filtering, preview, and bulk actions.",
  primaryAction: {
    label: "Import datasets",
    icon: Download,
  },
  content: () => (
    <div className="flex flex-col gap-4">
      <section className={sectionClass}>
        <div className={cardClass}>
          <h2 className="text-sm font-semibold">Filterable dataset grid</h2>
          <p className="text-muted-foreground text-sm">
            Slice datasets by geography, lifecycle stage, and tags with quick
            bulk actions for import, duplication, and scenario batching.
          </p>
          <div className="mt-4 overflow-hidden rounded-lg border">
            <div className="grid grid-cols-5 bg-muted px-3 py-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              <span>Name</span>
              <span>Sector</span>
              <span>Stage</span>
              <span>Version</span>
              <span>Status</span>
            </div>
            {datasets.map((row) => (
              <div
                key={row.name}
                className="grid grid-cols-5 border-t px-3 py-2 text-xs"
              >
                <span className="font-medium">{row.name}</span>
                <span>{row.sector}</span>
                <span>{row.stage}</span>
                <span>{row.version}</span>
                <span className="text-emerald-600">{row.status}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Open the preview drawer to inspect metadata, dependencies, and flow
            summaries before editing.
          </p>
        </div>
        <div className={cardClass}>
          <h2 className="text-sm font-semibold">Bulk actions</h2>
          <ul className="mt-3 space-y-3 text-sm">
            <li className={listCardClass}>
              Batch assign tags and quality scores to harmonize imports.
            </li>
            <li className={listCardClass}>
              Duplicate datasets into sandbox scenarios for what-if analysis.
            </li>
            <li className={listCardClass}>
              Export curated selections as ILCD or JSON-LD for external tooling.
            </li>
          </ul>
        </div>
      </section>
    </div>
  ),
}
