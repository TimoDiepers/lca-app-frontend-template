import { cardClass, listCardClass, sectionClass } from "@/pages/PageSharedStyles"
import type { PageDefinition } from "@/pages/PageTypes"
import { Timer } from "lucide-react"

export const CalculationQueuePage: PageDefinition = {
  id: "calculation-queue",
  title: "Calculation queue",
  description:
    "Monitor job statuses, runtimes, and logs for active and past calculations.",
  primaryAction: {
    label: "Manage queue",
    icon: Timer,
  },
  content: () => (
    <div className="flex flex-col gap-4">
      <section className={sectionClass}>
        <div className={cardClass}>
          <h2 className="text-sm font-semibold">Job queue</h2>
          <p className="text-muted-foreground text-sm">
            Track pending, running, and completed jobs with status badges, runtime
            estimates, and access to logs.
          </p>
          <div className="mt-4 space-y-2 text-xs">
            <div className="flex items-center justify-between rounded-lg border px-3 py-2">
              <span className="font-medium text-sm">
                Scenario: EV Battery Revamp
              </span>
              <span className="rounded-full bg-emerald-100 px-2 py-1 text-[11px] font-semibold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400">
                Completed · 14m
              </span>
            </div>
            <div className="flex items-center justify-between rounded-lg border px-3 py-2">
              <span className="font-medium text-sm">
                Scenario: Packaging baseline
              </span>
              <span className="rounded-full bg-amber-100 px-2 py-1 text-[11px] font-semibold text-amber-700 dark:bg-amber-500/15 dark:text-amber-400">
                Needs input
              </span>
            </div>
            <div className="flex items-center justify-between rounded-lg border px-3 py-2">
              <span className="font-medium text-sm">
                Scenario: Refurbished packs
              </span>
              <span className="rounded-full bg-blue-100 px-2 py-1 text-[11px] font-semibold text-blue-700 dark:bg-blue-500/15 dark:text-blue-400">
                Running · ETA 6m
              </span>
            </div>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Export runs to the background service or rerun with tweaked settings
            directly from here.
          </p>
        </div>
        <div className={cardClass}>
          <h2 className="text-sm font-semibold">Queue controls</h2>
          <ul className="mt-3 space-y-3 text-sm">
            <li className={listCardClass}>
              Pause, prioritize, or cancel runs with audit logging.
            </li>
            <li className={listCardClass}>
              Subscribe to notifications for long-running or failed jobs.
            </li>
          </ul>
        </div>
      </section>
    </div>
  ),
}
