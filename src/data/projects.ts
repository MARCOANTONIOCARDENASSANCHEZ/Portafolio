import type { Project } from "./types"
import { PROVISIONAL_STATUS } from "./types"

export const projects: readonly Project[] = [
  {
    status: PROVISIONAL_STATUS,
    slug: "climer-plataforma",
    index: "01",
    title: "Climer · sitio y punto de venta",
    summary:
      "Sitio promocional y aplicación web de ventas para un negocio de aires acondicionados.",
    role: "Desarrollo web freelance",
    year: "2021 — 2022",
    services: ["Sitio web", "Dashboard", "Punto de venta"],
    technologies: ["HTML5", "PHP", "CSS", "JavaScript", "Bootstrap", "MVC", "MySQL"],
    coverLabel: "Proyecto documentado · material visual pendiente",
    coverAlt: "Representación abstracta provisional del sitio y sistema de ventas de Climer.",
    coverVariant: "atlas",
    detailHref: "#caso-climer-plataforma",
    atmosphere: "accent-soft",
    caseStudy: {
      status: PROVISIONAL_STATUS,
      challenge:
        "Crear presencia web para comunicar servicios y productos, además de una herramienta interna de ventas.",
      participation:
        "Desarrollo freelance del sitio, dashboard responsivo y aplicación web de punto de venta.",
      process:
        "Implementación con HTML5, PHP, CSS, JavaScript, Bootstrap, MVC y MySQL. El proceso detallado está pendiente de documentar.",
      result: "Sitio web y sistema de ventas terminados durante el contrato con la empresa.",
      outcome: "Resultados cuantitativos y capturas del proyecto pendientes de documentar.",
    },
  },
  {
    status: PROVISIONAL_STATUS,
    slug: "vega-system",
    index: "02",
    title: "VegaSystem",
    summary: "Plataforma SaaS multi-tenant para gestionar citas, inventario, pagos y recibos.",
    role: "Desarrollo full stack · participación por confirmar",
    year: "En construcción",
    services: ["SaaS multi-tenant", "Arquitectura", "Backend"],
    technologies: [".NET 9", "PostgreSQL", "OIDC", "CQRS", "Testcontainers"],
    coverLabel: "Proyecto en construcción · repositorio no público",
    coverAlt: "Representación abstracta provisional de la arquitectura multi-tenant de VegaSystem.",
    coverVariant: "frequency",
    detailHref: "#caso-vega-system",
    atmosphere: "accent-deep",
    caseStudy: {
      status: PROVISIONAL_STATUS,
      challenge:
        "Centralizar operaciones de negocio como citas, inventario, pagos y recibos dentro de una plataforma multi-tenant.",
      participation:
        "Construcción con .NET 9; alcance personal y responsabilidades específicas pendientes de confirmar.",
      process:
        "Clean Architecture y CQRS, autenticación OIDC, persistencia en PostgreSQL e idempotencia mediante advisory locks. Pruebas con Testcontainers.",
      result:
        "Proyecto en construcción; resultados y estado de despliegue pendientes de documentar.",
      outcome: "Caso técnico basado en la descripción pública del perfil de GitHub.",
    },
  },
  {
    status: PROVISIONAL_STATUS,
    slug: "archivo-niebla",
    index: "03",
    title: "Archivo niebla",
    summary: "Un índice visual para investigaciones que todavía no saben qué están buscando.",
    role: "Sistema de diseño y prototipo",
    year: "20XX",
    services: ["Sistemas", "Editorial", "Prototipo"],
    technologies: ["Next.js", "CSS", "SVG"],
    coverLabel: "{{PROYECTO_03_COVER}}",
    coverAlt: "{{PROYECTO_03_IMAGEN_ALT}} Capas de archivo y marcas de clasificación.",
    coverVariant: "archive",
    detailHref: "#proyecto-archivo-niebla",
    atmosphere: "accent-paper",
  },
  {
    status: PROVISIONAL_STATUS,
    slug: "turno-abierto",
    index: "04",
    title: "Turno abierto",
    summary: "Una herramienta de coordinación para equipos culturales con horarios cambiantes.",
    role: "Producto y diseño de servicio",
    year: "20XX",
    services: ["Servicio", "Flujos", "Accesibilidad"],
    technologies: ["TypeScript", "Design tokens", "Testing"],
    coverLabel: "{{PROYECTO_04_COVER}}",
    coverAlt: "{{PROYECTO_04_IMAGEN_ALT}} Calendario modular con turnos conectados.",
    coverVariant: "shift",
    detailHref: "#proyecto-turno-abierto",
    atmosphere: "accent-grid",
  },
  {
    status: PROVISIONAL_STATUS,
    slug: "margen-comun",
    index: "05",
    title: "Margen común",
    summary: "Una publicación viva para editar decisiones colectivas sin perder sus matices.",
    role: "Facilitación, identidad y web",
    year: "20XX",
    services: ["Editorial", "Co-diseño", "Frontend"],
    technologies: ["React", "GSAP", "Semántica web"],
    coverLabel: "{{PROYECTO_05_COVER}}",
    coverAlt: "{{PROYECTO_05_IMAGEN_ALT}} Márgenes, anotaciones y bloques de decisión.",
    coverVariant: "margin",
    detailHref: "#proyecto-margen-comun",
    atmosphere: "accent-ink",
  },
] as const

export const featuredCases = projects.filter(
  (project): project is Project & { readonly caseStudy: NonNullable<Project["caseStudy"]> } =>
    project.caseStudy !== undefined,
)
