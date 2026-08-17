import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_coverage_curve_step } from "./bible_glyph_coverage_curve_step.mjs";
import { property_get } from "./property_get.mjs";
export function bible_glyph_coverage_curve_report(r, testament_name) {
  arguments_assert(arguments, 2);
  let r2 = bible_glyph_coverage_curve_step(r);
  let counted = property_get(r2, "counted");
  let occurrences_total = property_get(r2, "occurrences_total");
  let curve = property_get(r2, "curve");
  let report = {
    testament: testament_name,
    words_total: counted.length,
    occurrences_total,
    curve,
  };
  return report;
}
