import { cardClass, listCardClass, sectionClass } from "@/pages/PageSharedStyles"
import type { PageDefinition } from "@/pages/PageTypes"
import { Anchor } from "lucide-react"

export const InventoryLibraryPage: PageDefinition = {
  id: "inventory-library",
  title: "Inventory library",
  description:
    "Explore flows, factors, and background datasets with compatibility insights.",
  primaryAction: {
    label: "Link inventory",
    icon: Anchor,
  },
  content: () => (
    <div className="flex flex-col gap-4">
      <section className={sectionClass}>
        <div className={cardClass}>
          <h2 className="text-sm font-semibold">Inventory browser</h2>
          <p className="text-muted-foreground text-sm">
            Filter flows, impact factors, and background datasets with compatibility
            scores before linking.
          </p>
          <div className="mt-4 grid gap-3 text-sm">
            <div className={listCardClass}>
              <p className="font-medium">Filters</p>
              <p className="text-muted-foreground text-xs">
                Unit · Geography · Data quality · Method · Currency
              </p>
            </div>
            <div className={listCardClass}>
              <p className="font-medium">Preview</p>
              <p className="text-muted-foreground text-xs">
                GWP 100a • ISO quality grade B • Compatible with current scenario.
              </p>
            </div>
            <div className={listCardClass}>
              <p className="font-medium">Actions</p>
              <p className="text-muted-foreground text-xs">
                Link to dataset · Add to scenario · Export snippet.
              </p>
            </div>
          </div>
        </div>
        <div className={cardClass}>
          <h2 className="text-sm font-semibold">Compatibility warnings</h2>
          <p className="text-muted-foreground text-sm">
            Highlight mismatched units, outdated references, or conflicting data
            quality grades before import.
          </p>
          <ul className="mt-3 space-y-3 text-sm">
            <li className={listCardClass}>
              Suggest conversion factors or alternative flows from preferred
              libraries.
            </li>
            <li className={listCardClass}>
              Surface alignment with internal taxonomy and scenario assumptions.
            </li>
          </ul>
        </div>
      </section>
    </div>
  ),
}
