import { PROVISIONAL_STATUS } from "./types"

export const navigation = [
  { status: PROVISIONAL_STATUS, label: "Proyectos", href: "#proyectos" },
  { status: PROVISIONAL_STATUS, label: "Sobre mí", href: "#sobre-mi" },
  { status: PROVISIONAL_STATUS, label: "CV", href: "#cv-placeholder" },
  { status: PROVISIONAL_STATUS, label: "Contacto", href: "#contacto" },
] as const
