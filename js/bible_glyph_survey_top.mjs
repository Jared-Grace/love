import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { round } from "./round.mjs";
export function bible_glyph_survey_top(r3) {
  "Settles how many of the still-uncovered words the survey will show, rounding the number it was asked for to a whole one, and carries everything else the survey has gathered through untouched.";
  arguments_assert(arguments, 1);
  let n = property_get(r3, "n");
  let roots = property_get(r3, "roots");
  let mapped = property_get(r3, "mapped");
  let glyph_missing = property_get(r3, "glyph_missing");
  let glyph_collisions = property_get(r3, "glyph_collisions");
  let occurrences_total = property_get(r3, "occurrences_total");
  let occurrences_mapped = property_get(r3, "occurrences_mapped");
  let sense_spread = property_get(r3, "sense_spread");
  let unmapped = property_get(r3, "unmapped");
  let top = round(n);
  let r = {
    roots,
    mapped,
    glyph_missing,
    glyph_collisions,
    occurrences_total,
    occurrences_mapped,
    sense_spread,
    unmapped,
    top,
  };
  return r;
}
