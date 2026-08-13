import { Link } from "@tanstack/react-router";

const sections = [
  { label: "Articles", href: "/#latest" },
  { label: "Topics", href: "/#topics" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/zanj629/" },
  { label: "Facebook", href: "https://www.facebook.com/people/Zanj/61590616156220/" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground border-t-[3px] border-border">
      <div className="section-shell grid gap-8 py-12 text-center md:grid-cols-3 md:text-left">
        <div>
          <Link to="/" className="font-[family-name:var(--font-display)] text-xl uppercase">
            The Cadence Room
          </Link>
          <p className="mx-auto mt-3 max-w-xs text-sm font-medium opacity-80 md:mx-0">
            Learning music. Making music. Making progress.
          </p>
        </div>

        <nav>
          <h2 className="text-sm uppercase tracking-widest">Sections</h2>
          <ul className="mt-3 space-y-2">
            {sections.map((section) => (
              <li key={section.label}>
                <a href={section.href} className="footer-link text-sm font-medium">
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm uppercase tracking-widest">Find me</h2>
          <ul className="mt-3 flex flex-wrap justify-center gap-2 md:justify-start">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="brut-border brut-shadow-sm brut-press bg-card text-card-foreground block px-3 py-2 text-[0.7rem] font-bold uppercase tracking-widest"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="mailto:zanj269@gmail.com"
            className="footer-link mt-4 inline-block text-sm font-medium"
          >
            zanj269@gmail.com
          </a>
        </div>
      </div>

      <div className="border-t-[3px] border-border">
        <div className="section-shell py-4 text-center text-xs font-bold uppercase tracking-widest md:text-left">
          © 2026 The Cadence Room
        </div>
      </div>
    </footer>
  );
}
