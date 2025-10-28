import { cardClass, listCardClass, sectionClass } from "@/pages/PageSharedStyles"
import type { PageDefinition } from "@/pages/PageTypes"
import { FileText } from "lucide-react"

export const ReportingSharingPage: PageDefinition = {
  id: "reporting-sharing",
  title: "Reporting & sharing",
  description:
    "Assemble narratives, tables, and exports tailored to regulators or clients.",
  primaryAction: {
    label: "Create report",
    icon: FileText,
  },
  content: () => (
    <div className="flex flex-col gap-4">
      <section className={sectionClass}>
        <div className={cardClass}>
          <h2 className="text-sm font-semibold">Report builder</h2>
          <p className="text-muted-foreground text-sm">
            Assemble regulatory and client-ready templates, customize sections, and
            schedule exports.
          </p>
          <div className="mt-4 space-y-2 text-xs">
            <div className="flex items-center justify-between rounded-lg border px-3 py-2">
              <span className="font-medium text-sm">EU Battery Regulation</span>
              <span>Updated yesterday</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border px-3 py-2">
              <span className="font-medium text-sm">Client briefing: Q3</span>
              <span>Scheduled weekly</span>
            </div>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Share secure links with permissions or trigger email summaries to
            project teams.
          </p>
        </div>
        <div className={cardClass}>
          <h2 className="text-sm font-semibold">Distribution</h2>
          <ul className="mt-3 space-y-3 text-sm">
            <li className={listCardClass}>
              Export PDFs, CSVs, or interactive dashboards for stakeholders.
            </li>
            <li className={listCardClass}>
              Schedule recurring send-outs with tailored access levels.
            </li>
          </ul>
        </div>
      </section>
    </div>
  ),
}
