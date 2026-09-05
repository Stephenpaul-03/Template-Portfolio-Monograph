import { useState } from "react"
import { createPortal } from "react-dom"
import { ArrowDown, Asterisk, Download, FileDown, Sparkles } from "lucide-react"
import siteContent from "@/data/content.json"
import { useResumeNudge } from "@/hooks/use-resume-nudge"

const { site, hero } = siteContent

type HeroSectionProps = {
  isFooterRevealed?: boolean
}

export function HeroSection({ isFooterRevealed = false }: HeroSectionProps) {
  const [heroIntro] = useState(() => Math.floor(Math.random() * hero.phrases.length))
  const { heroRef, isNudging } = useResumeNudge()

  return (
    <>
      <section ref={heroRef} className="hero hero-portrait-layout">
      <div className="hero-copy-column">
        <div className="hero-meta reveal hero-stagger hero-stagger-1"><span>{hero.eyebrow[0]}<br />{hero.eyebrow[1]}</span></div>
        <h1 className="hero-title hero-stagger hero-stagger-2" aria-label={site.name}>
          <span className="title-line"><span className="title-word">{hero.name[0].split("").map((letter, index) => <span className="title-char" key={`${letter}-${index}`}>{letter}</span>)}</span></span>
          <span className="title-line title-line-right"><span className="title-word">{hero.name[1].split("").map((letter, index) => <span className="title-char" key={`${letter}-${index}`}>{letter}</span>)}<span className="title-char title-dot">.</span></span></span>
        </h1>
        <div className="hero-role hero-stagger hero-stagger-3"><Sparkles size={17} /><span>{hero.role[0]}<br />{hero.role[1]}</span></div>
        <div className="hero-intro hero-stagger hero-stagger-4"><span className="hero-intro-copy" key={heroIntro}>{hero.phrases[heroIntro][0]}<br />{hero.phrases[heroIntro][1]}</span></div>
        <div className="hero-bottom reveal delay-4 hero-stagger hero-stagger-5">
          <div className="hero-actions">
            <a className="scroll-link" href="#about"><span className="scroll-icon"><ArrowDown size={18} /></span> {hero.scrollLabel}</a>
            <a className="resume-link" href={site.resume} download><Download size={15} /> {hero.resumeLabel} <span>{hero.resumeFormat}</span></a>
          </div>
        </div>
      </div>
      <div className="portrait-slot hero-stagger hero-stagger-6" aria-label={hero.portraitAlt}>
        {hero.portraitImage
          ? <img src={hero.portraitImage} alt={hero.portraitAlt} />
          : <><span className="portrait-tag">{hero.portraitTag}</span><div><Asterisk /><span>{hero.portraitLabel[0]}<br />{hero.portraitLabel[1]}</span></div></>}
      </div>
      </section>
      {typeof document !== "undefined" && createPortal(
        <a
          className={isNudging && !isFooterRevealed ? "floating-resume is-visible" : "floating-resume"}
          href={site.resume}
          download
          aria-label={`Download ${hero.resumeLabel}`}
          aria-hidden={!isNudging || isFooterRevealed}
          tabIndex={isNudging && !isFooterRevealed ? 0 : -1}
        >
          <FileDown size={16} />
          <span>{hero.resumeLabel}</span>
        </a>,
        document.body,
      )}
    </>
  )
}
