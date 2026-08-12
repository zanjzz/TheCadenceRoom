export type Topic = {
  slug: string;
  name: string;
  image: string;
  blurb: string;
  description: string;
};

/** Source of truth for the Topics section — add or reorder entries freely. */
export const topics: Topic[] = [
  {
    slug: "harmony",
    name: "Harmony",
    image: "/images/harmony.jpg",
    blurb: "Progressions, borrowed chords, and the logic behind the changes.",
    description:
      "Progressions, borrowed chords, and the logic behind why the changes move the way they do.",
  },
  {
    slug: "gospel",
    name: "Gospel",
    image: "/images/gospel.jpg",
    blurb: "Passing chords, walk-ups, and Sunday-morning keyboard craft.",
    description:
      "Passing chords, walk-ups, and the Sunday-morning keyboard craft that holds a service together.",
  },
  {
    slug: "jazz",
    name: "Jazz",
    image: "/images/jazz.jpg",
    blurb: "Substitutions, reharmonisation, and playing over standards.",
    description: "Substitutions, reharmonisation, and practical ways to play over standards.",
  },
  {
    slug: "songwriting",
    name: "Songwriting",
    image: "/images/songwriting.jpg",
    blurb: "Form, bridges, and writing hooks that hold up on second listen.",
    description: "Form, bridges, and writing hooks that still hold up on the second listen.",
  },
  {
    slug: "production",
    name: "Production",
    image: "/images/production.jpg",
    blurb: "Arranging and mixing keys so the harmony stays legible.",
    description: "Arranging and mixing keyboards so the harmony stays legible in a full mix.",
  },
  {
    slug: "theory",
    name: "Theory",
    image: "/images/theory.jpg",
    blurb: "Voice leading, ear training, and theory that changes how you play.",
    description: "Voice leading, ear training, and the theory that actually changes how you play.",
  },
];

export function slugifyTopic(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getTopicBySlug(slug: string): Topic | null {
  return topics.find((topic) => topic.slug === slug) ?? null;
}
