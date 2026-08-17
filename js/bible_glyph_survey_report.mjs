import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_survey_referent } from "./bible_glyph_survey_referent.mjs";
import { property_get } from "./property_get.mjs";
import { object_property_names } from "./object_property_names.mjs";
export function bible_glyph_survey_report(
  r,
  referent_reach,
  testament_name,
  occurrences_total,
  glyph_collisions,
) {
  arguments_assert(arguments, 5);
  let r4 = bible_glyph_survey_referent(r, referent_reach);
  let occurrences_mapped = property_get(r4, "occurrences_mapped");
  let sense_spread = property_get(r4, "sense_spread");
  let unmapped = property_get(r4, "unmapped");
  let glyph_missing = property_get(r4, "glyph_missing");
  let mapped = property_get(r4, "mapped");
  let roots = property_get(r4, "roots");
  let percent = property_get(r4, "percent");
  let report = {
    testament: testament_name,
    referent_reach,
    roots_count: roots.length,
    words_count: object_property_names(mapped).length,
    coverage: {
      occurrences_mapped,
      occurrences_total,
      percent,
    },
    glyph_missing,
    glyph_collisions,
    sense_spread,
    unmapped_count: unmapped.length,
    unmapped_frequent: unmapped.slice(0, 150),
  };
  return report;
}
