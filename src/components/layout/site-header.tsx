import { useState } from "react"
import { Asterisk, Menu, X } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import siteContent from "@/data/content.json"

const { site, navigation } = siteContent

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="nav">
      <a href="#top" className="brand" aria-label={site.name}><Asterisk size={23} /> {site.brand}</a>
      <nav className={menuOpen ? "nav-links is-open" : "nav-links"}>
        {navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(event) => {
              setMenuOpen(false)
              if (item.href === "#contact") {
                event.preventDefault()
                window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" })
              }
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <div className="nav-actions">
        <ModeToggle />
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  )
}
