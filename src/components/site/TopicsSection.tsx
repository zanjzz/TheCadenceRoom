import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import OptionWheel from "./OptionWheel";
import { topics } from "@/lib/topics";

export default function TopicsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = topics[activeIndex] ?? topics[0]!;

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

        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <div className="relative h-[320px] md:h-[420px]">
            <OptionWheel
              items={topics.map((topic) => topic.name)}
              defaultSelected={0}
              onChange={(index) => setActiveIndex(index)}
              fontSize={2}
              spacing={1.6}
              inset={4}
              className="uppercase"
            />
          </div>

          <Link
            to="/topics/$topicSlug"
            params={{ topicSlug: active.slug }}
            className="brut-border brut-shadow brut-press bg-card text-card-foreground group block overflow-hidden"
          >
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
              <span className="bg-accent text-accent-foreground brut-border mt-4 inline-flex items-center gap-2 px-4 py-2 text-[0.7rem] font-bold uppercase tracking-widest">
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
