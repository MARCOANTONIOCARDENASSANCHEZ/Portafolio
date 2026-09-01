import type { CoverVariant } from "@/data/types"

type ProjectArtProps = {
  readonly variant: CoverVariant
  readonly label: string
  readonly className?: string
}

export function ProjectArt({ variant, label, className = "" }: ProjectArtProps) {
  return (
    <figure className={`project-art project-art--${variant} ${className}`}>
      <svg viewBox="0 0 640 480" role="img" aria-label={label}>
        <title>{label}</title>
        <g className="project-art__lines">
          <path d="M52 82h228v128H52zM360 48h228v188H360zM116 282h404v130H116z" />
          <path d="m52 210 64 72m164-72 80 72m160-46v46M208 82l152 154" />
        </g>
        <g className="project-art__marks">
          <circle cx="116" cy="146" r="34" />
          <circle cx="480" cy="142" r="58" />
          <path d="m210 346 68-38 68 38-68 38Z" />
          <path d="M420 316h68v68h-68z" />
        </g>
        <g className="project-art__dots">
          <circle cx="74" cy="438" r="5" className="dot-74" />
          <circle cx="142" cy="438" r="5" className="dot-142" />
          <circle cx="210" cy="438" r="5" className="dot-210" />
          <circle cx="278" cy="438" r="5" className="dot-278" />
          <circle cx="346" cy="438" r="5" className="dot-346" />
          <circle cx="414" cy="438" r="5" className="dot-414" />
          <circle cx="482" cy="438" r="5" className="dot-482" />
          <circle cx="550" cy="438" r="5" className="dot-550" />
        </g>
      </svg>
      <figcaption>{label} · Provisional</figcaption>
    </figure>
  )
}
