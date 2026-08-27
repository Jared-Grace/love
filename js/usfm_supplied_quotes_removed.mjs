import { arguments_assert } from "./arguments_assert.mjs";
import { regex_usfm_supplied_quotes } from "./regex_usfm_supplied_quotes.mjs";
export function usfm_supplied_quotes_removed(usfm) {
  arguments_assert(arguments, 1);
  ("$plain usfm");
  ("Usfm with the bracketed quote marks a printing supplies taken out of it.");
  ("They are a note about a page rather than words of the book, and a reader shown one would read square brackets and two apostrophes aloud in the middle of a sentence.");
  let r = regex_usfm_supplied_quotes();
  let removed = usfm.replace(r, "");
  return removed;
}
