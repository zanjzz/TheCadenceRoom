# Harmonic Progress

Harmonic Progress is a personal blog about chord progressions, voice leading, and practical harmony — written for church musicians, songwriters, and producers who want to understand harmony as something they can hear and use, not just memorize.

The site publishes short, practical articles that start from real playing problems: a turnaround that won't resolve, a bridge that goes nowhere, a keyboard part burying the vocal.

## Features

- **File-based articles** — posts are Markdown files in `content/posts/`; adding a file publishes an article.
- **Automatic metadata** — publication date sorting, category tagging, and calculated "X min read" times.
- **Topic pages** — every category gets its own page at `/topics/:topicSlug` with a filtered article list.
- **Interactive topics browser** — a scrollable category wheel paired with a linked topic cover image.
- **Light / dark themes** — a neo-brutalist palette that adapts across both modes.
- **Responsive floating nav** — glass pill navigation that collapses to a mobile sheet.

## Tech stack

- [TanStack Start](https://tanstack.com/start) (React 19, file-based routing, SSR)
- TypeScript
- Vite
- Tailwind CSS v4
- TanStack Query
- Markdown content via `import.meta.glob`

## Getting started

Requires [Node.js](https://nodejs.org) 20+ (or [Bun](https://bun.sh)).

```sh
git clone <this-repository-url>
cd HarmonicProgress
npm install
```

### Run locally

```sh
npm run dev
```

The dev server prints a local URL (default `http://localhost:8080`).

### Build for production

```sh
npm run build
npm run start
```

## Writing an article

Create a Markdown file in `content/posts/` with front matter:

```md
---
title: "Tritone Substitution, Plainly"
date: "2026-02-14"
category: "Jazz"
excerpt: "One chord swap that makes a turnaround sound intentional."
image: "/images/jazz.jpg"
---

Article body in Markdown…
```

The homepage shows the six newest posts; each post is available at `/blog/<filename>`.

## Project structure

```text
content/posts/      Markdown articles
public/images/      Article and topic artwork
src/routes/         File-based routes (__root, index, blog.$slug, topics.$topicSlug)
src/components/site Page sections and UI components
src/lib/            Post loading, topic metadata, theme provider
src/styles.css      Design tokens and global styles
```

## License

Personal project. All article content © Zanj.
