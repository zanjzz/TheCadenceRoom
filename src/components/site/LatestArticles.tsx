import ArticleCard from "./ArticleCard";
import { getLatestPosts } from "@/lib/posts";

export default function LatestArticles() {
  const posts = getLatestPosts(6);

  return (
    <section id="latest" className="section-shell scroll-mt-24 py-16 md:py-24">
      <div className="enter-up enter-d1 mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="eyebrow">Latest Articles</span>
          <h2 className="mt-3 text-3xl md:text-5xl">Fresh off the score</h2>
        </div>
        <p className="text-muted-foreground max-w-sm text-sm font-medium">
          Explore what I've learned, discovered, and experienced throughout my journey as a
          musician.
        </p>
      </div>

      <div className="enter-stagger grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {posts.map((post) => (
          <ArticleCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
