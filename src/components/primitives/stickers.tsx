type StickerProps = {
  readonly className?: string
}

export function StickerBurst({ className = "" }: StickerProps) {
  return (
    <svg className={`sticker sticker--burst ${className}`} viewBox="0 0 100 100" aria-hidden="true">
      <path d="M50 4 59 32 82 18 68 41 96 50 68 59 82 82 59 68 50 96 41 68 18 82 32 59 4 50 32 41 18 18 41 32Z" />
      <circle cx="50" cy="50" r="10" />
    </svg>
  )
}

export function StickerBracket({ className = "" }: StickerProps) {
  return (
    <svg
      className={`sticker sticker--bracket ${className}`}
      viewBox="0 0 120 120"
      aria-hidden="true"
    >
      <path d="M48 12H22v96h26M72 12h26v96H72" />
      <path d="M38 60h44" />
    </svg>
  )
}

export function StickerCursor({ className = "" }: StickerProps) {
  return (
    <svg
      className={`sticker sticker--cursor ${className}`}
      viewBox="0 0 120 120"
      aria-hidden="true"
    >
      <path d="m24 16 70 45-30 7-14 29Z" />
      <path d="m66 69 19 29" />
    </svg>
  )
}

export function StickerUnderline({ className = "" }: StickerProps) {
  return (
    <svg
      className={`sticker sticker--underline ${className}`}
      viewBox="0 0 180 40"
      aria-hidden="true"
    >
      <path d="m4 25 18-10 18 10 18-10 18 10 18-10 18 10 18-10 18 10 18-10 18 10" />
    </svg>
  )
}
