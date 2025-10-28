import { cardClass, sectionClass } from "@/pages/PageSharedStyles"
import type { PageDefinition } from "@/pages/PageTypes"
import { SlidersHorizontal } from "lucide-react"

const sensitivityItems = [
  { label: "Electricity intensity", value: "±12% range" },
  { label: "Transport distance", value: "Scenario slider 500–1200 km" },
  { label: "Recovery yield", value: "Confidence interval p95" },
]

export const SensitivityUncertaintyPage: PageDefinition = {
  id: "sensitivity-uncertainty",
  title: "Sensitivity & uncertainty",
  description:
    "Explore Monte Carlo results and tweak parameters to understand variability.",
  primaryAction: {
    label: "Launch analysis",
    icon: SlidersHorizontal,
  },
  content: () => (
    <div className="flex flex-col gap-4">
      <section className={sectionClass}>
        <div className={cardClass}>
          <h2 className="text-sm font-semibold">
            Sensitivity & uncertainty analysis
          </h2>
          <p className="text-muted-foreground text-sm">
            Interact with Monte Carlo histograms, box plots, and adjustable
            parameters to understand confidence intervals.
          </p>
          <div className="mt-4 space-y-2 text-xs">
            {sensitivityItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-lg border px-3 py-2"
              >
                <span className="font-medium text-sm">{item.label}</span>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Highlight hotspots automatically and preview recalculated impacts
            before committing overrides.
          </p>
        </div>
      </section>
    </div>
  ),
}
