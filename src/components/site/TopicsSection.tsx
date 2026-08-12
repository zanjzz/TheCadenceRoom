import { useState } from "react";
import OptionWheel from "./OptionWheel";
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
          <p className="text-muted-foreground mt-3 max-w-md text-sm font-medium">
            Scroll, drag, or click a topic. Arrow keys work too.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <div className="brut-border bg-card relative h-[320px] overflow-hidden md:h-[420px]">
            <OptionWheel
              items={topics.map((topic) => topic.name)}
              defaultSelected={0}
              onChange={(index) => setActiveIndex(index)}
              fontSize={2}
              spacing={1.6}
              inset={20}
              className="uppercase"
            />
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
