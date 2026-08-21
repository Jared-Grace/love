import { round } from "./round.mjs";
import { multiply } from "./multiply.mjs";
import { bible_dream_hand_mark_steps } from "./bible_dream_hand_mark_steps.mjs";
export function bible_dream_hand_mark_strength(nearness, taper) {
  "Say which of the allowed settings a piece of the hand's own line should be drawn at, from how near the stroke it was and how much of the mark is left at that distance.";
  "★ IT IS ONE NUMBER BECAUSE THICKNESS AND BRIGHTNESS WERE ALWAYS ONE NUMBER. They were written as two, and the two were kept in step by hand: a floor of a fifth of the width against a floor of a fifth of the brightness, and a reach four times as wide as it was bright. Four was the ratio at every point along both, so a change to either that was not matched in the other was a bug waiting rather than a choice available. Said once, the pair cannot drift, and whatever draws the line takes its width from the same number it takes its brightness from.";
  "★ IT IS ROUNDED, AND THE ROUNDING IS WHAT LETS THE OVERLAPS DISAPPEAR. A hand's line is drawn as one growing stroke for as long as its setting does not change, and one stroke never composites with itself however much it wanders back over its own path. A number that came out slightly different at every report of the pointer would end that stroke at every report, and a chain of hundreds of separate half-clear pieces is exactly the beaded look the single stroke exists to remove.";
  "It gives back a count of settings rather than a fraction, so that the difference between two of them is a whole number too. Asking how far apart two settings are is what decides whether a new stroke is needed, and asking it of fractions would mean deciding how close two stored fractions have to be to count as the same - a question with no honest answer.";
  "The floors stay inside it. A mark that can be seen at all is the record of the tracing, and the setting a straying hand rounds down to is still well above nothing.";
  let bright = 0.3 + multiply(nearness, 0.6);
  let full = multiply(bright, taper);
  let steps = bible_dream_hand_mark_steps();
  let n = multiply(full, steps);
  let strength = round(n);
  return strength;
}
