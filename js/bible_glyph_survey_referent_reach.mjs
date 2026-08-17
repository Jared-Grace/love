import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function bible_glyph_survey_referent_reach(r2) {
  arguments_assert(arguments, 1);
  let referents = property_get(r2, "referents");
  let occurrences_mapped = property_get(r2, "occurrences_mapped");
  let sense_spread = property_get(r2, "sense_spread");
  let unmapped = property_get(r2, "unmapped");
  let glyph_missing = property_get(r2, "glyph_missing");
  let mapped = property_get(r2, "mapped");
  let roots = property_get(r2, "roots");
  let percent = property_get(r2, "percent");
  let referent_reach = [];
  let r = {
    referents,
    occurrences_mapped,
    sense_spread,
    unmapped,
    glyph_missing,
    mapped,
    roots,
    percent,
    referent_reach,
  };
  return r;
}
