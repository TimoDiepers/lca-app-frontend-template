import { useCallback, useMemo, useRef, useState } from "react"
import type { CSSProperties, FormEvent } from "react"
import ReactFlow, {
  Background,
  BackgroundVariant,
  Controls,
  Handle,
  MarkerType,
  MiniMap,
  Position,
  useEdgesState,
  useNodesState,
  type Connection,
  type Edge,
  type Node,
  type NodeProps,
  type NodeTypes,
} from "reactflow"

import { Button } from "@/components/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { cn } from "@/lib/utils"

import "reactflow/dist/style.css"

type ProcessNodeData = {
  label: string
  category?: string
  description?: string
  productionAmount?: number
}

type ExchangeEdgeData = {
  label?: string
  flowType?: string
  unit?: string
  amount: number
}

type ProcessNode = Node<ProcessNodeData>
type ExchangeEdge = Edge<ExchangeEdgeData>

const EDGE_STYLE = {
  stroke: "var(--primary)",
  strokeWidth: 1.6,
} as const

const EDGE_LABEL_STYLE = {
  fill: "var(--foreground)",
  fontSize: "0.7rem",
  fontWeight: 600,
  letterSpacing: "0.02em",
} as const

const EDGE_LABEL_BG_STYLE = {
  fill: "var(--card)",
  stroke: "var(--border)",
  strokeWidth: 0.75,
  fillOpacity: 0.94,
} as const

const EDGE_MARKER_END = {
  type: MarkerType.ArrowClosed,
  width: 16,
  height: 16,
  color: "var(--primary)",
} as const

const formatEdgeLabel = (data: ExchangeEdgeData) => {
  if (data.label && data.label.trim().length > 0) {
    return data.label
  }
  const parts = [
    data.amount.toLocaleString(undefined, { maximumFractionDigits: 3 }),
    data.unit?.trim(),
  ].filter(Boolean)
  return parts.join(" ")
}

const ProcessNodeComponent = ({
  data,
  selected,
}: NodeProps<ProcessNodeData>) => (
  <div
    className={cn(
      "relative w-[188px] rounded-2xl border border-border bg-card p-3 text-left transition-all",
      "after:absolute after:inset-y-3 after:left-0 after:w-1.5 after:rounded-full after:content-['']",
      selected ? "ring-1 ring-primary/25 shadow-md after:bg-primary/65" : "shadow-sm after:bg-primary/30"
    )}
    style={{
      background: "var(--card)",
      boxShadow: selected
        ? "0 14px 28px -24px var(--ring)"
        : "0 8px 18px -20px var(--ring)",
    }}
  >
    <Handle
      type="target"
      position={Position.Left}
      className="rounded-full border border-border"
      style={{
        width: 10,
        height: 10,
        background: "var(--card)",
        boxShadow: "0 0 0 2px var(--card)",
      }}
    />
    <Handle
      type="source"
      position={Position.Right}
      className="rounded-full border border-primary/30"
      style={{
        width: 10,
        height: 10,
        background:
          "color-mix(in srgb, var(--primary) 50%, var(--card) 50%)",
        boxShadow: "0 0 0 2px var(--card)",
      }}
    />
    <div className="space-y-1 pl-2">
      <p className="text-sm font-semibold text-foreground">{data.label}</p>
      {data.category && (
        <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
          {data.category}
        </p>
      )}
      {typeof data.productionAmount === "number" && (
        <p className="text-[11px] text-muted-foreground">
          Production amount:{" "}
          <span className="font-medium text-foreground">
            {data.productionAmount}
          </span>
        </p>
      )}
      {data.description && (
        <p className="text-[11px] text-muted-foreground/80 line-clamp-2">
          {data.description}
        </p>
      )}
    </div>
  </div>
)

const nodeTypes: NodeTypes = {
  default: ProcessNodeComponent,
}

const createProcessNode = (
  id: string,
  position: { x: number; y: number },
  data: ProcessNodeData
): ProcessNode => ({
  id,
  position,
  data,
})

