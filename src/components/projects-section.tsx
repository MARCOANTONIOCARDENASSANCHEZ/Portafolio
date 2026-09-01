"use client"

import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { useState } from "react"
import { projects } from "@/data/projects"
import type { ProjectSlug } from "@/data/types"
import { ArrowIcon } from "./primitives/icons"
import { Container, ProvisionalBadge, SectionHeading } from "./primitives/layout"
import { ProjectArt } from "./primitives/project-art"

export function ProjectsSection() {
  const [activeSlug, setActiveSlug] = useState<ProjectSlug>("climer-plataforma")
  const reducedMotion = useReducedMotion()
  const activeProject = projects.find((project) => project.slug === activeSlug)

  if (!activeProject) return null

  return (
    <section
      className={`projects projects--${activeProject.atmosphere}`}
      id="proyectos"
      aria-labelledby="projects-title"
    >
      <Container>
        <SectionHeading
          index="02"
          title="Proyectos seleccionados"
          id="projects-title"
          intro="Cinco conceptos originales y claramente provisionales. El contenido final deberá sustituir cada ficha."
        />
        <div className="projects__layout">
          <ol className="project-index">
            {projects.map((project) => (
              <li
                className={
                  project.slug === activeSlug ? "project-row project-row--active" : "project-row"
                }
                id={`proyecto-${project.slug}`}
                key={project.slug}
                onMouseEnter={() => setActiveSlug(project.slug)}
                onFocus={() => setActiveSlug(project.slug)}
              >
                <span className="project-row__index">{project.index}</span>
                <div className="project-row__title">
                  <ProvisionalBadge />
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                </div>
                <p className="project-row__services">{project.services.join(" · ")}</p>
                <time className="project-row__year">{project.year}</time>
                <a className="project-row__link" href={project.detailHref}>
                  {project.caseStudy ? "Ver caso" : "Ver ficha"}
                  <ArrowIcon className="icon" />
                </a>
                <ProjectArt
                  className="project-row__art"
                  variant={project.coverVariant}
                  label={project.coverAlt}
                />
              </li>
            ))}
          </ol>
          <div className="project-preview" data-gsap-pin="project-preview" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.slug}
                initial={{ opacity: 0, y: reducedMotion ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reducedMotion ? 0 : -12 }}
                transition={
                  reducedMotion
                    ? { duration: 0.16 }
                    : { type: "spring", stiffness: 260, damping: 30, mass: 0.8 }
                }
              >
                <ProjectArt variant={activeProject.coverVariant} label={activeProject.coverAlt} />
                <div className="project-preview__caption">
                  <span>
                    {activeProject.index} / {activeProject.title}
                  </span>
                  <span>{activeProject.coverLabel}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  )
}
