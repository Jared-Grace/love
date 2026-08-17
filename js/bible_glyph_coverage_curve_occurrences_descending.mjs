import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_roots_testament } from "./bible_glyph_roots_testament.mjs";
import { equal } from "./equal.mjs";
import { property_set } from "./property_set.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { property_exists } from "./property_exists.mjs";
import { subtract } from "./subtract.mjs";
export function bible_glyph_coverage_curve_occurrences_descending(
  testament_name,
  roots,
  glosses,
) {
  arguments_assert(arguments, 3);
  let table_testament = bible_glyph_roots_testament();
  let table_reads = equal(table_testament, testament_name);
  let drawn = {};
  if (table_reads) {
    for (let root of roots) {
      for (let word of root.words) {
        property_set(drawn, word.strong, true);
      }
    }
  }
  let counted = [];
  let occurrences_total = 0;
  for (let strong of object_property_names(glosses)) {
    let tally = property_get(glosses, strong);
    let occurrences = 0;
    for (let entry of tally) {
      occurrences = occurrences + entry.count;
    }
    occurrences_total = occurrences_total + occurrences;
    list_add(counted, {
      strong,
      occurrences,
      drawn: property_exists(drawn, strong),
    });
  }
  function occurrences_descending(a, b) {
    let n = subtract(b.occurrences, a.occurrences);
    return n;
  }
  let r = {
    table_reads,
    counted,
    occurrences_total,
    occurrences_descending,
  };
  return r;
}