const createExchangeEdge = (
  source: string,
  target: string,
  data: ExchangeEdgeData,
  id?: string
): ExchangeEdge => ({
  id:
    id ??
    `edge-${source}-${target}-${Math.random().toString(36).slice(2, 8)}`,
  source,
  target,
  type: "smoothstep",
  animated: true,
  updatable: true,
  style: { ...EDGE_STYLE },
  markerEnd: { ...EDGE_MARKER_END },
  label: formatEdgeLabel(data),
  labelStyle: { ...EDGE_LABEL_STYLE },
  labelBgStyle: { ...EDGE_LABEL_BG_STYLE },
  labelBgPadding: [6, 6],
  labelBgBorderRadius: 12,
  data,
})

const initialNodes: ProcessNode[] = [
  createProcessNode(
    "process-1",
    { x: 160, y: 160 },
    {
      label: "Cathode drying EU",
      category: "Manufacturing",
      description: "Baseline process for cathode drying in EU plants.",
      productionAmount: 1,
    }
  ),
  createProcessNode(
    "process-2",
    { x: 440, y: 220 },
    {
      label: "Electricity grid EU",
      category: "Energy supply",
      productionAmount: 1,
    }
  ),
]

const initialEdges: ExchangeEdge[] = [
  createExchangeEdge("process-2", "process-1", {
    amount: 1250,
    unit: "kWh",
    label: "Electricity - EU mix",
    flowType: "Energy",
  }),
]

type SheetState = "process" | "exchange" | null

