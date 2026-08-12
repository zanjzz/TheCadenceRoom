import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "@/lib/theme";

const navItems = [
  { label: "Articles", href: "/#latest" },
  { label: "Topics", href: "/#topics" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-background/95 sticky top-0 z-50 border-b-[3px] border-border backdrop-blur">
      <div className="section-shell grid h-12 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 md:h-16">
        <Link to="/" className="min-w-0 truncate font-[family-name:var(--font-display)] text-base uppercase tracking-tight md:text-xl">
          Harmonic<span className="text-accent">.</span>Progress
        </Link>

        <div className="flex shrink-0 items-center gap-2">
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-accent-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="brut-border brut-shadow-sm brut-press bg-card text-card-foreground grid h-8 w-8 place-items-center md:h-10 md:w-10"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="brut-border brut-shadow-sm brut-press bg-accent text-accent-foreground grid h-8 w-8 place-items-center md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t-[3px] border-border md:hidden">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b-[3px] border-border px-4 py-3 text-sm font-bold uppercase tracking-widest last:border-b-0"
            >
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
