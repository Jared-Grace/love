import { multiply } from "./multiply.mjs";
export function bible_dream_hand_mark_strength(nearness, taper) {
  "Say how strongly a piece of the hand's own line should show, from how near the stroke it was and how much of the mark is left at that distance.";
  "★ IT IS ONE NUMBER BECAUSE THICKNESS AND BRIGHTNESS WERE ALWAYS ONE NUMBER. They were written as two, and the two were kept in step by hand: a floor of a fifth of the width against a floor of a fifth of the brightness, and a reach some fixed number of times as wide as it was bright. One ratio held at every point along both, so a change to either that was not matched in the other was a bug waiting rather than a choice available. Said once, the pair cannot drift, and whatever draws the line takes its width from the same number it takes its brightness from - multiplied by a ratio that now has a name of its own, because how heavy the hand's line reads against the ink beside it is a judgement somebody makes and the brightness is not.";
  "★ IT IS NOT ROUNDED, AND IT WAS, AND THE ROUNDING IS WHAT MADE THE LINE STEP. It was rounded to twenty settings so that a run of pieces sharing a setting could be drawn as one path and so never overlap itself. That worked for a hand held steady and failed for the hand it mattered for: a wandering one crossed a setting every few reports, so the line broke into dozens of pieces AND changed brightness in visible steps between them. Both faults were the rounding. A brightness worked out afresh for every piece changes by a hundredth between neighbours, which no eye resolves, and the line reads as one gradient from end to end.";
  "The floors stay inside it. A mark that can be seen at all is the record of the tracing, and a straying hand's mark is still well above nothing.";
  let bright = 0.3 + multiply(nearness, 0.6);
  let strength = multiply(bright, taper);
  return strength;
}
