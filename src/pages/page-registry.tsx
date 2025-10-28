import { Button } from "@/components/ui/button"
import { DEFAULT_PAGE, type PageId } from "@/config/navigation"
import type { CSSProperties } from "react"
import {
  AlertTriangle,
  Anchor,
  CalendarDays,
  ClipboardCheck,
  Download,
  Factory,
  FileText,
  Layers3,
  LineChart as LineChartIcon,
  ListTodo,
  Plus,
  RefreshCw,
  Settings2,
  Share2,
  SlidersHorizontal,
  Sparkles,
  Timer,
  Workflow,
} from "lucide-react"
import { ProcessEditorWorkspace } from "@/pages/process-editor/ProcessEditorWorkspace"
import type { LucideIcon } from "lucide-react"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

type PageDefinition = {
  id: PageId
  title: string
  description: string
  primaryAction?: {
    label: string
    icon: LucideIcon
  }
  content: () => React.ReactNode
}

const cardClass = "rounded-xl border bg-background p-4 shadow-sm"

const listCardClass =
  "rounded-xl border border-dashed bg-background p-4 shadow-sm"

const sectionClass = "grid gap-4"

const sparklineTooltipStyle: CSSProperties = {
  background: "var(--card)",
  borderRadius: 8,
  border: "1px solid var(--border)",
  boxShadow: "0 12px 24px -20px var(--ring)",
}

const datasetSparklineData = [
  { label: "Mon", value: 18 },
  { label: "Tue", value: 21 },
  { label: "Wed", value: 20 },
  { label: "Thu", value: 22 },
  { label: "Fri", value: 24 },
  { label: "Sat", value: 25 },
  { label: "Sun", value: 24 },
]

const calculationMiniBarData = [
  { label: "Mon", value: 2.0 },
  { label: "Tue", value: 2.0 },
  { label: "Wed", value: 3.0 },
  { label: "Thu", value: 2.3 },
  { label: "Fri", value: 3.5 },
  { label: "Sat", value: 2.6 },
  { label: "Sun", value: 3.8 },
]

const scenarioSparklineData = [
  { label: "Mon", value: 3 },
  { label: "Tue", value: 3 },
  { label: "Wed", value: 4 },
  { label: "Thu", value: 4 },
  { label: "Fri", value: 5 },
  { label: "Sat", value: 4 },
  { label: "Sun", value: 4 },
]

const hotspotMiniBarData = [
  { label: "Mon", value: 5 },
  { label: "Tue", value: 4 },
  { label: "Wed", value: 4 },
  { label: "Thu", value: 3 },
  { label: "Fri", value: 3 },
  { label: "Sat", value: 3 },
  { label: "Sun", value: 3 },
]

const resultsTrendData = [
  { year: "2021", baseline: 15.1, revamp: 14.4, target: 14.6 },
  { year: "2022", baseline: 14.6, revamp: 13.6, target: 14.0 },
  { year: "2023", baseline: 13.9, revamp: 12.8, target: 13.4 },
  { year: "2024", baseline: 13.2, revamp: 11.9, target: 12.8 },
  { year: "2025", baseline: 12.6, revamp: 11.3, target: 12.3 },
  { year: "2026", baseline: 12.0, revamp: 10.7, target: 11.8 },
]


const resultsStackedData = [
  { category: "Climate", materials: 5.2, energy: 4.1, logistics: 3.1 },
  { category: "Water", materials: 2.9, energy: 2.6, logistics: 1.9 },
  { category: "Resources", materials: 2.8, energy: 2.0, logistics: 1.4 },
  { category: "Toxicity", materials: 1.9, energy: 1.4, logistics: 1.1 },
  { category: "Waste", materials: 1.3, energy: 1.1, logistics: 0.7 },
]

const resultsCategoryData = [
  { category: "Climate", baseline: 12.4, revamp: 10.9 },
  { category: "Water", baseline: 8.1, revamp: 7.4 },
  { category: "Resources", baseline: 6.2, revamp: 5.1 },
  { category: "Toxicity", baseline: 4.4, revamp: 3.8 },
  { category: "Waste", baseline: 3.1, revamp: 2.9 },
]

