import { cardClass, listCardClass, sectionClass } from "@/pages/PageSharedStyles"
import type { PageDefinition } from "@/pages/PageTypes"
import { Settings2 } from "lucide-react"

export const SystemSettingsPage: PageDefinition = {
  id: "system-settings",
  title: "System settings",
  description:
    "Control method libraries, units, permissions, and integrations in one place.",
  primaryAction: {
    label: "Open settings",
    icon: Settings2,
  },
  content: () => (
    <div className="flex flex-col gap-4">
      <section className={sectionClass}>
        <div className={cardClass}>
          <h2 className="text-sm font-semibold">Method & unit libraries</h2>
          <p className="text-muted-foreground text-sm">
            Manage impact assessment methods, preferred units, and currency
            conversions with validation.
          </p>
          <div className="mt-4 grid gap-2 text-sm">
            <div className="rounded-lg border px-3 py-2">
              <p className="font-medium">Impact methods</p>
              <p className="text-muted-foreground text-xs">
                EF 3.1, ReCiPe 2016, GaBi custom — track versions and effective
                dates.
              </p>
            </div>
            <div className="rounded-lg border px-3 py-2">
              <p className="font-medium">Unit systems</p>
              <p className="text-muted-foreground text-xs">
                Configure SI vs imperial baselines, conversion precision, and
                fallback rules.
              </p>
            </div>
            <div className="rounded-lg border px-3 py-2">
              <p className="font-medium">Currency settings</p>
              <p className="text-muted-foreground text-xs">
                Maintain exchange rates and reference years for cost allocation.
              </p>
            </div>
          </div>
        </div>
        <div className={cardClass}>
          <h2 className="text-sm font-semibold">Access & integrations</h2>
          <p className="text-muted-foreground text-sm">
            Control user roles, permissions, and data import/export pipelines with
            audit logs.
          </p>
          <ul className="mt-3 space-y-3 text-sm">
            <li className={listCardClass}>
              Role templates for admins, analysts, reviewers, and guests.
            </li>
            <li className={listCardClass}>
              Import/export ILCD, JSON-LD, spreadsheets with validation feedback.
            </li>
            <li className={listCardClass}>
              API keys and webhooks for background processing service integrations.
            </li>
          </ul>
        </div>
      </section>
    </div>
  ),
}
