import { useState, type ComponentType } from "react"
import { Code2, Palette, Sparkles, type LucideProps } from "lucide-react"
import siteContent from "@/data/content.json"

const { about } = siteContent
const disciplineIcons: ComponentType<LucideProps>[] = [Palette, Code2, Sparkles]

type AboutSectionProps = {
  onOpenDiscipline: (index: number) => void
}

export function AboutSection({ onOpenDiscipline }: AboutSectionProps) {
  const [starActive, setStarActive] = useState(false)
  const firstStatementLength = about.statement[0].split(" ").length
  const highlightedWords = about.statement[1].split(" ")

  return (
    <section className="about scroll-reveal" id="about" data-reveal>
      <header className="about-head">
        <div className="about-kicker"><button className={starActive ? "about-star is-spinning" : "about-star"} onClick={() => setStarActive(!starActive)} aria-label="Spin star"><Sparkles /></button>{about.eyebrow}</div>
        <span>{about.index}</span>
      </header>
      <p className="about-copy">
        {about.statement[0].split(" ").map((word, index) => <span className="about-statement-word" style={{ animationDelay: `${220 + index * 85}ms` }} key={`${word}-${index}`}>{word}</span>)}<br />
        <span className="thought-trigger"><em>{highlightedWords.map((word, index) => <span style={{ animationDelay: `${220 + (firstStatementLength + index) * 85}ms` }} key={`${word}-${index}`}>{word}{index < highlightedWords.length - 1 ? " " : ""}</span>)}</em></span>
      </p>
      <div className="about-manifesto"><span className="manifesto-label">{about.manifestoLabel}</span><p>{about.manifesto.split(" ").map((word, index) => <span className="manifesto-word" style={{ animationDelay: `${1550 + index * 85}ms` }} key={`${word}-${index}`}>{word}</span>)}</p></div>
      <div className="discipline-rail">
        {about.disciplines.map((discipline, index) => {
          const Icon = disciplineIcons[index] ?? Sparkles
          return (
            <article
              className="discipline-card"
              role="button"
              tabIndex={0}
              onClick={() => onOpenDiscipline(index)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault()
                  onOpenDiscipline(index)
                }
              }}
              key={discipline.number}
            >
              <span>{discipline.number}</span><Icon /><h3>{discipline.title}</h3><p>{discipline.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
