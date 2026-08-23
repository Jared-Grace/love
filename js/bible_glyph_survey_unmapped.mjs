import { property_path_get_2 } from "./property_path_get_2.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function bible_glyph_survey_unmapped(r) {
  "Lifts the list of words no picture covers yet out of the inner reading it was gathered inside and sets it beside the survey's other counts, so every stage after this one can reach it without knowing where it was found.";
  arguments_assert(arguments, 1);
  let roots = property_get(r, "roots");
  let mapped = property_get(r, "mapped");
  let glyph_missing = property_get(r, "glyph_missing");
  let glyph_collisions = property_get(r, "glyph_collisions");
  let occurrences_total = property_get(r, "occurrences_total");
  let occurrences_mapped = property_get(r, "occurrences_mapped");
  let sense_spread = property_get(r, "sense_spread");
  let left = property_get(r, "left");
  let unmapped = property_path_get_2(r, "r2", "unmapped");
  let r3 = {
    roots,
    mapped,
    glyph_missing,
    glyph_collisions,
    occurrences_total,
    occurrences_mapped,
    sense_spread,
    left,
    unmapped,
  };
  return r3;
}
