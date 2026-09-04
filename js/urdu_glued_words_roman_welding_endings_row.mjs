import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { greater_than } from "./greater_than.mjs";
import { equal } from "./equal.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { list_last } from "./list_last.mjs";
import { list_add } from "./list_add.mjs";
export function urdu_glued_words_roman_welding_endings_row(
  rows,
  spaced,
  welded,
) {
  "Three kinds of row are stepped over before an ending is filed, and each is a row that could only add noise: one nobody proposed a space in, one the Urdu-script printing does not plainly write apart, and one the Latin printing says nothing about at all. What is left is exactly the rows where the two printings already part company, which is the only place a joining habit can be seen.";
  arguments_assert(arguments, 3);
  for (let row of rows) {
    let spacing = property_get(row, "control_spaced");
    let unproposed = not(spacing);
    if (unproposed) {
      continue;
    }
    let control_apart = property_get(row, "control_apart");
    let control_glued = property_get(row, "control_glued");
    let urdu_spaces_it =
      greater_than(control_apart, 0) && equal(control_glued, 0);
    let urdu_says_otherwise = not(urdu_spaces_it);
    if (urdu_says_otherwise) {
      continue;
    }
    let roman_glued = property_get(row, "roman_glued");
    let roman_apart = property_get(row, "roman_apart");
    let unheard = not(roman_glued) && not(roman_apart);
    if (unheard) {
      continue;
    }
    let pieces = text_split_space(spacing);
    let ending = list_last(pieces);
    let latin_welds_it = greater_than(roman_glued, 0) && equal(roman_apart, 0);
    let latin_spaces_it = not(latin_welds_it);
    if (latin_spaces_it) {
      list_add(spaced, ending);
      continue;
    }
    list_add(welded, ending);
  }
}
