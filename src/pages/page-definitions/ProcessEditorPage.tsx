import { cardClass, listCardClass, sectionClass } from "@/pages/PageSharedStyles"
import type { PageDefinition } from "@/pages/PageTypes"
import { ProcessEditorWorkspace } from "@/pages/process-editor/ProcessEditorWorkspace"
import { Factory } from "lucide-react"

export const ProcessEditorPage: PageDefinition = {
  id: "process-editor",
  title: "Process editor",
  description:
    "Structure metadata, exchanges, and collaboration workflows for process data.",
  primaryAction: {
    label: "Create process",
    icon: Factory,
  },
  content: () => (
    <div className="flex flex-col gap-4">
      <ProcessEditorWorkspace />
      <section className={sectionClass}>
        <div className={cardClass}>
          <h2 className="text-sm font-semibold">Structured process layout</h2>
          <p className="text-muted-foreground text-sm">
            Edit metadata, inputs, outputs, and impacts in collapsible sections
            with status badges for draft, review, or approved states.
          </p>
          <div className="mt-4 space-y-3 text-sm">
            <div className={listCardClass}>
              Tab into exchanges table, flow diagram, or version history without
              losing context.
            </div>
            <div className={listCardClass}>
              Inline validation highlights unit mismatches and missing providers
              as you edit.
            </div>
            <div className={listCardClass}>
              Clone variants and carry notes forward to track methodological
              decisions.
            </div>
          </div>
        </div>
        <div className={cardClass}>
          <h2 className="text-sm font-semibold">Collaboration</h2>
          <p className="text-muted-foreground text-sm">
            Capture comments, attach references, and request approvals directly on
            process sections.
          </p>
          <div className="mt-4 space-y-2 text-xs">
            <div className="rounded-lg border px-3 py-2">
              <p className="font-medium text-sm">Reviewer requests</p>
              <p className="text-muted-foreground">
                Assign sustainability leads or domain experts for final sign-off.
              </p>
            </div>
            <div className="rounded-lg border px-3 py-2">
              <p className="font-medium text-sm">Version snapshots</p>
              <p className="text-muted-foreground">
                Compare exchange diffs, revert to earlier baselines, and propagate
                updates to scenarios.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  ),
}
