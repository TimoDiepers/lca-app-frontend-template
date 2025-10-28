import { Button } from "@/components/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group"
import {
  FieldGroup,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"
import type { PageDefinition } from "@/pages/PageTypes"
import { cardClass, listCardClass } from "@/pages/PageSharedStyles"
import type { CSSProperties } from "react"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import {
  CalendarDays,
  Download,
  Plus,
  RefreshCw,
  Search,
  Share2,
  SlidersHorizontal,
} from "lucide-react"

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

export const ProjectOverviewPage: PageDefinition = {
  id: "project-overview",
  title: "Project dashboard",
  description:
    "Monitor key metrics, timelines, and quick actions for active LCA work.",
  primaryAction: {
    label: "New dataset / process",
    icon: Plus,
  },
  content: () => (
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
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-sm font-semibold">
              Timeline & calculation runs
            </h2>
            <div className="flex flex-1 flex-col items-stretch gap-2 sm:flex-row sm:justify-end">
              <InputGroup className="h-8 sm:w-[240px]">
                <InputGroupAddon>
                  <Search className="size-3.5 text-muted-foreground" />
                </InputGroupAddon>
                <InputGroupInput
                  placeholder="Filter activity..."
                  aria-label="Filter calculation runs"
                />
                <InputGroupAddon align="inline-end">
                  <InputGroupText className="gap-1 text-xs uppercase tracking-wide">
                    <SlidersHorizontal className="size-3.5" />
                    Sort
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
              <ButtonGroup className="h-8 overflow-hidden">
                <Button variant="outline" size="sm" className="h-8 gap-2">
                  <RefreshCw className="size-3.5" />
                  Sync
                </Button>
                <ButtonGroupSeparator />
                <Button variant="outline" size="sm" className="h-8 gap-2">
                  <Share2 className="size-3.5" />
                  Export log
                </Button>
              </ButtonGroup>
            </div>
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
            <FieldSet className="mt-3 gap-3">
              <FieldLegend className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Templates
              </FieldLegend>
              <FieldGroup className="gap-0">
                <ButtonGroup orientation="vertical" className="w-full">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="justify-between gap-2"
                  >
                    <span className="flex items-center gap-2">
                      <Plus className="size-4" />
                      New process
                    </span>
                    <ButtonGroupText className="bg-transparent border-0 px-0 text-xs text-muted-foreground">
                      Cmd&nbsp;+&nbsp;N
                    </ButtonGroupText>
                  </Button>
                  <ButtonGroupSeparator orientation="horizontal" />
                  <Button
                    size="sm"
                    variant="secondary"
                    className="justify-between gap-2"
                  >
                    <span className="flex items-center gap-2">
                      <Download className="size-4" />
                      Import inventory
                    </span>
                    <ButtonGroupText className="bg-transparent border-0 px-0 text-xs text-muted-foreground">
                      CSV/ILCD
                    </ButtonGroupText>
                  </Button>
                  <ButtonGroupSeparator orientation="horizontal" />
                  <Button
                    size="sm"
                    variant="secondary"
                    className="justify-between gap-2"
                  >
                    <span className="flex items-center gap-2">
                      <CalendarDays className="size-4" />
                      Schedule run
                    </span>
                    <ButtonGroupText className="bg-transparent border-0 px-0 text-xs text-muted-foreground">
                      Next slot
                    </ButtonGroupText>
                  </Button>
                </ButtonGroup>
              </FieldGroup>
            </FieldSet>
            <p className="mt-4 text-xs text-muted-foreground">
              Use templates to clone datasets, or launch comparison directly from
              a scenario.
            </p>
          </div>
        </div>
      </section>
    </div>
  ),
}
