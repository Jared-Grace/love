import { greater_than } from "./greater_than.mjs";
import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { list_last } from "./list_last.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
export function urdu_glued_words_roman_welding_row(row, endings) {
  arguments_assert(arguments, 2);
  ("$plain row");
  ("$plain endings");
  ("How many other words back the reading that this row's Latin count is the alphabet's habit rather than the printing's opinion, or nothing where no such reading applies.");
  ("It is asked of every row whose Latin count runs the word together, and not only of the rows where the Urdu printing disagrees. The habit belongs to the ending, so it is at work wherever the ending is, and a reader looking at a row where the Urdu printing happens to be silent is owed the same warning as one looking at a row where it is not.");
  ("A row whose Latin count writes the space is left alone, because a printing that writes the space is doing the one thing a joining habit would have stopped it doing. That is the printing speaking, and there is nothing here to explain away.");
  ("The number of words rather than a yes is handed back, because the whole strength of the reading is how many words agree and a yes throws that away. A reader can weigh nine of nine against two of two; a reader handed true twice cannot.");
  let spacing = property_get(row, "control_spaced");
  let unproposed = not(spacing);
  if (unproposed) {
    return null;
  }
  let roman_glued = property_get(row, "roman_glued");
  let roman_apart = property_get(row, "roman_apart");
  let latin_welds_it = greater_than(roman_glued, 0) && equal(roman_apart, 0);
  let latin_says_nothing_of_the_kind = not(latin_welds_it);
  if (latin_says_nothing_of_the_kind) {
    return null;
  }
  let pieces = text_split_space(spacing);
  let ending = list_last(pieces);
  let how_many = property_get_or_null(endings, ending);
  return how_many;
}
