import { cardClass, listCardClass, sectionClass } from "@/pages/PageSharedStyles"
import type { PageDefinition } from "@/pages/PageTypes"
import { Workflow } from "lucide-react"

export const ScenarioWorkspacePage: PageDefinition = {
  id: "scenario-workspace",
  title: "Scenario workspace",
  description:
    "Configure datasets and overrides to shape comparative LCA scenarios.",
  primaryAction: {
    label: "Create scenario",
    icon: Workflow,
  },
  content: () => (
    <div className="flex flex-col gap-4">
      <section className={sectionClass}>
        <div className={cardClass}>
          <h2 className="text-sm font-semibold">Scenario workspace</h2>
          <p className="text-muted-foreground text-sm">
            Combine datasets and processes, override exchanges, and stage scenario
            metadata for collaboration.
          </p>
          <div className="mt-4 space-y-2 text-xs">
            <div className="flex items-center justify-between rounded-lg border px-3 py-2">
              <div>
                <p className="font-medium text-sm">EV Battery Revamp · v3</p>
                <p className="text-muted-foreground">
                  Overrides: Cathode drying, Logistics
                </p>
              </div>
              <span className="rounded-full bg-blue-100 px-2 py-1 text-[11px] font-semibold text-blue-700 dark:bg-blue-500/15 dark:text-blue-400">
                In focus
              </span>
            </div>
            <div className="flex items-center justify-between rounded-lg border px-3 py-2">
              <div>
                <p className="font-medium text-sm">Packaging circularity</p>
                <p className="text-muted-foreground">
                  Overrides: Recycled fiber, Ink swap
                </p>
              </div>
              <span className="rounded-full bg-slate-200 px-2 py-1 text-[11px] font-semibold text-slate-700 dark:bg-slate-500/15 dark:text-slate-300">
                Draft
              </span>
            </div>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Compare scenarios side-by-side or pivot impact results by geography and
            lifecycle stage.
          </p>
        </div>
        <div className={cardClass}>
          <h2 className="text-sm font-semibold">Collaboration notes</h2>
          <ul className="mt-3 space-y-3 text-sm">
            <li className={listCardClass}>
              Document override rationale and link supporting studies.
            </li>
            <li className={listCardClass}>
              Tag scenarios for stakeholder groups and regulatory filings.
            </li>
            <li className={listCardClass}>
              Track approval checkpoints before running calculations.
            </li>
          </ul>
        </div>
      </section>
    </div>
  ),
}
