import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { divide } from "./divide.mjs";
export function bible_glyph_survey_percent(r) {
  arguments_assert(arguments, 1);
  let occurrences_mapped = property_get(r, "occurrences_mapped");
  let sense_spread = property_get(r, "sense_spread");
  let unmapped = property_get(r, "unmapped");
  let top = property_get(r, "top");
  let r4 = property_get(r, "r4");
  let glyph_missing = property_get(r4, "glyph_missing");
  let mapped = property_get(r4, "mapped");
  let roots = property_get(r4, "roots");
  let percent = divide(top, 10);
  let r2 = {
    occurrences_mapped,
    sense_spread,
    unmapped,
    glyph_missing,
    mapped,
    roots,
    percent,
  };
  return r2;
}
