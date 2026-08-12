export default function ChordNoteCTA() {
  return (
    <section className="section-shell py-16 md:py-24">
      <div className="brut-border brut-shadow bg-primary text-primary-foreground overflow-hidden">
        <div className="border-b-[3px] border-border bg-accent text-accent-foreground px-4 py-2 text-[0.7rem] font-bold uppercase tracking-widest">
          From the same workbench — ChordNote
        </div>
        <div className="grid gap-6 p-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:p-10">
          <div className="min-w-0">
            <h2 className="text-3xl md:text-5xl">Write the changes down before you forget them</h2>
            <p className="mt-3 max-w-xl text-base font-medium opacity-90">
              ChordNote is a fast chord-charting notebook for the ideas you find at the keyboard.
              Sketch a progression, name it, come back to it on Sunday.
            </p>
          </div>
          <a
            href="https://chordnote.app"
            target="_blank"
            rel="noreferrer"
            className="brut-border brut-shadow brut-press bg-accent text-accent-foreground inline-block px-7 py-4 text-sm font-bold uppercase tracking-widest"
          >
            Try ChordNote
          </a>
        </div>
      </div>
    </section>
  );
}
