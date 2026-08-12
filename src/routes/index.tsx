import { createFileRoute } from "@tanstack/react-router";
import HeroFeatured from "@/components/site/HeroFeatured";
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
      <LatestArticles />
      <TopicsSection />
      <AboutSection />
      <ChordNoteCTA />
    </>
  );
}

