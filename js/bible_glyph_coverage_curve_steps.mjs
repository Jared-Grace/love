import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_coverage_curve_occurrences_descending } from "./bible_glyph_coverage_curve_occurrences_descending.mjs";
import { property_get } from "./property_get.mjs";
export function bible_glyph_coverage_curve_steps(
  testament_name,
  roots,
  glosses,
) {
  arguments_assert(arguments, 3);
  let r = bible_glyph_coverage_curve_occurrences_descending(
    testament_name,
    roots,
    glosses,
  );
  let occurrences_descending = property_get(r, "occurrences_descending");
  let occurrences_total = property_get(r, "occurrences_total");
  let counted = property_get(r, "counted");
  let table_reads = property_get(r, "table_reads");
  counted.sort(occurrences_descending);
  let steps = [10, 25, 50, 100, 200, 400, 800, 1600];
  let r2 = {
    occurrences_total,
    counted,
    table_reads,
    steps,
  };
  return r2;
}
