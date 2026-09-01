import { profile } from "@/data/profile"
import { StickerBurst } from "./primitives/stickers"

const marqueeItems = [
  "Estrategia de producto",
  "Diseño de interacción",
  "Dirección visual",
  "Desarrollo frontend",
  `${profile.availability} · Provisional`,
] as const

function MarqueeTrack() {
  return (
    <div className="marquee__track">
      {marqueeItems.map((item) => (
        <span className="marquee__item" key={item}>
          {item}
          <StickerBurst className="marquee__burst" />
        </span>
      ))}
      <a className="marquee__link" href="#contacto">
        Contacto provisional
      </a>
    </div>
  )
}

export function MarqueeBand() {
  return (
    <section className="marquee" aria-label="Disciplinas y disponibilidad" data-intro-banner>
      <div className="marquee__viewport">
        <MarqueeTrack />
        <div className="marquee__duplicate" aria-hidden="true" inert>
          <MarqueeTrack />
        </div>
      </div>
    </section>
  )
}
