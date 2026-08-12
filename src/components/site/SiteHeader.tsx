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
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 px-4">
      <div className="section-shell pointer-events-auto flex items-center justify-between gap-3">
        <Link
          to="/"
          className="nav-pill font-[family-name:var(--font-display)] text-sm uppercase tracking-tight text-foreground md:text-base"
        >
          Harmonic<span className="text-accent">.</span>Progress
        </Link>

        <nav className="nav-pill hidden md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-pill gap-2 px-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="nav-icon-btn"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="nav-icon-btn md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="section-shell pointer-events-auto mt-3 md:hidden">
          <div className="nav-pill flex-col items-stretch gap-3 rounded-2xl px-5 py-4">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
