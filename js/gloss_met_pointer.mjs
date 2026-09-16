import { property_get } from "./property_get.mjs";
export function gloss_met_pointer(met) {
  "The address made from a note of a word the reader has already met - its spelling and the verse it stood in.";
  "$plain met";
  "what is met is the note kept while reading down the chapter: the word as it was spelled, the verse it last stood in, and the last thing said about it there.";
  "The note holds more than an address needs, so the address is taken from it here in one place rather than spelled out again by everyone who wants one.";
  let r = {
    word: property_get(met, "word"),
    verse: property_get(met, "verse"),
  };
  return r;
}
