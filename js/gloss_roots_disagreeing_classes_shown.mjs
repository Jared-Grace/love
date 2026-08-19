import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_take } from "./list_take.mjs";
export function gloss_roots_disagreeing_classes_shown(r2, sample_size) {
  arguments_assert(arguments, 2);
  let classes_total = property_get(r2, "classes_total");
  let silent_total = property_get(r2, "silent_total");
  let r4 = property_get(r2, "r4");
  let by_edits = property_get(r4, "by_edits");
  let by_relation = property_get(r4, "by_relation");
  let classes = property_get(r4, "classes");
  let count = Number(sample_size);
  let shown = list_take(classes, count);
  let r = {
    classes_total,
    silent_total,
    by_edits,
    by_relation,
    shown,
  };
  return r;
}
