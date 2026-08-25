import { fn_name } from "./fn_name.mjs";
import { less_than } from "./less_than.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { texts_start_shared } from "./texts_start_shared.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { text_slice } from "./text_slice.mjs";
import { text_split_search_terms } from "./text_split_search_terms.mjs";
export function functions_search_family_or_null(names, search) {
  "The longer word every name in a search's answer begins with, when there is one, and nothing at all when the answer is not one family.";
  ("A full answer is the dangerous one. An empty search announces itself and sends the asker back to their words, but a search that returns four names reads as the repo's reply, and the asker stops. On 2026-08-25 a hunt for a transform that writes a guard asked for js_guard, was handed four names all beginning ",
    fn_name("js_guard_statements"),
    ", read that as a reader with no writer, and recommended building a writer that had been there all along. Every one of the four shared a word longer than the word asked for. That is the whole cue, and saying it beside the answer costs nothing the asker has to remember.");
  ("Two things keep it quiet where it would only be noise. Two names or more, because a single name shares its whole self with itself and says nothing. And the shared beginning is measured with any trailing underscore cut off, so a beginning that only reaches the next word boundary - the text_pad_ of text_pad_left and text_pad_right - is what was asked for and not a family beyond it.");
  arguments_assert(arguments, 2);
  let few = less_than(names.length, 2);
  if (few) {
    let absent = null;
    return absent;
  }
  let start = texts_start_shared(names);
  let stem = start;
  while (text_ends_with(stem, "_")) {
    stem = text_slice(stem, 0, -1);
  }
  let terms = text_split_search_terms(search);
  for (let term of terms) {
    let short = less_than_equal(stem.length, term.length);
    if (short) {
      let absent = null;
      return absent;
    }
  }
  return start;
}
