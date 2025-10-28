import { cardClass, sectionClass } from "@/pages/PageSharedStyles"
import type { PageDefinition } from "@/pages/PageTypes"
import { Layers3 } from "lucide-react"

const contributionHighlights = [
  {
    name: "Materials",
    share: "42%",
    detail: "Cathode, anode, and packaging dominate the footprint.",
  },
  {
    name: "Energy",
    share: "31%",
    detail: "Electricity intensity remains the key driver.",
  },
  {
    name: "Logistics",
    share: "21%",
    detail: "Ocean freight outpaces road transport emissions.",
  },
]

export const ImpactDrilldownPage: PageDefinition = {
  id: "impact-drilldown",
  title: "Impact drill-down",
  description:
    "Navigate contribution trees and hotspot drivers by process, geography, or stage.",
  primaryAction: {
    label: "Open contribution tree",
    icon: Layers3,
  },
  content: () => (
    <div className="flex flex-col gap-4">
      <section className={sectionClass}>
        <div className={`${cardClass} xl:col-span-2`}>
          <h2 className="text-sm font-semibold">Contribution highlights</h2>
          <p className="text-muted-foreground text-sm">
            Review the leading contributors across materials, energy, and logistics.
          </p>
          <div className="mt-4 grid gap-2">
            {contributionHighlights.map((item) => (
              <div
                key={item.name}
                className="flex items-start justify-between rounded-lg border px-3 py-2"
              >
                <div>
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.detail}</p>
                </div>
                <span className="text-sm font-semibold">{item.share}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Apply scenario filters to update the breakdown and export detailed tables.
          </p>
        </div>
      </section>
    </div>
  ),
}
