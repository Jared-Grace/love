import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
export function bible_dream_hand_mark_strength(nearness, taper) {
  "Say in one number how strongly a piece of the hand's own line should show, from how near the stroke it was and how much of it is left at that distance, rounded to one of a small set of settings.";
  "★ IT IS ONE NUMBER BECAUSE THICKNESS AND BRIGHTNESS WERE ALWAYS ONE NUMBER. They were written as two, and the two were kept in step by hand: a floor of a fifth of the width against a floor of a fifth of the brightness, and a reach four times as wide as it was bright. Four was the ratio at every point along both, so a change to either that was not matched in the other was a bug waiting rather than a choice available. Said once, the pair cannot drift, and the caller draws its width from the same number it draws its brightness from.";
  "★ IT IS ROUNDED, AND THE ROUNDING IS WHAT LETS THE OVERLAPS DISAPPEAR. A hand's line is drawn as one growing stroke for as long as its setting does not change, and one stroke never composites with itself however much it wanders back over its own path. A number that came out slightly different at every report of the pointer would end that stroke at every report, and a chain of hundreds of separate half-clear pieces is exactly the beaded look the single stroke exists to remove. Twenty settings are far more than an eye can tell apart across the whole range, and a steady hand holds one of them for a long sweep.";
  "The floors stay inside it. A mark that can be seen at all is the record of the tracing, and the setting a straying hand rounds down to is still well above nothing.";
  let bright = 0.3 + multiply(nearness, 0.6);
  let full = multiply(bright, taper);
  let steps = 20;
  let stepped = Math.round(multiply(full, steps));
  let strength = divide(stepped, steps);
  return strength;
}
