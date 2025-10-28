import { cardClass, listCardClass, sectionClass } from "@/pages/PageSharedStyles"
import type { PageDefinition } from "@/pages/PageTypes"
import { Sparkles } from "lucide-react"

export const CalculationSetupPage: PageDefinition = {
  id: "calculation-setup",
  title: "Calculation setup",
  description:
    "Guide teams through method selections, allocation rules, and uncertainty parameters.",
  primaryAction: {
    label: "Start setup wizard",
    icon: Sparkles,
  },
  content: () => (
    <div className="flex flex-col gap-4">
      <section className={sectionClass}>
        <div className={cardClass}>
          <h2 className="text-sm font-semibold">Guided setup</h2>
          <p className="text-muted-foreground text-sm">
            Configure functional units, impact methods, allocations, and
            uncertainty settings with validation before launch.
          </p>
          <ol className="mt-4 list-decimal space-y-2 pl-4 text-sm">
            <li>Select scenario & functional unit</li>
            <li>Choose impact assessment methods</li>
            <li>Define allocation & cutoff rules</li>
            <li>Configure Monte Carlo / sensitivity settings and review</li>
          </ol>
          <p className="mt-3 text-xs text-muted-foreground">
            Validation summary highlights missing exchanges, inconsistent units, or
            dataset versions before launch.
          </p>
        </div>
        <div className={cardClass}>
          <h2 className="text-sm font-semibold">Templates</h2>
          <ul className="mt-3 space-y-3 text-sm">
            <li className={listCardClass}>
              Save preset configurations for recurring product assessments.
            </li>
            <li className={listCardClass}>
              Share methodology templates across teams with permissions.
            </li>
          </ul>
        </div>
      </section>
    </div>
  ),
}
