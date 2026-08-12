export type Topic = {
  name: string;
  image: string;
  blurb: string;
};

/** Source of truth for the Topics section — add or reorder entries freely. */
export const topics: Topic[] = [
  {
    name: "Harmony",
    image: "/images/harmony.jpg",
    blurb: "Progressions, borrowed chords, and the logic behind the changes.",
  },
  {
    name: "Gospel",
    image: "/images/gospel.jpg",
    blurb: "Passing chords, walk-ups, and Sunday-morning keyboard craft.",
  },
  {
    name: "Jazz",
    image: "/images/jazz.jpg",
    blurb: "Substitutions, reharmonisation, and playing over standards.",
  },
  {
    name: "Songwriting",
    image: "/images/songwriting.jpg",
    blurb: "Form, bridges, and writing hooks that hold up on second listen.",
  },
  {
    name: "Production",
    image: "/images/production.jpg",
    blurb: "Arranging and mixing keys so the harmony stays legible.",
  },
  {
    name: "Theory",
    image: "/images/theory.jpg",
    blurb: "Voice leading, ear training, and theory that changes how you play.",
  },
];
