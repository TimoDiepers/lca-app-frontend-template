import { cardClass, sectionClass } from "@/pages/PageSharedStyles"
import type { PageDefinition } from "@/pages/PageTypes"
import { LineChart as LineChartIcon } from "lucide-react"

export const ComparisonToolsPage: PageDefinition = {
  id: "comparison-tools",
  title: "Comparison tools",
  description:
    "Evaluate scenario deltas and share insights with synchronized visualizations.",
  primaryAction: {
    label: "Build comparison",
    icon: LineChartIcon,
  },
  content: () => (
    <div className="flex flex-col gap-4">
      <section className={sectionClass}>
        <div className={cardClass}>
          <h2 className="text-sm font-semibold">Scenario comparisons</h2>
          <p className="text-muted-foreground text-sm">
            View impact deltas, percent change tables, and timelines with synced
            navigation.
          </p>
          <div className="mt-4 grid gap-2 text-xs">
            <div className="flex items-center justify-between rounded-lg border px-3 py-2">
              <span className="font-medium text-sm">Revamp vs Baseline</span>
              <span className="text-emerald-600 font-semibold">-12%</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border px-3 py-2">
              <span className="font-medium text-sm">
                Refurbished vs Baseline
              </span>
              <span className="text-emerald-600 font-semibold">-5%</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border px-3 py-2">
              <span className="font-medium text-sm">
                Circular packaging vs Baseline
              </span>
              <span className="text-amber-600 font-semibold">+3%</span>
            </div>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Export tailored decks or CSV summaries for stakeholder workshops.
          </p>
        </div>
      </section>
    </div>
  ),
}
