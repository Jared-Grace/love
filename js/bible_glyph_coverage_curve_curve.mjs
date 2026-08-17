import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_coverage_curve_steps } from "./bible_glyph_coverage_curve_steps.mjs";
import { property_get } from "./property_get.mjs";
export function bible_glyph_coverage_curve_curve(
  testament_name,
  roots,
  glosses,
) {
  arguments_assert(arguments, 3);
  let r = bible_glyph_coverage_curve_steps(testament_name, roots, glosses);
  let steps = property_get(r, "steps");
  let table_reads = property_get(r, "table_reads");
  let counted = property_get(r, "counted");
  let occurrences_total = property_get(r, "occurrences_total");
  let curve = [];
  let r2 = {
    steps,
    table_reads,
    counted,
    occurrences_total,
    curve,
  };
  return r2;
}
