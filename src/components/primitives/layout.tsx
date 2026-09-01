import type { ReactNode } from "react"

type ContainerProps = {
  readonly children: ReactNode
  readonly className?: string
  readonly id?: string
}

type SectionHeadingProps = {
  readonly index: string
  readonly title: string
  readonly intro?: string
  readonly id: string
  readonly inverted?: boolean
  readonly compact?: boolean
}

export function Container({ children, className = "", id }: ContainerProps) {
  return (
    <div className={`container-grid ${className}`} id={id}>
      {children}
    </div>
  )
}

export function SectionHeading({
  index,
  title,
  intro,
  id,
  inverted = false,
  compact = false,
}: SectionHeadingProps) {
  return (
    <header
      className={`section-heading ${inverted ? "section-heading--inverted" : ""} ${compact ? "section-heading--compact" : ""}`}
      data-reveal="section"
    >
      <span className="section-heading__index" aria-hidden="true">
        {index}
      </span>
      <h2 className="section-heading__title" id={id}>
        {title}
      </h2>
      {intro ? <p className="section-heading__intro">{intro}</p> : null}
      <span className="section-heading__rule" aria-hidden="true" />
    </header>
  )
}

export function ProvisionalBadge({ inverted = false }: { readonly inverted?: boolean }) {
  return (
    <span className={`provisional-badge ${inverted ? "provisional-badge--inverted" : ""}`}>
      Provisional · reemplazar
    </span>
  )
}

export function Tag({ children }: { readonly children: ReactNode }) {
  return <span className="tag">{children}</span>
}
