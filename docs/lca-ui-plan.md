## LCA UI Plan

- Landing & Navigation: global sidebar for projects, datasets, calculations; top bar with search, user profile, active context switcher (project/scenario); quick actions button for “New dataset/process” or “Run calculation”.
- Project Dashboard: cards summarizing open datasets, recent calculations, key metrics; pinned tasks, alerts for data quality or missing exchanges; timeline showing recent edits and calculation runs for transparency.
- Dataset Browser: filterable table/grid for datasets and processes with tags (sector, geography, lifecycle stage); bulk actions for import/export, duplication, batching to scenarios; detail drawer preview with metadata and quick links to edit exchanges or view dependencies.
- Process Editor: structured layout with collapsible sections (Metadata, Inputs, Outputs, Exchanges, Impacts); inline validation and status badges; tabbed views for exchanges (table), flow diagram (graph of inputs/outputs), version history; support for cloning variants and adding notes.
- Exchange Editing: table with grouping by flow type (material, energy, emission); inline editing cells with unit conversion helper; per-exchange dropdown for linking to datasets, adjusting allocation, adding uncertainty; bulk editing modal for scaling or replacing providers.
- Inventory Library: dedicated modal/page to browse flows, impact factors, background datasets; advanced filtering (unit, geography, data quality); quick preview with compatibility warnings before linking.
- Scenario Management: workspace to combine datasets/processes into scenarios; drag-and-drop to override processes; comparison view listing default vs overridden exchanges; scenario metadata and tags.
- Calculation Setup: wizard or panel with steps (Select scenario; Choose functional unit; Impact assessment methods; Allocation/cutoff choices; Monte Carlo/sensitivity settings; Review); inline tooltips and preset templates; validation summary before running.
- Calculation Queue: list of pending/running/completed jobs; status badges, runtime estimates, logs; ability to cancel or rerun with tweaks; export to background processing service if needed.
- Results Overview: high-level KPIs (total impacts per category, indicators vs targets); charts (radar, bar, stacked contributions); filtering by scenario, method, time range; toggle between absolute and normalized scores.
- Impact Drill-down: hierarchy browser (process → sub-process → exchange) with contribution tree/treemap; waterfall chart showing drivers; ability to pivot by geography, lifecycle stage, or flow type.
- Comparison Tools: side-by-side scenarios with synced navigation; delta charts, percent change tables; timeline of impacts for dynamic data; exportable tables/charts (CSV, PNG).
- Sensitivity & Uncertainty: panels for Monte Carlo distributions (histograms, box plots); sliders to adjust key parameters and instantly see recalculated impacts (if model allows); highlight hotspots with confidence intervals.
- Reporting & Sharing: configurable report builder selecting sections (overview, methodology, detailed tables); templates for regulatory or client reporting; share links with permissions; scheduled email exports.
- Collaboration: activity feed with comments on datasets/processes; version snapshots with diff viewer for exchanges; assign review tasks; notifications for approvals or failed calculations.
- System Settings: manage impact method libraries, units, currency; user roles and permissions; data import/export (ILCD, JSON-LD, spreadsheets) with validation feedback.
- Accessibility & UX: responsive layout, consistent iconography, keyboard shortcuts for power users; contextual help, inline glossary for LCA terminology; dark/light theme options.
