import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";
import { formatPostDate, getPostBySlug } from "@/lib/posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Article unavailable — The Cadence Room" }, { name: "robots", content: "noindex" }],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} — The Cadence Room` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();

  return (
    <article className="section-shell max-w-3xl pb-16 pt-28 md:pb-24 md:pt-36">
      <Link
        to="/"
        className="brut-border brut-shadow-sm brut-press bg-card text-card-foreground inline-block px-4 py-2 text-[0.7rem] font-bold uppercase tracking-widest"
      >
        ← All articles
      </Link>

      <Link
        to="/topics/$topicSlug"
        params={{ topicSlug: post.categorySlug }}
        className="eyebrow brut-press mt-6 block w-fit"
      >
        {post.category}
      </Link>
      <h1 className="mt-4 text-3xl leading-tight md:text-5xl">{post.title}</h1>
      <div className="mt-3 text-xs font-bold uppercase tracking-widest">
        <time dateTime={post.date}>{formatPostDate(post.date)}</time>
        <span className="ml-3">{post.readingMinutes} min read</span>
        {post.tags.length ? <span className="ml-3">{post.tags.map((tag: string) => `#${tag}`).join(" ")}</span> : null}
      </div>


      <img
        src={post.image}
        alt={post.title}
        width={1200}
        height={900}
        className="brut-border brut-shadow mt-8 aspect-[16/9] h-auto w-full object-cover"
      />

      <div className="prose-brut mt-10">
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </div>
    </article>
  );
}
