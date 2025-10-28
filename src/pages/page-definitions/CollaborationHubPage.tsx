import { cardClass, listCardClass, sectionClass } from "@/pages/PageSharedStyles"
import type { PageDefinition } from "@/pages/PageTypes"
import { ClipboardCheck } from "lucide-react"

export const CollaborationHubPage: PageDefinition = {
  id: "collaboration-hub",
  title: "Collaboration hub",
  description:
    "Keep teams aligned with activity feeds, approvals, and notifications.",
  primaryAction: {
    label: "Review activity",
    icon: ClipboardCheck,
  },
  content: () => (
    <div className="flex flex-col gap-4">
      <section className={sectionClass}>
        <div className={cardClass}>
          <h2 className="text-sm font-semibold">Activity & collaboration</h2>
          <p className="text-muted-foreground text-sm">
            Manage comments, approvals, and notifications across datasets and
            scenarios.
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className={listCardClass}>
              Activity feed shows edits, approvals, and calculation results.
            </li>
            <li className={listCardClass}>
              Assign reviewers and due dates with reminders and escalation paths.
            </li>
            <li className={listCardClass}>
              Version snapshots with diff viewer keep transparency on exchange
              updates.
            </li>
          </ul>
        </div>
        <div className={cardClass}>
          <h2 className="text-sm font-semibold">Notifications</h2>
          <p className="text-muted-foreground text-sm">
            Customize alerts for approvals, failed calculations, or data quality
            issues.
          </p>
        </div>
      </section>
    </div>
  ),
}