export function ProcessEditorWorkspace() {
  const [nodes, setNodes, onNodesChange] = useNodesState<ProcessNodeData>(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState<ExchangeEdgeData>(initialEdges)
  const [activeSheet, setActiveSheet] = useState<SheetState>(null)
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null)
  const [selectedEdgeId, setSelectedEdgeId] = useState<string | null>(null)
  const [processCounter, setProcessCounter] = useState(3)

  const processFormRef = useRef<HTMLFormElement>(null)
  const exchangeFormRef = useRef<HTMLFormElement>(null)
  const selectedNode = useMemo(
    () => nodes.find((node) => node.id === selectedNodeId) ?? null,
    [nodes, selectedNodeId]
  )
  const selectedEdge = useMemo(
    () => edges.find((edge) => edge.id === selectedEdgeId) ?? null,
    [edges, selectedEdgeId]
  )

  const nodeLabelLookup = useCallback(
    (id: string) => {
      const match = nodes.find((node) => node.id === id)
      return match ? match.data.label : id
    },
    [nodes]
  )

  const onConnect = useCallback(
    (connection: Connection) => {
      const { source, target } = connection
      if (!source || !target) return

      setEdges((prev) => {
        const exists = prev.some(
          (edge) => edge.source === source && edge.target === target
        )
        if (exists) {
          return prev
        }

        const newEdge = createExchangeEdge(source, target, {
          amount: 1,
          label: "",
        })
        setSelectedEdgeId(newEdge.id)
        setSelectedNodeId(null)
        return [...prev, newEdge]
      })
    },
    [setEdges]
  )

  const handleEdgeUpdate = useCallback(
    (oldEdge: ExchangeEdge, newConnection: Connection) => {
      const source = newConnection.source
      const target = newConnection.target
      if (!source || !target) {
        return
      }

      setEdges((prev) =>
        prev.map((edge) => {
          if (edge.id !== oldEdge.id) return edge
          const data = (edge.data ?? { amount: 1 }) as ExchangeEdgeData
          return createExchangeEdge(source, target, data, edge.id)
        })
      )

      setSelectedEdgeId(oldEdge.id)
      setSelectedNodeId(null)
    },
    [setEdges]
  )

  const handleAddProcess = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const formData = new FormData(event.currentTarget)
      const label = (formData.get("process-name") as string)?.trim()
      if (!label) return

      const category = (formData.get("process-category") as string)?.trim()
      const description = (formData.get("process-description") as string)?.trim()
      const productionAmountRaw = (formData.get("process-amount") as string)?.trim()
      const productionAmount =
        productionAmountRaw && productionAmountRaw.length > 0
          ? Number.parseFloat(productionAmountRaw)
          : 1

      const id = `process-${processCounter}`
      const newNode = createProcessNode(
        id,
        {
          x: 160 + processCounter * 42,
          y: 160 + processCounter * 30,
        },
        {
          label,
          category: category || undefined,
          description: description || undefined,
          productionAmount:
            Number.isNaN(productionAmount) || productionAmount <= 0
              ? 1
              : productionAmount,
        }
      )

      setNodes((prev) => [...prev, newNode])
      setProcessCounter((count) => count + 1)
      setSelectedNodeId(id)
      setSelectedEdgeId(null)
      setActiveSheet(null)
      event.currentTarget.reset()
    },
    [processCounter, setNodes]
  )

  const handleAddExchange = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const formData = new FormData(event.currentTarget)
      const source = (formData.get("exchange-source") as string) || ""
      const target = (formData.get("exchange-target") as string) || ""
      if (!source || !target) return

      const label = (formData.get("exchange-name") as string)?.trim()
      const flowType = (formData.get("exchange-flow-type") as string)?.trim()
      const unit = (formData.get("exchange-unit") as string)?.trim()
      const amountRaw = (formData.get("exchange-amount") as string)?.trim()
      const amount = Number.parseFloat(amountRaw ?? "1")

      if (Number.isNaN(amount) || amount <= 0) {
        return
      }

      const newEdge = createExchangeEdge(
        source,
        target,
        {
          amount,
          label: label || undefined,
          flowType: flowType || undefined,
          unit: unit || undefined,
        }
      )

      setEdges((prev) => [...prev, newEdge])
      setSelectedEdgeId(newEdge.id)
      setSelectedNodeId(null)
      setActiveSheet(null)
      event.currentTarget.reset()
    },
    [setEdges]
  )

  const updateNodeData = useCallback(
    (nodeId: string, updater: (data: ProcessNodeData) => ProcessNodeData) => {
      setNodes((prev) =>
        prev.map((node) =>
          node.id === nodeId ? { ...node, data: updater(node.data) } : node
        )
      )
    },
    [setNodes]
  )

  const updateEdgeData = useCallback(
    (edgeId: string, updater: (data: ExchangeEdgeData) => ExchangeEdgeData) => {
      setEdges((prev) =>
        prev.map((edge) =>
          edge.id === edgeId
            ? (() => {
                const current = (edge.data ?? { amount: 1 }) as ExchangeEdgeData
                const updated = updater(current)
                return {
                  ...edge,
                  data: updated,
                  label: formatEdgeLabel(updated),
                }
              })()
            : edge
        )
      )
    },
    [setEdges]
  )

  const handleEdgeAmountChange = useCallback(
    (edgeId: string, rawValue: string) => {
      updateEdgeData(edgeId, (data) => {
        const parsed = Number.parseFloat(rawValue)
        if (Number.isNaN(parsed) || parsed <= 0) {
          return data
        }
        return { ...data, amount: parsed }
      })
    },
    [updateEdgeData]
  )

  const handleEdgeLabelChange = useCallback(
    (edgeId: string, value: string) => {
      updateEdgeData(edgeId, (data) => ({
        ...data,
        label: value || undefined,
      }))
    },
    [updateEdgeData]
  )

  const handleEdgeFlowTypeChange = useCallback(
    (edgeId: string, value: string) => {
      updateEdgeData(edgeId, (data) => ({
        ...data,
        flowType: value || undefined,
      }))
    },
    [updateEdgeData]
  )

  const handleEdgeUnitChange = useCallback(
    (edgeId: string, value: string) => {
      updateEdgeData(edgeId, (data) => ({
        ...data,
        unit: value || undefined,
      }))
    },
    [updateEdgeData]
  )

  const handleDeleteSelected = useCallback(() => {
    if (selectedEdgeId) {
      setEdges((prev) => prev.filter((edge) => edge.id !== selectedEdgeId))
      setSelectedEdgeId(null)
      return
    }
    if (selectedNodeId) {
      setNodes((prev) => prev.filter((node) => node.id !== selectedNodeId))
      setEdges((prev) =>
        prev.filter(
          (edge) => edge.source !== selectedNodeId && edge.target !== selectedNodeId
        )
      )
      setSelectedNodeId(null)
    }
  }, [selectedEdgeId, selectedNodeId, setEdges, setNodes])

  const processOptions = useMemo(
    () =>
      nodes.map((node) => ({
        id: node.id,
        label: node.data.label,
      })),
    [nodes]
  )

  const incomingEdges = useMemo(
    () =>
      selectedNodeId
        ? edges.filter((edge) => edge.target === selectedNodeId)
        : [],
    [edges, selectedNodeId]
  )
  const outgoingEdges = useMemo(
    () =>
      selectedNodeId
        ? edges.filter((edge) => edge.source === selectedNodeId)
        : [],
    [edges, selectedNodeId]
  )

  const renderEdgeList = (
    title: string,
    items: ExchangeEdge[],
    direction: "incoming" | "outgoing"
  ) => (
    <FieldSet className="gap-2">
      <FieldLegend className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {title}
      </FieldLegend>
      <FieldGroup className="rounded-lg border border-dashed bg-muted/40 p-2 text-xs">
        {items.length === 0 ? (
          <p className="text-muted-foreground">No {direction} exchanges</p>
        ) : (
          items.map((edge) => {
            const data = (edge.data ?? { amount: 1 }) as ExchangeEdgeData
            const otherId =
              direction === "incoming" ? edge.source : edge.target
            const amountText = [
              data.amount.toLocaleString(undefined, {
                maximumFractionDigits: 3,
              }),
              data.unit?.trim(),
            ]
              .filter(Boolean)
              .join(" ")
            return (
              <button
                key={edge.id}
                type="button"
                onClick={() => {
                  setSelectedEdgeId(edge.id)
                  setSelectedNodeId(null)
                }}
                className={cn(
                  "flex w-full items-center justify-between rounded-md px-2 py-1 text-left transition-colors",
                  "hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  selectedEdgeId === edge.id && "bg-background"
                )}
              >
                <span className="font-medium text-foreground">
                  {nodeLabelLookup(otherId)}
                </span>
                <span className="text-muted-foreground">{amountText}</span>
              </button>
            )
          })
        )}
      </FieldGroup>
    </FieldSet>
  )

  const renderNodeInspector = () => {
    if (!selectedNode) return null
    const categoryInputId = `node-category-${selectedNode.id}`
    const descriptionInputId = `node-description-${selectedNode.id}`
    const amountInputId = `node-amount-${selectedNode.id}`

    return (
      <div className="space-y-6 text-sm">
        <FieldSet className="gap-4">
          <Field>
            <FieldLabel htmlFor={categoryInputId}>Category</FieldLabel>
            <FieldContent>
              <InputGroup>
                <InputGroupAddon>
                  <InputGroupText>Group</InputGroupText>
                </InputGroupAddon>
                <InputGroupInput
                  id={categoryInputId}
                  value={selectedNode.data.category ?? ""}
                  onChange={(event) =>
                    updateNodeData(selectedNode.id, (data) => ({
                      ...data,
                      category: event.target.value || undefined,
                    }))
                  }
                  placeholder="Manufacturing, logistics..."
                />
              </InputGroup>
              <FieldDescription>
                Optional label to cluster processes in dashboards.
              </FieldDescription>
            </FieldContent>
          </Field>

          <Field>
            <FieldLabel htmlFor={descriptionInputId}>Description</FieldLabel>
            <FieldContent>
              <InputGroup className="h-auto">
                <InputGroupAddon align="block-start">
                  <InputGroupText>Notes</InputGroupText>
                </InputGroupAddon>
                <InputGroupTextarea
                  id={descriptionInputId}
                  value={selectedNode.data.description ?? ""}
                  onChange={(event) =>
                    updateNodeData(selectedNode.id, (data) => ({
                      ...data,
                      description: event.target.value || undefined,
                    }))
                  }
                  placeholder="Provide optional context for collaborators."
                  rows={3}
                />
              </InputGroup>
            </FieldContent>
          </Field>

          <Field>
            <FieldLabel htmlFor={amountInputId}>
              Production amount
            </FieldLabel>
            <FieldContent>
              <InputGroup>
                <InputGroupAddon>
                  <InputGroupText>Qty</InputGroupText>
                </InputGroupAddon>
                <InputGroupInput
                  id={amountInputId}
                  type="number"
                  inputMode="decimal"
                  step="0.01"
                  value={selectedNode.data.productionAmount ?? 1}
                  onChange={(event) => {
                    const parsed = Number.parseFloat(event.target.value)
                    updateNodeData(selectedNode.id, (data) => ({
                      ...data,
                      productionAmount:
                        Number.isNaN(parsed) || parsed <= 0 ? 1 : parsed,
                    }))
                  }}
                  placeholder="1"
                />
                <InputGroupAddon align="inline-end">
                  <InputGroupText className="text-xs uppercase tracking-wide">
                    per ref.
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
              <FieldDescription>
                Reference flow used when scaling connected exchanges.
              </FieldDescription>
            </FieldContent>
          </Field>
        </FieldSet>

        <FieldSeparator />

        {renderEdgeList("Incoming exchanges", incomingEdges, "incoming")}
        {renderEdgeList("Outgoing exchanges", outgoingEdges, "outgoing")}

        <p className="text-muted-foreground text-xs">
          Select a row above to edit a connected exchange, or use the canvas to
          create new connections.
        </p>
      </div>
    )
  }

  const renderEdgeInspector = () => {
    if (!selectedEdge) return null
    const data = (selectedEdge.data ?? { amount: 1 }) as ExchangeEdgeData
    const labelInputId = `edge-label-${selectedEdge.id}`
    const flowTypeInputId = `edge-flow-${selectedEdge.id}`
    const amountInputId = `edge-amount-${selectedEdge.id}`
    const unitInputId = `edge-unit-${selectedEdge.id}`

    return (
      <div className="space-y-6 text-sm">
        <FieldSet className="gap-4">
          <Field>
            <FieldLabel htmlFor={labelInputId}>Exchange label</FieldLabel>
            <FieldContent>
              <InputGroup>
                <InputGroupAddon>
                  <InputGroupText>Label</InputGroupText>
                </InputGroupAddon>
                <InputGroupInput
                  id={labelInputId}
                  value={data.label ?? ""}
                  onChange={(event) =>
                    handleEdgeLabelChange(selectedEdge.id, event.target.value)
                  }
                  placeholder="Electricity - EU mix"
                />
              </InputGroup>
            </FieldContent>
          </Field>

          <Field>
            <FieldLabel htmlFor={flowTypeInputId}>Flow type</FieldLabel>
            <FieldContent>
              <InputGroup>
                <InputGroupAddon>
                  <InputGroupText>Type</InputGroupText>
                </InputGroupAddon>
                <InputGroupInput
                  id={flowTypeInputId}
                  value={data.flowType ?? ""}
                  onChange={(event) =>
                    handleEdgeFlowTypeChange(selectedEdge.id, event.target.value)
                  }
                  placeholder="Material, energy, emission..."
                />
              </InputGroup>
              <FieldDescription>
                Helps categorise exchanges in analytics.
              </FieldDescription>
            </FieldContent>
          </Field>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field>
              <FieldLabel htmlFor={amountInputId}>Amount</FieldLabel>
              <FieldContent>
                <InputGroup>
                  <InputGroupAddon>
                    <InputGroupText>Qty</InputGroupText>
                  </InputGroupAddon>
                  <InputGroupInput
                    id={amountInputId}
                    type="number"
                    inputMode="decimal"
                    step="0.01"
                    value={data.amount}
                    onChange={(event) =>
                      handleEdgeAmountChange(selectedEdge.id, event.target.value)
                    }
                  />
                </InputGroup>
              </FieldContent>
            </Field>
            <Field>
              <FieldLabel htmlFor={unitInputId}>Unit</FieldLabel>
              <FieldContent>
                <InputGroup>
                  <InputGroupAddon>
                    <InputGroupText>Unit</InputGroupText>
                  </InputGroupAddon>
                  <InputGroupInput
                    id={unitInputId}
                    value={data.unit ?? ""}
                    onChange={(event) =>
                      handleEdgeUnitChange(selectedEdge.id, event.target.value)
                    }
                    placeholder="kWh, kg, m³..."
                  />
                </InputGroup>
              </FieldContent>
            </Field>
          </div>
        </FieldSet>

        <FieldSet className="gap-2">
          <FieldLegend className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Connected processes
          </FieldLegend>
          <FieldGroup className="rounded-lg border border-dashed bg-muted/40 p-3 text-xs">
            <span className="flex items-center justify-between gap-2">
              <span className="text-muted-foreground">Source</span>
              <span className="font-medium text-foreground">
                {nodeLabelLookup(selectedEdge.source)}
              </span>
            </span>
            <span className="flex items-center justify-between gap-2">
              <span className="text-muted-foreground">Target</span>
              <span className="font-medium text-foreground">
                {nodeLabelLookup(selectedEdge.target)}
              </span>
            </span>
          </FieldGroup>
        </FieldSet>
      </div>
    )
  }

  const decoratedEdges = useMemo(
    () =>
      edges.map((edge) => {
        const data = (edge.data ?? { amount: 1 }) as ExchangeEdgeData
        const isSelected = edge.id === selectedEdgeId
        const strokeColor = isSelected
          ? "color-mix(in srgb, var(--primary) 65%, var(--ring) 35%)"
          : EDGE_STYLE.stroke

        const baseStyle = (edge.style ?? {}) as CSSProperties
        const baseMarker =
          edge.markerEnd && typeof edge.markerEnd === "object"
            ? edge.markerEnd
            : {}

        return {
          ...edge,
          style: {
            ...EDGE_STYLE,
            ...baseStyle,
            stroke: strokeColor,
            strokeWidth: isSelected ? 2.2 : EDGE_STYLE.strokeWidth,
          },
          markerEnd: {
            ...EDGE_MARKER_END,
            ...(baseMarker as Record<string, unknown>),
            color: strokeColor,
          },
          label: formatEdgeLabel(data),
          labelBgStyle: {
            ...EDGE_LABEL_BG_STYLE,
            fill: isSelected
              ? "color-mix(in srgb, var(--primary) 12%, var(--card) 88%)"
              : EDGE_LABEL_BG_STYLE.fill,
            stroke: isSelected
              ? "color-mix(in srgb, var(--primary) 45%, var(--border) 55%)"
              : EDGE_LABEL_BG_STYLE.stroke,
          },
        }
      }),
    [edges, selectedEdgeId]
  )

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
      <div className="rounded-xl border bg-background p-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-sm font-semibold">Process canvas</h2>
            <p className="text-muted-foreground text-sm">
              Drag processes into position, connect them with exchanges, and edit
              amounts inline.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <ButtonGroup>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setActiveSheet("process")}
              >
                New process
              </Button>
              <ButtonGroupSeparator />
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setActiveSheet("exchange")}
                disabled={processOptions.length < 2}
              >
                New exchange
              </Button>
            </ButtonGroup>
          </div>

          <Sheet
            open={activeSheet === "process"}
            onOpenChange={(open) => {
              setActiveSheet(open ? "process" : null)
              if (!open) processFormRef.current?.reset()
            }}
          >
            <SheetContent side="right" className="w-[420px] sm:w-[480px]">
              <SheetHeader>
                <SheetTitle>New process</SheetTitle>
                <SheetDescription>
                  Describe the process, set its production amount, and place it
                  on the canvas.
                </SheetDescription>
              </SheetHeader>
              <form ref={processFormRef} onSubmit={handleAddProcess}>
                <FieldSet className="gap-6 p-4">
                  <Field>
                    <FieldLabel htmlFor="process-name">Process name</FieldLabel>
                    <FieldContent>
                      <Input
                        id="process-name"
                        name="process-name"
                        placeholder="Cathode drying EU"
                        required
                      />
                      <FieldDescription>
                        This label appears on the canvas node and in
                        exchange lists.
                      </FieldDescription>
                    </FieldContent>
                  </Field>
                  <Field orientation="responsive">
                    <FieldLabel htmlFor="process-category">
                      Category
                    </FieldLabel>
                    <FieldContent>
                      <Input
                        id="process-category"
                        name="process-category"
                        placeholder="Manufacturing"
                      />
                      <FieldDescription>
                        Optional grouping shown in the process inspector.
                      </FieldDescription>
                    </FieldContent>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="process-amount">
                      Production amount
                    </FieldLabel>
                    <FieldContent>
                      <InputGroup>
                        <InputGroupAddon>
                          <InputGroupText>Qty</InputGroupText>
                        </InputGroupAddon>
                        <InputGroupInput
                          id="process-amount"
                          name="process-amount"
                          type="number"
                          inputMode="decimal"
                          step="0.01"
                          placeholder="1"
                          defaultValue="1"
                          aria-label="Production amount"
                        />
                        <InputGroupAddon align="inline-end">
                          <InputGroupText className="text-xs font-medium uppercase tracking-wide">
                            per ref.
                          </InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                      <FieldDescription>
                        Used to normalise exchanges for this process.
                      </FieldDescription>
                    </FieldContent>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="process-description">
                      Description
                    </FieldLabel>
                    <FieldContent>
                      <InputGroup className="h-auto">
                        <InputGroupAddon align="block-start">
                          <InputGroupText>Notes</InputGroupText>
                        </InputGroupAddon>
                        <InputGroupTextarea
                          id="process-description"
                          name="process-description"
                          placeholder="Optional supporting context"
                          rows={3}
                        />
                      </InputGroup>
                    </FieldContent>
                  </Field>
                </FieldSet>
                <SheetFooter className="gap-2 sm:flex-row sm:justify-end">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setActiveSheet(null)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit">Create process</Button>
                </SheetFooter>
              </form>
            </SheetContent>
          </Sheet>

          <Sheet
            open={activeSheet === "exchange"}
            onOpenChange={(open) => {
              setActiveSheet(open ? "exchange" : null)
              if (!open) exchangeFormRef.current?.reset()
            }}
          >
            <SheetContent side="right" className="w-[420px] sm:w-[480px]">
              <SheetHeader>
                <SheetTitle>New exchange</SheetTitle>
                <SheetDescription>
                  Connect two processes with a quantified exchange.
                </SheetDescription>
              </SheetHeader>
              <form ref={exchangeFormRef} onSubmit={handleAddExchange}>
                <FieldSet className="gap-6 p-4">
                  <FieldLegend className="mb-1 text-sm font-semibold">
                    Link processes
                  </FieldLegend>
                  <FieldGroup className="gap-4">
                    <Field orientation="responsive">
                      <FieldLabel htmlFor="exchange-source">
                        Source
                      </FieldLabel>
                      <FieldContent>
                        <select
                          id="exchange-source"
                          name="exchange-source"
                          className="rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          defaultValue=""
                          required
                        >
                          <option value="">Select process</option>
                          {processOptions.map((option) => (
                            <option key={option.id} value={option.id}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <FieldDescription>
                          Origin process providing the flow.
                        </FieldDescription>
                      </FieldContent>
                    </Field>
                    <Field orientation="responsive">
                      <FieldLabel htmlFor="exchange-target">
                        Target
                      </FieldLabel>
                      <FieldContent>
                        <select
                          id="exchange-target"
                          name="exchange-target"
                          className="rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          defaultValue=""
                          required
                        >
                          <option value="">Select process</option>
                          {processOptions.map((option) => (
                            <option key={option.id} value={option.id}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <FieldDescription>
                          Destination process receiving the flow.
                        </FieldDescription>
                      </FieldContent>
                    </Field>
                  </FieldGroup>

                  <FieldSeparator />

                  <Field>
                    <FieldLabel htmlFor="exchange-name">
                      Exchange label
                    </FieldLabel>
                    <FieldContent>
                      <Input
                        id="exchange-name"
                        name="exchange-name"
                        placeholder="Electricity - EU mix"
                      />
                      <FieldDescription>
                        Optional descriptor used in legends and reports.
                      </FieldDescription>
                    </FieldContent>
                  </Field>

                  <FieldGroup className="gap-5">
                    <Field orientation="responsive">
                      <FieldLabel htmlFor="exchange-flow-type">
                        Flow type
                      </FieldLabel>
                      <FieldContent>
                        <InputGroup>
                          <InputGroupAddon>
                            <InputGroupText>Type</InputGroupText>
                          </InputGroupAddon>
                          <InputGroupInput
                            id="exchange-flow-type"
                            name="exchange-flow-type"
                            placeholder="Material, energy, emission..."
                          />
                        </InputGroup>
                      </FieldContent>
                    </Field>
                    <Field orientation="responsive">
                      <FieldLabel htmlFor="exchange-unit">Unit</FieldLabel>
                      <FieldContent>
                        <InputGroup>
                          <InputGroupAddon>
                            <InputGroupText>Unit</InputGroupText>
                          </InputGroupAddon>
                          <InputGroupInput
                            id="exchange-unit"
                            name="exchange-unit"
                            placeholder="kWh, kg, m³..."
                          />
                        </InputGroup>
                      </FieldContent>
                    </Field>
                  </FieldGroup>

                  <Field>
                    <FieldLabel htmlFor="exchange-amount">Amount</FieldLabel>
                    <FieldContent>
                      <InputGroup>
                        <InputGroupAddon>
                          <InputGroupText>Qty</InputGroupText>
                        </InputGroupAddon>
                        <InputGroupInput
                          id="exchange-amount"
                          name="exchange-amount"
                          type="number"
                          inputMode="decimal"
                          step="0.01"
                          placeholder="Enter quantity"
                          defaultValue="1"
                          required
                          aria-label="Exchange amount"
                        />
                      </InputGroup>
                      <FieldDescription>
                        Default quantity applied when creating the exchange.
                      </FieldDescription>
                    </FieldContent>
                  </Field>
                </FieldSet>
                <SheetFooter className="gap-2 sm:flex-row sm:justify-end">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setActiveSheet(null)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit">Create exchange</Button>
                </SheetFooter>
              </form>
            </SheetContent>
          </Sheet>
        </div>

        <div className="mt-4 h-[560px] rounded-lg border">
          <ReactFlow
            nodes={nodes}
            edges={decoratedEdges}
            nodeTypes={nodeTypes}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
            defaultEdgeOptions={{ updatable: true }}
            onEdgeUpdate={handleEdgeUpdate}
            onEdgeClick={(_, edge) => {
              setSelectedEdgeId(edge.id)
              setSelectedNodeId(null)
            }}
            onNodeClick={(_, node) => {
              setSelectedNodeId(node.id)
              setSelectedEdgeId(null)
            }}
            onPaneClick={() => {
              setSelectedNodeId(null)
              setSelectedEdgeId(null)
            }}
            className="rounded-lg"
          >
            <MiniMap
              pannable
              zoomable
              maskColor="var(--background)"
              nodeColor={() => "var(--primary)"}
              nodeStrokeColor={() => "var(--border)"}
            />
            <Controls position="bottom-right" />
            <Background
              gap={24}
              size={1.1}
              color="var(--border)"
              variant={BackgroundVariant.Dots}
            />
          </ReactFlow>
        </div>
      </div>

      <aside className="rounded-xl border bg-background p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold">
            {selectedEdge ? "Exchange inspector" : "Process inspector"}
          </h2>
          {(selectedNode || selectedEdge) && (
            <Button variant="ghost" size="sm" onClick={handleDeleteSelected}>
              Remove
            </Button>
          )}
        </div>
        {selectedEdge
          ? renderEdgeInspector()
          : selectedNode
            ? renderNodeInspector()
            : (
              <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                <p>Select a process node to view its details.</p>
                <p>Click an exchange line to edit amounts, units, or labels.</p>
                <p>
                  Use the controls above the canvas to add new processes or
                  exchanges.
                </p>
              </div>
            )}
      </aside>
    </div>
  )
}
