const links = [
  { label: "Email", value: "zanj269@gmail.com", href: "mailto:zanj269@gmail.com" },
  { label: "Instagram", value: "@zanj629", href: "https://www.instagram.com/zanj629/" },
  { label: "Facebook", value: "Zanj", href: "https://www.facebook.com/people/Zanj/61590616156220/" },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-shell scroll-mt-24 py-16 md:py-24">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]">
        <div className="brut-border brut-shadow bg-card text-card-foreground overflow-hidden">
          <div className="bg-accent text-accent-foreground border-b-[3px] border-border px-4 py-2 text-[0.7rem] font-bold uppercase tracking-widest">
            About Harmonic Progress
          </div>
          <div className="space-y-4 p-5 md:p-7">
            <h2 className="text-3xl md:text-4xl">Theory that survives the bandstand</h2>
            <p className="text-base font-medium">
              Hey — I'm Zanj. Harmonic Progress is my personal blog, made for fellow musicians,
              songwriters, and producers who want to understand music on a deeper level. I'm
              learning, experimenting, and sharing what I discover along the way — so learn with
              me, and let's make some harmonic progress.
            </p>
            <p className="text-muted-foreground text-base font-medium">
              Every article starts from a real playing problem: a turnaround that will not resolve,
              a bridge that goes nowhere, a keyboard part burying the vocal. No filler, no
              gatekeeping.
            </p>
          </div>
        </div>

        <div
          id="contact"
          className="brut-border brut-shadow bg-secondary text-secondary-foreground scroll-mt-24 overflow-hidden"
        >
          <div className="border-b-[3px] border-border bg-card text-card-foreground px-4 py-2 text-[0.7rem] font-bold uppercase tracking-widest">
            Get in touch
          </div>
          <div className="p-5 md:p-7">
            <p className="text-base font-medium">
              Questions, corrections, or a topic request? Reach me directly on any of these — it's
              just me on the other end.
            </p>

            <ul className="mt-5 space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="brut-border brut-shadow-sm brut-press bg-card text-card-foreground flex items-center justify-between gap-3 px-4 py-2"
                  >
                    <span className="text-[0.7rem] font-bold uppercase tracking-widest">
                      {link.label}
                    </span>
                    <span className="truncate text-sm font-bold">{link.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
