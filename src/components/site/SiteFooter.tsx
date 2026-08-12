import { Link } from "@tanstack/react-router";

const sections = [
  { label: "Articles", href: "/#latest" },
  { label: "Topics", href: "/#topics" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const socials = [
  { label: "YouTube", href: "https://youtube.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "X", href: "https://x.com" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground border-t-[3px] border-border">
      <div className="section-shell grid gap-8 py-12 md:grid-cols-3">
        <div>
          <Link to="/" className="font-[family-name:var(--font-display)] text-xl uppercase">
            Harmonic<span className="text-accent">.</span>Progress
          </Link>
          <p className="mt-3 max-w-xs text-sm font-medium opacity-80">
            Chord progressions, voice leading, and practical harmony for working musicians.
          </p>
        </div>

        <nav>
          <h2 className="text-sm uppercase tracking-widest">Sections</h2>
          <ul className="mt-3 space-y-2">
            {sections.map((section) => (
              <li key={section.label}>
                <a href={section.href} className="text-sm font-medium hover:text-accent">
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm uppercase tracking-widest">Elsewhere</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="brut-border brut-shadow-sm brut-press bg-accent text-accent-foreground block px-3 py-2 text-[0.7rem] font-bold uppercase tracking-widest"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="mailto:hello@harmonicprogress.com"
            className="mt-4 inline-block text-sm font-medium underline underline-offset-4"
          >
            hello@harmonicprogress.com
          </a>
        </div>
      </div>

      <div className="border-t-[3px] border-border">
        <div className="section-shell py-4 text-xs font-bold uppercase tracking-widest">
          © 2026 Harmonic Progress
        </div>
      </div>
    </footer>
  );
}
