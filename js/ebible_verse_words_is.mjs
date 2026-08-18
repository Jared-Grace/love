import { text_replace_multiple_to } from "./text_replace_multiple_to.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { whitespace_normalize } from "./whitespace_normalize.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
export function ebible_verse_words_is(verse) {
  arguments_assert(arguments, 1);
  ("Whether a verse has any words in it at all.");
  ("A bracket does not count as words. That is how a translation writes a verse it has nothing to say for - a bracket is the printer's mark that something is missing, not something anybody reads - and a reader shown a numbered blank would take it for a fault in the app rather than a fact about the translation.");
  ("Each bracket is taken away on its own rather than the two of them together, because a printer is not tidy about them. Mark 9 verses 44 and 46 are left standing over a lone closing bracket in Saafi-Saafi and in Tepo Krumen, over a bracket and a space and a bracket in Bohairic Coptic, and in Yaka over a footnote that is itself cleared away first and then a lone closing bracket. Asking for the two characters side by side matched none of those four, so five chapters of Mark were left with one more number than they had lines to read and were shown to nobody.");
  ("Words inside brackets are still words. Taking the brackets away and asking what is left keeps a bracketed passage that a translation does print, and drops only a verse that is brackets and nothing else.");
  ("Asked in one place because more than one reading has to agree about it: the one that cuts a chapter into verses drops the empty ones, and the one that lays the reading-aloud lines against the numbers has to leave out exactly the same verses or every line after them carries the wrong number.");
  let text = property_get(verse, "text");
  let normalized = whitespace_normalize(text);
  let brackets = ["[", "]"];
  let replaced = text_replace_multiple_to(normalized, brackets, "");
  let trimmed = whitespace_normalize(replaced);
  let n = text_empty_not_is(trimmed);
  return n;
}
