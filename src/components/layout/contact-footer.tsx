import { useEffect, useRef } from "react"
import { ArrowUpRight, Asterisk, Facebook, FileDown, Heart, Instagram, Linkedin, Mail } from "lucide-react"
import siteContent from "@/data/content.json"

const { site, hero, contact } = siteContent
const socialIcons: Record<string, typeof Linkedin> = {
  linkedin: Linkedin,
  instagram: Instagram,
  facebook: Facebook,
  mail: Mail,
}

type ContactFooterProps = {
  isRevealed: boolean
}

export function ContactFooter({ isRevealed }: ContactFooterProps) {
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const footer = footerRef.current
    if (!footer) return

    const updateFooterSpace = () => {
      document.documentElement.style.setProperty("--footer-height", `${footer.offsetHeight}px`)
    }

    updateFooterSpace()
    const observer = new ResizeObserver(updateFooterSpace)
    observer.observe(footer)
    window.addEventListener("resize", updateFooterSpace)

    return () => {
      observer.disconnect()
      window.removeEventListener("resize", updateFooterSpace)
      document.documentElement.style.removeProperty("--footer-height")
    }
  }, [])

  return (
    <section ref={footerRef} className={isRevealed ? "contact fixed-footer footer-revealed" : "contact fixed-footer"} id="contact">
      <a href={site.email ? `mailto:${site.email}` : "#"} className="contact-link"><span>{contact.title}</span><ArrowUpRight /></a>
      <div className="footer-connect">
        <p>{contact.question}</p>
        {contact.socials.map((social) => {
          const Icon = socialIcons[social.icon] ?? Mail
          const handle = social.label === "Email"
            ? site.email
            : social.label === "LinkedIn"
              ? "/in/john-doe"
              : "@john.doe"
          return <a key={social.label} href={social.href} className="footer-social-card"><Icon /><strong><ArrowUpRight size={14} /> {social.label}</strong><span>{handle}</span></a>
        })}
        <a href={site.resume} download className="footer-social-card footer-resume-card">
          <FileDown />
          <strong>{hero.resumeLabel} <ArrowUpRight size={14} /></strong>
          <span>{hero.resumeFormat}</span>
        </a>
      </div>
      <footer>
        <div className="footer-identity">
          <span className="footer-brand-mark"><Asterisk /><strong>{site.brand}</strong></span>
          <span className="footer-discipline">{contact.discipline.split("\n").map((line) => <span key={line}>{line}</span>)}</span>
        </div>
        <a className="footer-credit" href={contact.credit.href} target="_blank" rel="noreferrer"><span>Made with <Heart size={13} fill="currentColor" /> by Stephen Paul</span></a>
        <div className="footer-legal"><span>© {new Date().getFullYear()} {site.copyrightName}</span><span>{contact.rights}</span></div>
      </footer>
    </section>
  )
}
