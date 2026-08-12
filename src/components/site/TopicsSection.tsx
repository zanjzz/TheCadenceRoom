import { useState } from "react";
import { topics } from "@/lib/topics";

export default function TopicsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = topics[activeIndex] ?? topics[0]!;

  return (
    <section id="topics" className="bg-surface text-surface-foreground scroll-mt-24 border-y-[3px] border-border py-16 md:py-24">
      <div className="section-shell">
        <div className="mb-8">
          <span className="eyebrow">Topics</span>
          <h2 className="mt-3 text-3xl md:text-5xl">Pick your lane</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <div className="brut-border bg-card relative h-[320px] overflow-hidden md:h-[420px]">
            <ul className="flex h-full flex-col justify-center gap-1 overflow-y-auto p-4">
              {topics.map((topic, index) => (
                <li key={topic.name}>
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-current={index === activeIndex}
                    className={`block w-full text-left font-[family-name:var(--font-display)] text-2xl uppercase leading-tight transition-all duration-200 md:text-4xl ${
                      index === activeIndex
                        ? "text-foreground translate-x-2 underline decoration-accent decoration-[5px] underline-offset-8"
                        : "text-muted-foreground hover:translate-x-1 hover:text-foreground"
                    }`}
                  >
                    {topic.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="brut-border brut-shadow bg-card overflow-hidden">
            <img
              key={active.image}
              src={active.image}
              alt={active.name}
              width={1200}
              height={900}
              loading="lazy"
              className="animate-fade-in aspect-[4/3] h-auto w-full object-cover"
            />
            <div className="border-t-[3px] border-border p-4">
              <h3 className="text-xl uppercase">{active.name}</h3>
              <p className="text-muted-foreground mt-1 text-sm font-medium">{active.blurb}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
