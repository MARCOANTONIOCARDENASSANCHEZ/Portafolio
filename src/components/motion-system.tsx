"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lenis from "lenis"
import { useEffect, useRef } from "react"

export function MotionSystem() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduceMotion) return

    gsap.registerPlugin(ScrollTrigger)
    const lenis = new Lenis({ duration: 0.9, smoothWheel: true })
    const update = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)
    lenis.on("scroll", ScrollTrigger.update)

    const reveal = gsap.utils.toArray<HTMLElement>("[data-reveal]")
    reveal.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
        },
      )
    })

    const cursor = cursorRef.current
    const move = (event: PointerEvent) => {
      if (!cursor || event.pointerType !== "mouse") return
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`
    }
    window.addEventListener("pointermove", move)

    return () => {
      window.removeEventListener("pointermove", move)
      gsap.ticker.remove(update)
      lenis.destroy()
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill()
      })
    }
  }, [])

  useEffect(() => {
    window.history.scrollRestoration = "manual"
    if (location.hash) {
      history.replaceState(null, "", location.pathname + location.search)
    }
    const scrollAnim = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" })
    })

    return () => {
      cancelAnimationFrame(scrollAnim)
      window.history.scrollRestoration = "auto"
    }
  }, [])

  return (
    <div className="custom-cursor" ref={cursorRef} aria-hidden="true">
      <span />
    </div>
  )
}
