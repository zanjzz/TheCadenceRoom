import { createFileRoute } from "@tanstack/react-router";
import HeroFeatured from "@/components/site/HeroFeatured";
import ScrollZoomImage from "@/components/site/ScrollZoomImage";
import LatestArticles from "@/components/site/LatestArticles";
import TopicsSection from "@/components/site/TopicsSection";
import AboutSection from "@/components/site/AboutSection";
import ChordNoteCTA from "@/components/site/ChordNoteCTA";
import { getFeaturedPost } from "@/lib/posts";

const title = "Harmonic Progress — Chord Progressions & Practical Harmony";
const description =
  "Articles on chord progressions, voice leading, gospel and jazz harmony for church musicians, songwriters, and producers.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = getFeaturedPost();

  return (
    <>
      <HeroFeatured post={featured} />

      <section className="section-shell py-16 md:py-24">
        <div className="mb-8 max-w-xl">
          <span className="eyebrow">In this issue</span>
          <h2 className="mt-3 text-3xl md:text-5xl">
            {featured ? featured.title : "Harmonic Progress"}
          </h2>
          <p className="text-muted-foreground mt-3 text-base font-medium">
            {featured?.excerpt}
          </p>
        </div>
        <ScrollZoomImage
          src={featured?.image ?? "/images/harmony.jpg"}
          alt={featured?.title ?? "Harmonic Progress featured artwork"}
        />
      </section>

      <LatestArticles />
      <TopicsSection />
      <AboutSection />
      <ChordNoteCTA />
    </>
  );
}
