import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { list_size } from "./list_size.mjs";
import { subtract } from "./subtract.mjs";
export function gloss_roots_disagreeing_classes_silent_total(r2, count_read) {
  arguments_assert(arguments, 2);
  let classes = property_get(r2, "classes");
  let by_relation = property_get(r2, "by_relation");
  let by_edits = property_get(r2, "by_edits");
  let claimed_total = property_get(r2, "claimed_total");
  let total = property_get(r2, "total");
  let apart_by_edits = property_get(r2, "apart_by_edits");
  list_sort_number_mapper_reverse(classes, count_read);
  let classes_total = list_size(classes);
  let silent_total = subtract(total, claimed_total);
  let r = {
    classes,
    by_relation,
    by_edits,
    claimed_total,
    total,
    apart_by_edits,
    classes_total,
    silent_total,
  };
  return r;
}
