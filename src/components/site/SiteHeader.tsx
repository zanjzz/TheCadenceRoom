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

  const scrollTop = () => {
    setOpen(false);
    if (typeof window !== "undefined" && window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 px-4">
      <div className="flex justify-center">
        <div className="nav-pill pointer-events-auto gap-3 md:gap-6">
          <Link
            to="/"
            onClick={scrollTop}
            className="nav-brand font-[family-name:var(--font-display)] text-sm uppercase tracking-tight text-foreground md:text-base"
          >
            Harmonic<span className="text-accent">.</span>Progress
          </Link>

          <span className="nav-divider hidden md:block" aria-hidden="true" />

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <span className="nav-divider hidden md:block" aria-hidden="true" />

          <div className="flex items-center gap-2">
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
      </div>

      {open ? (
        <nav className="section-shell pointer-events-auto mt-3 md:hidden">
          <div className="nav-pill nav-sheet flex-col items-stretch gap-3 rounded-2xl px-4 py-4">
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
