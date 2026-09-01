"use client"

import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { useState } from "react"
import { profile, workingPrinciples } from "@/data/profile"
import { featuredCases } from "@/data/projects"
import { skills } from "@/data/skills"
import { timeline } from "@/data/timeline"
import { AnimatedWordLink } from "./primitives/animated-word-link"
import { Container, ProvisionalBadge, SectionHeading, Tag } from "./primitives/layout"
import { ProjectArt } from "./primitives/project-art"
import { StickerBracket, StickerCursor, StickerUnderline } from "./primitives/stickers"

export function CaseStudies() {
  return (
    <section className="cases" aria-labelledby="cases-title">
      <Container>
        <SectionHeading
          index="03"
          id="cases-title"
          title="Decisiones, no decoraciones"
          intro="Dos casos provisionales muestran cómo paso de una pregunta abierta a un sistema que puede usarse, medirse y continuar."
        />
        <div className="cases__list">
          {featuredCases.map((project, index) => (
            <article
              className="case"
              id={`caso-${project.slug}`}
              key={project.slug}
              data-reveal="case"
            >
              <div className="case__intro">
                <span className="case__eyebrow">
                  Caso {String(index + 1).padStart(2, "0")} · {project.year}
                </span>
                <ProvisionalBadge />
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="tag-list">
                  {project.technologies.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
              <ProjectArt variant={project.coverVariant} label={project.coverAlt} />
              {project.caseStudy ? (
                <dl className="case__details">
                  <div>
                    <dt>Problema</dt>
                    <dd>{project.caseStudy.challenge}</dd>
                  </div>
                  <div>
                    <dt>Participación</dt>
                    <dd>{project.caseStudy.participation}</dd>
                  </div>
                  <div>
                    <dt>Proceso</dt>
                    <dd>{project.caseStudy.process}</dd>
                  </div>
                  <div>
                    <dt>Resultado</dt>
                    <dd>{project.caseStudy.result}</dd>
                  </div>
                </dl>
              ) : null}
              <p className="case__outcome">{project.caseStudy?.outcome}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export function SkillsSection() {
  const [active, setActive] = useState<string>(skills[0].id)
  const selected = skills.find((skill) => skill.id === active) ?? skills[0]
  const reducedMotion = useReducedMotion()
  return (
    <section className="skills" id="capacidades" aria-labelledby="skills-title">
      <Container>
        <SectionHeading
          index="04"
          id="skills-title"
          title="Capacidades conectadas"
          intro="Selecciona una disciplina para ver cómo se convierte en trabajo concreto."
        />
        <div className="skills__shell">
          <div className="skills__tabs" role="tablist" aria-label="Capacidades">
            {skills.map((skill, index) => (
              <button
                key={skill.id}
                role="tab"
                type="button"
                aria-selected={active === skill.id}
                aria-controls="skill-panel"
                onClick={() => setActive(skill.id)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {skill.label}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              id="skill-panel"
              role="tabpanel"
              className="skills__panel"
              key={selected.id}
              initial={{ opacity: 0, y: reducedMotion ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <ProvisionalBadge />
              <p className="skills__level">{selected.level}</p>
              <p className="skills__description">{selected.description}</p>
              <ul>
                {selected.methods.map((method) => (
                  <li key={method}>{method}</li>
                ))}
              </ul>
              <p className="skills__evidence">↳ {selected.evidence}</p>
              <StickerBracket />
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  )
}

export function TimelineSection() {
  return (
    <section className="timeline" id="trayectoria" aria-labelledby="timeline-title">
      <Container>
        <SectionHeading
          index="05"
          id="timeline-title"
          title="Trayectoria en construcción"
          intro="Experiencia y formación provisional para sustituir con fechas y organizaciones reales."
        />
        <ol className="timeline__list">
          {timeline.map((item) => (
            <li key={item.dateTime} data-reveal="timeline">
              <time dateTime={item.dateTime}>{item.date}</time>
              <div>
                <ProvisionalBadge />
                <h3>{item.role}</h3>
                <p className="timeline__org">{item.organization}</p>
                <p>{item.description}</p>
              </div>
              <span
                className={item.current ? "timeline__dot timeline__dot--current" : "timeline__dot"}
                aria-hidden="true"
              />
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}

export function AboutSection() {
  return (
    <section className="about" id="sobre-mi" aria-labelledby="about-title">
      <Container>
        <SectionHeading
          index="06"
          id="about-title"
          title="Trabajo con preguntas antes que con píxeles"
        />
        <div className="about__art" aria-hidden="true">
          <StickerCursor />
          <span>
            criterio
            <br />+ oficio
          </span>
          <StickerUnderline />
        </div>
        <div className="about__copy" data-reveal="about">
          <ProvisionalBadge />
          <p className="about__lead">{profile.longBio}</p>
          <p>{profile.focus}</p>
          <ol>
            {workingPrinciples.map((principle, index) => (
              <li key={principle}>
                <span>0{index + 1}</span>
                {principle}
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}

export function ContactSection() {
  return (
    <section className="contact" id="contacto" aria-labelledby="contact-title">
      <Container>
        <span className="contact__index">07 / Contacto</span>
        <ProvisionalBadge inverted />
        <h2 id="contact-title">Hagamos algo que merezca atención.</h2>
        <p>
          Disponible para proyectos, colaboraciones y conversaciones con una pregunta interesante.
        </p>
        <AnimatedWordLink href={`mailto:${profile.email}`} label="Escríbeme" variant="inverted" />
        <nav aria-label="Enlaces de contacto">
          <a href={profile.linkedIn}>LinkedIn ↗</a>
          <a href={profile.github}>GitHub ↗</a>
          <a id="cv-placeholder" href={profile.cv}>
            CV ↗
          </a>
        </nav>
        <span className="contact__email">{profile.email} · Provisional</span>
      </Container>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Marco Antonio Cardenas Sanchez</p>
      <a href="#inicio">Volver arriba ↑</a>
      <p>Diseñado con criterio, construido con cuidado.</p>
    </footer>
  )
}
