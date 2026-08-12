# Refine Featured Article label appearance in hero

## Goal
Make the "Featured Article" label in `HeroFeatured` visually distinct from the "Read the article" button so it doesn’t look like a second button.

## Current state
- The label is rendered as `<span className="eyebrow bg-card text-card-foreground">Featured Article</span>`.
- The Read Article link uses `bg-card text-card-foreground` plus `brut-border brut-shadow-sm brut-press`.
- Because both share the card fill, the label reads like another button.

## Proposed change
1. Remove the `bg-card text-card-foreground` override from the Featured Article label so the `.eyebrow` utility’s accent fill (`var(--accent)`) shows through.
2. Keep the label as an inline `<span>` (not a clickable element), so it clearly signals metadata, not an action.
3. Verify the result in both dark and light themes.

## Files to edit
- `src/components/site/HeroFeatured.tsx` — update the label classes.

## Outcome
The label becomes a compact lime/accent pill that contrasts with the bordered card button, matching the neo-brutalist accent system used elsewhere.
