import { ThemeProvider } from "@/components/theme-provider"
import { ContactFooter } from "@/components/layout/contact-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteShell } from "@/components/layout/site-shell"
import { PortfolioModals } from "@/components/modals/portfolio-modals"
import { AboutSection } from "@/components/sections/about-section"
import { HeroSection } from "@/components/sections/hero-section"
import { JourneySection } from "@/components/sections/journey-section"
import { WorkSection } from "@/components/sections/work-section"
import { useDelayedModal } from "@/hooks/use-delayed-modal"
import { useFooterReveal } from "@/hooks/use-footer-reveal"
import { useModalAccessibility } from "@/hooks/use-modal-accessibility"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

function App() {
  const projectModal = useDelayedModal()
  const disciplineModal = useDelayedModal()
  const footerRevealed = useFooterReveal()

  useScrollReveal()
  useModalAccessibility(
    projectModal.openIndex !== null,
    projectModal.close,
    disciplineModal.openIndex !== null,
    disciplineModal.close,
  )

  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <SiteShell>
        <SiteHeader />
        <main id="top" className="page-content">
          <HeroSection isFooterRevealed={footerRevealed} />
          <AboutSection onOpenDiscipline={disciplineModal.open} />
          <JourneySection />
          <WorkSection onOpenProject={projectModal.open} />
        </main>
        <PortfolioModals
          openProject={projectModal.openIndex}
          renderedProject={projectModal.renderedIndex}
          closeProject={projectModal.close}
          openDiscipline={disciplineModal.openIndex}
          renderedDiscipline={disciplineModal.renderedIndex}
          closeDiscipline={disciplineModal.close}
        />
        <ContactFooter isRevealed={footerRevealed} />
      </SiteShell>
    </ThemeProvider>
  )
}

export default App
