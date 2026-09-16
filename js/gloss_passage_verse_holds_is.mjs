import { property_get } from "./property_get.mjs";
import { text_from_number } from "./text_from_number.mjs";
import { list_includes } from "./list_includes.mjs";
export function gloss_passage_verse_holds_is(passage, verse) {
  "Whether one authored passage covers a given verse of its chapter.";
  "$plain passage";
  "the passage is one stretch of a chapter out of the store, carrying the verse numbers it was cut to.";
  "$plain verse";
  "the verse is a plain number, the way a writer names one.";
  "A passage is not a verse. It is cut to whatever stretch the writer worked on, so it may carry one verse or several, and a word is found by asking which passage covers the verse rather than by counting passages.";
  "The chapter's own numbers are kept as they are written and the number asked about is spelled out to meet them, rather than the stored ones being read back into numbers. Reading backward would need a second understanding of what those numbers say, free to disagree with the first.";
  let verse_numbers = property_get(passage, "verse_numbers");
  let spelled = text_from_number(verse);
  let r = list_includes(verse_numbers, spelled);
  return r;
}
