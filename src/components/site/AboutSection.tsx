const socials = [
  { label: "YouTube", href: "https://youtube.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "X", href: "https://x.com" },
  { label: "Email", href: "mailto:hello@harmonicprogress.com" },
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
              Harmonic Progress is built for church musicians, songwriters, and producers who want
              to understand chord progressions at a deeper level — not as trivia, but as something
              you can hear and use in the middle of a song.
            </p>
            <p className="text-muted-foreground text-base font-medium">
              Every article starts from a real playing problem: a turnaround that will not resolve,
              a bridge that goes nowhere, a keyboard part burying the vocal. No filler, no
              gatekeeping.
            </p>
          </div>
        </div>

        <div id="contact" className="brut-border brut-shadow bg-secondary text-secondary-foreground scroll-mt-24 overflow-hidden">
          <div className="border-b-[3px] border-border bg-card text-card-foreground px-4 py-2 text-[0.7rem] font-bold uppercase tracking-widest">
            Get in touch
          </div>
          <div className="p-5 md:p-7">
            <p className="text-base font-medium">
              Questions, corrections, or a topic request? Reach out — replies come from a human.
            </p>
            <a
              href="mailto:hello@harmonicprogress.com"
              className="brut-border brut-shadow-sm brut-press bg-card text-card-foreground mt-4 inline-block px-4 py-2 text-sm font-bold"
            >
              hello@harmonicprogress.com
            </a>

            <ul className="mt-6 grid grid-cols-2 gap-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="brut-border brut-shadow-sm brut-press bg-card text-card-foreground block px-3 py-2 text-center text-[0.7rem] font-bold uppercase tracking-widest"
                  >
                    {social.label}
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
