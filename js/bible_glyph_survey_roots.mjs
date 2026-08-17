import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_survey_occurrences_descending } from "./bible_glyph_survey_occurrences_descending.mjs";
import { bible_glyph_survey_left } from "./bible_glyph_survey_left.mjs";
import { property_get } from "./property_get.mjs";
export async function bible_glyph_survey_roots(
  table_testament,
  testament_name,
) {
  arguments_assert(arguments, 2);
  let r = await bible_glyph_survey_occurrences_descending(
    table_testament,
    testament_name,
  );
  let r2 = bible_glyph_survey_left(r);
  let left = property_get(r2, "left");
  let sense_spread = property_get(r2, "sense_spread");
  let occurrences_mapped = property_get(r2, "occurrences_mapped");
  let occurrences_total = property_get(r2, "occurrences_total");
  let glyph_collisions = property_get(r2, "glyph_collisions");
  let glyph_missing = property_get(r2, "glyph_missing");
  let mapped = property_get(r2, "mapped");
  let roots = property_get(r2, "roots");
  let r3 = {
    r2,
    left,
    sense_spread,
    occurrences_mapped,
    occurrences_total,
    glyph_collisions,
    glyph_missing,
    mapped,
    roots,
  };
  return r3;
}
