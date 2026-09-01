// biome-ignore-all lint/suspicious/noArrayIndexKey: static letters use position to distinguish repeated characters
"use client"

import { motion, useReducedMotion } from "motion/react"
import { useState } from "react"
import { ArrowIcon } from "./icons"

type AnimatedWordLinkProps = {
  readonly href: string
  readonly label: string
  readonly variant?: "text" | "outlined" | "inverted"
  readonly className?: string
}

export function AnimatedWordLink({
  href,
  label,
  variant = "text",
  className = "",
}: AnimatedWordLinkProps) {
  const [active, setActive] = useState(false)
  const reducedMotion = useReducedMotion()

  return (
    <motion.a
      className={`animated-link animated-link--${variant} ${className}`}
      href={href}
      aria-label={label}
      onHoverStart={() => setActive(true)}
      onHoverEnd={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      {...(!reducedMotion ? { whileTap: { y: 2 } } : {})}
    >
      <span className="animated-link__letters" aria-hidden="true">
        {Array.from(label).map((letter, index) => (
          <motion.span
            key={`${letter}-${index}`}
            animate={{ y: active && !reducedMotion ? -3 : 0 }}
            transition={{
              type: "spring",
              stiffness: 420,
              damping: 28,
              mass: 0.55,
              delay: active && !reducedMotion ? index * 0.018 : 0,
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </span>
      <motion.span
        aria-hidden="true"
        {...(!reducedMotion ? { animate: { x: active ? 4 : 0, scale: active ? 1.04 : 1 } } : {})}
        transition={{ type: "spring", stiffness: 500, damping: 32, mass: 0.45 }}
      >
        <ArrowIcon className="icon" />
      </motion.span>
    </motion.a>
  )
}
