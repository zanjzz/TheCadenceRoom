import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { z } from "zod";
import ArticleCard from "@/components/site/ArticleCard";
import { getPostsByTopic, type Post } from "@/lib/posts";
import { getTopicBySlug } from "@/lib/topics";

const PER_PAGE = 9;

export const Route = createFileRoute("/topics/$topicSlug")({
  validateSearch: z.object({ page: z.coerce.number().int().min(1).catch(1) }),
  loader: ({ params }) => {
    const topic = getTopicBySlug(params.topicSlug);
    if (!topic) throw notFound();
    return { topic, posts: getPostsByTopic(topic.slug) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Topic unavailable — The Cadence Room" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { topic } = loaderData;
    const title = `${topic.name} — The Cadence Room`;
    return {
      meta: [
        { title },
        { name: "description", content: topic.description },
        { property: "og:title", content: title },
        { property: "og:description", content: topic.description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: TopicPage,
});

function TopicPage() {
  const { topic, posts } = Route.useLoaderData();
  const { page } = Route.useSearch();
  const totalPages = Math.max(1, Math.ceil(posts.length / PER_PAGE));
  const current = Math.min(page, totalPages);
  const visible = posts.slice((current - 1) * PER_PAGE, current * PER_PAGE);

  return (
    <div className="section-shell pb-16 pt-28 md:pb-24 md:pt-36">
      <Link
        to="/"
        className="brut-border brut-shadow-sm brut-press bg-card text-card-foreground inline-block px-4 py-2 text-[0.7rem] font-bold uppercase tracking-widest"
      >
        ← Home
      </Link>

      <span className="eyebrow mt-6 block w-fit">Topic</span>
      <h1 className="mt-4 text-4xl uppercase leading-none md:text-6xl">{topic.name}</h1>
      <p className="text-muted-foreground mt-4 max-w-xl text-base font-medium">
        {topic.description}
      </p>

      {posts.length ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((post: Post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="brut-border bg-card text-card-foreground mt-10 p-6 text-sm font-bold uppercase tracking-widest">
          No articles here yet — check back soon.
        </p>
      )}

      {totalPages > 1 && (
        <nav className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/topics/$topicSlug"
            params={{ topicSlug: topic.slug }}
            search={{ page: Math.max(1, current - 1) }}
            disabled={current === 1}
            className="brut-border brut-shadow-sm brut-press bg-card text-card-foreground px-4 py-2 text-[0.7rem] font-bold uppercase tracking-widest aria-disabled:pointer-events-none aria-disabled:opacity-40"
          >
            ← Prev
          </Link>
          <span className="text-muted-foreground text-[0.7rem] font-bold uppercase tracking-widest">
            Page {current} / {totalPages}
          </span>
          <Link
            to="/topics/$topicSlug"
            params={{ topicSlug: topic.slug }}
            search={{ page: Math.min(totalPages, current + 1) }}
            disabled={current === totalPages}
            className="brut-border brut-shadow-sm brut-press bg-card text-card-foreground px-4 py-2 text-[0.7rem] font-bold uppercase tracking-widest aria-disabled:pointer-events-none aria-disabled:opacity-40"
          >
            Next →
          </Link>
        </nav>
      )}
    </div>
  );
}
