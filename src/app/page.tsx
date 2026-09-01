import {
  AboutSection,
  CaseStudies,
  ContactSection,
  Footer,
  SkillsSection,
  TimelineSection,
} from "@/components/content-sections"
import { Hero } from "@/components/hero"
import { IntroAnimation } from "@/components/intro-animation"
import { MarqueeBand } from "@/components/marquee-band"
import { MotionSystem } from "@/components/motion-system"
import { ProjectsSection } from "@/components/projects-section"
import { SiteHeader } from "@/components/site-header"

export default function Home() {
  return (
    <>
      <IntroAnimation />
      <SiteHeader />
      <MotionSystem />
      <main id="contenido">
        <Hero />
        <MarqueeBand />
        <ProjectsSection />
        <CaseStudies />
        <SkillsSection />
        <TimelineSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
