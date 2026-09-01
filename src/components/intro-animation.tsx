"use client"

import gsap from "gsap"
import { useLayoutEffect, useRef, useState } from "react"

function AnimatedLine({ text }: { text: string }) {
  const occurrences = new Map<string, number>()
  const letters = Array.from(text, (character) => {
    const occurrence = (occurrences.get(character) ?? 0) + 1
    occurrences.set(character, occurrence)
    return { character, id: `${character}-${occurrence}` }
  })

  return (
    <span className="portfolio-intro__line">
      {letters.map(({ character, id }) => (
        <span className="portfolio-intro__letter" key={id}>
          {character === " " ? "\u00a0" : character}
        </span>
      ))}
    </span>
  )
}

export function IntroAnimation() {
  const rootRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(true)

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    const html = document.documentElement
    const previousOverflow = html.style.overflow
    html.style.overflow = "hidden"
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })

    const context = gsap.context(() => {
      const finish = () => {
        html.style.overflow = previousOverflow
        setVisible(false)
      }

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.to(root, { autoAlpha: 0, duration: 0.2, onComplete: finish })
        return
      }

      const header = document.querySelector<HTMLElement>("[data-intro-header]")
      const brand = document.querySelector<HTMLElement>("[data-intro-brand]")
      const availability = document.querySelector<HTMLElement>("[data-intro-availability]")
      const navItems = gsap.utils.toArray<HTMLElement>("[data-intro-nav-item]")
      const menuTrigger = document.querySelector<HTMLElement>("[data-intro-menu-trigger]")
      const side = document.querySelector<HTMLElement>("[data-intro-side]")
      const sticker = document.querySelector<HTMLElement>("[data-intro-sticker]")
      const headlineWords = gsap.utils.toArray<HTMLElement>("[data-intro-headline-word]")
      const accentWord = document.querySelector<HTMLElement>('[data-intro-accent="true"]')
      const support = document.querySelector<HTMLElement>("[data-intro-support]")
      const supportButton = support?.querySelector<HTMLElement>(".animated-link") ?? null
      const location = document.querySelector<HTMLElement>("[data-intro-location]")
      const year = document.querySelector<HTMLElement>("[data-intro-year]")
      const banner = document.querySelector<HTMLElement>("[data-intro-banner]")

      gsap.set(".portfolio-intro__letter", {
        y: () => -Math.min(window.innerHeight * 0.58, 520),
        rotate: () => gsap.utils.random(-7, 7),
        opacity: 0,
      })
      gsap.set(".portfolio-intro__dot", { scale: 0 })
      gsap.set(".portfolio-intro__panel", { yPercent: 105 })
      gsap.set(".portfolio-intro__underline-path", {
        strokeDasharray: 1040,
        strokeDashoffset: 1040,
      })
      gsap.set(header, { autoAlpha: 0, y: -82 })
      gsap.set(brand, { x: -76 })
      gsap.set(availability, { autoAlpha: 0, y: -62 })
      gsap.set(navItems, { autoAlpha: 0, x: 78, y: -48 })
      gsap.set(menuTrigger, { autoAlpha: 0, x: 76 })
      gsap.set(side, { autoAlpha: 0, x: -92, y: 34 })
      gsap.set(sticker, { autoAlpha: 0, x: -72, y: 112, rotate: -24, scale: 0.68 })
      gsap.set(headlineWords, { autoAlpha: 0, y: 132, x: 34, rotate: 3 })
      gsap.set(accentWord, { "--accent-line-scale": 0 })
      gsap.set(support, { autoAlpha: 0, x: 108, y: 86 })
      gsap.set(supportButton, { autoAlpha: 0, x: 64, y: 74, rotate: 2 })
      gsap.set(location, { autoAlpha: 0, x: -78, y: 46 })
      gsap.set(year, { autoAlpha: 0, x: 82, y: 48 })
      gsap.set(banner, { autoAlpha: 0, y: 86 })

      const timeline = gsap.timeline({ defaults: { ease: "power3.out" }, onComplete: finish })
      timeline
        .addLabel("nameIn")
        .to(".portfolio-intro__letter", {
          y: 0,
          rotate: 0,
          opacity: 1,
          duration: 1.35,
          stagger: 0.065,
          ease: "bounce.out",
        })
        .to(
          ".portfolio-intro__underline-path",
          { strokeDashoffset: 0, duration: 0.95, ease: "power2.inOut" },
          "-=0.18",
        )
        .to(".portfolio-intro__dot", { scale: 1, duration: 0.42, ease: "back.out(2.2)" }, "-=0.42")
        .to(".portfolio-intro__name", { y: -8, duration: 0.45 }, "+=0.55")
        .to(".portfolio-intro__panel--green", {
          yPercent: 0,
          duration: 0.62,
          ease: "power4.inOut",
        })
        .set(".portfolio-intro__name", { autoAlpha: 0 })
        .set(root, { backgroundColor: "#f4f0e6" })
        .to(
          ".portfolio-intro__panel--orange",
          { yPercent: 0, duration: 0.58, ease: "power4.inOut" },
          "-=0.38",
        )
        .to(
          ".portfolio-intro__panel--ivory",
          { yPercent: 0, duration: 0.58, ease: "power4.inOut" },
          "-=0.38",
        )
        .addLabel("revealStart", "+=0.08")
        .set(root, { backgroundColor: "transparent" }, "revealStart")
        .to(
          ".portfolio-intro__panel",
          { yPercent: -105, duration: 1.28, stagger: 0.11, ease: "power4.inOut" },
          "revealStart",
        )
        .to(header, { autoAlpha: 1, y: 0, duration: 1.18 }, "revealStart+=0.18")
        .to(brand, { x: 0, duration: 1.08 }, "revealStart+=0.18")
        .to(availability, { autoAlpha: 1, y: 0, duration: 1.02 }, "revealStart+=0.32")
        .to(
          navItems,
          { autoAlpha: 1, x: 0, y: 0, duration: 1.04, stagger: 0.12 },
          "revealStart+=0.36",
        )
        .to(menuTrigger, { autoAlpha: 1, x: 0, duration: 1.04 }, "revealStart+=0.36")
        .addLabel("sideIn", "revealStart+=0.48")
        .to(side, { autoAlpha: 1, x: 0, y: 0, duration: 1.2 }, "sideIn")
        .to(
          sticker,
          { autoAlpha: 1, x: 0, y: 0, rotate: 0, scale: 1, duration: 1.38, ease: "back.out(1.35)" },
          "sideIn+=0.08",
        )
        .addLabel("headlineIn", "revealStart+=0.62")
        .to(
          headlineWords,
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            rotate: 0,
            duration: 1.42,
            stagger: 0.11,
            ease: "power4.out",
          },
          "headlineIn",
        )
        .to(
          accentWord,
          { "--accent-line-scale": 1, duration: 0.82, ease: "power3.out" },
          "headlineIn+=0.68",
        )
        .addLabel("contentIn", "headlineIn+=0.7")
        .to(support, { autoAlpha: 1, x: 0, y: 0, duration: 1.24 }, "contentIn")
        .to(
          supportButton,
          { autoAlpha: 1, x: 0, y: 0, rotate: 0, duration: 1.16, ease: "back.out(1.2)" },
          "contentIn+=0.28",
        )
        .to(location, { autoAlpha: 1, x: 0, y: 0, duration: 1.04 }, "contentIn+=0.22")
        .to(year, { autoAlpha: 1, x: 0, y: 0, duration: 1.04 }, "contentIn+=0.34")
        .to(banner, { autoAlpha: 1, y: 0, duration: 1.2, ease: "power4.out" }, "revealStart+=1.28")
        .to(root, { autoAlpha: 0, duration: 0.2 }, "revealStart+=1.68")
    }, root)

    return () => {
      context.revert()
      html.style.overflow = previousOverflow
    }
  }, [])

  if (!visible) return null

  return (
    <div className="portfolio-intro" ref={rootRef} aria-hidden="true">
      <div className="portfolio-intro__name">
        <AnimatedLine text="Marco Antonio" />
        <svg
          className="portfolio-intro__underline"
          viewBox="0 0 1040 46"
          preserveAspectRatio="none"
        >
          <title>Subrayado decorativo</title>
          <path
            className="portfolio-intro__underline-path"
            d="M8 25 C116 9 185 39 286 23 C389 7 481 37 584 22 C700 5 781 37 1031 17"
            pathLength="1040"
          />
        </svg>
        <span className="portfolio-intro__dot" />
      </div>
      <div className="portfolio-intro__panel portfolio-intro__panel--green" />
      <div className="portfolio-intro__panel portfolio-intro__panel--orange" />
      <div className="portfolio-intro__panel portfolio-intro__panel--ivory" />
    </div>
  )
}
