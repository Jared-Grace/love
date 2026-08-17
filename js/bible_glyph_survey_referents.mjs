import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_survey_percent } from "./bible_glyph_survey_percent.mjs";
import { property_get } from "./property_get.mjs";
import { bible_glyph_referents } from "./bible_glyph_referents.mjs";
export function bible_glyph_survey_referents(r) {
  arguments_assert(arguments, 1);
  let r2 = bible_glyph_survey_percent(r);
  let percent = property_get(r2, "percent");
  let roots = property_get(r2, "roots");
  let mapped = property_get(r2, "mapped");
  let glyph_missing = property_get(r2, "glyph_missing");
  let unmapped = property_get(r2, "unmapped");
  let sense_spread = property_get(r2, "sense_spread");
  let occurrences_mapped = property_get(r2, "occurrences_mapped");
  let referents = bible_glyph_referents();
  let r3 = {
    percent,
    roots,
    mapped,
    glyph_missing,
    unmapped,
    sense_spread,
    occurrences_mapped,
    referents,
  };
  return r3;
}
