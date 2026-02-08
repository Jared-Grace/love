import { text_ends_with_any } from "../../../love/public/src/text_ends_with_any.mjs";
import { string_split_empty } from "../../../love/public/src/string_split_empty.mjs";
import { bible_verse_trim_right } from "../../../love/public/src/bible_verse_trim_right.mjs";
export function bible_verse_end_is(text) {
  let trimmed = bible_verse_trim_right(text);
  let suffixes = ".?!";
  let split = string_split_empty(suffixes);
  let end = text_ends_with_any(trimmed, split);
  return end;
}
