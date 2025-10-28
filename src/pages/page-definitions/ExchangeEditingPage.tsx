import { cardClass, listCardClass, sectionClass } from "@/pages/PageSharedStyles"
import type { PageDefinition } from "@/pages/PageTypes"
import { SlidersHorizontal } from "lucide-react"

export const ExchangeEditingPage: PageDefinition = {
  id: "exchange-editing",
  title: "Exchange editing",
  description:
    "Manage inputs, outputs, allocations, and bulk adjustments with confidence.",
  primaryAction: {
    label: "Bulk edit exchanges",
    icon: SlidersHorizontal,
  },
  content: () => (
    <div className="flex flex-col gap-4">
      <section className={sectionClass}>
        <div className={cardClass}>
          <h2 className="text-sm font-semibold">Exchange table controls</h2>
          <p className="text-muted-foreground text-sm">
            Group exchanges by flow type with inline unit conversion helpers and
            uncertainty parameters.
          </p>
          <ul className="mt-3 space-y-3 text-sm">
            <li className={listCardClass}>
              Link exchanges to background datasets or alternate providers via
              dropdown.
            </li>
            <li className={listCardClass}>
              Apply allocation factors and document assumptions with annotations.
            </li>
            <li className={listCardClass}>
              Bulk edit selections to scale impacts, replace providers, or adjust
              transport distances.
            </li>
          </ul>
        </div>
        <div className={cardClass}>
          <h2 className="text-sm font-semibold">Review workflow</h2>
          <p className="text-muted-foreground text-sm">
            Track edits, approvals, and validation warnings per exchange group to
            keep data quality transparent.
          </p>
        </div>
      </section>
    </div>
  ),
}
