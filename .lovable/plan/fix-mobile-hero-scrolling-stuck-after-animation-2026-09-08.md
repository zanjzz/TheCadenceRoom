# Fix mobile hero scrolling (stuck after animation)

## What's wrong

On phones the hero animation is currently driven by finger movement instead of the page's own scrolling: touch moves are blocked, progress is tracked separately, and at completion the page is force-jumped to the end of the hero. That handoff is where things break — the forced jump happens mid-gesture and the page can end up out of sync with the animation, leaving the page unable to continue past the hero. (The exact failure is a handoff race; step 1 below verifies it on a real mobile-sized session before the rewrite is finalized.)

## The fix

Drop the separate gesture-tracking system and let the page scroll normally on mobile, exactly like desktop:

1. Reproduce first: run a mobile-viewport check that swipes through the hero and confirms the page can/can't continue afterward, so the cause is confirmed rather than assumed.
2. Remove the mobile-only touch/wheel interception and the forced scroll jump. Scrolling is never blocked, so it can never get stuck.
3. Keep the hero visually still: the hero stays pinned in place while the page scrolls behind it (this is already how it works), so growing the square feels the same but nothing jitters.
4. Remove the jitter cause instead of blocking scroll: lock the hero's height to one measured value and ignore the small height changes phones make when the address bar hides/shows, and only re-measure on real orientation/width changes. Snap the animation directly to scroll position on mobile (no smoothing lag), which is what made it feel clunky.
5. Verify again on mobile size: square grows smoothly, hero doesn't wobble, and the page continues to Latest Articles after the animation completes. Also confirm desktop behaviour is unchanged.

Nothing about the visual design, layout, timing order (zoom → text → furniture), or desktop behaviour changes.

## Technical notes

- `src/components/site/HeroFeatured.tsx`: delete `mobileGestureProgress`, `handingOff`, `setMobileProgress`, the `touchstart/touchmove/touchend/touchcancel` and `wheel` listeners, and the mobile branch in `onScroll`. `onScroll` becomes: `target = readProgress()`; on mobile (or reduced motion) apply immediately, otherwise the existing rAF smoothing.
- `measure()`: store `stageH` from `window.innerHeight` once, and in `onResize` only re-measure when `window.innerWidth` changed or the height changed by more than ~15% (address-bar noise filter).
- `src/styles.css`: keep `overscroll-behavior-y: none` on `.hero-featured__stage`; no `touch-action` restrictions needed since scrolling is native again.
