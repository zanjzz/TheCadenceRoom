import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Hash } from "lucide-react";
import OptionWheel from "./OptionWheel";
import { topics } from "@/lib/topics";

export default function TopicsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = topics[activeIndex] ?? topics[0]!;
  const count = topics.length;

  return (
    <section
      id="topics"
      className="bg-surface text-surface-foreground scroll-mt-24 border-y-[3px] border-border py-16 md:py-24"
    >
      <div className="section-shell">
        <div className="mb-8">
          <span className="eyebrow">Topics</span>
          <h2 className="mt-3 text-3xl md:text-5xl">Pick your lane</h2>
          <p className="text-muted-foreground mt-3 max-w-md text-sm font-medium">
            Scroll, drag, or click a topic — then open its page for every article in it.
          </p>
        </div>

        <div className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div className="topic-wheel-shell relative h-[360px] overflow-hidden lg:h-[440px]">
            {/* Decorative corner brackets */}
            <span className="pointer-events-none absolute top-3 left-3 h-6 w-6 border-l-[3px] border-t-[3px] border-accent" aria-hidden />
            <span className="pointer-events-none absolute bottom-3 right-3 h-6 w-6 border-r-[3px] border-b-[3px] border-accent" aria-hidden />

            {/* Active index marker */}
            <div className="pointer-events-none absolute top-3 right-3 z-10 flex items-center gap-1.5 text-xs font-bold tracking-widest text-accent-foreground">
              <Hash className="h-3.5 w-3.5 text-accent" />
              <span className="text-accent">{String(activeIndex + 1).padStart(2, "0")}</span>
              <span className="opacity-40">/ {String(count).padStart(2, "0")}</span>
            </div>

            {/* Vertical accent rail */}
            <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-1.5 bg-accent" aria-hidden />

            <OptionWheel
              items={topics.map((topic) => topic.name)}
              defaultSelected={0}
              onChange={(index) => setActiveIndex(index)}
              fontSize={1.7}
              spacing={1.35}
              inset={28}
              loop
              fade={0.22}
              minOpacity={0.14}
              className="uppercase"
            />
          </div>

          <Link
            to="/topics/$topicSlug"
            params={{ topicSlug: active.slug }}
            className="brut-border brut-shadow brut-press bg-card text-card-foreground group flex h-[360px] flex-col overflow-hidden lg:h-[440px]"
          >
            <img
              key={active.image}
              src={active.image}
              alt={active.name}
              width={1200}
              height={900}
              loading="lazy"
              className="animate-fade-in min-h-0 w-full flex-1 object-cover"
            />
            <div className="shrink-0 border-t-[3px] border-border p-4">
              <h3 className="text-lg uppercase md:text-xl">{active.name}</h3>
              <p className="text-muted-foreground mt-1 text-sm font-medium">{active.blurb}</p>
              <span className="bg-accent text-accent-foreground brut-border mt-3 inline-flex items-center gap-2 px-4 py-2 text-[0.7rem] font-bold uppercase tracking-widest">
                Explore {active.name}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
