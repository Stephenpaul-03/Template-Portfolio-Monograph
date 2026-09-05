import { BookOpen, BriefcaseBusiness, MapPin } from "lucide-react"
import siteContent from "@/data/content.json"

const { journey } = siteContent

export function JourneySection() {
  const firstLineLength = journey.title[0].split(" ").length

  return (
    <section className="journey scroll-reveal" aria-label="Experience and education" data-reveal>
      <div className="page-intro">
        <span><BriefcaseBusiness /> {journey.eyebrow}</span>
        <h2>{journey.title[0].split(" ").map((word, index) => <span className="journey-title-word" style={{ animationDelay: `${180 + index * 90}ms` }} key={`${word}-${index}`}>{word}</span>)}<br /><em>{journey.title[1].split(" ").map((word, index) => <span className="journey-title-word" style={{ animationDelay: `${180 + (firstLineLength + index) * 90}ms` }} key={`${word}-${index}`}>{word}</span>)}</em></h2>
      </div>
      <div className="timeline">
        {journey.timeline.map((item) => (
          <article className="scroll-reveal" data-reveal key={item.period}>
            <span>{item.period}</span><h3>{item.title}</h3>
            <a className="timeline-place" href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined}><MapPin size={13} /><span>{item.place}</span></a>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
      <div className="education scroll-reveal" data-reveal><BookOpen /><div><span>{journey.education.title}</span><h3>{journey.education.degree}</h3><p>{journey.education.school}</p></div><span>{journey.education.note}</span></div>
    </section>
  )
}
