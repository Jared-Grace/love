import { arguments_assert } from "./arguments_assert.mjs";
import { urdu_glued_words_roman_welding_endings_row } from "./urdu_glued_words_roman_welding_endings_row.mjs";
import { list_tally } from "./list_tally.mjs";
export function urdu_glued_words_roman_welding_endings_spaced_counts(rows) {
  arguments_assert(arguments, 1);
  let welded = [];
  let spaced = [];
  urdu_glued_words_roman_welding_endings_row(rows, spaced, welded);
  let welded_counts = list_tally(welded);
  let spaced_counts = list_tally(spaced);
  let r = {
    welded_counts,
    spaced_counts,
  };
  return r;
}
