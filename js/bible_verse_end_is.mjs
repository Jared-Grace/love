import { bible_verse_end_suffixes } from "./bible_verse_end_suffixes.mjs";
import { text_ends_with_any } from "./text_ends_with_any.mjs";
import { bible_verse_trim_right } from "./bible_verse_trim_right.mjs";
export function bible_verse_end_is(text) {
  "Whether a verse's text, once trailing space is trimmed, ends on one of the marks a verse is allowed to end with.";
  let trimmed = bible_verse_trim_right(text);
  let suffixes = bible_verse_end_suffixes();
  let end = text_ends_with_any(trimmed, suffixes);
  return end;
}
