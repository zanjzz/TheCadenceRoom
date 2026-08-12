import { Link } from "@tanstack/react-router";
import { formatPostDate, type Post } from "@/lib/posts";

export default function ArticleCard({ post }: { post: Post }) {
  return (
    <article className="brut-border brut-shadow bg-card text-card-foreground flex h-full flex-col overflow-hidden transition-transform duration-200 hover:-translate-y-1">
      <header className="brut-border bg-accent text-accent-foreground flex items-center justify-between gap-3 border-x-0 border-t-0 px-3 py-2">
        <span className="truncate text-[0.7rem] font-bold uppercase tracking-widest">
          {post.category}
        </span>
        <time
          dateTime={post.date}
          className="shrink-0 text-[0.7rem] font-bold uppercase tracking-widest"
        >
          {formatPostDate(post.date)}
        </time>
      </header>

      <div className="border-b-[3px] border-border">
        <img
          src={post.image}
          alt={post.title}
          width={1200}
          height={900}
          loading="lazy"
          className="aspect-[16/10] h-auto w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <h3 className="text-lg leading-tight">
          <Link
            to="/blog/$slug"
            params={{ slug: post.slug }}
            className="underline-offset-4 hover:underline"
          >
            {post.title}
          </Link>
        </h3>
        <span className="text-muted-foreground text-[0.7rem] font-bold uppercase tracking-widest">
          {post.readingMinutes} min read
        </span>
        <p className="text-muted-foreground flex-1 text-sm font-medium">{post.excerpt}</p>

        <Link
          to="/blog/$slug"
          params={{ slug: post.slug }}
          className="brut-border brut-shadow-sm brut-press bg-secondary text-secondary-foreground self-start px-4 py-2 text-[0.7rem] font-bold uppercase tracking-widest"
        >
          Read
        </Link>
      </div>
    </article>
  );
}
