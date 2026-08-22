import { text_split_comma_trimmed } from "./text_split_comma_trimmed.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
export function song_gloss_references(gloss) {
  "$plain gloss";
  "The passages of scripture one line of a song rests on, taken out of that line's explanation and handed back one to a place.";
  "A line with no explanation rests on nothing as far as this is concerned, and is answered with an empty list rather than with nothing at all - so a caller can go straight on to asking how many there are.";
  "THE REFERENCES ARE WRITTEN DOWN AS ONE LINE OF TEXT, because that is the form a person reads back and disagrees with. Cutting that line into pieces happens here and nowhere else, so no two songs can come to differ about where one reference ends and the next begins.";
  arguments_assert(arguments, 1);
  let unglossed = equal(gloss, undefined);
  if (unglossed) {
    let r = [];
    return r;
  }
  let references = text_split_comma_trimmed(gloss.lyric_ref);
  return references;
}
