import { cardClass, sectionClass } from "@/pages/PageSharedStyles"
import type { PageDefinition } from "@/pages/PageTypes"
import { Share2 } from "lucide-react"
import {
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

export const ResultsOverviewPage: PageDefinition = {
  id: "results-overview",
  title: "Results overview",
  description:
    "Summarize key impact indicators and compare scenarios against targets.",
  primaryAction: {
    label: "Export summary",
    icon: Share2,
  },
  content: () => (
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
  ),
}