const resultsRadarData = [
  { metric: "Climate", target: 100, revamp: 84 },
  { metric: "Water", target: 100, revamp: 91 },
  { metric: "Resources", target: 100, revamp: 87 },
  { metric: "Toxicity", target: 100, revamp: 78 },
  { metric: "Waste", target: 100, revamp: 94 },
]

const resultsRadialBarData = [
  { name: "Climate", value: 68, fill: "var(--chart-1)" },
  { name: "Water", value: 82, fill: "var(--chart-2)" },
  { name: "Resources", value: 74, fill: "var(--chart-3)" },
  { name: "Toxicity", value: 59, fill: "var(--chart-4)" },
  { name: "Waste", value: 88, fill: "var(--chart-5)" },
]

const contributionHighlights = [
  {
    name: "Materials",
    share: "42%",
    detail: "Cathode, anode, and packaging dominate the footprint.",
  },
  {
    name: "Energy",
    share: "31%",
    detail: "Electricity intensity remains the key driver.",
  },
  {
    name: "Logistics",
    share: "21%",
    detail: "Ocean freight outpaces road transport emissions.",
  },
]

const ProjectOverviewContent = () => (
  <div className="flex flex-col gap-4">
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <div className={cardClass}>
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-sm font-semibold">Open datasets</h3>
            <p className="text-muted-foreground text-sm">
              Exchange coverage and validation status
            </p>
          </div>
          <span className="text-2xl font-semibold">24</span>
        </div>
        <div className="mt-4 h-16">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={datasetSparklineData} margin={{ top: 2, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="datasetsSparkGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--primary)" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="var(--primary)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="label" hide />
              <YAxis hide domain={["dataMin - 2", "dataMax + 2"]} />
              <Tooltip cursor={false} contentStyle={sparklineTooltipStyle} />
              <Area
                type="monotone"
                dataKey="value"
                stroke="var(--primary)"
                strokeWidth={2}
                fill="url(#datasetsSparkGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          3 new this week · 5 flagged for missing exchanges
        </p>
      </div>
      <div className={cardClass}>
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-sm font-semibold">Recent calculations</h3>
            <p className="text-muted-foreground text-sm">
              Completed in the last 7 days
            </p>
          </div>
          <span className="text-2xl font-semibold">6</span>
        </div>
        <div className="mt-4 h-16">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={calculationMiniBarData} margin={{ top: 2, right: 4, left: 4, bottom: 0 }} barCategoryGap="28%">
              <XAxis dataKey="label" hide />
              <YAxis hide domain={[0, "dataMax + 1"]} />
              <Tooltip cursor={false} contentStyle={sparklineTooltipStyle} />
              <Bar dataKey="value" fill="var(--primary)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Median runtime 14m · Monte Carlo runs 2
        </p>
      </div>
      <div className={cardClass}>
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-sm font-semibold">Active scenarios</h3>
            <p className="text-muted-foreground text-sm">
              Override sets ready for comparison
            </p>
          </div>
          <span className="text-2xl font-semibold">4</span>
        </div>
        <div className="mt-4 h-16">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={scenarioSparklineData} margin={{ top: 2, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="scenariosSparkGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--primary)" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="var(--primary)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="label" hide />
              <YAxis hide domain={["dataMin - 2", "dataMax + 2"]} />
              <Tooltip cursor={false} contentStyle={sparklineTooltipStyle} />
              <Area
                type="monotone"
                dataKey="value"
                stroke="var(--primary)"
                strokeWidth={2}
                fill="url(#scenariosSparkGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Last edited 2h ago by Alex • “EV Battery Revamp”
        </p>
      </div>
      <div className={cardClass}>
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-sm font-semibold">Impact hotspots</h3>
            <p className="text-muted-foreground text-sm">
              Processes exceeding target thresholds
            </p>
          </div>
          <span className="text-2xl font-semibold text-amber-500">3</span>
        </div>
        <div className="mt-4 h-16">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={hotspotMiniBarData} margin={{ top: 2, right: 4, left: 4, bottom: 0 }} barCategoryGap="28%">
              <XAxis dataKey="label" hide />
              <YAxis hide domain={[0, "dataMax + 1"]} />
              <Tooltip cursor={false} contentStyle={sparklineTooltipStyle} />
              <Bar dataKey="value" fill="var(--primary)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Highest: Cathode drying (GHG +18%) · Packaging (Water +9%)
        </p>
      </div>
    </section>

    <section className="grid gap-4 lg:grid-cols-3">
      <div className={`${cardClass} lg:col-span-2`}>
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold">
            Timeline & calculation runs
          </h2>
          <Button variant="ghost" size="sm" className="h-8 px-2">
            <RefreshCw className="mr-2 size-4" />
            Sync latest
          </Button>
        </div>
        <ul className="mt-4 space-y-4 text-sm">
          <li className="flex items-start justify-between gap-4">
            <div>
              <p className="font-medium">
                Scenario “EV Battery Revamp” recalculated
              </p>
              <p className="text-muted-foreground">
                Monte Carlo (1,000 runs) completed · 2 hours ago
              </p>
            </div>
            <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400">
              Completed
            </span>
          </li>
          <li className="flex items-start justify-between gap-4">
            <div>
              <p className="font-medium">
                Dataset “Cathode drying EU” edited by Priya Singh
              </p>
              <p className="text-muted-foreground">
                Inputs adjusted · Validation pending · 5 hours ago
              </p>
            </div>
            <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700 dark:bg-amber-500/15 dark:text-amber-400">
              Review
            </span>
          </li>
          <li className="flex items-start justify-between gap-4">
            <div>
              <p className="font-medium">
                Calculation queued for “Packaging baseline”
              </p>
              <p className="text-muted-foreground">
                Awaiting allocation confirmation · 1 day ago
              </p>
            </div>
            <span className="rounded-full bg-slate-200 px-2 py-1 text-xs font-medium text-slate-700 dark:bg-slate-500/15 dark:text-slate-300">
              Pending
            </span>
          </li>
        </ul>
      </div>
      <div className="grid gap-4">
        <div className={cardClass}>
          <h2 className="text-sm font-semibold">Pinned tasks</h2>
          <ul className="mt-3 space-y-3 text-sm">
            <li className={listCardClass}>
              Approve inventory import for{" "}
              <span className="font-medium">
                “Lithium carbonate South America”
              </span>
            </li>
            <li className={listCardClass}>
              Assign reviewer for scenario override{" "}
              <span className="font-medium">“Refurbished packs”</span>
            </li>
            <li className={listCardClass}>
              Confirm impact method update:{" "}
              <span className="font-medium">EF 3.1 Climate</span>
            </li>
          </ul>
        </div>
        <div className={cardClass}>
          <h2 className="text-sm font-semibold">Quick actions</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            <Button size="sm" variant="secondary" className="gap-2">
              <Plus className="size-4" />
              New process
            </Button>
            <Button size="sm" variant="secondary" className="gap-2">
              <Download className="size-4" />
              Import inventory
            </Button>
            <Button size="sm" variant="secondary" className="gap-2">
              <CalendarDays className="size-4" />
              Schedule run
            </Button>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Use templates to clone datasets, or launch comparison directly from
            a scenario.
          </p>
        </div>
      </div>
    </section>
  </div>
)

const PinnedTasksContent = () => (
  <div className="flex flex-col gap-4">
    <section className={sectionClass}>
      <div className={cardClass}>
        <h2 className="text-sm font-semibold">Task board</h2>
        <p className="text-muted-foreground text-sm">
          Track approvals, reviews, and data updates across the LCA workflow.
        </p>
        <div className="mt-4 grid gap-2 text-sm">
          {[
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
          ].map((task) => (
            <div
              key={task.title}
              className="rounded-lg border px-3 py-2"
            >
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
)

const DataQualityAlertsContent = () => (
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
          {[
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
          ].map((alert) => (
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
)

const DatasetBrowserContent = () => (
  <div className="flex flex-col gap-4">
    <section className={sectionClass}>
      <div className={cardClass}>
        <h2 className="text-sm font-semibold">Filterable dataset grid</h2>
        <p className="text-muted-foreground text-sm">
          Slice datasets by geography, lifecycle stage, and tags with quick
          bulk actions for import, duplication, and scenario batching.
        </p>
        <div className="mt-4 overflow-hidden rounded-lg border">
          <div className="grid grid-cols-5 bg-muted px-3 py-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            <span>Name</span>
            <span>Sector</span>
            <span>Stage</span>
            <span>Version</span>
            <span>Status</span>
          </div>
          {[
            {
              name: "Cathode drying EU",
              sector: "Batteries",
              stage: "Manufacturing",
              version: "v3.2",
              status: "Needs review",
            },
            {
              name: "Anode paste mix",
              sector: "Batteries",
              stage: "Manufacturing",
              version: "v2.1",
              status: "Validated",
            },
            {
              name: "Grid electricity FR",
              sector: "Energy",
              stage: "Upstream",
              version: "v5.0",
              status: "Linked",
            },
          ].map((row) => (
            <div
              key={row.name}
              className="grid grid-cols-5 border-t px-3 py-2 text-xs"
            >
              <span className="font-medium">{row.name}</span>
              <span>{row.sector}</span>
              <span>{row.stage}</span>
              <span>{row.version}</span>
              <span className="text-emerald-600">{row.status}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Open the preview drawer to inspect metadata, dependencies, and flow
          summaries before editing.
        </p>
      </div>
      <div className={cardClass}>
        <h2 className="text-sm font-semibold">Bulk actions</h2>
        <ul className="mt-3 space-y-3 text-sm">
          <li className={listCardClass}>
            Batch assign tags and quality scores to harmonize imports.
          </li>
          <li className={listCardClass}>
            Duplicate datasets into sandbox scenarios for what-if analysis.
          </li>
          <li className={listCardClass}>
            Export curated selections as ILCD or JSON-LD for external tooling.
          </li>
        </ul>
      </div>
    </section>
  </div>
)

const ProcessEditorContent = () => (
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
)

const ExchangeEditingContent = () => (
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
)

const InventoryLibraryContent = () => (
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
)

const ScenarioWorkspaceContent = () => (
  <div className="flex flex-col gap-4">
    <section className={sectionClass}>
      <div className={cardClass}>
        <h2 className="text-sm font-semibold">Scenario workspace</h2>
        <p className="text-muted-foreground text-sm">
          Combine datasets and processes, override exchanges, and stage scenario
          metadata for collaboration.
        </p>
        <div className="mt-4 space-y-2 text-xs">
          <div className="flex items-center justify-between rounded-lg border px-3 py-2">
            <div>
              <p className="font-medium text-sm">EV Battery Revamp · v3</p>
              <p className="text-muted-foreground">
                Overrides: Cathode drying, Logistics
              </p>
            </div>
            <span className="rounded-full bg-blue-100 px-2 py-1 text-[11px] font-semibold text-blue-700 dark:bg-blue-500/15 dark:text-blue-400">
              In focus
            </span>
          </div>
          <div className="flex items-center justify-between rounded-lg border px-3 py-2">
            <div>
              <p className="font-medium text-sm">Packaging circularity</p>
              <p className="text-muted-foreground">
                Overrides: Recycled fiber, Ink swap
              </p>
            </div>
            <span className="rounded-full bg-slate-200 px-2 py-1 text-[11px] font-semibold text-slate-700 dark:bg-slate-500/15 dark:text-slate-300">
              Draft
            </span>
          </div>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Compare scenarios side-by-side or pivot impact results by geography and
          lifecycle stage.
        </p>
      </div>
      <div className={cardClass}>
        <h2 className="text-sm font-semibold">Collaboration notes</h2>
        <ul className="mt-3 space-y-3 text-sm">
          <li className={listCardClass}>
            Document override rationale and link supporting studies.
          </li>
          <li className={listCardClass}>
            Tag scenarios for stakeholder groups and regulatory filings.
          </li>
          <li className={listCardClass}>
            Track approval checkpoints before running calculations.
          </li>
        </ul>
      </div>
    </section>
  </div>
)

const CalculationSetupContent = () => (
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
)

const CalculationQueueContent = () => (
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
)

const ResultsOverviewContent = () => (
  <div className="flex flex-col gap-4">
    <section className={`${sectionClass} xl:grid-cols-3`}>
      <div className={cardClass}>
        <h2 className="text-sm font-semibold">Key performance indicators</h2>
        <p className="text-muted-foreground text-sm">
          Summaries by impact category with toggles for scenario filters, time
          ranges, and normalization.
        </p>
        <div className="mt-4 grid gap-2 rounded-lg border px-3 py-3 text-xs">
          <div className="flex items-center justify-between">
            <span>Climate change (t CO₂e)</span>
            <span className="font-semibold">12.4</span>
          </div>
          <div className="flex items-center justify-between text-emerald-600">
            <span>vs Target</span>
            <span>-8%</span>
          </div>
          <div className="flex items-center justify-between text-amber-600">
            <span>Human toxicity (CTUh)</span>
            <span>+5%</span>
          </div>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Export radar, stacked contribution, or bar charts as CSV or PNG for
          stakeholders.
        </p>
      </div>

      <div className={`${cardClass} xl:col-span-2`}>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-semibold">Scenario emissions trend</h2>
            <p className="text-muted-foreground text-sm">
              Annual totals comparing baseline vs revamp progress against the reduction target.
            </p>
          </div>
        </div>
        <div className="mt-4 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={resultsTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" tickLine={false} />
              <YAxis stroke="hsl(var(--muted-foreground))" tickLine={false} width={36} />
              <Tooltip
                cursor={{ fill: "color-mix(in srgb, var(--primary) 8%, transparent)" }}
                contentStyle={{
                  background: "var(--card)",
                  borderRadius: 12,
                  border: "1px solid var(--border)",
                  boxShadow: "0 16px 32px -24px var(--ring)",
                }}
              />
              <Legend iconType="circle" />
              <Bar
                dataKey="baseline"
                fill="var(--chart-4)"
                name="Baseline"
                radius={[6, 6, 0, 0]}
              />
              <Bar
                dataKey="revamp"
                fill="var(--chart-1)"
                name="Revamp"
                radius={[6, 6, 0, 0]}
              />
              <Line
                type="monotone"
                dataKey="target"
                stroke="var(--chart-5)"
                strokeDasharray="5 5"
                name="Target"
                dot={{ r: 4 }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>

    <section className={`${sectionClass} xl:grid-cols-2`}>
      <div className={cardClass}>
        <h2 className="text-sm font-semibold">Radial impact completion</h2>
        <p className="text-muted-foreground text-sm">
          How far the revamp scenario is from achieving each target (higher is better).
        </p>
        <div className="mt-4 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              innerRadius="20%"
              outerRadius="90%"
              data={resultsRadialBarData}
              startAngle={90}
              endAngle={-270}
            >
              <PolarGrid stroke="hsl(var(--border))" radialLines={false} />
              <Legend
                iconType="circle"
                layout="vertical"
                verticalAlign="middle"
                align="right"
              />
              <Tooltip
                contentStyle={{
                  background: "var(--card)",
                  borderRadius: 12,
                  border: "1px solid var(--border)",
                  boxShadow: "0 16px 32px -24px var(--ring)",
                }}
              />
              <RadialBar
                background
                dataKey="value"
                cornerRadius={12}
                label={{ position: "inside", fill: "var(--card-foreground)", formatter: (v: number) => `${v}%` }}
              />
              {resultsRadialBarData.map((entry) => (
                <Cell key={entry.name} fill={entry.fill} />
              ))}
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className={cardClass}>
        <h2 className="text-sm font-semibold">Normalized performance</h2>
        <p className="text-muted-foreground text-sm">
          Radar view of revamp scenario vs 100% target attainment per metric.
        </p>
        <div className="mt-4 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={resultsRadarData} outerRadius="70%">
              <PolarGrid stroke="hsl(var(--border))" />
              <PolarAngleAxis dataKey="metric" stroke="hsl(var(--muted-foreground))" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="hsl(var(--border))" tick={{ fill: "hsl(var(--muted-foreground))" }} />
              <Tooltip
                contentStyle={{
                  background: "var(--card)",
                  borderRadius: 12,
                  border: "1px solid var(--border)",
                  boxShadow: "0 16px 32px -24px var(--ring)",
                }}
              />
              <Radar
                name="Revamp"
                dataKey="revamp"
                stroke="var(--chart-4)"
                fill="color-mix(in srgb, var(--chart-4) 28%, transparent)"
                fillOpacity={1}
              />
              <Radar
                name="Target"
                dataKey="target"
                stroke="var(--chart-5)"
                fill="color-mix(in srgb, var(--chart-5) 20%, transparent)"
                fillOpacity={0.6}
              />
              <Legend iconType="circle" />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className={cardClass}>
        <h2 className="text-sm font-semibold">Category comparison</h2>
        <p className="text-muted-foreground text-sm">
          Baseline vs revamp reductions by category (lower is better).
        </p>
        <div className="mt-4 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={resultsCategoryData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="category" tickLine={false} stroke="hsl(var(--muted-foreground))" />
              <YAxis tickLine={false} stroke="hsl(var(--muted-foreground))" width={36} />
              <Tooltip
                cursor={{ fill: "color-mix(in srgb, var(--primary) 8%, transparent)" }}
                contentStyle={{
                  background: "var(--card)",
                  borderRadius: 12,
                  border: "1px solid var(--border)",
                  boxShadow: "0 16px 32px -24px var(--ring)",
                }}
              />
              <Legend iconType="circle" />
              <Bar dataKey="baseline" fill="var(--chart-4)" radius={[6, 6, 0, 0]} name="Baseline" />
              <Bar dataKey="revamp" fill="var(--chart-5)" radius={[6, 6, 0, 0]} name="Revamp" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className={cardClass}>
        <h2 className="text-sm font-semibold">Stacked contributions by impact</h2>
        <p className="text-muted-foreground text-sm">
          Visualize material, energy, and logistics shares within each impact category.
        </p>
        <div className="mt-4 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={resultsStackedData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="category" tickLine={false} stroke="hsl(var(--muted-foreground))" />
              <YAxis tickLine={false} stroke="hsl(var(--muted-foreground))" width={36} />
              <Tooltip
                cursor={{ fill: "color-mix(in srgb, var(--primary) 8%, transparent)" }}
                contentStyle={{
                  background: "var(--card)",
                  borderRadius: 12,
                  border: "1px solid var(--border)",
                  boxShadow: "0 16px 32px -24px var(--ring)",
                }}
              />
              <Legend iconType="circle" />
              <Bar dataKey="materials" stackId="total" fill="var(--chart-1)" radius={[0, 0, 6, 6]} name="Materials" />
              <Bar dataKey="energy" stackId="total" fill="var(--chart-2)" name="Energy" />
              <Bar dataKey="logistics" stackId="total" fill="var(--chart-3)" radius={[6, 6, 0, 0]} name="Logistics" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  </div>
)

const ImpactDrilldownContent = () => (
  <div className="flex flex-col gap-4">
    <section className={sectionClass}>
      <div className={`${cardClass} xl:col-span-2`}>
        <h2 className="text-sm font-semibold">Contribution highlights</h2>
        <p className="text-muted-foreground text-sm">
          Review the leading contributors across materials, energy, and logistics.
        </p>
        <div className="mt-4 grid gap-2">
          {contributionHighlights.map((item) => (
            <div key={item.name} className="flex items-start justify-between rounded-lg border px-3 py-2">
              <div>
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.detail}</p>
              </div>
              <span className="text-sm font-semibold">{item.share}</span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Apply scenario filters to update the breakdown and export detailed tables.
        </p>
      </div>
    </section>
  </div>
)

const ComparisonToolsContent = () => (
  <div className="flex flex-col gap-4">
    <section className={sectionClass}>
      <div className={cardClass}>
        <h2 className="text-sm font-semibold">Scenario comparisons</h2>
        <p className="text-muted-foreground text-sm">
          View impact deltas, percent change tables, and timelines with synced
          navigation.
        </p>
        <div className="mt-4 grid gap-2 text-xs">
          <div className="flex items-center justify-between rounded-lg border px-3 py-2">
            <span className="font-medium text-sm">Revamp vs Baseline</span>
            <span className="text-emerald-600 font-semibold">-12%</span>
          </div>
          <div className="flex items-center justify-between rounded-lg border px-3 py-2">
            <span className="font-medium text-sm">
              Refurbished vs Baseline
            </span>
            <span className="text-emerald-600 font-semibold">-5%</span>
          </div>
          <div className="flex items-center justify-between rounded-lg border px-3 py-2">
            <span className="font-medium text-sm">
              Circular packaging vs Baseline
            </span>
            <span className="text-amber-600 font-semibold">+3%</span>
          </div>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Export tailored decks or CSV summaries for stakeholder workshops.
        </p>
      </div>
    </section>
  </div>
)

const SensitivityUncertaintyContent = () => (
  <div className="flex flex-col gap-4">
    <section className={sectionClass}>
      <div className={cardClass}>
        <h2 className="text-sm font-semibold">
          Sensitivity & uncertainty analysis
        </h2>
        <p className="text-muted-foreground text-sm">
          Interact with Monte Carlo histograms, box plots, and adjustable
          parameters to understand confidence intervals.
        </p>
        <div className="mt-4 space-y-2 text-xs">
          <div className="flex items-center justify-between rounded-lg border px-3 py-2">
            <span className="font-medium text-sm">Electricity intensity</span>
            <span>±12% range</span>
          </div>
          <div className="flex items-center justify-between rounded-lg border px-3 py-2">
            <span className="font-medium text-sm">Transport distance</span>
            <span>Scenario slider 500–1200 km</span>
          </div>
          <div className="flex items-center justify-between rounded-lg border px-3 py-2">
            <span className="font-medium text-sm">Recovery yield</span>
            <span>Confidence interval p95</span>
          </div>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Highlight hotspots automatically and preview recalculated impacts
          before committing overrides.
        </p>
      </div>
    </section>
  </div>
)

const ReportingSharingContent = () => (
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
)

const CollaborationHubContent = () => (
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
)

const SystemSettingsContent = () => (
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
)

const pageDefinitions: PageDefinition[] = [
  {
    id: "project-overview",
    title: "Project dashboard",
    description:
      "Monitor key metrics, timelines, and quick actions for active LCA work.",
    primaryAction: {
      label: "New dataset / process",
      icon: Plus,
    },
    content: ProjectOverviewContent,
  },
  {
    id: "pinned-tasks",
    title: "Pinned tasks",
    description:
      "Organize high-priority reviews, approvals, and automation rules.",
    primaryAction: {
      label: "Add task",
      icon: ListTodo,
    },
    content: PinnedTasksContent,
  },
  {
    id: "data-quality-alerts",
    title: "Data quality alerts",
    description:
      "Surface validation gaps, outdated data, and hand-off owners to resolve issues.",
    primaryAction: {
      label: "Open validation center",
      icon: AlertTriangle,
    },
    content: DataQualityAlertsContent,
  },
  {
    id: "dataset-browser",
    title: "Dataset browser",
    description:
      "Browse and curate datasets with rich filtering, preview, and bulk actions.",
    primaryAction: {
      label: "Import datasets",
      icon: Download,
    },
    content: DatasetBrowserContent,
  },
  {
    id: "process-editor",
    title: "Process editor",
    description:
      "Structure metadata, exchanges, and collaboration workflows for process data.",
    primaryAction: {
      label: "Create process",
      icon: Factory,
    },
    content: ProcessEditorContent,
  },
  {
    id: "exchange-editing",
    title: "Exchange editing",
    description:
      "Manage inputs, outputs, allocations, and bulk adjustments with confidence.",
    primaryAction: {
      label: "Bulk edit exchanges",
      icon: SlidersHorizontal,
    },
    content: ExchangeEditingContent,
  },
  {
    id: "inventory-library",
    title: "Inventory library",
    description:
      "Explore flows, factors, and background datasets with compatibility insights.",
    primaryAction: {
      label: "Link inventory",
      icon: Anchor,
    },
    content: InventoryLibraryContent,
  },
  {
    id: "scenario-workspace",
    title: "Scenario workspace",
    description:
      "Configure datasets and overrides to shape comparative LCA scenarios.",
    primaryAction: {
      label: "Create scenario",
      icon: Workflow,
    },
    content: ScenarioWorkspaceContent,
  },
  {
    id: "calculation-setup",
    title: "Calculation setup",
    description:
      "Guide teams through method selections, allocation rules, and uncertainty parameters.",
    primaryAction: {
      label: "Start setup wizard",
      icon: Sparkles,
    },
    content: CalculationSetupContent,
  },
  {
    id: "calculation-queue",
    title: "Calculation queue",
    description:
      "Monitor job statuses, runtimes, and logs for active and past calculations.",
    primaryAction: {
      label: "Manage queue",
      icon: Timer,
    },
    content: CalculationQueueContent,
  },
  {
    id: "results-overview",
    title: "Results overview",
    description:
      "Summarize key impact indicators and compare scenarios against targets.",
    primaryAction: {
      label: "Export summary",
      icon: Share2,
    },
    content: ResultsOverviewContent,
  },
  {
    id: "impact-drilldown",
    title: "Impact drill-down",
    description:
      "Navigate contribution trees and hotspot drivers by process, geography, or stage.",
    primaryAction: {
      label: "Open contribution tree",
      icon: Layers3,
    },
    content: ImpactDrilldownContent,
  },
  {
    id: "comparison-tools",
    title: "Comparison tools",
    description:
      "Evaluate scenario deltas and share insights with synchronized visualizations.",
    primaryAction: {
      label: "Build comparison",
      icon: LineChartIcon,
    },
    content: ComparisonToolsContent,
  },
  {
    id: "sensitivity-uncertainty",
    title: "Sensitivity & uncertainty",
    description:
      "Explore Monte Carlo results and tweak parameters to understand variability.",
    primaryAction: {
      label: "Launch analysis",
      icon: SlidersHorizontal,
    },
    content: SensitivityUncertaintyContent,
  },
  {
    id: "reporting-sharing",
    title: "Reporting & sharing",
    description:
      "Assemble narratives, tables, and exports tailored to regulators or clients.",
    primaryAction: {
      label: "Create report",
      icon: FileText,
    },
    content: ReportingSharingContent,
  },
  {
    id: "collaboration-hub",
    title: "Collaboration hub",
    description:
      "Keep teams aligned with activity feeds, approvals, and notifications.",
    primaryAction: {
      label: "Review activity",
      icon: ClipboardCheck,
    },
    content: CollaborationHubContent,
  },
  {
    id: "system-settings",
    title: "System settings",
    description:
      "Control method libraries, units, permissions, and integrations in one place.",
    primaryAction: {
      label: "Open settings",
      icon: Settings2,
    },
    content: SystemSettingsContent,
  },
]

export const PAGE_DEFINITIONS: Record<PageId, PageDefinition> =
  pageDefinitions.reduce(
    (acc, curr) => {
      acc[curr.id] = curr
      return acc
    },
    {} as Record<PageId, PageDefinition>
  )

export function getPageDefinition(pageId?: PageId) {
  if (!pageId) {
    return PAGE_DEFINITIONS[DEFAULT_PAGE]
  }

  return PAGE_DEFINITIONS[pageId] ?? PAGE_DEFINITIONS[DEFAULT_PAGE]
}
