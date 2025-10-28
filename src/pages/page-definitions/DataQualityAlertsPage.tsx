import { cardClass, sectionClass } from "@/pages/PageSharedStyles"
import type { PageDefinition } from "@/pages/PageTypes"
import { AlertTriangle } from "lucide-react"

type AlertRow = {
  item: string
  type: string
  owner: string
  status: string
}

const alerts: AlertRow[] = [
  {
    item: "Cathode drying EU",
    type: "Missing exchange",
    owner: "Priya Singh",
    status: "Needs review",
  },
  {
    item: "Packaging baseline",
    type: "Outdated emission factor",
    owner: "Alex Chen",
    status: "Update pending",
  },
  {
    item: "Logistics overseas",
    type: "Data quality flag",
    owner: "Elena Martín",
    status: "Investigate",
  },
]

export const DataQualityAlertsPage: PageDefinition = {
  id: "data-quality-alerts",
  title: "Data quality alerts",
  description:
    "Surface validation gaps, outdated data, and hand-off owners to resolve issues.",
  primaryAction: {
    label: "Open validation center",
    icon: AlertTriangle,
  },
  content: () => (
    <div className="flex flex-col gap-4">
      <section className={sectionClass}>
        <div className={cardClass}>
          <h2 className="text-sm font-semibold">Active alerts</h2>
          <p className="text-muted-foreground text-sm">
            Monitor data gaps, out-of-date flows, and validation issues.
          </p>
          <div className="mt-4 overflow-hidden rounded-lg border">
            <div className="grid grid-cols-4 bg-muted px-3 py-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              <span>Item</span>
              <span>Type</span>
              <span>Owner</span>
              <span>Status</span>
            </div>
            {alerts.map((alert) => (
              <div
                key={alert.item}
                className="grid grid-cols-4 border-t px-3 py-2 text-xs"
              >
                <span className="font-medium">{alert.item}</span>
                <span>{alert.type}</span>
                <span>{alert.owner}</span>
                <span className="text-amber-600">{alert.status}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Use the validation timeline to audit remediation steps and approvals.
          </p>
        </div>
      </section>
    </div>
  ),
}
