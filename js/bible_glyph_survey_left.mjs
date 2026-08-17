import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { divide } from "./divide.mjs";
export function bible_glyph_survey_left(r) {
  arguments_assert(arguments, 1);
  let occurrences_descending = property_get(r, "occurrences_descending");
  let unmapped = property_get(r, "unmapped");
  let roots = property_get(r, "roots");
  let mapped = property_get(r, "mapped");
  let glyph_missing = property_get(r, "glyph_missing");
  let glyph_collisions = property_get(r, "glyph_collisions");
  let occurrences_total = property_get(r, "occurrences_total");
  let occurrences_mapped = property_get(r, "occurrences_mapped");
  let sense_spread = property_get(r, "sense_spread");
  sense_spread.sort(occurrences_descending);
  unmapped.sort(occurrences_descending);
  let left = divide(occurrences_mapped, occurrences_total);
  let r2 = {
    unmapped,
    roots,
    mapped,
    glyph_missing,
    glyph_collisions,
    occurrences_total,
    occurrences_mapped,
    sense_spread,
    left,
  };
  return r2;
}
