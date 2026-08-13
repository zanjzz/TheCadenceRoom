# The Cadence Room

The Cadence Room is a personal blog by Zanj about learning and making music. It explores music theory, musicianship, songwriting, production, and the ideas and discoveries that come from actually playing and creating music.

Articles start from real questions, playing problems, and things I'm learning along the way — with a focus on understanding music as something you can hear, apply, and experience, not just memorize.

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
cd the-cadence-room
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
