import { arguments_assert } from "./arguments_assert.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { property_get } from "./property_get.mjs";
import { less_than } from "./less_than.mjs";
import { property_set } from "./property_set.mjs";
export function urdu_glued_words_roman_welding_endings_ending(
  welded_counts,
  spaced_counts,
  endings,
) {
  arguments_assert(arguments, 3);
  for (let ending of object_property_names(welded_counts)) {
    let ever_spaced = property_get_or_null(spaced_counts, ending);
    if (ever_spaced) {
      continue;
    }
    let how_many = property_get(welded_counts, ending);
    let alone = less_than(how_many, 2);
    if (alone) {
      continue;
    }
    property_set(endings, ending, how_many);
  }
}
