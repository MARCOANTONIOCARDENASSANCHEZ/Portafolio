import { profile } from "@/data/profile"
import { AnimatedWordLink } from "./primitives/animated-word-link"
import { Container, ProvisionalBadge } from "./primitives/layout"
import { StickerBurst } from "./primitives/stickers"

const HERO_TITLE = "Construyo sistemas web que facilitan la gestión empresarial."

export function Hero() {
  const words = HERO_TITLE.split(" ")

  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <Container className="hero__grid">
        <div className="hero__label" data-intro-side>
          <span>01 / Portafolio</span>
          <ProvisionalBadge />
        </div>
        <div className="hero__sticker" data-intro-sticker>
          <StickerBurst />
        </div>
        <h1 className="hero__title" id="hero-title" aria-label={HERO_TITLE}>
          <span className="sr-only">{HERO_TITLE}</span>
          <span aria-hidden="true">
            {words.map((word) => (
              <span
                className={word === "gestión" ? "hero__word hero__word--accent" : "hero__word"}
                key={word}
                data-intro-headline-word
                data-intro-accent={word === "gestión" ? "true" : undefined}
              >
                {word}
              </span>
            ))}
          </span>
        </h1>
        <div className="hero__support" data-intro-support>
          <p className="hero__role">
            {profile.role} <span>· Provisional</span>
          </p>
          <p>{profile.shortBio}</p>
          <AnimatedWordLink href="#proyectos" label="Ver proyectos" variant="outlined" />
        </div>
        <p className="hero__location" data-intro-location>
          {profile.location} · Provisional
        </p>
        <p className="hero__year" data-intro-year>
          20XX
        </p>
      </Container>
    </section>
  )
}
