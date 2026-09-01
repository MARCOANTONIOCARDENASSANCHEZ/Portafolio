export const PROVISIONAL_STATUS = "PROVISIONAL" as const

export type ProvisionalStatus = typeof PROVISIONAL_STATUS

export type ProjectSlug =
  | "climer-plataforma"
  | "vega-system"
  | "archivo-niebla"
  | "turno-abierto"
  | "margen-comun"

export type CoverVariant = "atlas" | "frequency" | "archive" | "shift" | "margin"

export type Project = {
  readonly status: ProvisionalStatus
  readonly slug: ProjectSlug
  readonly index: string
  readonly title: string
  readonly summary: string
  readonly role: string
  readonly year: string
  readonly services: readonly string[]
  readonly technologies: readonly string[]
  readonly coverLabel: string
  readonly coverAlt: string
  readonly coverVariant: CoverVariant
  readonly detailHref: `#${string}`
  readonly atmosphere: string
  readonly caseStudy?: CaseStudy
}

export type CaseStudy = {
  readonly status: ProvisionalStatus
  readonly challenge: string
  readonly participation: string
  readonly process: string
  readonly result: string
  readonly outcome: string
}

export type Skill = {
  readonly status: ProvisionalStatus
  readonly id: string
  readonly label: string
  readonly level: string
  readonly description: string
  readonly methods: readonly string[]
  readonly evidence: string
}

export type TimelineItem = {
  readonly status: ProvisionalStatus
  readonly date: string
  readonly dateTime: string
  readonly role: string
  readonly organization: string
  readonly description: string
  readonly current: boolean
}
