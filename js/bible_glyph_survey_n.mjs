import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { multiply } from "./multiply.mjs";
export function bible_glyph_survey_n(r2) {
  arguments_assert(arguments, 1);
  let unmapped = property_get(r2, "unmapped");
  let left = property_get(r2, "left");
  let sense_spread = property_get(r2, "sense_spread");
  let occurrences_mapped = property_get(r2, "occurrences_mapped");
  let occurrences_total = property_get(r2, "occurrences_total");
  let glyph_collisions = property_get(r2, "glyph_collisions");
  let glyph_missing = property_get(r2, "glyph_missing");
  let mapped = property_get(r2, "mapped");
  let roots = property_get(r2, "roots");
  let n = multiply(left, 1000);
  let r = {
    unmapped,
    sense_spread,
    occurrences_mapped,
    occurrences_total,
    glyph_collisions,
    glyph_missing,
    mapped,
    roots,
    n,
  };
  return r;
}
