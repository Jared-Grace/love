import { property_get_or_null } from "./property_get_or_null.mjs";
import { gloss_entry_gloss_key } from "./gloss_entry_gloss_key.mjs";
import { null_is } from "./null_is.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
export function gloss_entry_gloss_blank_is(entry) {
  "Whether one word explanation was left without a meaning.";
  "★ THIS IS THE HOLE NO GATE CATCHES. The alignment gate counts explanations against the words of the verse and never reads one, so an explanation whose meaning is an empty piece of text passes every check and reaches a reader as the word, two colons and nothing between them.";
  "Spaces count as nothing, because a meaning made of spaces looks the same to a reader as no meaning at all, and an explanation with no meaning field at all is the same hole again.";
  let property = gloss_entry_gloss_key();
  let value = property_get_or_null(entry, property);
  if (null_is(value)) {
    return true;
  }
  let trimmed = text_trim(value);
  let blank = text_empty_is(trimmed);
  return blank;
}
