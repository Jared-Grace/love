import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { whitespace_normalize } from "./whitespace_normalize.mjs";
import { text_replace } from "./text_replace.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
export function ebible_verse_words_is(verse) {
  arguments_assert(arguments, 1);
  ("Whether a verse has any words in it at all.");
  ("A pair of empty brackets does not count as words. That is how a translation writes a verse it has nothing to say for - the brackets are the printer's mark that something is missing, not something anybody reads - and a reader shown a numbered blank would take it for a fault in the app rather than a fact about the translation.");
  ("Asked in one place because more than one reading has to agree about it: the one that cuts a chapter into verses drops the empty ones, and the one that lays the reading-aloud lines against the numbers has to leave out exactly the same verses or every line after them carries the wrong number.");
  let text = property_get(verse, "text");
  let normalized = whitespace_normalize(text);
  let replaced = text_replace(normalized, "[]", "");
  let trimmed = whitespace_normalize(replaced);
  let n = text_empty_not_is(trimmed);
  return n;
}
