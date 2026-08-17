import { equal } from "./equal.mjs";
import { or } from "./or.mjs";
export function bible_glyph_gloss_placeholder_is(gloss) {
  "$plain gloss";
  "the wording is one the interlinear printed under a word. It is text to look at and nothing that runs.";
  "Whether a wording the interlinear printed is a filler standing in for a word rather than a wording of it.";
  "The tables print two of these. A row of dots stands where the English of the surrounding phrase carries the word and no separate English of it can be pointed at, and vvv marks a word whose English has been pulled forward or back into a neighbouring row. Neither is a meaning, so counting either as one would make a word look like it had more senses than it has, which is the exact number this survey is trying to measure honestly.";
  let dots = equal(gloss, ". . .");
  let carried = equal(gloss, "vvv");
  let v = or(dots, carried);
  return v;
}
