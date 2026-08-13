import chordnotePreview from "@/assets/images/chordnote-preview.jpg";

const features = [
  "Lyrics with chords above them",
  "Smart chord input",
  "Transpose in one tap",
  "Nashville Number System",
  "Import existing chord sheets",
  "Customize and export your sheets as an image",
];

export default function ChordNoteCTA() {
  return (
    <section className="section-shell py-16 md:py-24">
      <div className="brut-border brut-shadow bg-primary text-primary-foreground overflow-hidden">
        <div className="border-b-[3px] border-border bg-accent text-accent-foreground px-4 py-2 text-[0.7rem] font-bold uppercase tracking-widest">
          Also made by me — ChordNote
        </div>
        <div className="grid gap-6 p-5 md:grid-cols-[minmax(0,1fr)_minmax(0,280px)] md:items-stretch md:gap-10 md:p-10">
          <div className="min-w-0">
            <h2 className="text-2xl md:text-5xl">
              Create, customize and share chord sheets in minutes
            </h2>
            <p className="mt-3 max-w-xl text-base font-medium opacity-90">
              ChordNote is the tool I built for the practical side of all this: write lyrics with
              chords above them, transpose, and share the sheet with your band.
            </p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {features.map((feature) => (
                <li key={feature} className="text-sm font-bold">
                  — {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4 md:justify-end">
          <div className="chordnote-preview hidden max-h-[280px] flex-1 md:block">
              <img
                src={chordnotePreview}
                alt="ChordNote editor showing song details, transpose controls and lyrics input"
                loading="lazy"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <a
              href="https://chordnote.me"
              target="_blank"
              rel="noreferrer"
              className="brut-border brut-shadow brut-press chordnote-btn bg-accent text-accent-foreground block px-7 py-4 text-center text-sm font-bold uppercase tracking-widest"
            >
              Open ChordNote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
