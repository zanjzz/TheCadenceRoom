import { slugifyTopic } from "./topics";

export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  categorySlug: string;
  excerpt: string;
  image: string;
  tags: string[];
  body: string;
  readingMinutes: number;
};


const postFiles = import.meta.glob("../../content/posts/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

/**
 * Minimal YAML frontmatter reader: only the key/value and flow-sequence forms
 * used by the article files. Avoids shipping a YAML parser to the browser.
 */
function parseFrontmatter(raw: string) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(raw);
  const block = match?.[1];
  if (!match || !block) return { data: {} as Record<string, unknown>, body: raw };

  const data: Record<string, unknown> = {};
  for (const line of block.split(/\r?\n/)) {
    const pair = /^([A-Za-z0-9_-]+):\s*(.*)$/.exec(line.trim());
    const key = pair?.[1];
    if (!pair || !key) continue;
    const value = (pair[2] ?? "").trim();
    if (value.startsWith("[") && value.endsWith("]")) {
      data[key] = value
        .slice(1, -1)
        .split(",")
        .map((item) => item.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean);
    } else {
      data[key] = value.replace(/^["']|["']$/g, "");
    }
  }

  return { data, body: raw.slice(match[0].length) };
}

function toPost(filepath: string, raw: string): Post {
  const { data, body } = parseFrontmatter(raw);
  const slug = filepath.split("/").pop()!.replace(/\.md$/, "");

  return {
    slug,
    title: (data["title"] as string) ?? slug,
    date: (data["date"] as string) ?? "",
    category: (data["category"] as string) ?? "Uncategorised",
    excerpt: (data["excerpt"] as string) ?? "",
    image: (data["image"] as string) ?? "/images/harmony.jpg",
    tags: (data["tags"] as string[]) ?? [],
    body,
  };
}

const posts: Post[] = Object.entries(postFiles)
  .map(([filepath, raw]) => toPost(filepath, raw))
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function getAllPosts(): Post[] {
  return posts;
}

export function getLatestPosts(count: number): Post[] {
  return posts.slice(0, count);
}

export function getFeaturedPost(): Post | null {
  return posts[0] ?? null;
}

export function getPostBySlug(slug: string): Post | null {
  return posts.find((post) => post.slug === slug) ?? null;
}

export function getCategories(): string[] {
  return Array.from(new Set(posts.map((post) => post.category)));
}

export function formatPostDate(date: string): string {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
