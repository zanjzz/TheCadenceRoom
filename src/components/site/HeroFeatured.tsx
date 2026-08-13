import { lazy, useCallback, useEffect, useRef } from "react";
import { ClientOnly, Link } from "@tanstack/react-router";

const ShapeGrid = lazy(() => import("./ShapeGrid"));
import RoomFurniture from "./RoomFurniture";
import { formatPostDate, type Post } from "@/lib/posts";

const clamp = (v: number, a: number, b: number) => (v < a ? a : v > b ? b : v);
const smoothstep = (edge0: number, edge1: number, x: number) => {
  const t = clamp((x - edge0) / (edge1 - edge0 || 1e-6), 0, 1);
  return t * t * (3 - 2 * t);
};

type HeroFeaturedProps = {
  post: Post | null;
  startWidth?: number;
  startHeight?: number;
  startRadius?: number;
  endRadius?: number;
  growDistance?: number;
  holdDistance?: number;
  smoothing?: number;
};

export default function HeroFeatured({
  post,
  startWidth = 62,
  startHeight = 62,
  startRadius = 0,
  endRadius = 0,
  growDistance = 1,
  holdDistance = 0.8,
  smoothing = 0.12,
}: HeroFeaturedProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const furnitureRef = useRef<HTMLDivElement>(null);

  const cfg = useRef({
    startWidth,
    startHeight,
    startRadius,
    endRadius,
    growDistance,
    holdDistance,
    smoothing,
  });
  cfg.current = {
    startWidth,
    startHeight,
    startRadius,
    endRadius,
    growDistance,
    holdDistance,
    smoothing,
  };

  const apply = useCallback((p: number) => {
    const frame = frameRef.current;
    if (!frame) return;
    const c = cfg.current;
    const splitPoint = c.growDistance / (c.growDistance + c.holdDistance);
    // Narrow screens start with a larger frame so hero copy stays inside it.
    const isNarrow = typeof window !== "undefined" && window.innerWidth < 768;
    const startWidthPct = isNarrow ? Math.max(c.startWidth, 92) : c.startWidth;
    const startHeightPct = isNarrow ? Math.max(c.startHeight, 80) : c.startHeight;

    const growP = smoothstep(0, 1, clamp(p / splitPoint, 0, 1));
    const w = startWidthPct + (100 - startWidthPct) * growP;
    const h = startHeightPct + (100 - startHeightPct) * growP;
    const ix = Math.max(0, (100 - w) / 2);
    const iy = Math.max(0, (100 - h) / 2);
    const r = c.startRadius + (c.endRadius - c.startRadius) * growP;
    frame.style.clipPath = `inset(${iy}% ${ix}% ${iy}% ${ix}% round ${r}px)`;


    const fadeP = smoothstep(0, 1, clamp((p - splitPoint) / (1 - splitPoint), 0, 1));
    if (heroRef.current) {
      heroRef.current.style.opacity = `${1 - fadeP}`;
    }
    if (featuredRef.current) {
      featuredRef.current.style.opacity = `${fadeP}`;
    }
    // Furniture pops in only after the article copy has essentially finished revealing.
    if (furnitureRef.current) {
      furnitureRef.current.classList.toggle("room-furniture--in", fadeP > 0.8);
    }
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    const stage = stageRef.current;
    if (!track || !stage) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let current = 0;
    let target = 0;
    let running = false;
    let stageH = 0;

    const measure = () => {
      stageH = window.innerHeight;
      stage.style.height = `${stageH}px`;
      const c = cfg.current;
      track.style.height = `${stageH * (1 + c.growDistance + c.holdDistance)}px`;
    };

    const readProgress = () => {
      const c = cfg.current;
      const span = stageH * (c.growDistance + c.holdDistance);
      const top = track.getBoundingClientRect().top;
      return clamp(-top / span, 0, 1);
    };

    const tick = () => {
      const c = cfg.current;
      const k = c.smoothing <= 0 ? 1 : 1 - Math.exp(-1 / (60 * c.smoothing));
      current += (target - current) * k;
      if (Math.abs(target - current) < 0.0004) {
        current = target;
        running = false;
      }
      apply(current);
      raf = running ? requestAnimationFrame(tick) : 0;
    };

    const kick = () => {
      if (running) return;
      running = true;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      target = readProgress();
      if (cfg.current.smoothing <= 0 || reduceMotion) {
        current = target;
        apply(current);
        return;
      }
      kick();
    };

    const onResize = () => {
      measure();
      target = readProgress();
      current = target;
      apply(current);
    };

    measure();
    target = readProgress();
    current = target;
    apply(current);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [apply]);

  return (
    <div className="hero-featured" ref={trackRef} id="top">
      <div className="hero-featured__stage" ref={stageRef}>
        <div className="hero-featured__bg" aria-hidden="true">
          <ClientOnly fallback={null}>
            <ShapeGrid
              speed={0.34}
              squareSize={51}
              direction="diagonal"
              borderColor="#113c45a0"
              hoverFillColor="#17d4ef"
              shape="square"
              hoverTrailAmount={0}
            />
          </ClientOnly>
        </div>


        <div className="hero-featured__frame" ref={frameRef} />

        <div className="hero-featured__overlay">
          <div className="hero-featured__hero" ref={heroRef}>
            <h1 className="hero-title">
              <span className="accent-word">THE CADENCE</span>
              <span className="second-word">ROOM</span>
            </h1>
            <p>Insights, lessons, and discoveries from my journey to becoming a better musician</p>
            <div className="hero-ctas">
              <a
                href="#latest"
                className="brut-border brut-shadow brut-press bg-primary text-primary-foreground px-6 py-3 text-sm font-bold uppercase tracking-widest"
              >
                Browse Articles
              </a>
              <a
                href="#about"
                className="brut-border brut-shadow brut-press bg-card text-card-foreground px-6 py-3 text-sm font-bold uppercase tracking-widest"
              >
                About
              </a>
            </div>
            <span className="hero-featured__scroll-cue">Scroll</span>
          </div>

          {post ? (
            <div className="hero-featured__article" ref={featuredRef}>
              <div className="hero-featured__article-inner">
                <div className="min-w-0">
                  <span className="hero-eyebrow">Featured Article</span>
                  <h2>
                    <Link
                      to="/blog/$slug"
                      params={{ slug: post.slug }}
                      className="underline-offset-4 hover:underline"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <div className="mb-3 text-xs font-bold uppercase tracking-widest">
                    <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                    <span className="ml-3">{post.category}</span>
                    <span className="ml-3">{post.readingMinutes} min read</span>
                  </div>

                  <p className="max-w-lg text-base font-medium">{post.excerpt}</p>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: post.slug }}
                    className="brut-border brut-shadow-sm brut-press bg-card text-card-foreground mt-5 inline-block px-5 py-2 text-xs font-bold uppercase tracking-widest"
                  >
                    Read the article
                  </Link>
                </div>

                <div className="brut-border bg-card hidden overflow-hidden md:block">
                  <img
                    src={post.image}
                    alt={post.title}
                    width={1200}
                    height={900}
                    className="aspect-[4/3] h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
