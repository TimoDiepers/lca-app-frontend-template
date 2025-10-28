import { cardClass, listCardClass, sectionClass } from "@/pages/PageSharedStyles"
import type { PageDefinition } from "@/pages/PageTypes"
import { ListTodo } from "lucide-react"

const tasks = [
  {
    title: "Validate cathode drying exchange adjustments",
    owner: "Priya Singh",
    due: "Due in 2 days",
  },
  {
    title: "Review scenario override for refurbished packs",
    owner: "Alex Chen",
    due: "Due tomorrow",
  },
  {
    title: "Confirm EF 3.1 method alignment",
    owner: "Elena Martín",
    due: "Due Friday",
  },
]

export const PinnedTasksPage: PageDefinition = {
  id: "pinned-tasks",
  title: "Pinned tasks",
  description:
    "Organize high-priority reviews, approvals, and automation rules.",
  primaryAction: {
    label: "Add task",
    icon: ListTodo,
  },
  content: () => (
    <div className="flex flex-col gap-4">
      <section className={sectionClass}>
        <div className={cardClass}>
          <h2 className="text-sm font-semibold">Task board</h2>
          <p className="text-muted-foreground text-sm">
            Track approvals, reviews, and data updates across the LCA workflow.
          </p>
          <div className="mt-4 grid gap-2 text-sm">
            {tasks.map((task) => (
              <div key={task.title} className="rounded-lg border px-3 py-2">
                <p className="font-medium">{task.title}</p>
                <p className="text-muted-foreground text-xs">
                  {task.owner} • {task.due}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className={cardClass}>
          <h2 className="text-sm font-semibold">Automation rules</h2>
          <ul className="mt-3 space-y-3 text-sm">
            <li className={listCardClass}>
              Notify compliance team when calculation fails validation.
            </li>
            <li className={listCardClass}>
              Auto-assign reviewer when datasets import with critical warnings.
            </li>
            <li className={listCardClass}>
              Trigger scenario recreation when background datasets update.
            </li>
          </ul>
        </div>
      </section>
    </div>
  ),
}
