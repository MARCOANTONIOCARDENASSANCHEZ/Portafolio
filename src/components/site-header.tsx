"use client"

import { useEffect, useRef, useState } from "react"
import { navigation } from "@/data/navigation"
import { profile } from "@/data/profile"
import { CloseIcon, MenuIcon } from "./primitives/icons"
import { ProvisionalBadge } from "./primitives/layout"

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeHref, setActiveHref] = useState("#inicio")
  const triggerRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 0)
    updateScrolled()
    window.addEventListener("scroll", updateScrolled, { passive: true })
    return () => window.removeEventListener("scroll", updateScrolled)
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const panel = panelRef.current
    const controls = panel?.querySelectorAll<HTMLElement>(FOCUSABLE)
    const first = controls?.item(0)
    first?.focus()
    document.body.dataset["menuOpen"] = "true"

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false)
        triggerRef.current?.focus()
        return
      }
      if (event.key !== "Tab" || !controls || controls.length === 0) return
      const last = controls.item(controls.length - 1)
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first?.focus()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      delete document.body.dataset["menuOpen"]
    }
  }, [menuOpen])

  const closeMenu = (href: string) => {
    setActiveHref(href)
    setMenuOpen(false)
  }

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`} data-intro-header>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <div className="site-header__inner">
        <a
          className="site-header__brand"
          href="#inicio"
          onClick={() => setActiveHref("#inicio")}
          data-intro-brand
        >
          <span>{profile.name}</span>
          <small>Provisional</small>
        </a>
        <p className="site-header__availability" data-intro-availability>
          <span aria-hidden="true" />
          {profile.availability} · Provisional
        </p>
        <nav className="primary-nav" aria-label="Navegación principal">
          <ul>
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  data-intro-nav-item
                  aria-current={activeHref === item.href ? "location" : undefined}
                  onClick={() => setActiveHref(item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="menu-trigger"
          ref={triggerRef}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          data-intro-menu-trigger
        >
          <span>{menuOpen ? "Cerrar" : "Menú"}</span>
          {menuOpen ? <CloseIcon className="icon" /> : <MenuIcon className="icon" />}
        </button>
      </div>
      {menuOpen ? (
        <div className="mobile-nav" id="mobile-navigation" ref={panelRef}>
          <nav aria-label="Navegación móvil">
            <ul>
              {navigation.map((item, index) => (
                <li key={item.href}>
                  <a href={item.href} onClick={() => closeMenu(item.href)}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mobile-nav__meta">
            <ProvisionalBadge />
            <p>{profile.availability}</p>
            <a href="#contacto" onClick={() => closeMenu("#contacto")}>
              Ir a contacto
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}
