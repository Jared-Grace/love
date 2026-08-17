import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_survey_roots } from "./bible_glyph_survey_roots.mjs";
import { bible_glyph_survey_unmapped } from "./bible_glyph_survey_unmapped.mjs";
import { bible_glyph_survey_n } from "./bible_glyph_survey_n.mjs";
import { bible_glyph_survey_top } from "./bible_glyph_survey_top.mjs";
import { property_get } from "./property_get.mjs";
export async function bible_glyph_survey_glyph_collisions(
  table_testament,
  testament_name,
) {
  arguments_assert(arguments, 2);
  let r = await bible_glyph_survey_roots(table_testament, testament_name);
  let r2 = bible_glyph_survey_unmapped(r);
  let r3 = bible_glyph_survey_n(r2);
  let r4 = bible_glyph_survey_top(r3);
  let top = property_get(r4, "top");
  let unmapped = property_get(r4, "unmapped");
  let sense_spread = property_get(r4, "sense_spread");
  let occurrences_mapped = property_get(r4, "occurrences_mapped");
  let occurrences_total = property_get(r4, "occurrences_total");
  let glyph_collisions = property_get(r4, "glyph_collisions");
  let r5 = {
    r4,
    top,
    unmapped,
    sense_spread,
    occurrences_mapped,
    occurrences_total,
    glyph_collisions,
  };
  return r5;
}
